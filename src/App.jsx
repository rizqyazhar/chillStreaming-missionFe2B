import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import FilmsPage from "./pages/FilmsPage";
import SeriesPage from "./pages/SeriesPage";
import MylistPage from "./pages/MylistPage";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/films", element: <FilmsPage /> },
  { path: "/series", element: <SeriesPage /> },
  { path: "/mylist", element: <MylistPage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
