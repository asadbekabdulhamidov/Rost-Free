// react icons
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { FaTelegram, FaSearch } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";

//compoenents
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <header>
      <nav className="align-elements flex items-center justify-between py-5">
        <div className="flex items-center gap-3">
          <button className="pointer">
            <HiMiniBars3CenterLeft className="h-9 w-9" />
          </button>
          <span className="hidden text-[15px] font-semibold xl:block">
            Mahsulotlar
          </span>
        </div>

        <div className="flex items-center">
          <ul className="hidden gap-3 lg:flex lg:items-center">
            <NavLinks />
          </ul>
          <a className="px-5 lg:pl-20" href="/">
            <img src="/images/svg/site-logo.svg" alt="rost free logo" />
          </a>
        </div>
        <div className="items-center sm:flex">
          <div className="hidden items-center gap-3 xl:flex">
            <span className="">
              <svg
                class="group h-7 w-7 transition"
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
                  stroke="#121212"
                  class="fill-transparent stroke-[#121212] transition group-hover:fill-hoverIcon group-hover:stroke-white"
                />
                <rect
                  width="28"
                  height="28"
                  rx="14"
                  fill="#fff"
                  fill-opacity=".16"
                />
                <path
                  d="m19.6 8.821-2.104 10.984s-.294.761-1.103.396l-4.854-3.854-.022-.012c.655-.61 5.74-5.343 5.962-5.558.344-.332.13-.53-.27-.279L9.7 15.437l-2.897-1.01s-.456-.168-.5-.533c-.044-.366.515-.563.515-.563L18.63 8.532s.971-.442.971.29Z"
                  fill="#121212"
                  class="fill-[#121212] transition group-hover:fill-white"
                />
              </svg>
            </span>
            <span>
              <svg
                width="28"
                height="28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="group h-7 w-7 transition"
              >
                <rect
                  x=".5"
                  y=".5"
                  width="27"
                  height="27"
                  rx="13.5"
                  stroke="#121212"
                  class="fill-transparent stroke-[#121212] transition group-hover:fill-hoverIcon group-hover:stroke-white"
                />
                <path
                  d="M14 8.265h2.867c.675 0 1.012.169 1.265.253.338.169.59.253.844.506.253.253.422.506.506.843.084.253.169.59.253 1.265V16.867c0 .675-.169 1.012-.253 1.265-.169.338-.253.59-.506.844-.253.253-.506.422-.843.506-.253.084-.59.169-1.265.253H11.133c-.675 0-1.012-.169-1.266-.253-.337-.169-.59-.253-.843-.506s-.422-.506-.506-.843c-.084-.253-.169-.59-.253-1.265V11.133c0-.675.169-1.012.253-1.266.169-.337.253-.59.506-.843s.506-.422.843-.506c.253-.084.59-.169 1.265-.253H14ZM14 7h-2.867c-.76 0-1.266.169-1.687.337a3.683 3.683 0 0 0-1.265.844c-.422.421-.59.759-.844 1.265-.168.421-.253.928-.337 1.687v5.734c0 .76.169 1.265.337 1.687.169.422.422.844.844 1.265.421.422.759.59 1.265.844.421.168.928.253 1.687.337h5.734c.76 0 1.265-.169 1.687-.337a3.683 3.683 0 0 0 1.265-.844c.422-.421.59-.759.844-1.265.168-.421.253-.927.337-1.686V11.133c0-.76-.169-1.266-.337-1.687a3.683 3.683 0 0 0-.844-1.265c-.421-.422-.759-.59-1.265-.844-.421-.168-.927-.253-1.686-.337H14Z"
                  fill="#121212"
                  class="fill-[#121212] transition group-hover:fill-white"
                />
                <path
                  d="M14 10.373A3.6 3.6 0 0 0 10.373 14 3.6 3.6 0 0 0 14 17.627 3.6 3.6 0 0 0 17.627 14 3.6 3.6 0 0 0 14 10.373Zm0 5.988A2.357 2.357 0 0 1 11.639 14 2.357 2.357 0 0 1 14 11.639 2.357 2.357 0 0 1 16.361 14c0 1.265-1.096 2.361-2.361 2.361ZM17.71 11.133a.843.843 0 1 0 0-1.687.843.843 0 0 0 0 1.687Z"
                  fill="#121212"
                  class="fill-[#121212] transition group-hover:fill-white"
                />
              </svg>
            </span>
            <span>
              <svg
                width="28"
                height="28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="group h-7 w-7 transition"
              >
                <rect
                  x=".5"
                  y=".5"
                  width="27"
                  height="27"
                  rx="13.5"
                  stroke="#121212"
                  class="fill-transparent stroke-[#121212] transition group-hover:fill-hoverIcon group-hover:stroke-white"
                />
                <rect
                  width="28"
                  height="28"
                  rx="14"
                  fill="#fff"
                  fill-opacity=".16"
                />
                <path
                  d="M15.16 14.255h2.605l.41-2.663h-3.016v-1.455c0-1.106.36-2.087 1.388-2.087H18.2V5.726c-.29-.04-.905-.126-2.065-.126-2.423 0-3.844 1.288-3.844 4.22v1.772H9.8v2.663h2.491v7.32c.493.075.993.125 1.506.125.464 0 .916-.043 1.363-.103v-7.342Z"
                  fill="#121212"
                  class="fill-[#121212] transition group-hover:fill-white"
                />
              </svg>
            </span>
            <span>
              <svg
                width="28"
                height="28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="group h-7 w-7 transition"
              >
                <rect
                  x=".5"
                  y=".5"
                  width="27"
                  height="27"
                  rx="13.5"
                  stroke="#121212"
                  class="fill-transparent stroke-[#121212] transition group-hover:fill-hoverIcon group-hover:stroke-white"
                />
                <rect
                  width="28"
                  height="28"
                  rx="14"
                  fill="#fff"
                  fill-opacity=".16"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.884 18.94a1.8 1.8 0 0 1-.73-.422 1.741 1.741 0 0 1-.45-.702c-.514-1.375-.666-7.115.323-8.248a1.92 1.92 0 0 1 1.294-.632c2.655-.279 10.857-.241 11.8.093.264.084.506.225.707.413a1.8 1.8 0 0 1 .453.674c.562 1.42.58 6.585-.076 7.95a1.776 1.776 0 0 1-.828.818c-.99.483-11.18.474-12.493.056Zm4.215-2.694 4.758-2.415-4.758-2.433v4.848Z"
                  fill="#121212"
                  class="fill-[#121212] transition group-hover:fill-white"
                />
              </svg>
            </span>
          </div>
          <div className="ml-5 hidden items-center lg:flex">
            <span>
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.97 18.33c0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78Z"
                  stroke="#121212"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
              </svg>
            </span>
            <a href="tel:+998 90 277 43 52">+998 90 277 43 52</a>
          </div>
          <div className="cursor-pointer items-center px-5 sm:flex">
            <svg
              width="20"
              height="20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m17.5 17.5-3.625-3.625m1.958-4.708a6.667 6.667 0 1 1-13.333 0 6.667 6.667 0 0 1 13.333 0Z"
                stroke="#C6C6C6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="hidden pl-2 text-[15px] font-semibold sm:block">
              Qidiruv
            </span>
          </div>
          <div className="hidden cursor-pointer sm:block">
            <span className="font-semibold">UZ</span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
