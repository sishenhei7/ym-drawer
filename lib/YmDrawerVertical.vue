<template>
  <div>
    <ym-overlay
      :show="docked && open"
      :zIndex="this.zDepth - 1"
      @close="close"
      @Click="handleOverlayClick"
    ></ym-overlay>
    <div class="ym-drawer ym-drawer--vertical" :class="classObject" :style="styleObject">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import YmOverlay from './YmOverlay';

export default {
  name: 'YmDrawerVertical',
  components: {
    YmOverlay,
  },
  props: {
    open: {
      type: Boolean,
      required: true,
    },
    top: Boolean,
    docked: {
      type: Boolean,
      default: true,
    },
    width: [Number, String],
    zDepth: {
      type: Number,
      default: 100,
    },
    overlayClick: Function,
  },
  watch: {
    open(val) {
      if (val) {
        this.disableBodyScroll();
      } else {
        this.enableBodyScroll();
      }
    },
  },
  computed: {
    classObject() {
      return {
        'is-open': this.open,
        'is-top': this.top,
      };
    },
    styleObject() {
      let width = this.width ? String(this.width) : '';
      if (width && width.indexOf('%') === -1 && width.indexOf('px') === -1) width += 'px';
      return {
        width,
        'z-index': this.zDepth,
      };
    },
  },
  methods: {
    disableBodyScroll() {
      const body = document.getElementsByTagName('body')[0];
      body.classList.add('notScroll');
      disableBodyScroll(body, {
        reserveScrollBarGap: true,
        allowTouchMove: (el) => {
          if (this.$el && this.$el.contains(el)) {
            return true;
          }
          return false;
        },
      });
    },
    enableBodyScroll() {
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('notScroll');
      enableBodyScroll(body, {
        reserveScrollBarGap: true,
      });
      clearAllBodyScrollLocks();
    },
    close() {
      this.$emit('update:open', false);
    },
    handleOverlayClick() {
      if (this.overlayClick) this.overlayClick();
    },
  },
};
</script>
<style lang="scss">
.ym-drawer--vertical {
  width: 100%;
  height: 75%;
  position: fixed;
  visibility: hidden;
  left: 0;
  right: 0;
  bottom: 0;
  transition-property: transform, visibility;
  transition-duration: 0.45s;
  transform: translate3d(0, 100%, 0);
  border-radius: 0;
  z-index: 100;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  // &::-webkit-scrollbar {
  //   display: none !important;
  //   width: 0 !important;
  //   height: 0 !important;
  //   -webkit-appearance: none;
  //   opacity: 0 !important;
  // }
  &.is-top {
    left: 0;
    bottom: auto;
    transform: translate3d(0, -100%, 0);
  }
  &.is-open {
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }
}
.notScroll {
  position:fixed;
  height:100%;
  width:100%;
}
</style>
