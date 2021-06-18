---
id: 'Calendar month'
beta: true
section: components
cssPrefix: pf-c-calendar-month
---

## Examples
### Date selected
```hbs
{{#> calendar-month calendar-month--id="calendar-month-date-selected" calendar-month--month="October" calendar-month--year="2020"}}
  {{#> calendar-month-header}}
    {{#> calendar-month-header-nav-control calendar-month-header-nav-control--modifier="pf-m-prev-month"}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Previous month"'}}
        <i class="fas fa-angle-left" aria-hidden="true"></i>
      {{/button}}
    {{/calendar-month-header-nav-control}}
    {{> calendar-month-header-month}}
    {{#> calendar-month-header-year}}
      {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="' calendar-month--year '" id="' calendar-month--id '-year" aria-label="Select year"')}}
    {{/calendar-month-header-year}}
    {{#> calendar-month-header-nav-control calendar-month-header-nav-control--modifier="pf-m-next-month"}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Next month"'}}
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      {{/button}}
    {{/calendar-month-header-nav-control}}
  {{/calendar-month-header}}
  {{#> calendar-month-calendar}}
    {{#> calendar-month-days}}
      {{> calendar-month-days-row}}
    {{/calendar-month-days}}
    {{#> calendar-month-dates}}
      {{#> calendar-month-dates-row}}
        {{> calendar-month-dates-cell calendar-month-date--date="29" calendar-month-dates-cell--IsAdjacentMonth="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="30" calendar-month-dates-cell--IsAdjacentMonth="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="1"}}
        {{> calendar-month-dates-cell calendar-month-date--date="2"}}
        {{> calendar-month-dates-cell calendar-month-date--date="3"}}
        {{> calendar-month-dates-cell calendar-month-date--date="4"}}
        {{> calendar-month-dates-cell calendar-month-date--date="5"}}
      {{/calendar-month-dates-row}}
      {{#> calendar-month-dates-row}}
        {{> calendar-month-dates-cell calendar-month-date--date="6"}}
        {{> calendar-month-dates-cell calendar-month-date--date="7"}}
        {{> calendar-month-dates-cell calendar-month-date--date="8"}}
        {{> calendar-month-dates-cell calendar-month-date--date="9" calendar-month-dates-cell--IsCurrent="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="10"}}
        {{> calendar-month-dates-cell calendar-month-date--date="11"}}
        {{> calendar-month-dates-cell calendar-month-date--date="12"}}
      {{/calendar-month-dates-row}}
      {{#> calendar-month-dates-row}}
        {{> calendar-month-dates-cell calendar-month-date--date="13"}}
        {{> calendar-month-dates-cell calendar-month-date--date="14"}}
        {{> calendar-month-dates-cell calendar-month-date--date="15"}}
        {{> calendar-month-dates-cell calendar-month-date--date="16"}}
        {{> calendar-month-dates-cell calendar-month-date--date="17"}}
        {{> calendar-month-dates-cell calendar-month-date--date="18"}}
        {{> calendar-month-dates-cell calendar-month-date--date="19"}}
      {{/calendar-month-dates-row}}
      {{#> calendar-month-dates-row}}
        {{> calendar-month-dates-cell calendar-month-date--date="20"}}
        {{> calendar-month-dates-cell calendar-month-date--date="21" calendar-month-dates-cell--IsSelected="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="22"}}
        {{> calendar-month-dates-cell calendar-month-date--date="23"}}
        {{> calendar-month-dates-cell calendar-month-date--date="24"}}
        {{> calendar-month-dates-cell calendar-month-date--date="25"}}
        {{> calendar-month-dates-cell calendar-month-date--date="26"}}
      {{/calendar-month-dates-row}}
      {{#> calendar-month-dates-row}}
        {{> calendar-month-dates-cell calendar-month-date--date="27"}}
        {{> calendar-month-dates-cell calendar-month-date--date="28"}}
        {{> calendar-month-dates-cell calendar-month-date--date="29"}}
        {{> calendar-month-dates-cell calendar-month-date--date="30"}}
        {{> calendar-month-dates-cell calendar-month-date--date="31"}}
        {{> calendar-month-dates-cell calendar-month-date--date="1" calendar-month-dates-cell--IsAdjacentMonth="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="2" calendar-month-dates-cell--IsAdjacentMonth="true"}}
      {{/calendar-month-dates-row}}
    {{/calendar-month-dates}}
  {{/calendar-month-calendar}}
{{/calendar-month}}
```

