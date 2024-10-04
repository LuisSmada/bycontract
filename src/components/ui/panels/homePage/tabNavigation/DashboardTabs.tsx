import styled from "styled-components";
import { IDashboardTabsListType } from "../../../../../types/DashboardTypes";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ContextBar } from "../../../common/contextBars/ContextBars";
import { useAppDispatch } from "../../../../../utils/hooks/reduxHooks/reduxHooks";
import { setActiveTabStore } from "../../../../../redux/slices/applicationSlices/applicationStateSlice";

interface IDashboardTabsProps {
  tabList: IDashboardTabsListType[];
}

export const DashboardTabs = ({ tabList }: IDashboardTabsProps) => {
  const [activeTab, setActiveTab] = useState<IDashboardTabsListType>(
    tabList[0]
  );

  const dispatch = useAppDispatch();

  //! useSessionStorage is a temporary solution to store the current state in the locale storage
  //! It is a good method to save the state when i refresh the app

  // const [activeTab, setActiveTab] = useSessionStorage("tabActive", tabList[0]);
  const isActiveTab = (tab: IDashboardTabsListType) => {
    return activeTab.path === tab.path;
  };

  const { t } = useTranslation();

  return (
    <Container>
      <TabContainer>
        {tabList.map((tab, idx) => (
          <Tab
            key={idx}
            to={tab.path}
            onClick={() => {
              setActiveTab(tab);
              dispatch(setActiveTabStore(tab));
            }}
            $isActive={isActiveTab(tab)}
          >
            {t(`${tab.title}`)}
          </Tab>
        ))}
      </TabContainer>
      <Panel>
        <InnerDashboard id="inner-dashboard">
          <Outlet />
        </InnerDashboard>
      </Panel>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const TabContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
`;

interface ITab {
  $isActive: boolean;
}

const Tab = styled(Link)<ITab>`
  width: auto;
  height: 100%;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  padding: 0 20px;
  font-size: ${(props) => props.theme.textSize.normalText};
  color: ${(props) =>
    props.$isActive ? "#000" : `${props.theme.colors.mainText}`};
  border-bottom: ${(props) =>
    props.$isActive
      ? `3px solid ${props.theme.colors.main}`
      : `3px solid transparent`};
  transition: border-color 0.3s ease;
  cursor: ${(props) => (props.$isActive ? `default` : `pointer`)};
  &:hover {
    border-color: ${(props) =>
      props.$isActive ? `none` : props.theme.colors.disabled};
  }
`;

const Panel = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const InnerDashboard = styled.div`
  width: 100%;
  height: 100%;
`;
