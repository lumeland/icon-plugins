import { assertEquals } from "jsr:@std/assert@1.0.5/equals";
import phosphor from "./catalogs/phosphor.ts";
import simpleIcons from "./catalogs/simpleicons.ts";
import heroIcons from "./catalogs/heroicons.ts";
import material from "./catalogs/material.ts";
import materialSymbols from "./catalogs/material_symbols.ts";
import lucide from "./catalogs/lucide.ts";
import tabler from "./catalogs/tabler.ts";
import mingcute from "./catalogs/mingcute.ts";

Deno.test("Phosphor", async () => {
  const catalog = phosphor();

  assertEquals(
    await catalog.get("acorn"),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M232,104a56.06,56.06,0,0,0-56-56H136a24,24,0,0,1,24-24,8,8,0,0,0,0-16,40,40,0,0,0-40,40H80a56.06,56.06,0,0,0-56,56,16,16,0,0,0,8,13.83V128c0,35.53,33.12,62.12,59.74,83.49C103.66,221.07,120,234.18,120,240a8,8,0,0,0,16,0c0-5.82,16.34-18.93,28.26-28.51C190.88,190.12,224,163.53,224,128V117.83A16,16,0,0,0,232,104ZM80,64h96a40.06,40.06,0,0,1,40,40H40A40,40,0,0,1,80,64Zm74.25,135c-10.62,8.52-20,16-26.25,23.37-6.25-7.32-15.63-14.85-26.25-23.37C77.8,179.79,48,155.86,48,128v-8H208v8C208,155.86,178.2,179.79,154.25,199Z"/></svg>`,
  );
  assertEquals(
    catalog.info("acorn").pascal_name,
    "Acorn",
  );
  assertEquals(
    await catalog.get("acorn", "duotone"),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M216,112v16c0,53-88,88-88,112,0-24-88-59-88-112V112Z" opacity="0.2"/><path d="M232,104a56.06,56.06,0,0,0-56-56H136a24,24,0,0,1,24-24,8,8,0,0,0,0-16,40,40,0,0,0-40,40H80a56.06,56.06,0,0,0-56,56,16,16,0,0,0,8,13.83V128c0,35.53,33.12,62.12,59.74,83.49C103.66,221.07,120,234.18,120,240a8,8,0,0,0,16,0c0-5.82,16.34-18.93,28.26-28.51C190.88,190.12,224,163.53,224,128V117.83A16,16,0,0,0,232,104ZM80,64h96a40.06,40.06,0,0,1,40,40H40A40,40,0,0,1,80,64Zm74.25,135c-10.62,8.52-20,16-26.25,23.37-6.25-7.32-15.63-14.85-26.25-23.37C77.8,179.79,48,155.86,48,128v-8H208v8C208,155.86,178.2,179.79,154.25,199Z"/></svg>`,
  );
});

Deno.test("Simple Icons", () => {
  const catalog = simpleIcons();

  assertEquals(
    catalog.get("facebook"),
    `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>`,
  );
  assertEquals(
    catalog.info("facebook").hex,
    "0866FF",
  );
});

Deno.test("HeroIcons", async () => {
  const catalog = heroIcons();

  assertEquals(
    await catalog.get("face-smile"),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z" clip-rule="evenodd"/>
</svg>
`,
  );
});

Deno.test("Material", async () => {
  const catalog = material();

  assertEquals(
    await catalog.get("10k"),
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 10.5h1.5v3H10zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 15H6v-4.5H4.5V9h3v6zm5.5-1c0 .55-.45 1-1 1H9.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H12c.55 0 1 .45 1 1v4zm6.5 1h-1.75L16 12.75V15h-1.5V9H16v2.25L17.75 9h1.75l-2.25 3 2.25 3z"/></svg>`,
  );
});

Deno.test("Material symbols", async () => {
  const catalog = materialSymbols();

  assertEquals(
    await catalog.get("10k"),
    `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M286-360h50v-240H180v50h106v190Zm120 0h104q14.03 0 23.51-9.49Q543-378.98 543-393v-173q0-14.45-9.49-24.22Q524.03-600 510-600H406q-14.02 0-23.51 9.78Q373-580.45 373-566v173q0 14.02 9.49 23.51Q391.98-360 406-360Zm17-50v-140h70v140h-70Zm157 50h50v-90l84 90h66L668-480l112-120h-66l-84 90v-90h-50v240ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"/></svg>`,
  );
});

Deno.test("Lucide", async () => {
  const catalog = lucide();

  assertEquals(
    await catalog.get("alarm-clock"),
    `<!-- @license lucide-static v0.441.0 - ISC -->
<svg
  class="lucide lucide-alarm-clock"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="13" r="8" />
  <path d="M12 9v4l2 2" />
  <path d="M5 3 2 6" />
  <path d="m22 6-3-3" />
  <path d="M6.38 18.7 4 21" />
  <path d="M17.64 18.67 20 21" />
</svg>
`,
  );
});

Deno.test("Tabler", async () => {
  const catalog = tabler();

  assertEquals(
    await catalog.get("alien"),
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="currentColor"
  class="icon icon-tabler icons-tabler-filled icon-tabler-alien"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12.004 2c4.942 0 8.288 2.503 8.85 6.444a12.884 12.884 0 0 1 -2.163 9.308a11.794 11.794 0 0 1 -3.51 3.356c-1.982 1.19 -4.376 1.19 -6.373 -.008a11.763 11.763 0 0 1 -3.489 -3.34a12.808 12.808 0 0 1 -2.171 -9.306c.564 -3.95 3.91 -6.454 8.856 -6.454zm1.913 14.6a1 1 0 0 0 -1.317 -.517l-.146 .055a1.5 1.5 0 0 1 -1.054 -.055l-.11 -.04a1 1 0 0 0 -.69 1.874a3.5 3.5 0 0 0 2.8 0a1 1 0 0 0 .517 -1.317zm-5.304 -6.39a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -1.497l-2 -2zm8.094 .083a1 1 0 0 0 -1.414 0l-2 2l-.083 .094a1 1 0 0 0 1.497 1.32l2 -2l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
</svg>`,
  );
});

Deno.test("MingCute", async () => {
  const catalog = mingcute();

  assertEquals(
    await catalog.get("arrow/arrows_left"),
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01-.184-.092Z"/><path fill="#09244B" d="M12.06 5.94a1.5 1.5 0 0 1 0 2.12L8.122 12l3.94 3.94a1.5 1.5 0 0 1-2.122 2.12l-5-5a1.5 1.5 0 0 1 0-2.12l5-5a1.5 1.5 0 0 1 2.122 0Zm6 0a1.5 1.5 0 0 1 0 2.12L14.122 12l3.94 3.94a1.5 1.5 0 0 1-2.122 2.12l-5-5a1.5 1.5 0 0 1 0-2.12l5-5a1.5 1.5 0 0 1 2.122 0Z"/></g></svg>`,
  );
});
