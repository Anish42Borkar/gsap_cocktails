import { useGSAP } from "@gsap/react";
import { navLinks } from "../constants";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "#00000050",
        // backdrop: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
        backgroundFilter: "blur(10px)",
      }
    );
  });
  return (
    <nav>
      <div className="">
        <a href="#home" className="flex item-center gap-2">
          <img src="/images/logo.png" alt="" />
          <p>Valvel Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.id}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
