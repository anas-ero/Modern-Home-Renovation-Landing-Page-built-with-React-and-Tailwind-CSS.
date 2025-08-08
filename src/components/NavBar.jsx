import React, { useState } from "react";
import "../App.css";
import Logo from "../assets/logo.webp";
import About from "../assets/about.webp";
import Hero from "../assets/hero.webp";
import Bathroom from "../assets/bathroom.webp";
import Kitchen from "../assets/kitchen.webp";
import LivingRoom from "../assets/living-room.webp";
import P1 from "../assets/portfolio1.webp";
import P2 from "../assets/portfolio2.webp";
import P3 from "../assets/portfolio3.webp";
import P4 from "../assets/portfolio4.webp";
import P5 from "../assets/portfolio5.webp";
import P6 from "../assets/portfolio6.webp";
import U1 from "../assets/user1.webp";
import U2 from "../assets/user2.webp";
import U3 from "../assets/user3.webp";
import U4 from "../assets/user4.webp";
import U5 from "../assets/user5.webp";
import U6 from "../assets/user6.webp";
import { LINKS } from "../constants";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNav = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50">
      <div className="backdrop-blur-sm bg-white/30">
        <div className="nav-div">
          <div>
            <img src={Logo} alt="Logo" width={250} />
          </div>

          <ul className="hidden lg:flex gap-2">
            {LINKS.map((item) => (
              <li>
                <a href={item.link} className="nav-links">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="lg:hidden sm:flex items-center">
            <button onClick={toggleNav}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 lg:hidden flex flex-col z-20 backdrop-blur-3xl w-full p-12">
            <div className="flex flex-col items-center">
              <ul>
                {LINKS.map((item) => (
                  <li>
                    <a className="nav-drawer" href={item.link}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
