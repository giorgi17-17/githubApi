// AppRouter.js
import { Route, Routes } from "react-router-dom";
import Dashboard from "../src/components/Dashboard";
import Search from "../src/components/Search";
import User from "../src/components/User";
// import UserCard from './UserCard';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/search" element={<Search />} />
      <Route path="/user/:title" element={<User />} />
      {/* Define your other routes here */}
    </Routes> 
  );
}

export default AppRouter;
