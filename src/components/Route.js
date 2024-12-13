import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./MainLayout";
import Services from "./service";
import Banner from "./Banner";
const route = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayout />,
    children: [
      { path: "service", element: <Services /> },
      { path: "banner", element: <Banner/> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={route} />;
}

