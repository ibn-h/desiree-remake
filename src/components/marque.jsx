import Marquee from "react-fast-marquee";

function Marque() {
  return (
    <Marquee className="bg-primary gap-6 p-3 text-center text-white" autoFill>
      <div className="mr-4 flex items-center justify-center gap-4">
        <h6 className="font-dancingScript text-6xl">Antwerpen</h6>
        <h2 className="text-3xl leading-16 font-bold">OOSTENDE</h2>
        <h2 className="text-3xl leading-16 font-bold">HAN SUR LESSE</h2>
      </div>
    </Marquee>
  );
}

export default Marque;
