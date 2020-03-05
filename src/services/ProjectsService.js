import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://api.airtable.com/v0/appAhZeT6Y5nVXjNq/Projects'
})

Axios.defaults.headers.common = {'Authorization': `Bearer ` + process.env.VUE_APP_AIRTABLEKEY}

export default {
  getProjects() {
    return Axios.get()
  },
  getProject(slug) {
    return Axios.get("?filterByFormula={Slug}='" + slug + "'")
  }
}