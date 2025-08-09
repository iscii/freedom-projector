// here we handle routing (middleware)
import { useRoutes } from "react-router-dom";
import { Home } from "@/components/pages/Home";
import { App } from "./App";
import { logger } from "@/utils/logger";

export const AppRoutes = () => {
  // log current location
  logger(`location ${window.location.pathname}`);

  const commonRoutes = [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ];

  const element = useRoutes([...commonRoutes]);

  return <>{element}</>;
};
