import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "@/pages/main";
import { BaseLayout } from "@/app/layouts/BaseLayout";

export const appRouter = () =>
  createBrowserRouter([
    {
      element: BaseLayout,
      errorElement: <div>error</div>,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
      ],
    },
  ]);
