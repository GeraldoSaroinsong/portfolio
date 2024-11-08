import { FaArrowUp } from "react-icons/fa";
import Heading from "@/components/Heading";
import Footer from "@/components/Footer";
import { TypeWebDevPortfolioAsset } from "@/types/portfolio.type";
import { getTech } from "@/lib/fetchData";
import CarouselComponent from "@/components/Carousel";
import Image from "next/image";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function Home() {
  const tech = await getTech();
  return (
    <div className="font-mono relative">
      {/* Jumbotron */}
      <section className="flex flex-col items-center w-full md:w-3/4 m-auto h-[90vh]">
        <div className="w-[90%] md:w-1/2 flex flex-col m-auto p-4 rounded-md gap-6 text-center text-white">
          <h1 className="text-xl md:text-3xl">Hello World👋</h1>
          <div className="border-8 border-yellow-400 p-6 flex flex-col gap-8">
            <h1 className="text-5xl md:text-8xl">I&apos;m Geraldo</h1>
            <p className="capitalize font-sans">
              beginner web developer trying to learn and improve myself in the
              world of fullstack web developing
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center ">
            <h1 className="capitalize text-white font-semibold">
              Check out my github
            </h1>
            <a
              href="https://github.com/GeraldoSaroinsong"
              target="_blank"
              className="p-2 bg-yellow-400 rounded-md w-fit hover:scale-110 transition duration-100 text-black font-semibold"
            >
              Click Here
            </a>
          </div>
        </div>
      </section>
      {/* Projects */}
      <section className="md:w-3/4 m-auto mt-12 flex flex-col gap-6 divide-y-8 divide-yellow-400">
        <Heading name="My Projects📝" desc="some projects i have worked on" />
        <CarouselComponent />
      </section>
      {/* Tech Stack */}
      <section className="w-[90%] md:w-3/4 m-auto mt-32 flex flex-col gap-6 divide-y-8 divide-yellow-400">
        <Heading name="Tech Stack⚙️" desc="the tools i've used" />
        <div className="flex flex-row flex-wrap justify-center gap-4 pt-6">
          {tech &&
            tech.items?.map((techItems: any, index: number) => {
              return (
                <a
                  key={index}
                  href={techItems.fields.link}
                  target="_blank"
                  className="p-2 md:p-4 text-3xl md:text-6xl text-black bg-white flex items-center gap-2 rounded-xl hover:scale-105 transition duration-100"
                >
                  <Image
                    src={`https:${
                      (techItems.fields.image as TypeWebDevPortfolioAsset)
                        ?.fields.file.url
                    }`}
                    alt="tech stack item"
                    className="w-[50px]"
                  />
                  <p className="text-base md:text-2xl font-sans">
                    {techItems.fields.name}
                  </p>
                </a>
              );
            })}
        </div>
      </section>
      {/* About Me */}
      <section className="w-[90%] md:w-3/4 m-auto mt-32 flex flex-col gap-6 divide-y-8 divide-yellow-400">
        <Heading name="About Me😁" desc="let's get to know eachother" />
        <p className="pt-6 text-base md:text-xl text-white text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          consequatur doloribus soluta adipisci nam illum, odio alias saepe
          inventore excepturi pariatur voluptatibus facilis magni accusantium
          quod porro consectetur mollitia molestiae! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Hic, commodi aspernatur similique
          repudiandae odio in tempore dolore repellendus est atque praesentium
          explicabo minus laboriosam! Facere modi vel repellat corrupti debitis?
        </p>
      </section>
      {/* Footer */}
      <Footer />
      <a
        href="#"
        className="fixed p-2 rounded-md text-3xl bg-yellow-400 text-black right-4 md:right-10 bottom-4 md:bottom-10 hover:-translate-y-4 transition duration-150"
      >
        <FaArrowUp />
      </a>
    </div>
  );
}