### Range start date selected, end date hovered
```hbs
{{#> calendar-month calendar-month--id="calendar-month-range-start-date-selected" calendar-month--month="October" calendar-month--year="2020"}}
  {{#> calendar-month-header}}
    {{#> calendar-month-header-nav-control calendar-month-header-nav-control--modifier="pf-m-prev-month"}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Previous month"'}}
        <i class="fas fa-angle-left" aria-hidden="true"></i>
      {{/button}}
    {{/calendar-month-header-nav-control}}
    {{#> calendar-month-header-month}}
      {{#> select select-typeahead--Placeholder="Month" id=(concat calendar-month--id '-month-select')}}{{calendar-month--month}}{{/select}}
    {{/calendar-month-header-month}}
    {{#> calendar-month-header-year}}
      {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="' calendar-month--year '" id="' calendar-month--id '-year" aria-label="Select year"')}}
    {{/calendar-month-header-year}}
    {{#> calendar-month-header-nav-control calendar-month-header-nav-control--modifier="pf-m-next-month"}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Next month"'}}
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      {{/button}}
    {{/calendar-month-header-nav-control}}
  {{/calendar-month-header}}
  {{#> calendar-month-calendar}}
    {{#> calendar-month-days}}
      {{> calendar-month-days-row}}
    {{/calendar-month-days}}
    {{#> calendar-month-dates}}
      {{#> calendar-month-dates-row}}
        {{> calendar-month-dates-cell calendar-month-date--date="29" calendar-month-dates-cell--IsAdjacentMonth="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="30" calendar-month-dates-cell--IsAdjacentMonth="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="1"}}
        {{> calendar-month-dates-cell calendar-month-date--date="2"}}
        {{> calendar-month-dates-cell calendar-month-date--date="3"}}
        {{> calendar-month-dates-cell calendar-month-date--date="4"}}
        {{> calendar-month-dates-cell calendar-month-date--date="5"}}
      {{/calendar-month-dates-row}}
      {{#> calendar-month-dates-row}}
        {{> calendar-month-dates-cell calendar-month-date--date="6"}}
        {{> calendar-month-dates-cell calendar-month-date--date="7"}}
        {{> calendar-month-dates-cell calendar-month-date--date="8"}}
        {{> calendar-month-dates-cell calendar-month-date--date="9" calendar-month-dates-cell--IsCurrent="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="10"}}
        {{> calendar-month-dates-cell calendar-month-date--date="11" calendar-month-dates-cell--IsSelected="true" calendar-month-dates-cell--IsStartRange="true" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="12" calendar-month-dates-cell--IsInRange="true"}}
      {{/calendar-month-dates-row}}
      {{#> calendar-month-dates-row}}
        {{> calendar-month-dates-cell calendar-month-date--date="13" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="14" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="15" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="16" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="17" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="18" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="19" calendar-month-dates-cell--IsInRange="true"}}
      {{/calendar-month-dates-row}}
      {{#> calendar-month-dates-row}}
        {{> calendar-month-dates-cell calendar-month-date--date="20" calendar-month-dates-cell--IsInRange="true" calendar-month-dates-cell--IsDisabled="true" }}
        {{> calendar-month-dates-cell calendar-month-date--date="21" calendar-month-dates-cell--IsInRange="true" calendar-month-dates-cell--IsDisabled="true" }}
        {{> calendar-month-dates-cell calendar-month-date--date="22" calendar-month-dates-cell--IsInRange="true" calendar-month-dates-cell--IsDisabled="true" }}
        {{> calendar-month-dates-cell calendar-month-date--date="23" calendar-month-dates-cell--IsInRange="true" calendar-month-dates-cell--IsDisabled="true" }}
        {{> calendar-month-dates-cell calendar-month-date--date="24" calendar-month-dates-cell--IsInRange="true" calendar-month-dates-cell--IsDisabled="true" }}
        {{> calendar-month-dates-cell calendar-month-date--date="25" calendar-month-dates-cell--IsInRange="true" calendar-month-dates-cell--IsDisabled="true" }}
        {{> calendar-month-dates-cell calendar-month-date--date="26" calendar-month-dates-cell--IsInRange="true" calendar-month-dates-cell--IsDisabled="true" }}
      {{/calendar-month-dates-row}}
      {{#> calendar-month-dates-row}}
        {{> calendar-month-dates-cell calendar-month-date--date="27" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="28" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="29" calendar-month-dates-cell--IsSelected="true" calendar-month-dates-cell--IsEndRange="true" calendar-month-dates-cell--IsInRange="true" calendar-month-date--modifier="pf-m-hover"}}
        {{> calendar-month-dates-cell calendar-month-date--date="30"}}
        {{> calendar-month-dates-cell calendar-month-date--date="31"}}
        {{> calendar-month-dates-cell calendar-month-date--date="1" calendar-month-dates-cell--IsAdjacentMonth="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="2" calendar-month-dates-cell--IsAdjacentMonth="true"}}
      {{/calendar-month-dates-row}}
    {{/calendar-month-dates}}
  {{/calendar-month-calendar}}
{{/calendar-month}}
```

