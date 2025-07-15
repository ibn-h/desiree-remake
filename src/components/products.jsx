import ProductCorousel from "./productCorousel";

import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
import img4 from "../assets/img-4.jpg";

const products = [
  { Name: "Jasmine Green", Price: "15.90", Image: img1 },
  { Name: "Bonen Classico", Price: "17.20", Image: img2 },
  {
    Name: "Pancakemix",
    Description: "Authentieke Désiré de Lille pannenkoeken",
    Price: "9.45",
    Image: img3,
  },
  { Name: "Kaars Macaron", Price: "55.00", Image: img4 },
];

function Products() {
  return (
    <section className="text-primary p-4 text-center md:p-16">
      <div className="mx-auto flex flex-col items-center justify-center md:container">
        <h6 className="font-dancingScript mb-2 text-4xl">
          Breng Désirée bij je thuis!
        </h6>
        <h2 className="mb-16 text-4xl font-extrabold">DÉSIRÉE PRODUCTEN</h2>

        <ProductCorousel data={products} />

        <a
          href=""
          className="mt-20 text-lg leading-6 tracking-[3px] transition-all hover:-translate-y-1"
        >
          ALL PRODUCTS
          <div className="bg-primary h-[1px] w-full"></div>
        </a>
      </div>
    </section>
  );
}

export default Products;
