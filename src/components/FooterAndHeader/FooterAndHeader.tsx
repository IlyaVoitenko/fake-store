import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { useSelector } from "react-redux";
import { isLoadingSelector } from "../../store/reducers/products";

const FooterAndHeader = () => {
  const isLoading = useSelector(isLoadingSelector);
  return (
    <>
      {!isLoading && <NavBar />}
      <main>
        <Outlet />
      </main>
      {!isLoading && <Footer />}
    </>
  );
};

export default FooterAndHeader;
