import contentfulClient from "@/lib/contentfulClient";
import {
  TypeWebDevPortfolioSkeleton,
  TypeTechStackSkeleton,
} from "@/types/portfolio.type";

// retrieve portfolio items
export const getPortfolio = async () => {
  try {
    const portfolio =
      await contentfulClient.getEntries<TypeWebDevPortfolioSkeleton>({
        content_type: "webDevPortfolio",
      });
    return portfolio;
  } catch (error) {
    console.log(error);
  }
};

// retrieve tech stack items
export const getTech = async () => {
  try {
    const tech = await contentfulClient.getEntries<TypeTechStackSkeleton>({
      content_type: "techStack",
    });
    return tech;
  } catch (error) {
    console.log(error);
  }
};
