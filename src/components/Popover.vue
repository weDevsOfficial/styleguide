<template>
  <span :class="['wd-popover']">
    <span @click.prevent="toggleDropdown">
      <slot name="trigger">
        <button class="button" ref="dropdown">Dropdown</button>
      </slot>
    </span>
    <div
      :class="['wd-popover__wrap', dropdownClasses]"
      ref="menu"
      v-on-clickaway="clickedOutside"
    >
      <div class="wd-popover__arrow" x-arrow></div>
      <div class="wd-popover__content">
        <slot name="content"></slot>
      </div>
    </div>
  </span>
</template>

<script>
import Popper from 'popper.js'
import { mixin as clickaway } from 'vue-clickaway'

export default {

  name: 'Popover',
  mixins: [ clickaway ],
  props: {
    dropdownClasses: {
      type: String,
      default: ''
    },
    wrapperClasses: {
      type: Array,
      default: function() { return []; }
    },
  },

  data () {
    return {
      visible: false
    }
  },

  created() {
    // Create non-reactive property
    this._popper = null
  },

  beforeDestroy() {
    this.visible = false
    this.removePopper()
  },

  methods: {
    toggleDropdown() {
      this.visible = !this.visible

      return this.visible ? this.showMenu() : this.hideMenu()
    },

    clickedOutside(e) {
      if ( this.elementContains(this.$el, e.target ) ) {
        return
      }

      if (!this.visible) {
        return
      }

      this.hideMenu()
    },

    showMenu() {
      this.createPopper()
    },

    hideMenu() {
      this.$emit('hidden')
      this.removePopper()
      this.visible = false
    },

    createPopper () {
      this.removePopper()
      this._popper = new Popper(this.$el, this.$refs.menu)
    },

    removePopper () {
      if (this._popper) {
        // Ensure popper event listeners are removed cleanly
        this._popper.destroy()
      }
      this._popper = null
    },

    elementContains(elm, otherElm) {
      if (typeof elm.contains === 'function') {
        return elm.contains(otherElm);
      }

      return false;
    }
  }
}
</script>

<style lang="less">
.wd-popover {
  position: relative;
  display: inline-block;

  .wd-popover__wrap {
    position: absolute;
    margin-top: 10px;
    display: block;
    z-index: 9995;
    min-width: 150px;
    transform: translate3d(-9900px, 0px, 0px);

    &.hide {
      display: none;
    }

    .wd-popover__arrow {
      position: absolute;
      top: -8px;
      left: 45%;

      &:before,
      &:after {
        position: absolute;
        display: block;
        content: "";
        border-color: transparent;
        border-style: solid;
        border-width: 0 .5rem .5rem .5rem;
      }

      &:before {
        top: 0;
        // border-bottom-color: rgba(0,0,0,.25);
        border-bottom-color: #e2e4e7;
      }

      &:after {
        top: 1px;
        border-bottom-color: #fff;
      }
    }

    .wd-popover__content {
      box-shadow: 0 3px 30px rgba(25,30,35,.1);
      border: 1px solid #e2e4e7;
      background: #fff;
    }
  }
}
</style>