### Range end date selected, start date focused
```hbs
{{#> calendar-month calendar-month--id="calendar-month-range-end-date-selected" calendar-month--month="October" calendar-month--year="2020"}}
  {{#> calendar-month-header}}
    {{#> calendar-month-header-nav-control calendar-month-header-nav-control--modifier="pf-m-prev-month"}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Previous month"'}}
        <i class="fas fa-angle-left" aria-hidden="true"></i>
      {{/button}}
    {{/calendar-month-header-nav-control}}
    {{#> calendar-month-header-month}}
      {{#> select select-typeahead--Placeholder="Month" id=(concat calendar-month--id '-month-select')}}{{calendar-month--month}}{{/select}}
    {{/calendar-month-header-month}}
    {{#> calendar-month-header-year}}
      {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="' calendar-month--year '" id="' calendar-month--id '-year" aria-label="Select year"')}}
    {{/calendar-month-header-year}}
    {{#> calendar-month-header-nav-control calendar-month-header-nav-control--modifier="pf-m-next-month"}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Next month"'}}
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      {{/button}}
    {{/calendar-month-header-nav-control}}
  {{/calendar-month-header}}
  {{#> calendar-month-calendar}}
    {{#> calendar-month-days}}
      {{> calendar-month-days-row}}
    {{/calendar-month-days}}
    {{#> calendar-month-dates}}
      {{#> calendar-month-dates-row}}
        {{> calendar-month-dates-cell calendar-month-date--date="29" calendar-month-dates-cell--IsAdjacentMonth="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="30" calendar-month-dates-cell--IsAdjacentMonth="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="1"}}
        {{> calendar-month-dates-cell calendar-month-date--date="2"}}
        {{> calendar-month-dates-cell calendar-month-date--date="3"}}
        {{> calendar-month-dates-cell calendar-month-date--date="4"}}
        {{> calendar-month-dates-cell calendar-month-date--date="5"}}
      {{/calendar-month-dates-row}}
      {{#> calendar-month-dates-row}}
        {{> calendar-month-dates-cell calendar-month-date--date="6"}}
        {{> calendar-month-dates-cell calendar-month-date--date="7"}}
        {{> calendar-month-dates-cell calendar-month-date--date="8"}}
        {{> calendar-month-dates-cell calendar-month-date--date="9" calendar-month-dates-cell--IsCurrent="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="10"}}
        {{> calendar-month-dates-cell calendar-month-date--date="11" calendar-month-dates-cell--IsStartRange="true" calendar-month-dates-cell--IsSelected="true" calendar-month-dates-cell--IsInRange="true" calendar-month-date--modifier="pf-m-focus"}}
        {{> calendar-month-dates-cell calendar-month-date--date="12" calendar-month-dates-cell--IsInRange="true"}}
      {{/calendar-month-dates-row}}
      {{#> calendar-month-dates-row}}
        {{> calendar-month-dates-cell calendar-month-date--date="13" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="14" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="15" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="16" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="17" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="18" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="19" calendar-month-dates-cell--IsInRange="true"}}
      {{/calendar-month-dates-row}}
      {{#> calendar-month-dates-row}}
        {{> calendar-month-dates-cell calendar-month-date--date="20" calendar-month-dates-cell--IsInRange="true" calendar-month-dates-cell--IsDisabled="true" }}
        {{> calendar-month-dates-cell calendar-month-date--date="21" calendar-month-dates-cell--IsInRange="true" calendar-month-dates-cell--IsDisabled="true" }}
        {{> calendar-month-dates-cell calendar-month-date--date="22" calendar-month-dates-cell--IsInRange="true" calendar-month-dates-cell--IsDisabled="true" }}
        {{> calendar-month-dates-cell calendar-month-date--date="23" calendar-month-dates-cell--IsInRange="true" calendar-month-dates-cell--IsDisabled="true" }}
        {{> calendar-month-dates-cell calendar-month-date--date="24" calendar-month-dates-cell--IsInRange="true" calendar-month-dates-cell--IsDisabled="true" }}
        {{> calendar-month-dates-cell calendar-month-date--date="25" calendar-month-dates-cell--IsInRange="true" calendar-month-dates-cell--IsDisabled="true" }}
        {{> calendar-month-dates-cell calendar-month-date--date="26" calendar-month-dates-cell--IsInRange="true" calendar-month-dates-cell--IsDisabled="true" }}
      {{/calendar-month-dates-row}}
      {{#> calendar-month-dates-row}}
        {{> calendar-month-dates-cell calendar-month-date--date="27" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="28" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="29" calendar-month-dates-cell--IsSelected="true" calendar-month-dates-cell--IsEndRange="true" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="30"}}
        {{> calendar-month-dates-cell calendar-month-date--date="31"}}
        {{> calendar-month-dates-cell calendar-month-date--date="1" calendar-month-dates-cell--IsAdjacentMonth="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="2" calendar-month-dates-cell--IsAdjacentMonth="true"}}
      {{/calendar-month-dates-row}}
    {{/calendar-month-dates}}
  {{/calendar-month-calendar}}
{{/calendar-month}}
```

