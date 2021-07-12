---
id: 'Menu toggle'
beta: true
section: components
cssPrefix: pf-c-menu-toggle
---

import './MenuToggle.css'

## Examples
### Collapsed
```hbs
{{#> menu-toggle}}
  {{#> menu-toggle-text}}
    Collapsed
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}
```

### Expanded
```hbs
{{#> menu-toggle menu-toggle--IsExpanded="true"}}
  {{#> menu-toggle-text}}
    Expanded
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}
```

### Disabled
```hbs
{{#> menu-toggle menu-toggle--IsDisabled="true"}}
  {{#> menu-toggle-text}}
    Disabled
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}
```

### Icon
```hbs
{{#> menu-toggle}}
  {{#> menu-toggle-icon}}
    <i class="fas fa-cog" aria-hidden="true"></i>
  {{/menu-toggle-icon}}
  {{#> menu-toggle-text}}
    Icon
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}
```

### Count
```hbs
{{#> menu-toggle}}
  {{#> menu-toggle-text}}
    Count
  {{/menu-toggle-text}}
  {{#> menu-toggle-count}}
    {{#> badge badge--modifier="pf-m-unread"}}
      4 selected
    {{/badge}}
  {{/menu-toggle-count}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}
```

### Primary
```hbs
{{#> menu-toggle menu-toggle--IsPrimary="true"}}
  {{#> menu-toggle-text}}
    Collapsed
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--IsPrimary="true"}}
  {{#> menu-toggle-icon}}
    <i class="fas fa-cog" aria-hidden="true"></i>
  {{/menu-toggle-icon}}
  {{#> menu-toggle-text}}
    Icon
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--IsPrimary="true" menu-toggle--IsExpanded="true"}}
  {{#> menu-toggle-text}}
    Expanded
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--IsPrimary="true" menu-toggle--IsDisabled="true"}}
  {{#> menu-toggle-text}}
    Disabled
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}
```

### Plain
```hbs
{{#> menu-toggle menu-toggle--IsPlain="true" menu-toggle--attribute='aria-label="Actions"'}}
  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--IsPlain="true" menu-toggle--IsExpanded="true" menu-toggle--attribute='aria-label="Actions"'}}
  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
{{/menu-toggle}}

&nbsp;

{{#> menu-toggle menu-toggle--IsPlain="true" menu-toggle--IsDisabled="true" menu-toggle--attribute='aria-label="Actions"'}}
  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
{{/menu-toggle}}
```

### With image and text
```hbs
{{#> menu-toggle}}
  {{> menu-toggle-image}}
  {{#> menu-toggle-text}}
    Ned Username
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}
```

### Full height
```hbs
{{#> menu-toggle menu-toggle--modifier="pf-m-full-height"}}
  {{#> menu-toggle-text}}
    Full height
  {{/menu-toggle-text}}
  {{#> menu-toggle-controls}}
    {{> menu-toggle-toggle-icon}}
  {{/menu-toggle-controls}}
{{/menu-toggle}}
```

### Accessibility
| Class | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="true"` | `.pf-c-menu-toggle` | Indicates that the menu toggle component is in the expanded state. |
| `aria-expanded="false"` | `.pf-c-menu-toggle` | Indicates that the menu toggle component is in the collapsed state. |
| `aria-label="Descriptive text"` | `.pf-c-menu-toggle.pf-m-plain` | Gives the plain menu toggle component an accessible label. |
| `disabled` | `.pf-c-menu-toggle` | Indicates that the menu toggle component is disabled. |

### Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-c-menu-toggle` | `<button>` | Initiates the menu toggle component. |
| `.pf-c-menu-toggle__icon` | `<span>` | Defines the menu toggle component icon. |
| `.pf-c-menu-toggle__image` | `<span>` | Defines the menu toggle component image. |
| `.pf-c-menu-toggle__text` | `<span>` | Defines the menu toggle component text. |
| `.pf-c-menu-toggle__count` | `<span>` | Defines the menu toggle component count. |
| `.pf-c-menu-toggle__controls` | `<span>` | Defines the menu toggle component controls. |
| `.pf-c-menu-toggle__toggle-icon` | `<span>` | Defines the menu toggle component toggle/arrow icon. |
| `.pf-m-primary` | `.pf-c-menu-toggle` | Modifies the menu toggle component for the primary variation. |
| `.pf-m-plain` | `.pf-c-menu-toggle` | Modifies the menu toggle component for the plain variation. |
| `.pf-m-expanded` | `.pf-c-menu-toggle` | Modifies the menu toggle component for the expanded state. |
| `.pf-m-full-height` | `.pf-c-menu-toggle` | Modifies the menu toggle component to full height of parent. |
