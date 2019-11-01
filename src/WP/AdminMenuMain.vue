<template>
  <div id="adminmenumain">
    <a href="#wpbody-content" class="screen-reader-shortcut">Skip to main content</a>
    <a href="#wp-toolbar" class="screen-reader-shortcut">Skip to toolbar</a>
    <div id="adminmenuback"></div>

    <div id="adminmenuwrap">
      <ul id="adminmenu">
        <li class="wp-first-item wp-has-submenu wp-not-current-submenu menu-top menu-top-first menu-icon-dashboard menu-top-last"
          id="menu-dashboard">
          <a href="#" class="wp-first-item wp-has-submenu wp-not-current-submenu menu-top menu-top-first menu-icon-dashboard menu-top-last"
            aria-haspopup="true">
            <div class="wp-menu-arrow"><div></div></div>
            <div class="wp-menu-image dashicons-before dashicons-dashboard"><br></div>
            <div class="wp-menu-name">Dashboard</div>
          </a>
        </li>
        <li class="wp-not-current-submenu wp-menu-separator" aria-hidden="true">
          <div class="separator"></div>
        </li>
        <li class="wp-has-submenu wp-has-current-submenu wp-menu-open menu-top menu-icon-post open-if-no-js menu-top-first" id="menu-posts">
          <a href="#" class="wp-has-submenu wp-has-current-submenu wp-menu-open menu-top menu-icon-post open-if-no-js menu-top-first"
            aria-haspopup="false">
            <div class="wp-menu-arrow"><div></div></div>
            <div class="wp-menu-image dashicons-before dashicons-admin-plugins"><br></div>
            <div class="wp-menu-name">Components</div>
          </a>
          <ul class="wp-submenu wp-submenu-wrap">
              <slot></slot>
          </ul>
        </li>
        <li class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-tools" id="menu-tools">
          <a href="#" class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-tools" aria-haspopup="true">
            <div class="wp-menu-arrow"><div></div></div>
            <div class="wp-menu-image dashicons-before dashicons-admin-tools"><br></div>
            <div class="wp-menu-name">Tools</div>
          </a>
        </li>
        <li class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-settings menu-top-last" id="menu-settings">
          <a href="#" class="wp-has-submenu wp-not-current-submenu menu-top menu-icon-settings menu-top-last">
            <div class="wp-menu-arrow"><div></div></div>
            <div class="wp-menu-image dashicons-before dashicons-admin-settings"><br></div>
            <div class="wp-menu-name">Settings</div>
          </a>
        </li>
        <li id="collapse-menu" class="hide-if-no-js">
          <button type="button" id="collapse-button">
            <span class="collapse-button-icon" aria-hidden="true"></span>
            <span class="collapse-button-label">Collapse menu</span>
          </button>
        </li>
      </ul>
    </div>
  </div><!-- #adminmenumain -->
</template>

<script>
export default {

  name: 'AdminMenuMain',

  data () {
    return {

    }
  }
}
</script>

<style lang="css">
</style>
