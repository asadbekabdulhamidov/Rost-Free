//components
import { NavLink } from "react-router-dom";
import { SwipperHero, Image, Card } from "../components";

//uuid
import { v4 as uuidv4 } from "uuid";

const logos = [
  "/images/svg/akay.svg",
  "/images/svg/golden.svg",
  "/images/svg/Muradbuilding.svg",
  "/images/svg/olmazor.svg",
  "/images/svg/realhouse.svg",
  "/images/svg/tc.svg",
];

const products = [
  {
    id: uuidv4(),
    imgUrl: "/images/png/image1.png",
    productName: "Mahsulot nomi",
    text: "issiq sochiq relslari",
  },
  {
    id: uuidv4(),
    imgUrl: "/images/png/image2.png",
    productName: "Mahsulot nomi",
    text: "issiq sochiq relslari",
  },
  {
    id: uuidv4(),
    imgUrl: "/images/png/image3.png",
    productName: "Mahsulot nomi",
    text: "issiq sochiq relslari",
  },
  {
    id: uuidv4(),
    imgUrl: "/images/png/image4.png",
    productName: "Mahsulot nomi",
    text: "issiq sochiq relslari",
  },
  {
    id: uuidv4(),
    imgUrl: "/images/png/image5.png",
    productName: "Mahsulot nomi",
    text: "issiq sochiq relslari",
  },
  {
    id: uuidv4(),
    imgUrl: "/images/png/image6.png",
    productName: "Mahsulot nomi",
    text: "issiq sochiq relslari",
  },
  {
    id: uuidv4(),
    imgUrl: "/images/png/image7.png",
    productName: "Mahsulot nomi",
    text: "issiq sochiq relslari",
  },
  {
    id: uuidv4(),
    imgUrl: "/images/png/image8.png",
    productName: "Mahsulot nomi",
    text: "issiq sochiq relslari",
  },
  {
    id: uuidv4(),
    imgUrl: "/images/png/image7.png",
    productName: "Mahsulot nomi",
    text: "issiq sochiq relslari",
  },
  {
    id: uuidv4(),
    imgUrl: "/images/png/image8.png",
    productName: "Mahsulot nomi",
    text: "issiq sochiq relslari",
  },
  {
    id: uuidv4(),
    imgUrl: "/images/png/image7.png",
    productName: "Mahsulot nomi",
    text: "issiq sochiq relslari",
  },
  {
    id: uuidv4(),
    imgUrl: "/images/png/image8.png",
    productName: "Mahsulot nomi",
    text: "issiq sochiq relslari",
  },
  {
    id: uuidv4(),
    imgUrl: "/images/png/image7.png",
    productName: "Mahsulot nomi",
    text: "issiq sochiq relslari",
  },
  {
    id: uuidv4(),
    imgUrl: "/images/png/image8.png",
    productName: "Mahsulot nomi",
    text: "issiq sochiq relslari",
  },
  {
    id: uuidv4(),
    imgUrl: "/images/png/image1.png",
    productName: "Mahsulot nomi",
    text: "issiq sochiq relslari",
  },
  {
    id: uuidv4(),
    imgUrl: "/images/png/image1.png",
    productName: "Mahsulot nomi",
    text: "issiq sochiq relslari",
  },
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

        <div className="mb-9 flex flex-wrap items-start justify-center gap-4">
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
      <section className="flex flex-wrap justify-center gap-[10px] pb-[140px]">
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              imgUrl={product.imgUrl}
              productName={product.productName}
              text={product.text}
            />
          );
        })}
        <a
          href="#"
          className="mt-14 flex items-center border-[2px] border-black px-4 py-5"
        >
          <span> Barcha Mahsulotlar</span>
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17 17 7m0 0H7m10 0v10"
              stroke="#121212"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </section>
    </>
  );
}

export default Home;