### Range start and end dates selected
```hbs
{{#> calendar-month calendar-month--id="calendar-month-range-start-and-end-dates-selected" calendar-month--month="October" calendar-month--year="2020"}}
  {{#> calendar-month-header}}
    {{#> calendar-month-header-nav-control calendar-month-header-nav-control--modifier="pf-m-prev-month"}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Previous month"'}}
        <i class="fas fa-angle-left" aria-hidden="true"></i>
      {{/button}}
    {{/calendar-month-header-nav-control}}
    {{#> calendar-month-header-month}}
      {{#> select select-typeahead--Placeholder="Month" id=(concat calendar-month--id '-month-select')}}{{calendar-month--month}}{{/select}}
    {{/calendar-month-header-month}}
    {{#> calendar-month-header-year}}
      {{> form-control controlType="input" input="true" form-control--attribute=(concat 'type="number" value="' calendar-month--year '" id="' calendar-month--id '-year" aria-label="Select year"')}}
    {{/calendar-month-header-year}}
    {{#> calendar-month-header-nav-control calendar-month-header-nav-control--modifier="pf-m-next-month"}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Next month"'}}
        <i class="fas fa-angle-right" aria-hidden="true"></i>
      {{/button}}
    {{/calendar-month-header-nav-control}}
  {{/calendar-month-header}}
  {{#> calendar-month-calendar}}
    {{#> calendar-month-days}}
      {{> calendar-month-days-row}}
    {{/calendar-month-days}}
    {{#> calendar-month-dates}}
      {{#> calendar-month-dates-row}}
        {{> calendar-month-dates-cell calendar-month-date--date="29" calendar-month-dates-cell--IsAdjacentMonth="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="30" calendar-month-dates-cell--IsAdjacentMonth="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="1"}}
        {{> calendar-month-dates-cell calendar-month-date--date="2"}}
        {{> calendar-month-dates-cell calendar-month-date--date="3"}}
        {{> calendar-month-dates-cell calendar-month-date--date="4"}}
        {{> calendar-month-dates-cell calendar-month-date--date="5"}}
      {{/calendar-month-dates-row}}
      {{#> calendar-month-dates-row}}
        {{> calendar-month-dates-cell calendar-month-date--date="6"}}
        {{> calendar-month-dates-cell calendar-month-date--date="7"}}
        {{> calendar-month-dates-cell calendar-month-date--date="8"}}
        {{> calendar-month-dates-cell calendar-month-date--date="9" calendar-month-dates-cell--IsCurrent="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="10"}}
        {{> calendar-month-dates-cell calendar-month-date--date="11" calendar-month-dates-cell--IsSelected="true" calendar-month-dates-cell--IsStartRange="true" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="12" calendar-month-dates-cell--IsInRange="true"}}
      {{/calendar-month-dates-row}}
      {{#> calendar-month-dates-row}}
        {{> calendar-month-dates-cell calendar-month-date--date="13" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="14" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="15" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="16" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="17" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="18" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="19" calendar-month-dates-cell--IsInRange="true"}}
      {{/calendar-month-dates-row}}
      {{#> calendar-month-dates-row}}
        {{> calendar-month-dates-cell calendar-month-date--date="20" calendar-month-dates-cell--IsInRange="true" calendar-month-dates-cell--IsDisabled="true" }}
        {{> calendar-month-dates-cell calendar-month-date--date="21" calendar-month-dates-cell--IsInRange="true" calendar-month-dates-cell--IsDisabled="true" }}
        {{> calendar-month-dates-cell calendar-month-date--date="22" calendar-month-dates-cell--IsInRange="true" calendar-month-dates-cell--IsDisabled="true" }}
        {{> calendar-month-dates-cell calendar-month-date--date="23" calendar-month-dates-cell--IsInRange="true" calendar-month-dates-cell--IsDisabled="true" }}
        {{> calendar-month-dates-cell calendar-month-date--date="24" calendar-month-dates-cell--IsInRange="true" calendar-month-dates-cell--IsDisabled="true" }}
        {{> calendar-month-dates-cell calendar-month-date--date="25" calendar-month-dates-cell--IsInRange="true" calendar-month-dates-cell--IsDisabled="true" }}
        {{> calendar-month-dates-cell calendar-month-date--date="26" calendar-month-dates-cell--IsInRange="true" calendar-month-dates-cell--IsDisabled="true" }}
      {{/calendar-month-dates-row}}
      {{#> calendar-month-dates-row}}
        {{> calendar-month-dates-cell calendar-month-date--date="27" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="28" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="29" calendar-month-dates-cell--IsSelected="true" calendar-month-dates-cell--IsEndRange="true" calendar-month-dates-cell--IsInRange="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="30"}}
        {{> calendar-month-dates-cell calendar-month-date--date="31"}}
        {{> calendar-month-dates-cell calendar-month-date--date="1" calendar-month-dates-cell--IsAdjacentMonth="true"}}
        {{> calendar-month-dates-cell calendar-month-date--date="2" calendar-month-dates-cell--IsAdjacentMonth="true"}}
      {{/calendar-month-dates-row}}
    {{/calendar-month-dates}}
  {{/calendar-month-calendar}}
{{/calendar-month}}
```

