import Header from "./components/header";
import Hero from "./components/hero";
import ShopCTA from "./components/shopCTA";
import Products from "./components/products";
import Verhaal from "./components/verhaal";
import Verhaal2 from "./components/verhaal2";
import Marque from "./components/marque";
import Services from "./components/services";
import Footer from "./components/footer";

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
        <Marque />
        <Services />
      </main>
      <Footer />
    </>
  );
}

export default App;
