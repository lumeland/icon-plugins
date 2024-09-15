import remix from "./catalogs/remix.ts";

export interface Options {
  /** Filter name */
  name: string;
}

export const defaults: Options = {
  name: "remix",
};

export default function plugin(userOptions?: Partial<Options>) {
  const options = { ...defaults, ...userOptions };
  const catalog = remix();

  return (site: Lume.Site) => {
    site.filter(options.name, (name: string) => {
      if (!name) {
        return "";
      }

      return catalog.get(name);
    }, true);
  };
}
