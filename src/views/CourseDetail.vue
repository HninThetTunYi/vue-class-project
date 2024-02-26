<template> 

<div class="breadcrumb-div">
  <nav aria-label="breadcrumb" class="container">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item">
          <router-link to="/CourseList">Back to Courses</router-link>
        </li>
      </ol>
    </nav>

</div>

     

<div class="course-detail"> 

      <div class="container">
        <h2 class="course-title">{{ course.title }}</h2>
        <p>{{ course.body }}</p>
        <div class="d-flex justify-end">
          
        </div>
      </div>
     
    </div>

    <CategoryCard> </CategoryCard>
    
  </template>
  
  <script>
  import CategoryCard from '../views/CategoryCard.vue';

  export default {
    components: {
      CategoryCard,
    },
    data() {
      return {
        course: {}
      };
    },
    created() {
      this.fetchCourse();
    },
    methods: {
      async fetchCourse() {
        try {
          const courseId = this.$route.params.id;
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${courseId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch course');
          }
          this.course = await response.json();
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>

<style>

.breadcrumb-div {
  padding: 1em 0;
  background-color: rgb(116, 116, 230);
}

.breadcrumb {
  padding: 0!important;
  margin: 0!important;
}

.breadcrumb a {
  text-decoration: none;
  font-family: "Medium";
  color: aliceblue;
}

.course-title {
  text-transform: capitalize;
}

.course-detail {
  padding: 5em 2em;
  background-color: rgb(232, 232, 232);
}

</style>
  