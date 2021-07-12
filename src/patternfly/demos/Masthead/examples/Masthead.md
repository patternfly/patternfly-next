---
id: Masthead
beta: true
section: components
wrapperTag: div
---

## Examples
### Basic
 ```hbs isFullscreen
{{#> masthead masthead--id="masthead-basic-example"}}
  {{> masthead-toggle}}
  {{#> masthead-main}}
    {{#> masthead-brand}}
      {{> brand
        brand--attribute='style="--pf-c-brand--Width: 180px; --pf-c-brand--Width-on-md: 180px; --pf-c-brand--Width-on-2xl: 220px;"'
        brand--IsPicture="true"
        brand--img-url--base='/assets/images/logo__pf--reverse--base.png'
        brand--img-url='/assets/images/logo__pf--reverse--base.svg'
        brand--img-url-on-md='/assets/images/logo__pf--reverse-on-md.svg'}}
    {{/masthead-brand}}
  {{/masthead-main}}
  {{#> masthead-content}}
    {{#> toolbar toolbar--id=(concat masthead--id '-toolbar')}}
      {{#> toolbar-content-section}}
        {{#> toolbar-group toolbar-group--modifier="pf-m-align-right"}}
          {{#> toolbar-item}}
            {{> dropdown dropdown--id=(concat masthead--id "-header-action") dropdown-menu--modifier="pf-m-align-right" dropdown-toggle--IsPlain="true"}}
          {{/toolbar-item}}
        {{/toolbar-group}}
      {{/toolbar-content-section}}
    {{/toolbar}}
  {{/masthead-content}}
{{/masthead}}
```

### With context selector and dropdown
```hbs isFullscreen
{{#> masthead masthead--id="masthead-context-selecton-drilldown-example"}}
  {{> masthead-toggle}}
  {{#> masthead-main}}
    {{#> masthead-brand}}
      {{> brand
        brand--attribute='style="--pf-c-brand--Width: 180px; --pf-c-brand--Width-on-md: 180px; --pf-c-brand--Width-on-2xl: 220px;"'
        brand--IsPicture="true"
        brand--img-url--base='/assets/images/logo__pf--reverse--base.png'
        brand--img-url='/assets/images/logo__pf--reverse--base.svg'
        brand--img-url-on-md='/assets/images/logo__pf--reverse-on-md.svg'}}
    {{/masthead-brand}}
  {{/masthead-main}}
  {{#> masthead-content}}
    {{#> toolbar toolbar--id=(concat masthead--id '-toolbar')}}
      {{#> toolbar-content}}
        {{#> toolbar-content-section}}
          {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
            {{#> toolbar-item}}
              {{> masthead-demo--context-selector}}
            {{/toolbar-item}}
            {{#> toolbar-item toolbar-item--modifier="pf-m-hidden pf-m-visible-on-lg"}}
              {{> dropdown dropdown--modifier="pf-m-full-height" dropdown--id="dropdown-expanded" dropdown--IsExpandedqqq="true" dropdown-toggle--text="Expanded dropdown"}}
            {{/toolbar-item}}
          {{/toolbar-group}}
          {{#> toolbar-item toolbar-item--modifier="pf-m-align-right"}}
            {{> dropdown dropdown--id=(concat masthead--id "-header-action") dropdown-menu--modifier="pf-m-align-right" dropdown-toggle--IsPlain="true"}}
          {{/toolbar-item}}
        {{/toolbar-content-section}}
      {{/toolbar-content}}
    {{/toolbar}}
  {{/masthead-content}}
{{/masthead}}
```

### With toolbar, filters
```hbs isFullscreen
{{#> masthead masthead--id="masthead-toolbar-filters-example"}}
  {{> masthead-toggle}}
  {{#> masthead-main}}
    {{#> masthead-brand}}
      {{> brand
        brand--attribute='style="--pf-c-brand--Width: 180px; --pf-c-brand--Width-on-md: 180px; --pf-c-brand--Width-on-2xl: 220px;"'
        brand--IsPicture="true"
        brand--img-url--base='/assets/images/logo__pf--reverse--base.png'
        brand--img-url='/assets/images/logo__pf--reverse--base.svg'
        brand--img-url-on-md='/assets/images/logo__pf--reverse-on-md.svg'}}
    {{/masthead-brand}}
  {{/masthead-main}}
  {{#> masthead-content}}
    {{#> toolbar}}
      {{#> toolbar-content}}
        {{#> toolbar-content-section}}
          {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show pf-m-align-right"}}
            {{> toolbar-toggle toolbar-toggle--IsExpanded="true"}}
            {{> toolbar-item-search-filter button--id=(concat masthead--id '-content')}}
          {{/toolbar-group}}
          {{#> toolbar-item}}
            {{> dropdown dropdown--id=(concat masthead--id "-header-action") dropdown-menu--modifier="pf-m-align-right" dropdown-toggle--IsPlain="true"}}
          {{/toolbar-item}}
        {{/toolbar-content-section}}
        {{> toolbar-expandable-content}}
      {{/toolbar-content}}
    {{/toolbar}}
  {{/masthead-content}}
{{/masthead}}
```

