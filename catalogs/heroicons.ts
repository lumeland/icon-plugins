import type { Catalog } from "./catalog.ts";
import { fetchIcon } from "./utils.ts";

const assets = "https://unpkg.com/heroicons@2.1.5";

export type Type = "outline" | "solid" | "mini" | "micro";

const paths: Record<Type, string> = {
  outline: "/24/outline",
  solid: "/24/solid",
  mini: "/20/solid",
  micro: "/16/solid",
};

export interface Options {
  defaultType: Type;
}

export const defaults: Options = {
  defaultType: "solid",
};

export default function (options: Options = defaults) {
  return new Heroicons(options);
}

export class Heroicons implements Catalog<void> {
  name = "phosphor";
  defaultType: Type;

  constructor(options: Options = defaults) {
    this.defaultType = options.defaultType;
  }

  get(name: string, type?: Type): Promise<string> {
    const iconType = type || this.defaultType;
    const path = paths[iconType];
    const url = `${assets}${path}/${name}.svg`;

    return fetchIcon(url);
  }

  info() {
    throw new Error("Not info available for Heroicons");
  }
}
