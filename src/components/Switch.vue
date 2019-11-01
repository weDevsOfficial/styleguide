<template>
  <span class="wd-switch">
    <input type="checkbox" class="wd-switch__input" :disabled="disabled" :checked="checked" @change="trigger" :value="value">
    <label if="label">{{ label }}</label>
    <p class="description" v-if="desc">{{ desc }}</p>
  </span>
</template>

<script>
export default {

  name: 'Toggle',

  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number]
    },
    label: {
      type: String,
    },
    desc: {
      type: String
    }
  },

  data () {
    return {

    };
  },

  methods: {

    trigger(e) {
      this.$emit('input', e.target.checked, e.target.value);
    }
  }
};
</script>

<style lang="less">
.wd-switch {
  position: relative;

  label {
    font-weight: bold;
    vertical-align: top;
  }

  p.description {
    margin-left: 43px;
  }

  input.wd-switch__input {
    -moz-appearance: none;
    -webkit-appearance: none;
    -o-appearance: none;
    appearance: none;
    width: 35px;
    height: 20px;
    border-radius: 20px;
    box-shadow: inset -15px 0px 0px 0px #dcdcdc;
    border: 2px solid #dcdcdc;
    outline: none;
    transition: 0.05s;
    cursor: pointer;
    background-color: white;
    margin-right: 8px;

    &:focus {
      box-shadow: inset -15px 0px 0px 0px #dcdcdc;
      border: 2px solid #dcdcdc;
    }

    &:after {
      content: "\2715";
      font-size: 11px;
      width: 20px;
      line-height: 20px;
      position: absolute;
      left: 0;
      top: -2px;
      color: #dcdcdc;
      transition: 0.05s;
    }

    &:checked{
      box-shadow: inset 15px 0px 0px 0px #64b450;
      border: 2px solid #64b450;

      &:after {
        content: "\2713";
        left: 15px;
        color: #64b450;
      }

      &:before {
        content: '';
      }
    }
  }
}
</style>
