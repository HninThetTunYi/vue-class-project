<template>
    <div class="course-list-pg">     

      <div class="course-list-div mb-5">

        <div class="container d-flex justify-content-between py-3">

          <h2>Available Courses</h2>
          <router-link to="/">  <button class="btn btn-primary"> Back </button>
          </router-link>

      </div>
    

    <div class="container">



      <p v-if="loading">Loading ...</p>

      <p v-if="!loading && courses.length === 0"> No Course to show </p>
    

      <ul v-if="!loading && courses.length>0">       

        <li v-for="course in courses" :key="course.id">
            
            <!-- Use router-link to navigate to course detail page -->
          <p>{{ course.title }}</p>  
          <router-link :to="'/course/' + course.id">View</router-link>
        </li>
      </ul>

      </div>


    </div>

  </div>
  </template>
  
  <script>

export default {

  data() {
    return {
      courses: [],
      loading: false,
    };
  },
  mounted() {
    this.fetchCourses();
  },
  methods: {
    async fetchCourses() {
      this.loading = true;
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        this.courses = await response.json();
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    }
  }
};
  </script>

<style scoped>

.course-list-div {
  background-color: rgb(225, 225, 225);
  padding: 2em 0;
}

.course-list-div ul {
  margin-top: 2em 0;
  background-color: rgb(236, 180, 110);
  border-radius: 5px;
  padding: 30px;
  
}

.course-list-div ul li {
  padding: 5px 0;
  margin: 5px 0;
  border-bottom:  1px solid #d4d4d4;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.course-list-div ul li p {
 text-transform: capitalize;
 font-family: "Medium";
 font-size: 18px;
}

.course-list-div ul li a {
 color: #444;
 text-decoration: none;
 background: #444;
 padding: 5px 15px;
 border-radius: 50px;
 margin-bottom: 3px;
 color: aqua;
}

</style>
  