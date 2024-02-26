

<template>

<div class="top-banner"><div class="top-overlay"></div><p class="container text-center"> Where Learners Meet Instructors, and <br/> Instructors Meet Learners' Needs. </p></div>

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

    .top-banner {
    position: relative;
    box-shadow: 0 5px 10px rgba(0,0,0,.1);
    min-height: 450px;
    background-size: cover;
    background-position: 0 30%;
}

.top-banner .top-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
}

.top-banner p {
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    transform: translateY(-50%);
    font-size: 45px;
    color: blueviolet;
    font-family: "Bold", sans-serif;
}
    
    </style>
    