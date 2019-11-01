<template>
  <div class="popover-page">
    <h1>Popover</h1>

    <p>&nbsp;</p>

    <Popover>
      <template slot="trigger">
        <button class="icon-button">
          <svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-ellipsis" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M5 10c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm12-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
        </button>
      </template>
      <template slot="content">What are you looking at?</template>
    </Popover>

    &nbsp;

    <Popover>
      <template slot="trigger">
        <button class="icon-button-alt">
          <svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-ellipsis" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M5 10c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm12-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
        </button>
      </template>
      <template slot="content">
        <ul class="popover-menu">
          <li><a href="#">Reply</a></li>
          <li><a href="#">Forward</a></li>
          <li><a href="#">Print</a></li>
        </ul>
      </template>
    </Popover>
  </div>
</template>

<script>
import Popover from '@/components/Popover.vue'

export default {

  name: 'PopoverPage',
  components: {
    Popover,
  },

  data () {
    return {
      show: false
    }
  },

  methods: {
    onHide() {
      // console.log('hidden')
    }
  }
}
</script>

<style lang="less">
.icon-button, .icon-button-alt {
  display: flex;
  align-items: center;
  padding: 8px;
  margin: 0;
  border: none;
  background: 0 0;
  color: #555d66;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  padding: 8px 4px;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #191e23;
    box-shadow: inset 0 0 0 1px #e2e4e7, inset 0 0 0 2px #fff, 0 1px 1px rgba(25,30,35,.2);
  }
}
.icon-button svg {
  margin-top: 3px;
}

.icon-button-alt svg {
  margin-top: 3px;
  transform: rotate(90deg);
}

ul.popover-menu {
  margin: 5px 0;

  li {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    display: block;
    padding: 8px 10px;
    color: #444;

    &:hover {
      background: #f6f6f6;
    }
  }
}
</style>
