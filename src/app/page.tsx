import { FaArrowUp } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Heading from "@/components/Heading";
import Footer from "@/components/Footer";

export default function Home() {
  const projects = [
    {
      name: "But Umm",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam est perferendis quasi eius distinctio, excepturi laborum harum maxime! Quam numquam fugiat ratione aliquam consequuntur, aliquid ipsum delectus nostrum. Iste, molestiae.",
      techStack: ["Tailwind", "Next", "Express", "Shadcn UI"],
      role: "Full Stack Dev",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFxpwuSqbULqo32gazM4OTlH4cG5ic_pqy9g&s",
    },
    {
      name: "Mosbius Designs",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam est perferendis quasi eius distinctio, excepturi laborum harum maxime! Quam numquam fugiat ratione aliquam consequuntur, aliquid ipsum delectus nostrum. Iste, molestiae.",
      techStack: ["Tailwind", "Next"],
      role: "Full Stack Dev",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZwdOYFhiVrmrfBDuvwaJz0GH_3JazCxmAA&s",
    },
    {
      name: "GNB Online",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam est perferendis quasi eius distinctio, excepturi laborum harum maxime! Quam numquam fugiat ratione aliquam consequuntur, aliquid ipsum delectus nostrum. Iste, molestiae.",
      techStack: ["Tailwind", "Angular", "Daisy UI"],
      role: "Full Stack Dev",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIu3KXAbqLdQ_tz8PR1ZHDWrQ5jRpOQ-EsMA&s",
    },
    {
      name: "Slap Bet",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam est perferendis quasi eius distinctio, excepturi laborum harum maxime! Quam numquam fugiat ratione aliquam consequuntur, aliquid ipsum delectus nostrum. Iste, molestiae.",
      techStack: ["Tailwind", "Next", "Express", "MUI"],
      role: "Full Stack Dev",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGXoUEgdrbKN2NnqrnqfjbdqczDfXEY-2WQg&s",
    },
    {
      name: "MacLaren's",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam est perferendis quasi eius distinctio, excepturi laborum harum maxime! Quam numquam fugiat ratione aliquam consequuntur, aliquid ipsum delectus nostrum. Iste, molestiae.",
      techStack: ["Tailwind", "Next", "Express", "MUI"],
      role: "Full Stack Dev",
      image:
        "https://www.berlin-welcomecard.de/system/files/styles/metatag_og_large/private/images/logo_web.jpg?itok=Nm16pbgp",
    },
  ];

  const tools = [
    {
      name: "HTML",
      image: <FaHtml5 />,
    },
    {
      name: "CSS",
      image: <FaCss3 />,
    },
    {
      name: "Javascript",
      image: <IoLogoJavascript />,
    },
    {
      name: "Typescript",
      image: <SiTypescript />,
    },
    {
      name: "Tailwind CSS",
      image: <RiTailwindCssFill />,
    },
    {
      name: "Next JS",
      image: <RiNextjsFill />,
    },
  ];

  return (
    <div className="font-mono relative">
      {/* Jumbotron */}
      <section className="flex flex-col items-center w-full h-screen">
        <div className="w-[90%] md:w-1/2 flex flex-col m-auto p-4 rounded-md gap-6 text-center text-white">
          <h1 className="text-xl md:text-3xl">Hello World👋</h1>
          <div className="border-8 border-yellow-300 p-6 flex flex-col gap-8">
            <h1 className="text-5xl md:text-8xl">I&apos;m Geraldo</h1>
            <p className="capitalize font-sans">
              beginner web developer trying to learn and improve myself in the
              world of fullstack web developing
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center ">
            <h1 className="capitalize text-white">Check out my github</h1>
            <a
              href="https://github.com/GeraldoSaroinsong"
              className="p-2 bg-yellow-300 rounded-md w-fit hover:scale-110 transition duration-100 text-black"
            >
              Click Here
            </a>
          </div>
        </div>
      </section>
      {/* Projects */}
      <section className="md:w-3/4 m-auto mt-12 flex flex-col gap-6 divide-y-8 divide-yellow-300">
        <Heading name="My Projects📝" desc="some projects i have worked on" />
        <div className="w-[70%] md:w-full m-auto flex justify-center gap-4 pt-6 md:pt-12">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((projectItem: any, index: number) => {
                return (
                  <CarouselItem key={index} className="basis-full md:basis-1/3">
                    <div className="flex flex-col rounded-xl bg-white text-black w-full h-4/5">
                      <div className="overflow-hidden rounded-t-xl h-1/3">
                        <img
                          src={projectItem.image}
                          alt="project item"
                          className="w-full hover:scale-110 transition duration-150 object-contain"
                        />
                      </div>
                      <div className="p-4 flex flex-col gap-6">
                        <div>
                          <h1 className="text-xl md:text-2xl font-semibold">
                            {projectItem.name}
                          </h1>
                          <p className="text-sm font-sans">
                            {projectItem.desc}
                          </p>
                        </div>
                        <div className="hidden md:block">
                          <h1 className="text-xl font-semibold">Tech Stack</h1>
                          <div className="flex flex-row gap-2 text-white flex-wrap">
                            {projectItem.techStack.map(
                              (tech: any, index: number) => {
                                return (
                                  <p
                                    key={index}
                                    className="p-1 bg-black rounded-md"
                                  >
                                    {tech}
                                  </p>
                                );
                              }
                            )}
                          </div>
                        </div>
                        <div className="hidden md:block">
                          <h1 className="text-xl font-semibold">Role</h1>
                          <p className="text-sm font-sans">Full Stack Dev</p>
                        </div>
                        <div className="flex justify-center md:justify-end p-1">
                          <button className="p-2 rounded-md bg-black text-white">
                            View Project
                          </button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      {/* Tech Stack */}
      <section className="w-[90%] md:w-3/4 m-auto mt-1 md:mt-32 flex flex-col gap-6 divide-y-8 divide-yellow-300">
        <Heading name="Tech Stack⚙️" desc="the tools i've used" />
        <div className="flex flex-row flex-wrap justify-center gap-4 pt-6">
          {tools.map((val: any, index: number) => {
            return (
              <div
                key={index}
                className="p-2 md:p-6 text-2xl md:text-6xl text-black bg-white flex flex-col items-center md:gap-6 rounded-xl hover:scale-105 transition duration-100"
              >
                {val.image}
                <p>{val.name}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* About Me */}
      <section className="w-[90%] md:w-3/4 m-auto mt-32 flex flex-col gap-6 divide-y-8 divide-yellow-300">
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
        className="fixed p-2 rounded-md text-3xl bg-yellow-300 text-black right-4 md:right-10 bottom-4 md:bottom-10 hover:-translate-y-4 transition duration-150"
      >
        <FaArrowUp />
      </a>
    </div>
  );
}
