import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TypeWebDevPortfolioAsset } from "@/types/portfolio.type";
import { getPortfolio } from "@/lib/fetchData";
import Image from "next/image";

const CarouselComponent = async () => {
  const portfolio = await getPortfolio();
  return (
    <Carousel className="w-[90%] md:w-full m-auto pt-6 md:pt-12">
      <CarouselContent className="h-[75vh]">
        {portfolio &&
          portfolio.items?.map((portfolioItem: any, index: number) => {
            return (
              <CarouselItem key={index} className="basis-full md:basis-1/3">
                <div className="flex flex-col rounded-xl pb-4 md:pb-0 bg-white text-black w-full h-full">
                  <div className="overflow-hidden rounded-t-xl h-1/3">
                    <Image
                      src={`https:${
                        (portfolioItem.fields.image as TypeWebDevPortfolioAsset)
                          ?.fields.file.url
                      }`}
                      alt="project item"
                      className="w-full hover:scale-110 transition duration-150 object-contain"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between gap-4 md:gap-6 h-3/4">
                    <div>
                      <h1 className="text-xl md:text-2xl font-semibold">
                        {portfolioItem.fields.title}
                      </h1>
                      <p className="text-xs font-sans">
                        {portfolioItem.fields.description}
                      </p>
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold">Tech Stack</h1>
                      <div className="flex flex-row gap-2 text-white flex-wrap">
                        {portfolioItem.fields.techStack.map(
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
                    <div>
                      <h1 className="text-xl font-semibold">Role</h1>
                      <p className="text-sm font-sans">
                        {portfolioItem.fields.role}
                      </p>
                    </div>
                    <div className="flex justify-center md:justify-end p-1">
                      <a
                        href={portfolioItem.fields.link}
                        target="_blank"
                        className="p-2 rounded-md bg-black text-white"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex items-center" />
      <CarouselNext className="hidden md:flex items-center" />
    </Carousel>
  );
};

export default CarouselComponent;
