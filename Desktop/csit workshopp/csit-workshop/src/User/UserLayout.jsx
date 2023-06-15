import ResponsiveAppBar from "../components/Header";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Outlet />
    </div>
  );
};

export default UserLayout;
