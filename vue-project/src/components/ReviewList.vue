<template>
  <div class="reviews">
    <div class="review" v-for="review in reviews" :key="review.id"> 
      <div class="head-review">
        <img
          v-bind:src="`${review.image}`"
          width="250px"
          class="image-rev"
        />
      </div>
      <div class="body-review">
        <div class="name-review">{{review.name}}</div>
        <div class="place-review">{{review.location}}</div>
        <div class="desc-review">{{review.description}}</div>
        </div>
      </div>
       <h1 v-if="Boolean" style="color:red" > You can check the by clicking in this button below</h1>
  <button @click="getReviews" >Vue All Feedbacks</button>
    </div>
   
</template>

<script>
import axios from "axios";
export default {
  name: "ReviewList",
  data() {
    return {
      reviews: [],
      Boolean:true,
    };
  },
  methods: {
    getReviews() {
      axios
        .get("http://localhost:5000/test")
        .then((response)=>{
            this.reviews = response.data;
             console.log(response.data,"wehifbkj");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.rev-section {
  margin: auto;
  padding: 0 1rem;
  max-width: 1100px;
  text-align: center;
}
.title {
  font-size: 2.5rem;
  text-transform: uppercase;
  color: rgb(50, 50, 50);
  margin-bottom: 0.5rem;
}
.note {
  font-size: 2.1rem;
  color: rgb(150, 150, 150);
  font-style: italic;
}
.reviews {
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
}
.review {
  margin: 0 1rem;
  min-width: 300px;
  flex: 1;
}
.head-review {
  margin: 1.75rem auto;
  width: 150px;
  height: 150px;
}
.image-rev {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
}

.body-review {
  background-color: rgb(238, 238, 238);
  padding: 2.5rem;
  box-shadow: 2px 2px 10px 3px rgb(225, 225, 225);
}
.name-review {
  font-size: 1.5rem;
  color: rgb(50, 50, 50);
  margin-bottom: 0.25rem;
}
.place-review {
  font-size: 2.1rem;
  color: red;
  font-style: italic;
}
.rating {
  color: rgb(253, 180, 42);
  margin: 1rem 0;
}
.desc-review {
  font-size: 2.1rem;
  line-height: -7.5rem;
  letter-spacing: 1px;
  color: rgb(150, 150, 150);
}

@media (max-width: 678px) {
  .review {
    margin-top: 1.5rem;
  }
}
</style>
