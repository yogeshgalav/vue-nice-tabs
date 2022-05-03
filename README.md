# Vue Nice Tabs
This is the light weight Nav Tab component with modern UI. 
## Project setup
```
npm install vue-nice-tabs
```

## Usage
### Basic Usage
```
<template>
    <nav-tabs
    :tabs="['first','second']"
    >
        <template slot="tab-panel-first">
         first nav tab content
        </template>
        <template slot="tab-panel-second">
         second nav tab content
        </template>
    </nav-tabs>
</template>
<script>
import NavTabs from 'vue-nice-tabs'

export default {
    components:{ NavTabs}
}
</script>
```
### Customizing Header

If you want to use translation or customize header just use slot with "tab-heading-{tab_name}"

```

<template>
    <nav-tabs
    :tabs="['first','second']"
    >
        <template slot="tab-heading-first">
         {{ $t('First') }}
        </template>
        <template slot="tab-panel-first">
         first nav tab content
        </template>
    </nav-tabs>
</template>
```
### Select Intital Tab

If tab name is provided with hash in url it is selected as inital tab.
If not provided intial tab to be opened is selected with zero index in tabs array.

```

<template>
    <nav-tabs
    :tabs=['first','second','third']
    :initial-tab="second"
    >
        <--- content---->
    </nav-tabs>
</template>
```

In above Example if url is http://example.com#third,  then third tab is intially selected
Else second tab is select
Else if inital tab prop is not passed then first tab is selected.

### Props


| Props         | type      | required   | Default           |
| ------------- | --------- | ---------- | ----------------  |
| initialTab    | String    | false      | ''                |
| tabs          | Array     | true       | []                |
| disableTab    | Array     | false      | []                |
| navClass      | String    | false      | ''                |
| navItemClass  | String    | false      | ''                |

### Events

changeTab(tabName)
