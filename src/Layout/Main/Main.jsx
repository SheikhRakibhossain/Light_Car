import { Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import TopHeader from "../../Shared/Header/TopHeader";

const Main = () => {
  return (
    <>
      <div>
      <TopHeader />
       <Header />
       <div className="w-full min-h-[calc(100% - 464px)]" >
       <Outlet/>

       </div>
      <Footer />
      </div>
    </>
  );
};

export default Main;
