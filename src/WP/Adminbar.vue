<template>
  <div id="wpadminbar" class="">
    <div class="quicklinks" id="wp-toolbar" role="navigation" aria-label="Toolbar" tabindex="0">
      <ul id="wp-admin-bar-root-default" class="ab-top-menu">
        <li id="wp-admin-bar-menu-toggle"><a class="ab-item" href="#" aria-expanded="false"><span class="ab-icon"></span><span
              class="screen-reader-text">Menu</span></a> </li>
        <li id="wp-admin-bar-wp-logo" class="menupop"><a class="ab-item" aria-haspopup="true" href="#"><span
              class="ab-icon"></span><span class="screen-reader-text">About WordPress</span></a>
          <div class="ab-sub-wrapper">
            <ul id="wp-admin-bar-wp-logo-default" class="ab-submenu">
              <li id="wp-admin-bar-about"><a class="ab-item" href="#">About WordPress</a>
              </li>
            </ul>
            <ul id="wp-admin-bar-wp-logo-external" class="ab-sub-secondary ab-submenu">
              <li id="wp-admin-bar-wporg"><a class="ab-item" href="#">WordPress.org</a> </li>
              <li id="wp-admin-bar-documentation"><a class="ab-item" href="#">Documentation</a>
              </li>
              <li id="wp-admin-bar-support-forums"><a class="ab-item" href="#">Support Forums</a> </li>
              <li id="wp-admin-bar-feedback"><a class="ab-item" href="#">Feedback</a>
              </li>
            </ul>
          </div>
        </li>
        <li id="wp-admin-bar-site-name" class="menupop"><a class="ab-item" aria-haspopup="true" href="#">WP
            Dev</a>
          <div class="ab-sub-wrapper">
            <ul id="wp-admin-bar-site-name-default" class="ab-submenu">
              <li id="wp-admin-bar-view-site"><a class="ab-item" href="#">Visit Site</a> </li>
            </ul>
          </div>
        </li>
        <li id="wp-admin-bar-comments"><a class="ab-item" href="#"><span class="ab-icon"></span><span
              class="ab-label awaiting-mod pending-count count-0" aria-hidden="true">0</span><span class="screen-reader-text">0
              comments awaiting moderation</span></a> </li>
        <li id="wp-admin-bar-new-content" class="menupop"><a class="ab-item" aria-haspopup="true" href="#"><span
              class="ab-icon"></span><span class="ab-label">New</span></a>
          <div class="ab-sub-wrapper">
            <ul id="wp-admin-bar-new-content-default" class="ab-submenu">
              <li id="wp-admin-bar-new-post"><a class="ab-item" href="#">Post</a> </li>
              <li id="wp-admin-bar-new-media"><a class="ab-item" href="#">Media</a>
              </li>
              <li id="wp-admin-bar-new-page"><a class="ab-item" href="#">Page</a>
              </li>
              <li id="wp-admin-bar-new-user"><a class="ab-item" href="#">User</a> </li>
            </ul>
          </div>
        </li>
      </ul>
      <ul id="wp-admin-bar-top-secondary" class="ab-top-secondary ab-top-menu">
        <li id="wp-admin-bar-my-account" class="menupop with-avatar"><a class="ab-item" aria-haspopup="true" href="http://wp.test/wp-admin/profile.php">Howdy,
            <span class="display-name">admin</span><img alt="" src="http://2.gravatar.com/avatar/8584491809f902b86fae495a5830be83?s=26&amp;d=mm&amp;r=g"
              srcset="http://2.gravatar.com/avatar/8584491809f902b86fae495a5830be83?s=52&amp;d=mm&amp;r=g 2x" class="avatar avatar-26 photo"
              height="26" width="26"></a>
          <div class="ab-sub-wrapper">
            <ul id="wp-admin-bar-user-actions" class="ab-submenu">
              <li id="wp-admin-bar-user-info"><a class="ab-item" tabindex="-1" href="http://wp.test/wp-admin/profile.php"><img
                    alt="" src="http://2.gravatar.com/avatar/8584491809f902b86fae495a5830be83?s=64&amp;d=mm&amp;r=g"
                    srcset="http://2.gravatar.com/avatar/8584491809f902b86fae495a5830be83?s=128&amp;d=mm&amp;r=g 2x"
                    class="avatar avatar-64 photo" height="64" width="64"><span class="display-name">admin</span></a>
              </li>
              <li id="wp-admin-bar-edit-profile"><a class="ab-item" href="http://wp.test/wp-admin/profile.php">Edit My
                  Profile</a> </li>
              <li id="wp-admin-bar-logout"><a class="ab-item" href="http://wp.test/wp-login.php?action=logout&amp;_wpnonce=0ecdca57ff">Log
                  Out</a> </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <a class="screen-reader-shortcut" href="http://wp.test/wp-login.php?action=logout&amp;_wpnonce=0ecdca57ff">Log Out</a>
  </div>
</template>

<script>
export default {

  name: 'Adminbar',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
