## ym-svg-sprite

<a href="https://www.npmjs.com/package/ym-drawer">
  <img src="https://img.shields.io/npm/v/ym-drawer.svg" alt="NPM">
</a>
<a href="https://github.com/sishenhei7/ym-drawer/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="LICENSE">
</a>

`ym-drawer` is used to build mobile navbar or other commponents。

Largely refered to [muse-ui](https://github.com/museui/muse-ui)。

## Getting Started

### install

To begin with, just install ym-drawer:

```
npm i ym-drawer -s
```

### examples

You can use YmDrawerHorizontal as a vue component anywhere like this:

```
<template>
  <div class="home">
    <ym-drawer-horizontal
      :open.sync="isDrawerOpen"
      :zDepth="6666">
      This is ym-drawer-horizontal!!!
    </ym-drawer-horizontal>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      isDrawerOpen: false,
    };
  },
  methods: {
    handleClick() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
  },
}
</script>

<style lang="scss">
.ym-drawer--horizontal {
  background-color: #333;
}
</style>
```

### Attributes

| param             | explain                          | type              | required    | Default value    |
| ----------------- | -------------------------------- | ----------------- | ----------- | ---------------- |
| open              | whether is open                  | Boolean           | yes         |                  |
| right             | whether position is right        | Boolean           |             |                  |
| docked            | whether is decked                | Boolean           |             | true             |
| width             | width value                      | [Number, String]  |             |                  |
| zDepth            | z-index value                    | Number            |             | 100              |
| overlayClick      | callback when clicking overlay   | Function          |             |                  |


## ToDo

- [ ] complete YmDrawerVertical component.
