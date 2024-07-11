const cache = new Map<string, Promise<string>>();

export function fetchIcon(url: string): Promise<string> {
  if (cache.has(url)) {
    return cache.get(url)!;
  }

  const promise = fetch(url).then((res) => {
    if (res.ok) {
      return res.text();
    }

    console.error(`Failed to fetch icon from ${url}`);
    return "";
  });
  cache.set(url, promise);
  return promise;
}
