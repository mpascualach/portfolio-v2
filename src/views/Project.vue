<template>
  <div>
    <section class="hero is-medium is-primary is-bold">
      <div>
        <div class="container">
          <h1 class="title is-2">
            {{project.title}}
          </h1>
          <h2 class="subtitle is-4">
            {{project.snippet}}
          </h2>
        </div>
      </div> 
    </section> 
    <section class="section">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-two-thirds">
            <vue-simple-markdown :source='project.body'></vue-simple-markdown>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'project',
}

</script>