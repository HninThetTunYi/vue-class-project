<script>

import { RouterView } from 'vue-router';
import DictionaryView from './views/DictionaryView.vue';
import CourseList from './views/CourseList.vue';

import Header from './views/Header.vue';
import HeroSection from './views/HeroSection.vue';
import WelcomeUrban from './views/WelcomeUrban.vue';
import WelcomeCourse from './views/WelcomeCourse.vue';
import CategoryCard from './views/CategoryCard.vue';

export default {
  components: {
    Header,
    HeroSection,
    DictionaryView,
    WelcomeUrban,
    WelcomeCourse,
    CategoryCard,
  },
  computed: {
    // Check if the current route is the home page ("/")
    isHomePage() {
      return this.$route.path === '/';
    }
  },
}

</script>

<template>

  <Header> </Header>

  <HeroSection v-if="isHomePage"> </HeroSection>

  <welcomeCourse v-if="isHomePage"> </welcomeCourse>

  <CategoryCard v-if="isHomePage"> </CategoryCard>

  <WelcomeUrban v-if="isHomePage"> </WelcomeUrban>
 

  <section>

    <RouterView></RouterView>

    

  </section>

  <div class="p-4 bg-dark text-white text-center">
    <h5>2024 © LearnDash. All Rights Reserved.</h5>
  </div>
    
</template>

<style scoped>
</style>