## Documentation
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-hidden="true"` | `.pf-c-calendar-month__header-nav-control > button > [icon]` | Hides the nav control icon from assistive technologies. **Required** |
| `aria-hidden="true"` | `.pf-c-calendar-month__day > span` | Hides the visual day of the month label from assistive technologies. **Required** |
| `.pf-screen-reader` | `.pf-c-calendar-month__day > span` | Hides the full day of the month text visually. **Required** |
| `aria-label="[Prev/Next] month"` | `.pf-c-calendar-month__header-nav-control` | Provides an accessible label for the nav controls. **Required** |
| `disabled` | `.pf-c-calendar-month__date` | Indicates that a date is selected. **Required when the parent is `.pf-c-calendar-month__dates-cell.pf-m-disabled`** |
| `aria-label="[date] [month] [year]"` | `.pf-c-calendar-month__date` | Provides an accessible label for the date button. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-calendar-month` | `<div>` | Initiates the calendar month component. **Required** |
| `.pf-c-calendar-month__header` | `<div>` | Initiates the calendar month header. **Required** |
| `.pf-c-calendar-month__header-nav-control` | `<div>` | Initiates a nav control for navigating by month. **Required** |
| `.pf-c-calendar-month__header-month` | `<div>` | Initiates the month select. **Required** |
| `.pf-c-calendar-month__header-year` | `<div>` | Initiates the year input. **Required** |
| `.pf-c-calendar-month__calendar` | `<table>` | Initiates the calendar. **Required** |
| `.pf-c-calendar-month__days` | `<thead>` | Initiates the calendar days section. **Required** |
| `.pf-c-calendar-month__days-row` | `<tr>` | Initiates the calendar days row. **Required** |
| `.pf-c-calendar-month__day` | `<th>` | Initiates a calendar day. **Required** |
| `.pf-c-calendar-month__dates` | `<tbody>` | Initiates the calendar dates section. **Required** |
| `.pf-c-calendar-month__dates-row` | `<tr>` | Initiates a calendar dates row. **Required** |
| `.pf-c-calendar-month__dates-cell` | `<td>` | Initiates a calendar date cell. **Required** |
| `.pf-c-calendar-month__date` | `<button>` | Initiates a calendar date. **Required** |
| `.pf-m-prev-month` | `.pf-c-calendar-month__header-nav-control` | Indicates a nav control is the previous month. **Required** |
| `.pf-m-next-month` | `.pf-c-calendar-month__header-nav-control` | Indicates a nav control is the next month. **Required** |
| `.pf-m-current` | `.pf-c-calendar-month__dates-cell` | Indicates a date is the current day. **Required** |
| `.pf-m-selected` | `.pf-c-calendar-month__dates-cell` | Indicates a date is selected. |
| `.pf-m-start-range` | `.pf-c-calendar-month__dates-cell` | Indicates a date is the start of a range. |
| `.pf-m-in-range` | `.pf-c-calendar-month__dates-cell` | Indicates a date is in a range. |
| `.pf-m-end-range` | `.pf-c-calendar-month__dates-cell` | Indicates a date is the end of a range. |
| `.pf-m-adjacent-month` | `.pf-c-calendar-month__dates-cell` | Indicates a date is in an adjacent month. |
| `.pf-m-disabled` | `.pf-c-calendar-month__dates-cell` | Indicates a date is disabled and unavailable. |
