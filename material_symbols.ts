import material, {
  type Options as MaterialOptions,
  type Type,
  type Weight,
} from "./catalogs/material_symbols.ts";

export interface Options extends MaterialOptions {
  /** Filter name */
  name: string;
}

export const defaults: Options = {
  defaultType: "outlined",
  defaultWeight: 400,
  name: "material",
};

export default function plugin(userOptions?: Options) {
  const options = { ...defaults, ...userOptions };
  const catalog = material(options);

  return (site: Lume.Site) => {
    site.filter(options.name, (name: string, weight?: Weight, type?: Type) => {
      if (!name) {
        return "";
      }

      return catalog.get(name, weight, type);
    }, true);
  };
}
