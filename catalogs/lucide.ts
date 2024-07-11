import type { Catalog } from "./catalog.ts";
import { fetchIcon } from "./utils.ts";

const assets = "https://cdn.jsdelivr.net/npm/lucide-static@0.407.0";

export default function () {
  return new Lucide();
}

export class Lucide implements Catalog<void> {
  name = "lucide";

  get(name: string): Promise<string> {
    const url = `${assets}/icons/${name}.svg`;

    return fetchIcon(url);
  }

  info() {
    throw new Error("Not info available for Material icons.");
  }
}
