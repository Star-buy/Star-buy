<template>
  <div class="reviews">
      <div class="review">
        <div class="head-review">
          <img
            src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
            width="250px"
            class="image-rev"
          />
        </div>
        <div class="body-review">
          <div class="name-review">Nathan D.</div>
          <div class="place-review">Germany</div>
          <div class="desc-review">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            eligendi suscipit illum officia ex eos.
          </div>
        </div>
      </div>
        <div class="review">
        <div class="head-review">
          <img
            src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
            width="250px"
            class="image-rev"
          />
        </div>
        <div class="body-review">
          <div class="name-review">Nathan D.</div>
          <div class="place-review">Germany</div>
          <div class="desc-review">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            eligendi suscipit illum officia ex eos.
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
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