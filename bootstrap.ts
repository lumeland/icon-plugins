import bootstrap from "./catalogs/bootstrap.ts";

export interface Options {
  /** Filter name */
  name: string;
}

export const defaults: Options = {
  name: "bootstrap",
};

export default function plugin(userOptions?: Partial<Options>) {
  const options = { ...defaults, ...userOptions };
  const catalog = bootstrap();

  return (site: Lume.Site) => {
    site.filter(options.name, (name: string) => {
      if (!name) {
        return "";
      }

      return catalog.get(name);
    }, true);
  };
}