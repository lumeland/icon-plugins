import type { Catalog } from "./catalog.ts";
import { fetchIcon } from "./utils.ts";

const assets = "https://cdn.jsdelivr.net/npm/remixicon@4.3.0";

export default function () {
  return new Remix();
}

export class Remix implements Catalog<void> {
  name = "remix";

  get(name: string): Promise<string> {
    const url = `${assets}/icons/${capitalize(name)}.svg`;
    return fetchIcon(url);
  }

  info() {
    throw new Error("Not info available for Remix icons");
  }
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}
