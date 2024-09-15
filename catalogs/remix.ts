import type { Catalog } from "./catalog.ts";
import { fetchIcon } from "./utils.ts";

const assets = "https://cdn.jsdelivr.net/npm/remixicon@4.3.0";

export type Type = "fill" | "line";

export interface Options {
  defaultType: Type;
}

export const defaults: Options = {
  defaultType: "fill",
};

export default function (options: Options = defaults) {
  return new Remix(options);
}

export class Remix implements Catalog<void> {
  name = "remix";
  defaultType: Type;

  constructor(options: Options = defaults) {
    this.defaultType = options.defaultType;
  }

  get(name: string, type?: Type): Promise<string> {
    const iconType = type || this.defaultType;
    const url = `${assets}/icons/${capitalize(name)}-${iconType}.svg`;
    return fetchIcon(url);
  }

  info() {
    throw new Error("Not info available for Remix icons");
  }
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}
