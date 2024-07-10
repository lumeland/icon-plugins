import type { Catalog } from "./catalog.ts";
import { fetchIcon } from "./utils.ts";

export type Weight = 100 | 200 | 300 | 400 | 500 | 600 | 700;

const assets: Record<Weight, string> = {
  100: "https://unpkg.com/@material-symbols/svg-100@0.21.0",
  200: "https://unpkg.com/@material-symbols/svg-200@0.21.0",
  300: "https://unpkg.com/@material-symbols/svg-300@0.21.0",
  400: "https://unpkg.com/@material-symbols/svg-400@0.21.0",
  500: "https://unpkg.com/@material-symbols/svg-500@0.21.0",
  600: "https://unpkg.com/@material-symbols/svg-600@0.21.0",
  700: "https://unpkg.com/@material-symbols/svg-700@0.21.0",
};

export type Type = "outlined" | "rounded" | "sharp";

export interface Options {
  defaultType: Type;
  defaultWeight: Weight;
}

export const defaults: Options = {
  defaultType: "outlined",
  defaultWeight: 400,
};

export default function (options: Options = defaults) {
  return new MaterialSymbols(options);
}

export class MaterialSymbols implements Catalog<void> {
  name = "material-symbols";
  defaultType: Type;
  defaultWeight: Weight;

  constructor(options: Options = defaults) {
    this.defaultType = options.defaultType;
    this.defaultWeight = options.defaultWeight;
  }

  get(name: string, weight?: Weight, type?: Type): Promise<string> {
    const iconType = type || this.defaultType;
    const iconWeight = weight || this.defaultWeight;
    const url = `${assets[iconWeight]}/${iconType}/${name}.svg`;

    return fetchIcon(url);
  }

  info() {
    throw new Error("Not info available for Material symbols.");
  }
}
