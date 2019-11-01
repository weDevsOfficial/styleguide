<template>
  <div class="home">
    <h1>Dashboard</h1>

    <div id="welcome-panel" class="welcome-panel">
        <input type="hidden" id="welcomepanelnonce" name="welcomepanelnonce" value="ac7155ff35"> <a class="welcome-panel-close" href="#" aria-label="Dismiss the welcome panel">Dismiss</a>
        <div class="welcome-panel-content">
            <h2>Welcome to WordPress!</h2>
            <p class="about-description">We’ve assembled some links to get you started:</p>
            <div class="welcome-panel-column-container">
                <div class="welcome-panel-column">
                    <h3>Get Started</h3>
                    <a class="button button-primary button-hero load-customize hide-if-no-customize" href="#">Customize Your Site</a>
                    <a class="button button-primary button-hero hide-if-customize" href="#">Customize Your Site</a>
                    <p class="hide-if-no-customize">or, <a href="#">change your theme completely</a></p>
                </div>
                <div class="welcome-panel-column">
                    <h3>Next Steps</h3>
                    <ul>
                        <li><a href="#" class="welcome-icon welcome-write-blog">Write your first blog post</a></li>
                        <li><a href="#" class="welcome-icon welcome-add-page">Add an About page</a></li>
                        <li><a href="#" class="welcome-icon welcome-view-site">View your site</a></li>
                    </ul>
                </div>
                <div class="welcome-panel-column welcome-panel-last">
                    <h3>More Actions</h3>
                    <ul>
                        <li>
                            <div class="welcome-icon welcome-widgets-menus">Manage <a href="#">widgets</a> or <a href="#">menus</a></div>
                        </li>
                        <li><a href="#" class="welcome-icon welcome-comments">Turn comments on or off</a></li>
                        <li><a href="#" class="welcome-icon welcome-learn-more">Learn more about getting started</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {

  }
}
</script>
