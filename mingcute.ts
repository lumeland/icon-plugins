import mingcute, {
  type Options as MingCuteOptions,
  type Type as MingCuteType,
} from "./catalogs/mingcute.ts";

export interface Options extends MingCuteOptions {
  /** Filter name */
  name: string;
}

export const defaults: Options = {
  defaultType: "fill",
  name: "mingcute",
};

export default function plugin(userOptions?: Partial<Options>) {
  const options = { ...defaults, ...userOptions };
  const catalog = mingcute(options);

  return (site: Lume.Site) => {
    site.filter(options.name, (name: string, type?: MingCuteType) => {
      if (!name) {
        return "";
      }

      return catalog.get(name, type);
    }, true);
  };
}
