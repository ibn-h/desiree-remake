import gift from "../assets/desiree_paaspakket_2-4.jpg";
import drinks from "../assets/diensten_koffiethee-2-mob.jpg";
import eventsImg from "../assets/diensten_events-mob.png";

function Services() {
  return (
    <section className="text-primary bg-secondary p-4 md:p-16">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <h6 className="font-dancingScript mt-6 text-4xl">
          Désirée in your business?
        </h6>

        <h2 className="mt-4 mb-8 text-5xl leading-12 font-bold">
          SERVICES FOR BUSINESSES
        </h2>

        <div className="mt-8 flex h-full flex-col items-center justify-center gap-6 text-center md:flex-row md:items-start xl:gap-16">
          <div
            className="h-auto max-w-[333px]"
            style={{ width: "clamp(100%, calc(33.3333% - 1rem), 333px)" }}
          >
            <img src={eventsImg} alt="" className="h-auto w-full" />
            <h5 className="my-4 text-[22px] font-medium">Events</h5>
            <p className="font-regular text-lg leading-6">
              Looking for a sweet treat for your event? You can! Brussels
              waffles, Liège waffles, and smoutebollen will complete your party.
            </p>
            <button className="border-primary hover:bg-primary mt-6 border-2 px-8 py-3 transition-all hover:text-white md:mt-8">
              LEES MEER
            </button>
          </div>

          <div
            className="h-auto max-w-[333px]"
            style={{ width: "clamp(100%, calc(33.3333% - 1rem), 333px)" }}
          >
            <img src={drinks} alt="" className="h-auto w-full" />
            <h5 className="my-4 text-[22px] font-medium">Coffee & Tea</h5>
            <p className="font-regular text-lg leading-6">
              Op zoek naar heerlijke koffie op kantoor? We zoeken samen naar de
              meest gepaste formule.
            </p>
            <button className="border-primary hover:bg-primary mt-6 border-2 px-8 py-3 transition-all hover:text-white md:mt-8">
              LEES MEER
            </button>
          </div>

          <div
            className="h-auto max-w-[333px]"
            style={{ width: "clamp(100%, calc(33.3333% - 1rem), 333px)" }}
          >
            <img src={gift} alt="" className="h-auto w-full" />
            <h5 className="my-4 text-[22px] font-medium">Gift boxes</h5>
            <p className="font-regular text-lg leading-6">
              Surprise your business partners with a box filled with Désirée
              treats – tea, coffee, chocolates, and more…
            </p>
            <button className="border-primary hover:bg-primary mt-6 border-2 px-8 py-3 transition-all hover:text-white md:mt-8">
              LEES MEER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
