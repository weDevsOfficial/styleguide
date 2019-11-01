<template>
  <div id="wpwrap">
    <AdminMenu>
      <router-link to="/" tag="li" exact><a>Overview</a></router-link>
      <router-link to="/buttons" tag="li" exact><a>Buttons</a></router-link>
      <router-link to="/table" tag="li" exact><a>Table</a></router-link>
      <router-link to="/popover" tag="li" exact><a>Popover</a></router-link>
      <router-link to="/switch" tag="li" exact><a>Switch</a></router-link>
    </AdminMenu>

    <div id="wpcontent">

      <Adminbar></Adminbar>

      <div id="wpbody">
        <div id="wpbody-content">
          <div class="wrap">
            <router-view/>
          </div>
          <div class="clear"></div>
        </div>

        <div class="clear"></div>
      </div>

      <div class="clear"></div>
    </div><!-- #wpcontent -->

    <Footer></Footer>

  </div>
</template>

<script>
// @ is an alias to /src
import Adminbar from '@/WP/Adminbar.vue'
import AdminMenu from '@/WP/AdminMenuMain.vue'
import Footer from '@/WP/Footer.vue'

export default {
  name: 'home',
  components: {
    Adminbar,
    AdminMenu,
    Footer,
  }
}
</script>

<style lang="less">

</style>
