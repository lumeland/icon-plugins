# Lume icon plugins

Plugins to work with different icon collections in Lume.

## Usage

### [SimpleIcon](https://simpleicons.org/)

```ts
import lume from "lume/mod.ts";
import simpleIcons from "lume_icon_plugins/simpleicons.ts";

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
import phosphor from "lume_icon_plugins/phosphor.ts";

const site = lume();

site.use(phosphor());

export site;
```

In your templates:

```
{{ "acorn" |> phosphor }} # SVG code of the icon
{{ "acorn" |> phosphor("duotone") }} # Returns the icon with duotone style
```

### [Heroicons](https://heroicons.com/)

```ts
import lume from "lume/mod.ts";
import heroicons from "lume_icon_plugins/heroicons.ts";

const site = lume();

site.use(heroicons());

export site;
```

In your templates:

```
{{ "face-smile" |> heroicons }} # SVG code of the icon
{{ "face-smile" |> heroicons("outline") }} # Returns the icon with outline style
```

### [Material icons](https://fonts.google.com/icons)

```ts
import lume from "lume/mod.ts";
import material from "lume_icon_plugins/material.ts";

const site = lume();

site.use(material());

export site;
```

In your templates:

```
{{ "home" |> material }} # SVG code of the icon
{{ "home" |> heroicons("rounded") }} # Returns the icon with rounded style
```
