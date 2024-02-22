import { Navigate, Route, Routes } from "react-router-dom";
import { AdminPage } from "../components/ui/dashboard/AdminPage";
import { HomePage } from "../components/ui/panels/homePage/HomePage";
import { LoginPage } from "../components/ui/panels/loginPage/LoginPage";
import { PageNotFound } from "../components/ui/panels/pageNotFound/PageNotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />

      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
};