### With toggle group and filters
```hbs isFullscreen
{{#> masthead masthead--id="masthead-toggle-group-filters-example"}}
  {{> masthead-toggle}}
  {{#> masthead-main}}
    {{#> masthead-brand}}
      {{> brand
        brand--attribute='style="--pf-c-brand--Width: 180px; --pf-c-brand--Width-on-md: 180px; --pf-c-brand--Width-on-2xl: 220px;"'
        brand--IsPicture="true"
        brand--img-url--base='/assets/images/logo__pf--reverse--base.png'
        brand--img-url='/assets/images/logo__pf--reverse--base.svg'
        brand--img-url-on-md='/assets/images/logo__pf--reverse-on-md.svg'}}
    {{/masthead-brand}}
  {{/masthead-main}}
  {{#> masthead-content}}
    {{#> toolbar toolbar--id=(concat masthead--id '-toolbar')}}
      {{#> toolbar-content}}
        {{#> toolbar-content-section}}
          {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show-on-lg pf-m-align-right"}}
            {{> toolbar-toggle toolbar-toggle--IsExpanded="true"}}
            {{> toolbar-item-search-filter button--id=(concat masthead--id '-content')}}
          {{/toolbar-group}}
          {{#> toolbar-item}}
            {{> dropdown dropdown--id=(concat masthead--id "-header-action") dropdown-menu--modifier="pf-m-align-right" dropdown-toggle--IsPlain="true"}}
          {{/toolbar-item}}
        {{/toolbar-content-section}}
        {{> toolbar-expandable-content}}
      {{/toolbar-content}}
    {{/toolbar}}
  {{/masthead-content}}
{{/masthead}}
```

### Advanced integration with menu options
```hbs isFullscreen
{{#> masthead-demo--page masthead-demo--page--id="masthead-advanced-with-menu-example"}}
  {{#> masthead masthead--id=(concat masthead-demo--page--id '-masthead')}}
    {{> masthead-toggle}}
    {{#> masthead-main}}
      {{#> masthead-brand}}
        {{> brand
          brand--attribute='style="--pf-c-brand--Width: 180px; --pf-c-brand--Width-on-md: 180px; --pf-c-brand--Width-on-2xl: 220px;"'
          brand--IsPicture="true"
          brand--img-url--base='/assets/images/logo__pf--reverse--base.png'
          brand--img-url='/assets/images/logo__pf--reverse--base.svg'
          brand--img-url-on-md='/assets/images/logo__pf--reverse-on-md.svg'}}
      {{/masthead-brand}}
    {{/masthead-main}}
    {{#> masthead-content}}
      {{#> toolbar toolbar--id=(concat masthead--id '-toolbar')}}
        {{#> toolbar-content}}
          {{#> toolbar-content-section}}
            {{#> toolbar-item toolbar-item--attribute='style="--pf-c-toolbar__item--MinWidth: 140px"'}}
              {{> masthead-demo--context-selector}}
            {{/toolbar-item}}
            {{#> toolbar-group toolbar-group--modifier="pf-m-icon-button-group pf-m-align-right pf-m-spacer-none pf-m-spacer-md-on-md"}}
              {{#> toolbar-item}}
                {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Notifications"'}}
                  {{#> notification-badge notification-badge--modifier=""}}
                    <i class="pf-icon-attention-bell" aria-hidden="true"></i>
                  {{/notification-badge}}
                {{/button}}
              {{/toolbar-item}}
              {{#> toolbar-group toolbar-group--modifier="pf-m-icon-button-group pf-m-hidden pf-m-visible-on-lg"}}
                {{#> toolbar-item}}
                  {{> masthead-demo--application-launcher app-launcher--id=(concat masthead-demo--page--id '-app-launcher')}}
                {{/toolbar-item}}
                {{#> toolbar-item}}
                  {{#> dropdown dropdown--id=(concat masthead--id "-settings")}}
                    {{#> dropdown-toggle dropdown-toggle--modifier="pf-m-plain" dropdown-toggle--HasNoToggleIcon="true" dropdown-toggle--attribute='aria-label="Settings"'}}
                      <i class="fas fa-cog" aria-hidden="true"></i>
                    {{/dropdown-toggle}}
                    {{#> dropdown-menu dropdown-menu--modifier="pf-m-align-right"}}
                      {{> dropdown-menu-list-item dropdown-menu-item--text="Settings"}}
                      {{> dropdown-menu-list-item dropdown-menu-item--text="Use the beta release"}}
                    {{/dropdown-menu}}
                  {{/dropdown}}
                {{/toolbar-item}}
                {{#> toolbar-item}}
                  {{#> dropdown dropdown--id=(concat masthead--id "-help")}}
                    {{#> dropdown-toggle dropdown-toggle--modifier="pf-m-plain" dropdown-toggle--HasNoToggleIcon="true" dropdown-toggle--attribute='aria-label="Help"'}}
                      <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
                    {{/dropdown-toggle}}
                    {{#> dropdown-menu dropdown-menu--modifier="pf-m-align-right"}}
                      {{> dropdown-menu-list-item dropdown-menu-item--text="Support options"}}
                      {{> dropdown-menu-list-item dropdown-menu-item--text="Open support case"}}
                      {{> dropdown-menu-list-item dropdown-menu-item--text="API documentation"}}
                    {{/dropdown-menu}}
                  {{/dropdown}}
                {{/toolbar-item}}
              {{/toolbar-group}}
              {{#> toolbar-item toolbar-item--modifier="pf-m-hidden-on-lg"}}
                {{#> dropdown dropdown--id=(concat masthead--id "-action") dropdown-menu--modifier="pf-m-align-right" dropdown-toggle--IsPlain="true"}}
                  {{#> menu-toggle menu-toggle--IsPlain="true" menu-toggle--IsExpanded="true" menu-toggle--attribute='aria-label="Actions"'}}
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                  {{/menu-toggle}}
                  {{> masthead-demo--drilldown menu--id=(concat masthead--id '-drilldown-menu')}}
                {{/dropdown}}
              {{/toolbar-item}}
            {{/toolbar-group}}
            {{#> toolbar-item toolbar-item--modifier="pf-m-hidden pf-m-visible-on-sm"}}
              {{#> dropdown dropdown--id=(concat masthead--id "-profile") dropdown--IsExpanded="true"}}
                {{#> dropdown-toggle}}
                  {{#> dropdown-toggle-image}}
                    {{> avatar avatar--attribute='src="/assets/images/img_avatar.svg" alt="Avatar image"'}}
                  {{/dropdown-toggle-image}}
                  {{#> dropdown-toggle-text}}
                    Ned Username
                  {{/dropdown-toggle-text}}
                {{/dropdown-toggle}}
                {{#> dropdown-menu dropdown-menu--type="div"}}
                  {{#> dropdown-group}}
                    {{> dropdown-menu-item dropdown-menu-item--text='<div class="pf-u-font-size-sm">Account number:</div><div>123456789</div>' dropdown-menu-item--type="div" dropdown-menu-item--modifier="pf-m-text"}}
                    {{> dropdown-menu-item dropdown-menu-item--text='<div class="pf-u-font-size-sm">Username:</div><div>mshaksho@redhat.com</div>' dropdown-menu-item--type="div" dropdown-menu-item--modifier="pf-m-text"}}
                  {{/dropdown-group}}
                  {{> divider}}
                  {{#> dropdown-group}}
                    {{#> dropdown-menu-list}}
                      {{> dropdown-menu-list-item dropdown-menu-item--text="My profile" dropdown-menu-item--type="a" dropdown-menu-item--attribute='href="#"'}}
                      {{> dropdown-menu-list-item dropdown-menu-item--text="User management" dropdown-menu-item--type="a" dropdown-menu-item--attribute='href="#"'}}
                      {{> dropdown-menu-list-item dropdown-menu-item--text="Logout" dropdown-menu-item--type="a" dropdown-menu-item--attribute='href="#"'}}
                    {{/dropdown-menu-list}}
                  {{/dropdown-group}}
                {{/dropdown-menu}}
              {{/dropdown}}
            {{/toolbar-item}}
          {{/toolbar-content-section}}
        {{/toolbar-content}}
      {{/toolbar}}
    {{/masthead-content}}
  {{/masthead}}
{{/masthead-demo--page}}
```

