<script>

import axios from 'axios';

export default {

  name: 'DictionaryView',
    
  data() {
    return {
      // definition: [
      //   {
      //     "definition" : "asdfasdfasdfasfd",
      //     "word": "asdfasdfasdfasdfasdf asdfasdf asdfasdf",
      //     "aurthor": "By aurthor"
      //   },
      //   {
      //     "definition" : "asdfasdfasdfasfd adsfasdf",
      //     "word": "asdfasdfasdfasdfasdf asdfasdf asdfasdf asdfasfd",
      //     "aurthor": "By aurthor2"
      //   }
      // ]
      term: "",
      definitions: [],
      loading: false,
    }
  },
//   mounted() {
//     this.getDefinition("Myanmar");
//   },
  methods: {
    async search(term) {
      // console.log(term)
      // alert("Term: " + term)
      // const options = {method: 'GET'};
      // fetch('https://jsonplaceholder.typicode.com/todos?id=' + term, options)
      //   .then(response => response.json())
      //   .then(response => console.log(response))
      //   .catch(err => console.error(err));
      this.loading = true;
      // clear the previous definition
    //   this.definition = [];

      // clear this input field value
    //   console.log(this.$refs.formInput.$data.term);
    //   this.$refs.formInput.$data.term = "";
      try {
        // const options = {
        //   method: 'GET',
        //   headers: {
        //     "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
        //     "x-rapidapi-key": "a9fb0095e3msh7092e19dd0034e9p1261a5jsnb924703f4137",
        //   },
        // };
        // const response = await axios.get('https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${this.term}');
        // // convert the response to JSON
        // const json = await response.json();
        // // update the definitions
        // this.definition = json.list; 
        const response = await axios.get(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${this.term}`, {
          headers: {
            'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com',
            "x-rapidapi-key": "a9fb0095e3msh7092e19dd0034e9p1261a5jsnb924703f4137", // Replace with your RapidAPI key
          },
        });
        this.definitions = response.data.list;  
        console.log(response.data.list);            

      } catch (error) {
        console.log(error);
        alert("something wrong")        
      } finally {
        this.loading = false;
      }
          
    }
  }
 }

</script>

<template>

    <!-- <FormInput ref="formInput" @submitInput="getDefinition" /> -->
    

  <div class="p-5 bg-warning search-box">
    <div class="container">
      <h3> Explore the full dictionary </h3>
      <div class="col-12">
        <div class="input-group">          
          <input v-model="term" class="form-control" placeholder="Enter a term">
          <span class="input-group-btn">
            <button @click="search"  class="btn btn-primary">Search</button>
          </span>
        </div>
      </div>
    </div>
</div>

<div class="container py-3 definition-list">


    <p v-if="loading">Loading ...</p>  
    

    <ul v-if="!loading && definitions.length>0">
      <!-- <Card v-for="(data,index) in definition" :key="index" :definition="data" /> -->
      <li v-for="definition in definitions" :key="definition.defId">
        <h4 className="font-bold"> {{ definition.word }} </h4>
        {{ definition.definition }} <br/>
        <h5 class="underline">  {{ definition.author }} </h5>
        
      </li>
    </ul>

    <div class="d-flex justify-content-end w-100">
        <router-link to="/" class="btn btn-primary">          
        Back to Home 
        </router-link>
    </div>

    </div>

 
    
</template>

<style scoped>

.search-box {
  border-radius: 5px;
}

ul {
  padding: 0.5em 0;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  list-style: none;
}

li {
    width: 48%;
    padding: 15px;
    line-height: 1.4;
    background-color: #f9f9f9;
    border: 1px solid #fff;
    border-radius: 5px;
  margin: 8px;
}

.definition-list h4 {
  text-transform: capitalize;
}
</style>


