"use client";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-full mt-32 p-20 flex flex-col text-center items-center gap-6 bg-yellow-300">
      <h1 className="text-6xl">Let's Collaborate!</h1>
      <div className="flex flex-col items-center">
        <p className="text-xl capitalize">
          let me know if you want to work together
        </p>
        <p className="text-2xl bg-black p-2 w-fit rounded-md text-white">
          geraldosaroinsong5@gmail.com
        </p>
      </div>
      <div className="flex flex-row gap-2 text-4xl">
        <FaInstagram />
        <FaGithub />
        <FaLinkedin />
      </div>
    </section>
  );
};
export default Footer;
