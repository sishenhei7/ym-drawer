<template>
  <transition name="ym-fade-transition">
    <div
      v-if="show"
      class='ym-overlay'
      :style="styleObject"
      @click='handleClick'
      @touchmove.prevent
    ></div>
  </transition>
</template>
<script>
export default {
  name: 'YmOverlay',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    zIndex: Number,
    onClick: Function,
  },
  computed: {
    styleObject() {
      return {
        'z-index': this.zIndex ? this.zIndex : '',
      };
    },
  },
  methods: {
    handleClick() {
      if (this.onClick) this.onClick();
      this.$emit('close');
    },
  },
};
</script>
<style lang="scss" scoped>
.ym-overlay {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.4;
  background-color: #000;
  z-index: 10;
}

.ym-fade-transition-enter-active,
.ym-fade-transition-leave-active {
  transition: opacity .45s cubic-bezier(0.23, 1, 0.32, 1);
}

.ym-fade-transition-enter,
.ym-fade-transition-leave-active {
  opacity: 0 !important;
}
</style>
