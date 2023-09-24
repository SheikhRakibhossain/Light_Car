import { Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import TopHeader from "../../Shared/Header/TopHeader";

const Main = () => {
  return (
    <>
      <TopHeader />
       <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
