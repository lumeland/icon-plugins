import type { Catalog } from "./catalog.ts";
import { fetchIcon } from "./utils.ts";

const assets = "https://cdn.jsdelivr.net/npm/@tabler/icons@3.16.0";

export type Type = "filled" | "outline";

const paths: Record<Type, string> = {
  filled: "/icons/filled",
  outline: "/icons/outline",
};

export interface Options {
  defaultType: Type;
}

export const defaults: Options = {
  defaultType: "filled",
};

export default function (options: Options = defaults) {
  return new Tabler(options);
}

export class Tabler implements Catalog<void> {
  name = "tabler";
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
    throw new Error("Not info available for Tabler icons");
  }
}
