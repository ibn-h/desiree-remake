import history from "../assets/geschiedenis.png";
import waffel from "../assets/waffle.png";
import ticket from "../assets/ticket1.png";

function Verhaal2() {
  return (
    <section className="bg-secondary text-primary px-16 py-24 text-center">
      <div className="mx-auto flex flex-col items-center justify-center">
        <h6 className="font-dancingScript mb-30 text-5xl leading-16">
          Het verhaal van Desiréé is ontstaan in 1903
        </h6>
        <div className="grid grid-cols-1 items-center justify-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden">
            <img src={history} className="-rotate-12" alt="" />
            <img
              src={waffel}
              alt=""
              className="absolute top-[-20%] left-95 h-auto w-50"
            />

            <img
              src={ticket}
              alt=""
              className="absolute -top-20 left-300 hidden h-auto w-50 2xl:block"
            />
          </div>
          <div className="relative flex items-center justify-center">
            <p className="w-[400px] text-center text-lg leading-6 font-medium">
              He then resigned from that employer and conquered Antwerp, and by
              extension Flanders, with a vengeance. Since 2018, with the opening
              of the Durbuy branch, modernization and professionalization have
              been underway, elevating the sweet experience to a higher level
              while remaining true to the authenticity that defines Désiré de
              Lille.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Verhaal2;
