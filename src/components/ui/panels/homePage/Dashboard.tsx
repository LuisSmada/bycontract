import styled from "styled-components";
import { IDashboardTabsListType } from "../../../../types/DashboardTypes";
import { DashboardTabs } from "./tabNavigation/DashboardTabs";
import { Badge } from "../../common/Badge";
import { BYCWhiteLogo } from "../../common/SVGIcons";
import { useAppDispatch } from "../../../../utils/hooks/reduxHooks/reduxHooks";
import { setCurrentUser } from "../../../../redux/slices/applicationSlices/applicationStateSlice";

export const dashboardTabsList: IDashboardTabsListType[] = [
  {
    path: "/dashboard/tab:mywall",
    title: "#MyWall",
  },
  {
    path: "/dashboard/tab:mydocuments",
    title: "#MyDocuments",
  },
  {
    path: "/dashboard/tab:stats",
    title: "#Statistics",
  },
];

export const Dashboard = () => {
  // const [defaultUserName, setDefaultUserName] = useState<string>("Adams AYO");

  const dispatch = useAppDispatch();
  const defaultUserName = "Adams AYO";
  dispatch(setCurrentUser(defaultUserName));
  return (
    <Container id="window-container">
      <HeaderBar>
        <LogoContainer>
          <Logo src={BYCWhiteLogo} alt="BYC white logo" />
        </LogoContainer>
        <UserInfoContainer>
          <UserName>{defaultUserName}</UserName>
          <Badge userName={defaultUserName} isPointer={true} />
        </UserInfoContainer>
      </HeaderBar>
      <AuthoringPanel id="authoringPanel">
        <NavbarHeader>
          <DashboardTabs tabList={dashboardTabsList} />
        </NavbarHeader>
      </AuthoringPanel>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
`;
const HeaderBar = styled.div`
  width: 100%;
  height: 38px;
  background-color: ${(props) => props.theme.colors.main};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  width: auto;
  height: auto;
  padding: 0 11px;
`;

const Logo = styled.img`
  width: 53px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 11px;
`;

const UserName = styled.div`
  font-size: ${(props) => props.theme.textSize.normalText};
  color: #fff;
  padding-right: 10px;
`;

const NavbarHeader = styled.div`
  width: 100%;
  height: 38px;
  position: relative;
  background-color: #fff;
  box-shadow: ${(props) => `0px -1px 10px ${props.theme.colors.disabled}`};
  display: flex;
`;

const AuthoringPanel = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
