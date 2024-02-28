

<template>

    <div class="welcome-course">
    
        <div class="container">
          <h3 class="text-3xl font-bold mt-8 mb-4">Explore Our Course Catalog</h3>
          <p class="text-lg mb-6"> Discover a wide range of courses tailored to your interests and expertise. From beginner to advanced levels, our comprehensive catalog offers something for everyone. Browse our selection below and embark on a journey of learning and growth.</p>
    
           <router-link to="/CourseList" class="btn btn-info">Explore the full course list</router-link>
        </div>
    
    </div>
    
    </template>


<style>

.welcome-course {
  padding: 30px 0;
    color: rgb(255, 255, 255);
    text-align: center;
    text-shadow: 0 1px 0 rgba(0,0,0,.1);
    font-size: 19px;
    background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgb(4, 148, 177) 100%);
    border-top: 10px solid rgb(13, 146, 82);
    padding: 4em 0;
    line-height: 2;
}


</style>