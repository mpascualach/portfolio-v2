<template>
  <div>
    <section class="hero is-small is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">
            Projects
          </h1>
        </div> 
      </div>
    </section>
    <section>
      <div class="container is-fluid projects-list">
        <div class="columns is-multiline" v-if="projects">
          <div class="column is-one-third" v-for="project in projects" v-bind:key="project">
            <post-card v-bind="project"></post-card>
          </div>
        </div>
        <div v-else>
          <h1 class="notice">Under construction</h1>  
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  // import ProjectsService from '@/services/ProjectsService'
  import PostCard from '@/components/PostCard'

  import * as mock from '@/assets/test.json'

  export default {
    name: 'projects',
    components: {
      PostCard
    },
    data() {
      return {
        airtableResponse: []
      }
    },
    mounted: function () {
      let self = this;
      async function getProjects() {
        try {
          // const response = await ProjectsService.getProjects();
          const response = await mock;
          self.airtableResponse = response.default;
          return mock;
          
        } catch(err){
          console.log(err);
        }
      }    
      getProjects();
    },
    computed: {
      projects() {
        let self = this
        let projectList = []

        for (let i = 0; i < self.airtableResponse.length; i++) {
          if (self.airtableResponse[i].fields.Published) {
            let project = {
              // title: self.airtableResponse[i].fields.Title,
              // date: self.airtableResponse[i].fields["Date Published"],
              // snippet: self.airtableResponse[i].fields.Image[0].url,
              // images: self.airtableResponse,
              // slug: self.airtableResponse[i].fields.slug
              title: self.airtableResponse[i].title,
              date: self.airtableResponse[i].date,
              snippet: self.airtableResponse[i].image,
              slug: self.airtableResponse.slug
            }
            projectList.push(project);
          }
        }
        return projectList
      }
    }
  };

</script>

<style>
  .projects-list {
    margin-top: 5%;
  }
</style>