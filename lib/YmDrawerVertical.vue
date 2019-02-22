<template>
  <div class="ym-drawer--vertical" :class="classObject" :style="styleObject">
    <div class="ym-drawer-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'YmDrawerVertical',
  props: {
    open: {
      type: Boolean,
      required: true,
    },
    zDepth: {
      type: Number,
      default: 100,
    },
    absolute: Boolean,
  },
  data() {
    return {
      height: 0,
    };
  },
  watch: {
    open(val) {
      if (val) {
        this.height = this.getHeight();
      } else {
        this.height = 0;
      }
    },
  },
  computed: {
    classObject() {
      return {
        'is-open': this.open,
        'is-absolute': this.absolute,
      };
    },
    styleObject() {
      return {
        'height': `${this.height}px`,
        'z-index': this.zDepth,
      };
    },
  },
  methods: {
    getHeight() {
      return this.$el.children[0].offsetHeight;
    },
  },
}
</script>
<style lang="scss">
  .ym-drawer--vertical {
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    z-index: 100;
    transition-property: height, visibility;
    transition-duration: 0.45s;

    &.is-open {
      height: auto;
      visibility: visible;
    }

    &.is-absolute {
      position: absolute;
    }
  }

  .ym-drawer-wrapper {
    width: 100%;
  }
</style>