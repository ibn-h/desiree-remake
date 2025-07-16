import logo from "../assets/logo_footer.png";
import footerImg from "../assets/smaak-vantstad-1.png";

const Footer = () => {
  return (
    <footer className="bg-primary pt-16 pb-6 text-white">
      <div className="mx-auto px-4 text-white xl:container xl:px-20">
        <div className="flex flex-col items-center justify-between gap-16 lg:flex-row lg:gap-0">
          <div>
            <div className="mb-8 flex flex-col gap-8 lg:mb-0">
              <img src={logo} alt="" className="h-auto w-35" />
              <img src={footerImg} alt="" className="h-auto w-100" />
            </div>

            <div className="text-center lg:text-left">
              <h2 className="mb-1 text-3xl leading-7 font-bold">
                STAY INFORMED
              </h2>
              <p className="text-base">
                Stay informed about Désirée products, promotions and blog
                articles.
              </p>

              <div className="mt-10 flex flex-col items-center justify-start gap-6 lg:flex-row lg:gap-12">
                <input
                  type="email"
                  placeholder="Your email adress"
                  className="w-[340px] border-b-[1px] border-b-white p-2 placeholder:text-white"
                />
                <button className="text-primary hover:bg-primary border-[1px] border-white bg-white px-10 py-1.5 transition hover:text-white">
                  SIGN UP
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-10 text-center lg:flex-row lg:items-start lg:gap-16 lg:text-left">
            <div className="flex flex-col items-center justify-center gap-2 lg:items-start">
              <h4 className="text-lg leading-5 font-bold">SHOP</h4>
              <a href="" className="hover:text-tertiary text-base leading-7">
                Home
              </a>
              <a href="" className="hover:text-tertiary text-base leading-7">
                Coffee & Thea
              </a>
              <a href="" className="hover:text-tertiary text-base leading-7">
                Baking
              </a>
              <a href="" className="hover:text-tertiary text-base leading-7">
                Breakfast
              </a>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 lg:items-start">
              <h4 className="text-lg leading-5 font-bold">EXTRA</h4>
              <a href="" className="hover:text-tertiary text-base leading-7">
                Our Story
              </a>
              <a href="" className="hover:text-tertiary text-base leading-7">
                Locations
              </a>
              <a href="" className="hover:text-tertiary text-base leading-7">
                Vacancies
              </a>
              <a href="" className="hover:text-tertiary text-base leading-7">
                Events
              </a>
              <a href="" className="hover:text-tertiary text-base leading-7">
                Contact
              </a>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 lg:items-start">
              <h4 className="text-lg leading-5 font-bold">FOLLOW US</h4>
              <a
                href=""
                className="hover:text-tertiary flex items-center justify-center gap-4 text-base leading-7"
              >
                <i className="fa-brands fa-instagram mt-1 text-white"></i>
                Instagram
              </a>
              <a
                href=""
                className="hover:text-tertiary flex items-center justify-center gap-4 text-base leading-7"
              >
                <i className="fa-brands fa-facebook mt-1 text-white"></i>
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-18 flex flex-col items-center justify-between gap-4 text-center text-sm lg:flex-row lg:gap-0 lg:text-left lg:text-base">
          <p>
            © Copyright 2023 Désirée. All rights reserved. Cookie & Privacy
            Policy / Terms & conditions{" "}
          </p>

          <a href="">Design & development by Perfect Pixel</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
