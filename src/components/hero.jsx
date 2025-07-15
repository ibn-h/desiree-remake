import headerImage from "../assets/headerImage.jpg";

function Hero() {
  return (
    <section className="relative flex h-[80vh] items-center justify-center overflow-hidden p-8 md:p-16">
      <div className="z-10 mx-auto flex flex-col items-center justify-center text-center md:container">
        <h1 className="text-primary mb-6 text-5xl leading-12 font-bold">
          DÉSIRÉ DE LILLE
        </h1>
        <h2 className="text-tertiary flex flex-col items-center justify-center text-5xl leading-12 font-bold">
          VIND HIER DE WEG NAAR <span className="mt-4">ONZE WEBSHOP</span>
        </h2>
        <a
          href=""
          className="border-tertiary hover:bg-tertiary text-tertiary mt-10 w-[150px] border-2 px-6 py-3 transition-all hover:text-white"
        >
          WEBSHOP
        </a>
      </div>
    </section>
  );
}

export default Hero;
