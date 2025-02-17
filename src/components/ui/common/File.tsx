import React, { useState } from "react";
import styled from "styled-components";
import { FileIcon, FolderIcon } from "./SVGIcons";
import { useNavigate, useParams } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../utils/hooks/reduxHooks/reduxHooks";
import { getCurrentFolderPathSelector } from "../../../redux/selectors/selectors";
import { setCurrentPath } from "../../../redux/slices/applicationSlices/applicationStateSlice";
import {
  autoPlacement,
  autoUpdate,
  flip,
  FloatingFocusManager,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";

interface IFile {
  id: string;
  name: string;
  type: "file" | "folder";
  onRightClick: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent
  ) => void;
}

export const File = (props: IFile) => {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  const fileNameSplited: String[] = props.name.split(".");
  const ext: String = fileNameSplited.length === 2 ? fileNameSplited[1] : "txt";

  const { "*": pathParam } = useParams();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const pathFile = useAppSelector((state) =>
    getCurrentFolderPathSelector(state, props.id)
  );

  const { t } = useTranslation();

  const boundary = () => {
    const element = document.getElementById("authoringPanel");
    if (element) {
      const el = element.getBoundingClientRect();
      return { x: el.x, y: el.y, width: el.width, height: el.height };
    } else {
      return { x: 0, y: 0, width: 1920, height: 1080 };
    }
  };

  const { refs, floatingStyles, context } = useFloating({
    open: isContextMenuOpen,
    onOpenChange: setIsContextMenuOpen,
    placement: "bottom-end",
    middleware: [
      shift({
        rootBoundary: boundary(),
      }),
      flip(),
      //autoPlacement(),
      offset({
        crossAxis: 65,
        mainAxis: 5,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    dismiss,
    role,
  ]);

  console.log(pathFile);

  const enterFolder = (e: React.MouseEvent<HTMLDivElement>) => {
    const currentPath = pathParam ? `${pathParam}/` : "";
    dispatch(
      setCurrentPath(
        `/dashboard/tab:mydocuments/folder/${currentPath}${props.id}`
      )
    );
    navigate(`/dashboard/tab:mydocuments/folder/${currentPath}${props.id}`);
  };

  return (
    <>
      <Container
        isContextMenuOpen={isContextMenuOpen}
        id={`${props.type}-id-${props.id}`}
        onDoubleClick={(e) => enterFolder(e)}
        onContextMenu={(e) => {
          if (e.button !== 2) return;
          e.preventDefault();
          setIsContextMenuOpen((v) => !v);
        }}
        {...getReferenceProps()}
        ref={refs.setReference}
      >
        <Logo>
          {props.type === "folder" ? <FolderIconStyled /> : <FileIconStyled />}
          {props.type === "file" ? <span>{`.${ext}`}</span> : ""}
        </Logo>
        <Name>{props.name}</Name>
      </Container>
      {isContextMenuOpen && (
        <AnimatePresence>
          <FloatingFocusManager context={context} modal={false}>
            <ContextMenuContainer
              ref={refs.setFloating}
              style={floatingStyles}
              {...getFloatingProps()}
            >
              <ContextMenuButton
                onClick={(e) => {
                  props.onRightClick(e);
                }}
              >
                {t("#FileInfo")}
              </ContextMenuButton>
            </ContextMenuContainer>
          </FloatingFocusManager>
        </AnimatePresence>
      )}
    </>
  );
};

interface IContainer {
  isContextMenuOpen: boolean;
}

const Container = styled.div<IContainer>`
  height: 100px;
  width: 96px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
  padding: 8px 7px 10px 10px;
  border-radius: 8px;
  background: ${(props) =>
    props.isContextMenuOpen ? `rgba(116, 64, 239, 0.2)` : ""};
  transition: background 230ms ease-in;
  &:hover {
    background: rgba(116, 64, 239, 0.2);
  }
`;

const FileIconStyled = styled(FileIcon)`
  height: 76px;
  width: 100px;
`;

const FolderIconStyled = styled(FolderIcon)`
  height: 76px;
  width: 100px;
`;

const Logo = styled.div`
  position: relative;

  & span {
    position: absolute;
    bottom: 20px;
    left: 35px;
    width: 96%;
    font-weight: 600;
    color: white;
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const Name = styled.div`
  font-size: ${(props) => props.theme.textSize.buttonText};
`;

const ContextMenuContainer = styled.div`
  width: auto;
  height: auto;
  //border: ${(props) => `1px solid ${props.theme.colors.borderField}`};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border: none;
`;

const ContextMenuButton = styled.div`
  font-size: ${(props) => props.theme.textSize.buttonText};
  padding: 10px 15px;
  color: ${(props) => props.theme.colors.mainText};
  cursor: pointer;
`;
