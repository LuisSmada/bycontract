import { Navigate, Route, Routes } from "react-router-dom";
import { AdminPage } from "../components/ui/dashboard/AdminPage";
import { HomePage } from "../components/ui/panels/homePage/HomePage";
import { LoginPage } from "../components/ui/panels/loginPage/LoginPage";
import { PageNotFound } from "../components/ui/panels/pageNotFound/PageNotFound";
import { MyWall } from "../components/ui/panels/homePage/navigation/MyWall";
import { MyDocuments } from "../components/ui/panels/homePage/navigation/MyDocuments";
import { Stats } from "../components/ui/panels/homePage/navigation/Stats";
// import { SubFolderPage } from "../components/ui/panels/homePage/navigation/SubFolderPage";
import { DocumentViewPanel } from "../components/ui/panels/myDocumentsPage/DocumentViewPanel";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route path="/dashboard" element={<HomePage />}>
        <Route path="tab:mywall" element={<MyWall />} />
        <Route path="tab:mydocuments" element={<MyDocuments />}>
          <Route index element={<DocumentViewPanel />} />
          <Route path="folder/*" element={<DocumentViewPanel />} />
        </Route>
        <Route path="tab:stats" element={<Stats />} />
      </Route>

      <Route path="/admin" element={<AdminPage />} />

      <Route path="*" element={<PageNotFound />} />

      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
};
