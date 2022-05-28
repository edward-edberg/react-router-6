import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import StyledNavbar from "../components/StyledNavbar";
const Home = () => {
  return (
    <>
      {/* <StyledNavbar /> */}
      {/* <h2>products</h2> */}
      <Outlet />
    </>
  );
};
export default Home;
