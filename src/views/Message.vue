<template>
  <div class="wd-flash-message">
    <div class="wd-flash-message-notice">
      <div class="wd-flash-message-notice-content">
        <span class="dashicons dashicons-yes-alt"></span>
        <span>This is a prompt message for success, and it will disappear in 10 seconds</span>
      </div>
    </div>
    <div class="wd-flash-message-notice">
      <div class="wd-flash-message-notice-content">
        <span class="dashicons dashicons-yes-alt"></span>
        <span>This is a prompt message for success, and it will disappear in 10 seconds</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Message',

  data () {
    return {

    }
  }
}
</script>

<style lang="css">
.wd-flash-message {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0,0,0,.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: "tnum";
  position: fixed;
  top: 16px;
  left: 0;
  z-index: 99999;
  width: 100%;
  pointer-events: none;
}

.wd-flash-message-notice {
  padding: 8px;
  text-align: center;
}

.wd-flash-message-notice:first-child {
  margin-top: 18px;
}

.wd-flash-message-notice-content {
  display: inline-block;
  padding: 10px 16px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
  pointer-events: all;
}

.wd-flash-message-notice-content .dashicons {
  color: #52c41a;
  margin-right: 5px;
}
</style>
