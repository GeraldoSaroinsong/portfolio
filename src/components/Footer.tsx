"use client";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <section className="w-full mt-32 p-20 flex flex-col text-center items-center gap-6 bg-yellow-300">
      <h1 className="text-6xl">Let's Collaborate!</h1>
      <div className="flex flex-col items-center">
        <p className="text-xl capitalize">
          let me know if you want to work together
        </p>
        {/* <p className="text-2xl bg-black p-2 w-fit rounded-md text-white">
          geraldosaroinsong5@gmail.com
        </p> */}
      </div>
      <div className="flex flex-row gap-4 text-4xl bg-black py-2 px-4 w-fit rounded-md text-yellow-300">
        <FaInstagram />
        <FaGithub />
        <FaLinkedin />
        <SiGmail />
      </div>
    </section>
  );
};
export default Footer;
