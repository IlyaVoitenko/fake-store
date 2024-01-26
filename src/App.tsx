import { useEffect } from "react";
import { getProducts } from "./API";

function App() {
  useEffect(() => {
    getProducts();
  }, []);
  return <></>;
}

export default App;
