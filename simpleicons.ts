import simpleicons, { SimpleIcon } from "./catalogs/simpleicons.ts";

export interface Options {
  /** Filter name */
  name: string;
}

export const defaults: Options = {
  name: "simpleicons",
};

export default function plugin(userOptions?: Partial<Options>) {
  const options = { ...defaults, ...userOptions };
  const catalog = simpleicons();

  return (site: Lume.Site) => {
    site.filter(options.name, (name: string, info?: keyof SimpleIcon) => {
      if (!name) {
        return "";
      }

      if (info) {
        return catalog.info(name)[info];
      }

      return catalog.get(name);
    }, true);
  };
}
