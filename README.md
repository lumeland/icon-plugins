# icons

A simple library to get icons from different collections in Lume.

## Usage

### [SimpleIcon](https://simpleicons.org/)

```ts
import lume from "lume/mod.ts";
import simpleIcons from "lume_plugin_icons/simpleicons.ts";

const site = lume();

site.use(simpleIcons());

export site;
```

In your templates:

```
{{ "facebook" |> simpleicons }} # SVG code of the icon
{{ "facebook" |> simpleicons("hex") }} # Returns icon info (hex color in this example)
```

### [Phosphor](https://phosphoricons.com/)

```ts
import lume from "lume/mod.ts";
import phosphor from "lume_plugin_icons/phosphor.ts";

const site = lume();

site.use(phosphor());

export site;
```

In your templates:

```
{{ "acorn" |> phosphor }} # SVG code of the icon
{{ "acorn" |> phosphor("pascal_name") }} # Returns icon info (pascal_name in this example)
```
