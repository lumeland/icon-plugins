import material, {
  type Options as MaterialOptions,
  type Type as MaterialType,
} from "./catalogs/material.ts";

export interface Options extends MaterialOptions {
  /** Filter name */
  name: string;
}

export const defaults: Options = {
  defaultType: "filled",
  name: "material",
};

export default function plugin(userOptions?: Options) {
  const options = { ...defaults, ...userOptions };
  const catalog = material(options);

  return (site: Lume.Site) => {
    site.filter(options.name, (name: string, type?: MaterialType) => {
      if (!name) {
        return "";
      }

      return catalog.get(name, type);
    }, true);
  };
}
