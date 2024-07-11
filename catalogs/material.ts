import type { Catalog } from "./catalog.ts";
import { fetchIcon } from "./utils.ts";

const assets =
  "https://cdn.jsdelivr.net/npm/@material-design-icons/svg@0.14.13";

export type Type = "filled" | "outlined" | "round" | "sharp" | "two-tone";

export interface Options {
  defaultType: Type;
}

export const defaults: Options = {
  defaultType: "filled",
};

export default function (options: Options = defaults) {
  return new Material(options);
}

export class Material implements Catalog<void> {
  name = "material";
  defaultType: Type;

  constructor(options: Options = defaults) {
    this.defaultType = options.defaultType;
  }

  get(name: string, type?: Type): Promise<string> {
    const iconType = type || this.defaultType;
    const url = `${assets}/${iconType}/${name}.svg`;

    return fetchIcon(url);
  }

  info() {
    throw new Error("Not info available for Material icons.");
  }
}
