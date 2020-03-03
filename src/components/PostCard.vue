<template>
  <div class="post-card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{title}}</p>
          <p class="subtitle is-6">{{date}}</p>
        </div>
      </div>
      <div class="card">
        <figure class="image is-square project-img">
          <img :src="image" alt="Placeholder">
        </figure>
      </div>
      <!-- <div class="content">
        <p>{{snippet}}</p>
        <router-link :to="'/project/'+slug" class="button is-fullwidth">View Project</router-link>
      </div> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: "PostCard",
    props: {
      title: String,
      date: String,
      snippet: String,
      image: String,
      slug: String
    }
  }
</script>

<style>
.project-img {
  margin-top: 15px;
}
</style> 
