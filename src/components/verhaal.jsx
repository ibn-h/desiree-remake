import verhaal from "../assets/desiree_geschiedenis.png";
import circleText from "../assets/cirkel-tekst-mob.png";
import ticket2 from "../assets/ticket2-mob.png";

function Verhaal() {
  return (
    <section className="bg-secondary text-primary flex items-center justify-center px-6 py-16 md:px-16">
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center justify-center gap-8 md:gap-16 lg:grid-cols-2">
        <div className="mb-12 text-center md:w-[470px]">
          <h2 className="mb-3 text-3xl font-extrabold">OUR STORY</h2>
          <p className="text-lg leading-6 font-medium">
            The foundation was laid by Désiré Smidts, who was in charge of
            ingredients at the Lacquemant pastry shop in Lille, northern France.
            When he came up with the idea of cutting a thin waffle in half and
            filling it with syrup, his roll—or waffle—was baked. He named his
            invention Lacquemant, after his employer.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <img src={verhaal} alt="Story visual" className="w-full max-w-md" />

          <img
            src={ticket2}
            className="absolute top-[70%] left-[-220%] hidden lg:block"
            alt=""
          />

          <img
            src={circleText}
            className="absolute top-95 -left-10 hidden h-auto w-25 lg:block"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Verhaal;
