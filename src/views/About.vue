<template>
  <div class="wrapper">
    <div class="hero is-cover is-relative isfullheight-with-navbar is-primary" style="height: 100%">
      <h1 class="title is-1">About me</h1>
      <div class="about-content">
        <div class="about-image">
          <img src="../assets/about-profile-pic.jpeg"> 
        </div>
        <div class="about-text">
          <h3>I was only an English teacher for a year.</h3>
          <h3>It was a thing I enjoyed greatly while I was in a classroom <br>
          interacting with students, but outside, I felt unsatisfied.</h3>
          <h3>I decided to enrol in an Ironhack web development bootcamp course</h3>

          <h3>Since then, I've been working as a full-stack developer primarily on front-end tasks <br>
          with Angular and a bit of Node.</h3>
          <h3>Currently I'm teaching myself UX too. Stay tuned on that front.</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'about',
}

</script>

<style>

.about-content {
  position: absolute;
  text-align: left;
  left: 20%;
  top: 15%;
  height: 60%;
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}

.about-image {
  height: 500px;
  width: 350px;
}

h3 {
  line-height: 40px;
}

</style>