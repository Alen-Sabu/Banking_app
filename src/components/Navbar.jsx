import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import { logo } from "../assets";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleEvent = () => {
    setToggle((prev) => !prev)
  }
  return (
    <nav className="w-full flex justify-between items-center py-5 navbar">
      <img className="w-[125px] h-[32px]" src={logo} alt="HooBank" />
      <ul className="list-none sm:flex hidden flex flex-1 justify-end text-white">
        {navLinks.map((nav, index) => (
          <li
            className={`cursor-pointer font-poppins text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
            key={index}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {toggle ? <TfiClose onClick={handleEvent} style={{color: 'white', fontSize: '28px'}} /> : <HiOutlineMenuAlt3 onClick={handleEvent} style={{color: 'white', fontSize: '28px'}} /> }

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-1 flex-col justify-end items-center text-white">
            {navLinks.map((nav, index) => (
              <li
                className={`cursor-pointer font-poppins text-[15px] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
                key={index}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
