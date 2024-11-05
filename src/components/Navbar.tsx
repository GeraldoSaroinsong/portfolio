"use client";

const Navbar = () => {
  return (
    <section className="p-6 bg-yellow-300">
      <div className="w-3/4 m-auto flex justify-between items-center">
        <h1 className="text-3xl font-semibold flex flex-col">
          <span className="bg-black text-yellow-300 w-full">Sar</span>
          <span className="underline underline-offset-8">Designs</span>
        </h1>
        <h1 className="text-7xl font-bold">#</h1>
        <button
          type="button"
          className="py-2 px-4 bg-black text-yellow-300 rounded-md text-xl"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
};
export default Navbar;
