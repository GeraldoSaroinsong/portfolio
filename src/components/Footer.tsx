"use client";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-full mt-32 p-20 flex flex-col text-center items-center gap-6 bg-yellow-300">
      <h1 className="text-3xl md:text-6xl">Let&apos;s Collaborate!</h1>
      <div className="flex flex-col items-center">
        <p className="text-xl capitalize">
          let me know if you want to work together
        </p>
      </div>
      <div className="flex flex-row gap-4 text-4xl bg-black py-2 px-4 w-fit rounded-md text-yellow-300">
        <a target="_blank" href="https://www.instagram.com/geraldo.25_/">
          <FaInstagram />
        </a>
        <a target="_blank" href="https://github.com/GeraldoSaroinsong">
          <FaGithub />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/geraldo-saroinsong-961303221/"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};
export default Footer;
