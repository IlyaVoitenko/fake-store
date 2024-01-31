import { BrowserRouter, Routes, Route } from "react-router-dom";

import FooterAndHeader from "./components/FooterAndHeader";

import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FooterAndHeader />}>
          <Route index element={<MainPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
