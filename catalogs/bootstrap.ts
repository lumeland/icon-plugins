import type { Catalog } from "./catalog.ts";
import { fetchIcon } from "./utils.ts";

const assets = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3";

export default function () {
  return new Bootstrap();
}

export class Bootstrap implements Catalog<void> {
  name = "bootstrap";

  get(name: string): Promise<string> {
    const url = `${assets}/icons/${name}.svg`;
    return fetchIcon(url);
  }

  info() {
    throw new Error("Not info available for Remix icons");
  }
}
