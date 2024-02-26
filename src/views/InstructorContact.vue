<template>
    <div>
      <h3>Contact Instructor</h3>
      <p>Email: {{ instructor.email }}</p>
      <p>Phone: {{ instructor.phone }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        instructor: {
          email: 'instructor@example.com',
          phone: '+1234567890'
        }
      };
    }
  };
  </script>
  