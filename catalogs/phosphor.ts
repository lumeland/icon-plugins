import { icons as pi } from "npm:@phosphor-icons/core@2.1.1";
import type { Catalog } from "./catalog.ts";

const assets = "https://unpkg.com/@phosphor-icons/core@2.1.1/assets/";

export type Type = "bold" | "duotone" | "fill" | "light" | "regular" | "thin";

export type PhosphorIcon = {
  name: string;
  pascal_name: string;
  categories: string[];
  figma_category: string;
  tags: string[];
  codepoint: number;
  published_in: number;
  updated_in: number;
};

export interface Options {
  defaultType: Type;
}

export const defaults: Options = {
  defaultType: "regular",
};

const icons = pi as unknown as PhosphorIcon[];

export default function (options: Options = defaults) {
  return new Phosphor(options);
}

export class Phosphor implements Catalog<PhosphorIcon> {
  name = "phosphor";
  defaultType: Type;

  constructor(options: Options = defaults) {
    this.defaultType = options.defaultType;
  }

  get icons(): string[] {
    return icons.map((icon) => icon.name);
  }

  get(name: string, type?: Type): Promise<string> {
    const info = this.info(name);
    const iconType = type || this.defaultType;
    const suffix = iconType === "regular" ? "" : `-${iconType}`;
    const url = `${assets}${iconType}/${info.name}${suffix}.svg`;

    return fetchIcon(url);
  }

  info(name: string): PhosphorIcon {
    const icon = icons.find((icon) => icon.name === name);

    if (!icon) {
      throw new Error(`Icon "${name}" not found in Phosphor catalog`);
    }

    return icon;
  }
}

const cache = new Map<string, Promise<string>>();

function fetchIcon(url: string): Promise<string> {
  if (cache.has(url)) {
    return cache.get(url)!;
  }

  const promise = fetch(url).then((res) => res.text());
  cache.set(url, promise);
  return promise;
}
