//uuid
import { v4 as uuidv4 } from "uuid";

import { Link } from "react-router-dom";

const footerLink = [
  {
    path: "/",
    text: "Biz haqimizda",
  },
  {
    path: "/xizmatlar",
    text: "Xizmatlar",
  },
  {
    path: "/galareya",
    text: "Galareya",
  },
  {
    path: "/yangiliklar",
    text: "Yangiliklar",
  },
  {
    path: "/faq",
    text: "F.A.Q",
  },
  {
    path: "/bog'lanish",
    text: "Bog'lanish",
  },
];

function Footer() {
  return (
    <footer className="bg-[#181818] pb-[21px] pt-[51px]">
      <div className="align-elements">
        <div className="justify-between lg:flex">
          <div className="mb-10 flex flex-col items-center lg:items-start">
            <a className="mb-[40px]" href="/">
              <img src="/images/svg/footer-logo.svg" alt="" />
            </a>

            <div className="text-center lg:text-left">
              <strong className="mb-[14px] block font-semibold text-white">
                Manzil
              </strong>
              <p className="leading-[150%] text-white opacity-50">
                Farg’ona viloyati, Farg’ona shahar Alisher Navoiy ko’chasi 15_uy
              </p>
            </div>
          </div>

          <div className="justify-center gap-14 text-center md:flex">
            <div className="mb-10 md:text-left">
              <strong className="mb-[24px] block font-semibold text-white">
                Menu
              </strong>
              <ul className="flex flex-col gap-5 text-white">
                {footerLink.map((item) => {
                  return (
                    <li
                      key={uuidv4()}
                      className="leading-[150%] text-white opacity-50 hover:opacity-100"
                    >
                      <Link to={item.path}>{item.text}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="md:text-right">
              <strong className="mb-6 block font-semibold text-white">
                Aloqa
              </strong>
              <p className="mb-[14px] text-white opacity-50">
                <a href="#" className="block">
                  Telefon +99890 000 00 00
                </a>
                <a href="#" className="ml-[50px] block">
                  +99890 000 00 00
                </a>
              </p>

              <a className="text-white opacity-50" href="#">
                Email: info@rostfri.uz
              </a>
            </div>
          </div>

          <div className="my-10 flex flex-col justify-center lg:m-0 lg:justify-start">
            <strong className="text-center text-white">
              Ijtimoiy tarmoqlar{" "}
            </strong>
            <div className="mt-6 flex justify-center gap-3">
              <a href="#">
                <svg
                  className="hover:fill-hoverIcon"
                  width="28"
                  height="28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x=".5"
                    y=".5"
                    width="27"
                    height="27"
                    rx="13.5"
                    stroke="#fff"
                  />
                  <rect
                    width="28"
                    height="28"
                    rx="14"
                    fill="#050505"
                    fillOpacity=".16"
                  />
                  <path
                    d="m19.6 8.821-2.104 10.984s-.294.761-1.103.396l-4.854-3.854-.022-.012c.655-.61 5.74-5.343 5.962-5.558.344-.332.13-.53-.27-.279L9.7 15.437l-2.897-1.01s-.456-.168-.5-.533c-.044-.366.515-.563.515-.563L18.63 8.532s.971-.442.971.29Z"
                    fill="#fff"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  className="hover:fill-hoverIcon"
                  width="28"
                  height="28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x=".5"
                    y=".5"
                    width="27"
                    height="27"
                    rx="13.5"
                    stroke="#fff"
                  />
                  <path
                    d="M14 8.265h2.867c.675 0 1.012.169 1.265.253.338.169.59.253.844.506.253.253.422.506.506.843.084.253.169.59.253 1.265V16.867c0 .675-.169 1.012-.253 1.265-.169.338-.253.59-.506.844-.253.253-.506.422-.843.506-.253.084-.59.169-1.265.253H11.133c-.675 0-1.012-.169-1.266-.253-.337-.169-.59-.253-.843-.506s-.422-.506-.506-.843c-.084-.253-.169-.59-.253-1.265V11.133c0-.675.169-1.012.253-1.266.169-.337.253-.59.506-.843s.506-.422.843-.506c.253-.084.59-.169 1.265-.253H14ZM14 7h-2.867c-.76 0-1.266.169-1.687.337a3.683 3.683 0 0 0-1.265.844c-.422.421-.59.759-.844 1.265-.168.421-.253.928-.337 1.687v5.734c0 .76.169 1.265.337 1.687.169.422.422.844.844 1.265.421.422.759.59 1.265.844.421.168.928.253 1.687.337h5.734c.76 0 1.265-.169 1.687-.337a3.683 3.683 0 0 0 1.265-.844c.422-.421.59-.759.844-1.265.168-.421.253-.927.337-1.686V11.133c0-.76-.169-1.266-.337-1.687a3.683 3.683 0 0 0-.844-1.265c-.421-.422-.759-.59-1.265-.844-.421-.168-.927-.253-1.686-.337H14Z"
                    fill="#fff"
                  />
                  <path
                    d="M14 10.373A3.6 3.6 0 0 0 10.373 14 3.6 3.6 0 0 0 14 17.627 3.6 3.6 0 0 0 17.627 14 3.6 3.6 0 0 0 14 10.373Zm0 5.988A2.357 2.357 0 0 1 11.639 14 2.357 2.357 0 0 1 14 11.639 2.357 2.357 0 0 1 16.361 14c0 1.265-1.096 2.361-2.361 2.361ZM17.71 11.133a.843.843 0 1 0 0-1.687.843.843 0 0 0 0 1.687Z"
                    fill="#fff"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  className="hover:fill-hoverIcon"
                  width="28"
                  height="28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x=".5"
                    y=".5"
                    width="27"
                    height="27"
                    rx="13.5"
                    stroke="#fff"
                  />
                  <rect
                    width="28"
                    height="28"
                    rx="14"
                    fill="#050505"
                    fillOpacity=".16"
                  />
                  <path
                    d="M15.16 14.255h2.605l.41-2.663h-3.016v-1.455c0-1.106.36-2.087 1.388-2.087H18.2V5.726c-.29-.04-.905-.126-2.065-.126-2.423 0-3.844 1.288-3.844 4.22v1.772H9.8v2.663h2.491v7.32c.493.075.993.125 1.506.125.464 0 .916-.043 1.363-.103v-7.342Z"
                    fill="#fff"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  className="hover:fill-hoverIcon"
                  width="28"
                  height="28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x=".5"
                    y=".5"
                    width="27"
                    height="27"
                    rx="13.5"
                    stroke="#fff"
                  />
                  <rect
                    width="28"
                    height="28"
                    rx="14"
                    fill="#050505"
                    fillOpacity=".16"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.884 18.94a1.8 1.8 0 0 1-.73-.422 1.741 1.741 0 0 1-.45-.702c-.514-1.375-.666-7.115.323-8.248a1.92 1.92 0 0 1 1.294-.632c2.655-.279 10.857-.241 11.8.093.264.084.506.225.707.413a1.8 1.8 0 0 1 .453.674c.562 1.42.58 6.585-.076 7.95a1.776 1.776 0 0 1-.828.818c-.99.483-11.18.474-12.493.056Zm4.215-2.694 4.758-2.415-4.758-2.433v4.848Z"
                    fill="#fff"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t-[1px] pt-3">
          <p className="flex items-center gap-2">
            <img src="/images/icons/c.svg" alt="" />
            <span className="text-white">RostFri</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="hidden text-white lg:block">Developed by:</span>
            <img src="/images/icons/premiumsoft.svg" alt="" />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
