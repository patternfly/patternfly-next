---
id: Title
section: components
cssPrefix: pf-c-title
---

## Examples

### Size modifiers

```hbs
{{#> title titleType="h1" title--modifier="pf-m-4xl"}}
    4xl title
{{/title}}
{{#> title titleType="h1" title--modifier="pf-m-3xl"}}
    3xl title
{{/title}}
{{#> title titleType="h1" title--modifier="pf-m-2xl"}}
    2xl title
{{/title}}
{{#> title titleType="h1" title--modifier="pf-m-xl"}}
    xl title
{{/title}}
{{#> title titleType="h1" title--modifier="pf-m-lg"}}
    lg title
{{/title}}
{{#> title titleType="h1" title--modifier="pf-m-md"}}
    md title
{{/title}}
```

### Variations

```hbs
{{#> title titleType="h1" title--modifier="pf-m-4xl pf-m-success"}}
    Success 4xl title
{{/title}}
{{#> title titleType="h1" title--modifier="pf-m-3xl pf-m-error"}}
    Error 3xl title
{{/title}}
{{#> title titleType="h1" title--modifier="pf-m-2xl pf-m-warning"}}
    Warning 2xl title
{{/title}}
{{#> title titleType="h1" title--modifier="pf-m-xl pf-m-info"}}
    Info xl title
{{/title}}
```

## Documentation

### Overview

The title component styles font-size, colour, font-weight, and line-height to titles.

The content component defines margin on headers and allows to change the colour. To regain the same spacing use, spacer utility classes:

| Title | Margin top    | Margin bottom |
| ----- | ------------- | ------------- |
| 4xl   | `.pf-u-mt-lg` | `.pf-u-mb-sm` |
| 3xl   | `.pf-u-mt-lg` | `.pf-u-mb-sm` |
| 2xl   | `.pf-u-mt-lg` | `.pf-u-mb-sm` |
| xl    | `.pf-u-mt-lg` | `.pf-u-mb-sm` |
| lg    | `.pf-u-mt-lg` | `.pf-u-mb-sm` |
| md    | `.pf-u-mt-lg` | `.pf-u-mb-sm` |

To change the color of the header add a modifier: `.pf-m-success`, `.pf-m-error`, `.pf-m-warning`, or `.pf-m-info`.

### Usage

| Class           | Applied       | Outcome                                                 |
| --------------- | ------------- | ------------------------------------------------------- |
| `.pf-c-title`   | `*`           | Initiates a title. Always use it with a modifier class. |
| `.pf-m-4xl`     | `.pf-c-title` | Modifies for 4xl size                                   |
| `.pf-m-3xl`     | `.pf-c-title` | Modifies for 3xl size                                   |
| `.pf-m-2xl`     | `.pf-c-title` | Modifies for 2xl size                                   |
| `.pf-m-xl`      | `.pf-c-title` | Modifies for xl size                                    |
| `.pf-m-lg`      | `.pf-c-title` | Modifies for lg size                                    |
| `.pf-m-md`      | `.pf-c-title` | Modifies for md size                                    |
| `.pf-m-success` | `.pf-c-title` | Modifies for success colour                             |
| `.pf-m-error`   | `.pf-c-title` | Modifies for error colour                               |
| `.pf-m-warning` | `.pf-c-title` | Modifies for warning colour                             |
| `.pf-m-info`    | `.pf-c-title` | Modifies for info                                       |
