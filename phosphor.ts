import phosphor, {
  type Options as PhosphorOptions,
  PhosphorIcon,
} from "./catalogs/phosphor.ts";

export interface Options extends PhosphorOptions {
  /** Filter name */
  name: string;
}

export const defaults: Options = {
  defaultType: "regular",
  name: "phosphor",
};

export default function plugin(userOptions?: Options) {
  const options = { ...defaults, ...userOptions };
  const catalog = phosphor(options);

  return (site: Lume.Site) => {
    site.filter(options.name, (name: string, info?: keyof PhosphorIcon) => {
      if (info) {
        return catalog.info(name)[info];
      }
      return catalog.get(name);
    }, true);
  };
}
