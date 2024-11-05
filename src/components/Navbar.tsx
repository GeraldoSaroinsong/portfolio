"use client";

const Navbar = () => {
  return (
    <section className="p-2 md:p-6 bg-yellow-300">
      <div className="w-[90%] md:w-3/4 m-auto flex justify-between items-center">
        <h1 className="text-base md:text-3xl font-semibold flex flex-col">
          <span className="bg-black text-yellow-300 w-full">Sar</span>
          <span className="underline underline-offset-4">Portfolio</span>
        </h1>
        <h1 className="text-2xl md:text-6xl font-bold">#</h1>
        <a
          href="https://wa.me/0895341479858"
          target="_blank"
          className="p-2 md:px-4 bg-black text-yellow-300 rounded-md text-sm md:text-lg"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};
export default Navbar;
