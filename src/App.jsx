import Header from "./components/header";
import Hero from "./components/hero";
import ShopCTA from "./components/shopCTA";
import Products from "./components/products";
import Verhaal from "./components/verhaal";
import Verhaal2 from "./components/verhaal2";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ShopCTA />
        <Products />
        <Verhaal />
        <Verhaal2 />
      </main>
    </>
  );
}

export default App;
