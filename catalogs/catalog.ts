// deno-lint-ignore-file no-explicit-any
export interface Catalog<T = any> {
  /** The name of the catalog */
  name: string;

  /** Get the SVG source of an icon by name */
  get(name: string, options?: any): string | Promise<string>;

  /** Get info from a icon */
  info(name: string): T | Promise<T>;
}
