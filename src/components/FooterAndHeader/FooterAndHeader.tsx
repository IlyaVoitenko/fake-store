import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { useSelector } from "react-redux";
import { isLoadingSelector } from "../../store/reducers/loading";

const FooterAndHeader = () => {
  const isLoading = useSelector(isLoadingSelector);
  return (
    <>
      {!isLoading && <NavBar />}
      <main className="h-screen w-screen">
        <Outlet />
      </main>
      {!isLoading && <Footer />}
    </>
  );
};

export default FooterAndHeader;
