<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link>
          <img src="assets/name-mark.jpg" width="112" height="28">
        </router-link>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" :class="{ 'is-active': showNav }" @click="showNav = !showNav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a> 
      </div> 
      
      <div id="navbarBasicExample" class="navbar-menu" :clas="{ 'is-active': showNav }">
        <div class="navbar-start">

        </div>

        <div class="navbar-end">
          <router-link to="/" class="navbar-item">
            Home
          </router-link>
          <router-link to="/about" class="navbar-item">
            About
          </router-link>
          <router-link to="/projects" class="navbar-item">
            Projects
          </router-link>
          <router-link to="/contact" class="navbar-item">
            Contact
          </router-link>
        </div>
      </div>
    </nav>

    <router-view/>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Built by Miguel Pascual Acheson with Vue.js, Bulma and Airtable.
        </p>
        <a href="https://www.freepik.com/free-photos-vectors/background">Background by freepik - www.freepik.com</a>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      showNav: false
    }
  }
}

</script>

<style type="text/css">
#app {
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 168px;
  background: url('./assets/400010-PCV6N5-703.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

nav {
  background: transparent!important;
}

a.navbar-item {
  color: white;
}

footer {
  padding: 10px!important;
  background-color: black!important;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.hero {
  background: transparent!important;
  text-align: center;
}

</style>

<style lang="sass">
@import "~bulma/bulma.sass"
</style>
