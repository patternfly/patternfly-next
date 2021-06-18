---
id: 'Banner'
section: components
cssPrefix: pf-c-banner
---

## Examples

### Basic

```hbs
{{#> banner}}
  Default banner
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-info"}}
  Info banner
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-danger"}}
  Danger banner
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-success"}}
  Success banner
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-warning"}}
  Warning banner
{{/banner}}
```

### With Link

```hbs
{{#> banner banner-link--IsLink="true"}}
  Default banner with {{#> banner-link }} link {{/banner-link}}
{{/banner}}
```

## Documentation

Add a modifier class to the default banner to change the presentation: `.pf-m-info`, `.pf-m-danger`, `.pf-m-success`, or `.pf-m-warning`.

### Accessibility

| Attribute      | Applied to           | Outcome                                                                               |
| -------------- | -------------------- | ------------------------------------------------------------------------------------- |
| `tabindex="0"` | `a.pf-c-banner-link` | Inserts the link into the tab order of the page so that it is focusable. **Required** |

### Usage

| Class               | Applied to     | Outcome                                                   |
| ------------------- | -------------- | --------------------------------------------------------- |
| `.pf-c-banner`      | `<div>`        | Initiates a banner. **Required**                          |
| `.pf-m-info`        | `.pf-c-banner` | Modifies banner for info styles.                          |
| `.pf-m-danger`      | `.pf-c-banner` | Modifies banner for danger styles.                        |
| `.pf-m-success`     | `.pf-c-banner` | Modifies banner for success styles.                       |
| `.pf-m-warning`     | `.pf-c-banner` | Modifies banner for warning styles.                       |
| `.pf-m-sticky`      | `.pf-c-banner` | Modifies banner to be sticky to the top of its container. |
| `.pf-c-banner-link` | `<a>`          | Initiates a simple link in the banner.                    |
