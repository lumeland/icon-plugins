import phosphor, {
  type Options as PhosphorOptions,
  type Type as PhosphorType,
} from "./catalogs/phosphor.ts";

export interface Options extends PhosphorOptions {
  /** Filter name */
  name: string;
}

export const defaults: Options = {
  defaultType: "regular",
  name: "phosphor",
};

export default function plugin(userOptions?: Partial<Options>) {
  const options = { ...defaults, ...userOptions };
  const catalog = phosphor(options);

  return (site: Lume.Site) => {
    site.filter(options.name, (name: string, type?: PhosphorType) => {
      if (!name) {
        return "";
      }

      return catalog.get(name, type);
    }, true);
  };
}
