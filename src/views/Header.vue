

<template>
<nav class="navbar navbar-expand-md bg-green">
  <div class="container">
    <a class="navbar-brand" href="/"> LearnDash </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Teacher</a>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/CourseList"> Courses</router-link>
        </li>  
        <li class="nav-item">
            <router-link class="nav-link" to="/Admin"> Admin </router-link>
        </li>  
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
    };
  }
};
</script>

<style scoped>
/* Add some styling if needed */

.bg-green {
    background: #e6fff0;
  }

.navbar {
  padding: 1em 0;
}

.navbar-brand {
  font-family: "Bold";
  font-size: 30px;
}

.nav-link {
  font-size: 18px;
  font-family: "Medium";
  color: aliceblue;
  border-radius: 50px;
  margin-left: 10px;
  background-image: radial-gradient( circle farthest-corner at -8.9% 30.7%,  rgb(32, 206, 142) 0%, rgba(54,93,228,1) 90.5% );
}

.nav-item a.nav-link {
  padding: 10px 20px;
}

</style>
