import { useState, useEffect } from "react";

function ProductCorousel({ data = [] }) {
  const [startIdx, setStartIdx] = useState(0);

  // Determine number of visible items based on screen size
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1; // mobile
      if (window.innerWidth < 1024) return 2; // tablet
    }
    return 3; // desktop
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  // Update visibleCount on resize
  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisible = () => {
    let visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(data[(startIdx + i) % data.length]);
    }
    return visible;
  };

  const handlePrev = () =>
    setStartIdx((prev) => (prev - 1 + data.length) % data.length);

  const handleNext = () => setStartIdx((prev) => (prev + 1) % data.length);

  return (
    <div className="flex w-full flex-row items-center justify-center gap-6 md:gap-0">
      <button
        onClick={handlePrev}
        className="hover:bg-primary border-primary flex h-12 w-12 items-center justify-center rounded-full border-2 p-3 text-2xl transition-all hover:text-white sm:p-5 sm:text-3xl md:h-15 md:w-15"
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      <div className="flex items-stretch justify-between">
        {getVisible().map((product, index) => (
          <div key={index} className="flex h-full flex-col items-center">
            <img
              className="h-[250px] w-[250px] object-cover md:h-[220px] md:w-[220px]"
              src={product.Image}
              alt={`Carousel Image-${index}`}
            />

            <div className="mt-3 flex h-[110px] w-[180px] flex-col items-center justify-baseline text-center sm:mt-4 sm:w-[220px] md:w-[250px]">
              <h3 className="text-lg font-bold sm:text-xl">{product.Name}</h3>
              {product.Description != null ? (
                <p className="text-sm text-black sm:text-base">
                  {product.Description}
                </p>
              ) : null}
              <span className="mt-2 text-sm text-black sm:text-base">
                {product.Price}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="hover:bg-primary border-primary flex h-12 w-12 items-center justify-center rounded-full border-2 p-3 text-2xl transition-all hover:text-white sm:p-5 sm:text-3xl md:h-15 md:w-15"
      >
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default ProductCorousel;
