<template>
  <div class="wrapper">
    <div class="hero is-cover is-relative isfullheight-with-navbar is-primary" style="height: 100%">
      <div class="">
        <div class="container intro-text">
          <h1 class="title is-1">Hi! I'm Miguel</h1>
          <h2 class="subtitle is-4 text">I'm a full-stack developer with considerable experience in user interface design
            and tweaking as well as backend capabilities and I am currently working on fine-tuning my UX and UI design skills.</h2>
          <div class="avatar"></div>
          <h2 class="subtitle is-4 text">If you'd like to learn about some of my projects, don't hesitate to visit the <a>Projects page</a> <br>
            And if you'd like to hear about my origin story, <a>click here</a>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
}

</script>

<style>

.wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
}

.avatar {
  width: 400px;
  height: 300px;
  border-radius: 50px;
  background: url('../assets/profile-pic.jpeg');
  background-size: cover;
  background-position: center;
  margin: 20px;
  margin: 0 auto;
  margin-bottom: 30px;
}

.intro-text {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: center;
  left: 25%;
  top: 10%;
}

</style> 