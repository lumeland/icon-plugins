const cache = new Map<string, Promise<string>>();

export function fetchIcon(url: string): Promise<string> {
  if (cache.has(url)) {
    return cache.get(url)!;
  }

  const promise = fetch(url).then((res) => res.text());
  cache.set(url, promise);
  return promise;
}
