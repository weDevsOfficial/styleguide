<template>
  <div class="switch-page">
    <h1>Switch / Toggles</h1>

    <div class="sep">
      <h3>Default</h3>
      <toggle />
    </div>

    <div class="sep">
      <h3>Checked by Default</h3>
      <toggle :checked="true" />
    </div>

    <div class="sep">
      <h3>Disabled</h3>
      <toggle :disabled="true" />
    </div>

    <div class="sep">
      <h3>With Label and Description</h3>
      <toggle :checked="true" label="Enable Signup" desc="This is some description about this option" />
    </div>

  </div>
</template>

<script>
import Toggle from '@/components/Switch.vue';

export default {

  name: 'SwitchPage',
  components: {
    Toggle
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.sep {
  margin: 1rem 0 2rem 0;
}
</style>
