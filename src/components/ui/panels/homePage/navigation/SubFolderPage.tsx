import React from "react";
import { useParams } from "react-router-dom";

export const SubFolderPage = () => {
  const { documentId } = useParams();
  return <div>{documentId}</div>;
};
