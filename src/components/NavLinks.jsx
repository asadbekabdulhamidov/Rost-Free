// react router dom
import { NavLink } from "react-router-dom";

export const navLinks = [
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

function NavLinks() {
  return (
    <>
      {navLinks.map((link) => {
        return (
          <li key={link.text}>
            <NavLink
              className={({ isActive }) =>
                `text-[15px] font-semibold text-textColors hover:text-hoverIcon ${
                  isActive ? "text-red-500" : ""
                }`
              }
              to={link.path}
            >
              {link.text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
}

export default NavLinks;
