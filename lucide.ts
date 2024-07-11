import lucide from "./catalogs/lucide.ts";

export interface Options {
  /** Filter name */
  name: string;
}

export const defaults: Options = {
  name: "lucide",
};

export default function plugin(userOptions?: Options) {
  const options = { ...defaults, ...userOptions };
  const catalog = lucide();

  return (site: Lume.Site) => {
    site.filter(options.name, (name: string) => {
      if (!name) {
        return "";
      }

      return catalog.get(name);
    }, true);
  };
}
