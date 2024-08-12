import material, {
  type Options as MaterialOptions,
  type Type,
} from "./catalogs/material.ts";

export interface Options extends MaterialOptions {
  /** Filter name */
  name: string;
}

export const defaults: Options = {
  defaultType: "filled",
  name: "material",
};

export default function plugin(userOptions?: Partial<Options>) {
  const options = { ...defaults, ...userOptions };
  const catalog = material(options);

  return (site: Lume.Site) => {
    site.filter(options.name, (name: string, type?: Type) => {
      if (!name) {
        return "";
      }

      return catalog.get(name, type);
    }, true);
  };
}
