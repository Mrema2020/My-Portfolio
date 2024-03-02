import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
    const [active, setActive] = useState(' ')
    const [toggle, setToggle] = useState(false);

  return (
    <nav
    className={`${styles.paddingX} w-full flex  items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="flex justify-between w-full ">
            <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scroll(0, 0);
            }}
            >
              <img src={logo} alt="logo" className="w-15 h-12 object-contain rounded-full" />
              <p 
              className="text-white text-[20px] font-bold cursor-pointer flex">
                Elvis &nbsp; <span className='sm:block hidden'> | &nbsp;  FrontEnd Developer 
                </span></p>
            </Link>
            <ul
             className="list-none hidden sm:flex flex-row gap-10 items-center">
              {navLinks.map((link) => (
                <li key={link.id}
                className={`${
                  active === link.title
                  ? "text-white"
                  : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(link.title)
                }}
                >
                    <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
              <img src={toggle ? close : menu} alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
              />
              <div
              className={`${!toggle ? 'hidden' : 'flex'}
              p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                <ul
                 className="list-none flex justify-end flex-col gap-4 items-start">
              {navLinks.map((link) => (
                <li key={link.id}
                className={`${
                  active === link.title
                  ? "text-white"
                  : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setActive(link.title)
                  setToggle(!toggle)
                }}
                >
                    <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
              </div>
            </div>
      </div>
    </nav>
  )
}

export default Navbar