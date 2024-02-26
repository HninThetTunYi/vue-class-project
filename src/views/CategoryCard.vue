<template>
  <div class="course-cat">
  <div class="container">
    <h2>Course Category</h2>
    <div class="photo-container">
      <div v-for="photo in photos" :key="photo.id" class="photo-card">
        <img :src="photo.url" :alt="photo.title" />
        <p>{{ photo.title }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      photos: [] // Array to hold photos fetched from the API
    };
  },
  created() {
    // Fetch photos from the API when the component is created
    this.fetchPhotos();
  },
  methods: {
    async fetchPhotos() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        if (!response.ok) {
          throw new Error('Failed to fetch photos');
        }
        const data = await response.json();
        // Extracting only the title and url fields from each photo object
        this.photos = data.map(photo => ({
          title: photo.title,
          url: photo.url
        })).slice(0, 4); // Limit to the first 4 photos
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    }
  }
};
</script>

<style>

.course-cat {
  background: linear-gradient(to bottom, rgb(240, 154, 154), rgb(236, 177, 88));
  padding: 3em 0;

}

.photo-container {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 1em 0;
}

.photo-card {
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  padding: 10px;
  width: 250px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  min-height: 335px;
}

.photo-card img {
  width: 100%;
  border-radius: 5px;
  opacity: 0.75;
}

.photo-card p {
  margin-top: 10px;
  font-size: 1rem;
  text-align: center;
  font-family: 'Medium', sans-serif;
}
</style>

  