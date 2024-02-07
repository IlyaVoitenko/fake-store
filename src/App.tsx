import { BrowserRouter, Routes, Route } from "react-router-dom";

import FooterAndHeader from "./components/FooterAndHeader";

import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import PageNotFound from "./pages/PageNotFound";
import AuthPage from "./pages/AuthPage";
import PaymentPage from "./pages/PaymentPage";
import CompletionPage from "./pages/CompletionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/:auth" element={<AuthPage />} />
        <Route path="/" element={<FooterAndHeader />}>
          <Route path="payment" element={<PaymentPage />} />
          <Route path="payment-completion" element={<CompletionPage />} />
          <Route index element={<MainPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
