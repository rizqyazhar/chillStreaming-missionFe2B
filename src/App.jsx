import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import FilmsPage from "./pages/FilmsPage";
import SeriesPage from "./pages/SeriesPage";
import MylistPage from "./pages/MylistPage";
import ProfilePage from "./pages/ProfilePage";
import MembershipPage from "./pages/MembershipPage";
import PurchasePage from "./pages/PurchasePage";
import { useState, useEffect } from "react";

const App = () => {
  const [listingAdd, setListingAdd] = useState([]);

  useEffect(() => {
    const savedList = localStorage.getItem("myList");
    if (savedList) {
      setListingAdd(JSON.parse(savedList));
    }
  }, []);

  const router = createBrowserRouter([
    { path: "/", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    {
      path: "/home",
      element: (
        <HomePage listingAdd={listingAdd} setListingAdd={setListingAdd} />
      ),
    },
    {
      path: "/films",
      element: (
        <FilmsPage listingAdd={listingAdd} setListingAdd={setListingAdd} />
      ),
    },
    {
      path: "/series",
      element: (
        <SeriesPage listingAdd={listingAdd} setListingAdd={setListingAdd} />
      ),
    },
    { path: "/mylist", element: <MylistPage listingAdd={listingAdd} /> },
    { path: "/profile", element: <ProfilePage /> },
    { path: "/membership", element: <MembershipPage /> },
    { path: "/purchase", element: <PurchasePage /> },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
