import type { Catalog } from "./catalog.ts";
import { fetchIcon } from "./utils.ts";

const assets = "https://cdn.jsdelivr.net/gh/Richard9394/MingCute@2.95";

export type Type = "fill" | "line";

export interface Options {
  defaultType: Type;
}

export const defaults: Options = {
  defaultType: "fill",
};

export default function (options: Options = defaults) {
  return new MingCute(options);
}

export class MingCute implements Catalog<void> {
  name = "mingcute";
  defaultType: Type;

  constructor(options: Options = defaults) {
    this.defaultType = options.defaultType;
  }

  get(name: string, type?: Type): Promise<string> {
    const iconType = type || this.defaultType;
    const url = `${assets}/svg/${name}_${iconType}.svg`;
    console.log(url);
    return fetchIcon(url);
  }

  info() {
    throw new Error("Not info available for MingCute icons");
  }
}
