import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    let links = document.querySelectorAll(".header ul a");

    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;

      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();

          let target = element.getAttribute("data-href");

          if (target) {
            const section = document.querySelector(target);

            if (section) {
              section.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }
        }
      });
    });
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Suyog
        </a>

        <a
          href="mailto:suyogsatane2106@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          suyogsatane2106@gmail.com
        </a>

        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;