## Mobile examples

### With toggle group, filters, expandable content expanded (mobile)
```hbs isFullscreen
{{#> masthead masthead--id="masthead-toggle-group-filters-expanded-mobile-example"}}
  {{> masthead-toggle}}
  {{#> masthead-main}}
    {{#> masthead-brand}}
      {{> brand
        brand--attribute='style="--pf-c-brand--Width: 180px; --pf-c-brand--Width-on-md: 180px; --pf-c-brand--Width-on-2xl: 220px;"'
        brand--IsPicture="true"
        brand--img-url--base='/assets/images/logo__pf--reverse--base.png'
        brand--img-url='/assets/images/logo__pf--reverse--base.svg'
        brand--img-url-on-md='/assets/images/logo__pf--reverse-on-md.svg'}}
    {{/masthead-brand}}
  {{/masthead-main}}
  {{#> masthead-content}}
    {{#> toolbar toolbar--id=(concat masthead--id '-toolbar')}}
      {{#> toolbar-content}}
        {{#> toolbar-content-section}}
          {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show pf-m-align-right"}}
            {{> toolbar-toggle toolbar-toggle--IsExpanded="true"}}
          {{/toolbar-group}}
          {{#> toolbar-item}}
            {{> dropdown dropdown--id=(concat masthead--id "-header-action") dropdown-menu--modifier="pf-m-align-right" dropdown-toggle--IsPlain="true"}}
          {{/toolbar-item}}
        {{/toolbar-content-section}}
        {{#> toolbar-expandable-content toolbar--id=(concat masthead--id '-toolbar') toolbar-expandable-content--IsExpanded="true"}}
          {{> toolbar-item-search-filter button--id=(concat masthead--id '-expandable-content')}}
        {{/toolbar-expandable-content}}
      {{/toolbar-content}}
    {{/toolbar}}
  {{/masthead-content}}
{{/masthead}}
```
