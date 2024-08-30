import {
  FloatingPortal,
  OffsetOptions,
  Placement,
  autoUpdate,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useMergeRefs,
  useRole,
} from "@floating-ui/react";
import {
  ReactNode,
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import styled, { RuleSet } from "styled-components";
import { assertsNonNullable } from "./generics";
import { AnimatePresence, motion } from "framer-motion";

type TContextType = ReturnType<typeof useFloatingMenu> | null;
const FloatingMenuContext = createContext<TContextType>(null);

interface IUseFloatingMenu {
  open: boolean;
  setOpen: (open: boolean) => void;
  placement?: Placement;
  offsetPx?: OffsetOptions;
  animationDirection: number;
}

//* useFloatingMenu is a floating ui component
const useFloatingMenu = ({
  open,
  setOpen,
  placement = "bottom-end",
  animationDirection = -1,
  offsetPx = 4,
}: IUseFloatingMenu) => {
  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    middleware: [offset(offsetPx)],
    whileElementsMounted: autoUpdate,
  });

  const context = data.context;
  const click = useClick(context);
  const dismiss = useDismiss(context, { ancestorScroll: true });
  const role = useRole(context);
  const interactions = useInteractions([click, dismiss, role]);

  return useMemo(
    () => ({ open, setOpen, animationDirection, ...interactions, ...data }),
    [open, setOpen, animationDirection, interactions, data]
  );
};

interface IFloatingMenuProps extends IUseFloatingMenu {
  children: ReactNode;
}

export const FloatingMenu = ({ children, ...props }: IFloatingMenuProps) => {
  const floatingMenu = useFloatingMenu(props);
  return (
    <FloatingMenuContext.Provider value={floatingMenu}>
      {children}
    </FloatingMenuContext.Provider>
  );
};

interface IFloatingMenuContent extends React.HTMLProps<HTMLDivElement> {
  css?: RuleSet | undefined;
}

export const FloatingMenuContent = forwardRef<
  HTMLDivElement,
  IFloatingMenuContent
>(({ style, css, ...props }, propRef) => {
  const [isAnimFinished, setIsAnimFinished] = useState(true);
  const ctx = useContext(FloatingMenuContext);
  assertsNonNullable(ctx);

  const animVariants = useMemo(
    () =>
      ({
        init: {
          opacity: 0,
          top: ctx.animationDirection * 8,
          pointerEvents: "auto",
        },
        anim: { opacity: 1, top: 0 },
        exit: {
          opacity: 0,
          pointerEvents: "none",
          transition: { duration: 0.2 },
        },
      }) as const,
    [ctx.animationDirection]
  );

  useEffect(() => {
    if (ctx.open) {
      setIsAnimFinished(false);
    }
  }, [ctx.open]);

  const ref = useMergeRefs([ctx.refs.setFloating, propRef]);
  if (isAnimFinished && !ctx.open) {
    return null;
  }

  return (
    <FloatingPortal>
      <AnimatePresence onExitComplete={setIsAnimFinished.bind(null, true)}>
        {ctx.open && (
          <div>
            <MenuPosition
              ref={ref}
              style={{ ...ctx.floatingStyles, ...style }}
              {...ctx.getFloatingProps(props)}
              variants={animVariants}
              initial={"init"}
              animate={"anim"}
              exit={"exit"}
              transition={{ opacity: { max: 1 } }}
            >
              {props.children}
            </MenuPosition>
          </div>
        )}
      </AnimatePresence>
    </FloatingPortal>
  );
});

const MenuPosition = styled(motion.div)`
  position: absolute;
  z-index: 100000;
  background-color: #fff;

  border: 1px solid ${({ theme }) => theme.colors.disabled};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 4px 3px;
`;

export default FloatingMenu;
