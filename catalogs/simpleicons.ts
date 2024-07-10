import * as si from "npm:simple-icons@13.1.0";
import type { SimpleIcon } from "npm:simple-icons@13.1.0";
import type { Catalog } from "./catalog.ts";

const icons = Object.values(si) as SimpleIcon[];

export default function () {
  return new SimpleIcons();
}

export type { SimpleIcon };

export class SimpleIcons implements Catalog<SimpleIcon> {
  name = "simpleicons";

  get(name: string): string {
    const icon = icons.find((icon) => icon.slug === name);

    if (!icon) {
      throw new Error(`Icon "${name}" not found in SimpleIcons catalog`);
    }

    return icon.svg;
  }

  info(name: string): SimpleIcon {
    const icon = icons.find((icon) => icon.slug === name);

    if (!icon) {
      throw new Error(`Icon "${name}" not found in SimpleIcons catalog`);
    }

    return icon;
  }
}
