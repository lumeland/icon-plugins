import heroicons, {
  type Options as HeroiconsOptions,
  type Type as HeroiconsType,
} from "./catalogs/heroicons.ts";

export interface Options extends HeroiconsOptions {
  /** Filter name */
  name: string;
}

export const defaults: Options = {
  defaultType: "solid",
  name: "heroicons",
};

export default function plugin(userOptions?: Partial<Options>) {
  const options = { ...defaults, ...userOptions };
  const catalog = heroicons(options);

  return (site: Lume.Site) => {
    site.filter(options.name, (name: string, type?: HeroiconsType) => {
      if (!name) {
        return "";
      }

      return catalog.get(name, type);
    }, true);
  };
}
