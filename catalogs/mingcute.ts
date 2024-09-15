import type { Catalog } from "./catalog.ts";
import { fetchIcon } from "./utils.ts";

const assets = "https://cdn.jsdelivr.net/gh/Richard9394/MingCute@2.95";

export default function () {
  return new MingCute();
}

export class MingCute implements Catalog<void> {
  name = "mingcute";

  get(name: string): Promise<string> {
    const url = `${assets}/svg/${name}.svg`;
    return fetchIcon(url);
  }

  info() {
    throw new Error("Not info available for MingCute icons");
  }
}
