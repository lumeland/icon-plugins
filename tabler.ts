import tabler, {
  type Options as TablerOptions,
  type Type as TablerType,
} from "./catalogs/tabler.ts";

export interface Options extends TablerOptions {
  /** Filter name */
  name: string;
}

export const defaults: Options = {
  defaultType: "filled",
  name: "tabler",
};

export default function plugin(userOptions?: Partial<Options>) {
  const options = { ...defaults, ...userOptions };
  const catalog = tabler(options);

  return (site: Lume.Site) => {
    site.filter(options.name, (name: string, type?: TablerType) => {
      if (!name) {
        return "";
      }

      return catalog.get(name, type);
    }, true);
  };
}
