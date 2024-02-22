import React from "react";
import { Route } from "react-router-dom";

interface IPrivateRouteProps {
  element: React.ReactNode;
  path: string;
}
export const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  path,
  element,
}): React.ReactElement => {
  const isAuthenticated: boolean = true;
  return isAuthenticated ? (
    <Route path={path} element={element as React.ReactElement} />
  ) : (
    <Route path={path} element={element as React.ReactElement} />
  );
};
