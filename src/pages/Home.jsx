//components
import { NavLink } from "react-router-dom";
import { SwipperHero, Image } from "../components";

const logos = [
  "/images/svg/akay.svg",
  "/images/svg/golden.svg",
  "/images/svg/Muradbuilding.svg",
  "/images/svg/olmazor.svg",
  "/images/svg/realhouse.svg",
  "/images/svg/tc.svg",
];

function Home() {
  return (
    <>
      <section>
        <SwipperHero />
      </section>
      <section className="py-20 md:py-28 lg:py-36">
        <Image logos={logos} />
      </section>
      <section>
        <div className="align-elements mb-14 text-center">
          <h2 className="mb-5 text-[40px] font-semibold md:mb-6 lg:mb-7">
            Isitish tizimingiz uchun eng yaxshi tanlov
          </h2>
          <p className="text-[#898989]">
            Sochiq relslari, gidro kollektor va gidro strelkalar uchun
            o‘rnatish, sozlash va texnik xizmat ko‘rsatamiz. Tejamkor va qulay
            isitish tizimi yaratishda bizga ishoning.
          </p>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-4">
          <NavLink
            className={({ isActive }) =>
              `border-b-4 border-b-transparent pb-2 text-[20px] font-semibold ${isActive ? "border-b-hoverIcon text-hoverIcon" : ""}`
            }
            href=""
          >
            Sochiq relslar
          </NavLink>
          <NavLink
            className="text-[20px] font-semibold"
            // className={({ isActive }) =>
            //   `border-b-4 border-b-transparent pb-2 text-[20px] font-semibold ${isActive ? "border-b-hoverIcon text-hoverIcon" : ""}`
            // }
            href="#"
          >
            Gidro kollektorlar
          </NavLink>
          <NavLink
            className="text-[20px] font-semibold"
            // className={({ isActive }) =>
            //   `border-b-4 border-b-transparent pb-2 text-[20px] font-semibold ${isActive ? "border-b-hoverIcon text-hoverIcon" : ""}`
            // }
            href="#"
          >
            Gidro strelkalar
          </NavLink>
        </div>
      </section>
    </>
  );
}

export default Home;
