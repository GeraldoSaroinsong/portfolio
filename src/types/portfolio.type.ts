import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeWebDevPortfolioFields {
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  techStack: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  role: EntryFieldTypes.Symbol;
  link: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink;
}

export interface TypeWebDevPortfolioAsset {
  sys: { id: string };
  fields: {
    file: {
      url: string;
      details?: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName?: string;
      contentType?: string;
    };
  };
}

export type TypeWebDevPortfolioSkeleton = EntrySkeletonType<
  TypeWebDevPortfolioFields,
  "webDevPortfolio"
>;
export type TypeWebDevPortfolio<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeWebDevPortfolioSkeleton, Modifiers, Locales>;
