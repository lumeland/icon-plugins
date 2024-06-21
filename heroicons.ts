import heroicons, {
  type Options as HeroiconsOptions,
  type Type as HeroiconsType,
} from "./catalogs/phosphor.ts";

export interface Options extends HeroiconsOptions {
  /** Filter name */
  name: string;
}

export const defaults: Options = {
  defaultType: "regular",
  name: "heroicons",
};

export default function plugin(userOptions?: Options) {
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
