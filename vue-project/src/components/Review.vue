<template>
  <div class="rev-section">
    <h2 class="title">Our Custumers Love Us</h2>
    <p class="note">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laboriosam
      possimus perferendis non error neque.
    </p>
    <div class="con">
      <div class="brandi"></div>
      <div class="brandtitle">Give as a review</div>
      <div class="inputsss">
        <label class="pass">NAME</label>
        <input type="email" class="inpat" placeholder="Put your name ..." />
        <label class="pass">LOCATION</label>
        <input type="email" class="inpat" placeholder="Put your Location ..." />
        <label class="pass">Photo</label>
        <div v-if="!image">
          <h2 class="texto">Select your image</h2>
          <input type="file" @change="onFileChange" />
        </div>
        <div v-else>
          <img :src="image" class="imaget"/>
        </div>
        <label class="passs">DESCRIPTION</label>
        <textarea type="description" />
        <button type="submit" class="log" >Send</button>
      </div>
    </div>
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
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half"></i>
          </div>
          <div class="desc-review">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            eligendi suscipit illum officia ex eos.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "",
    };
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
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

.con {
  position: relative;
  width: 456px;
  height: 527px px;
  border-radius: 23px;
  padding: 40px;
  box-sizing: border-box;
  background: #ecf0f3;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
}
.brandi {
  height: 100px;
  width: 100px;
  background: url("https://img.icons8.com/color/100/000000/clothes--v2.png");
  margin: auto;
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px white;
}

.brandtitle {
  margin-top: 10px;
  font-weight: 900;
  font-size: 1.8rem;
  color: #1da1f2;
  letter-spacing: 1px;
}

.inputsss {
  text-align: left;
  margin-top: 30px;
}

.pass,
.inpat,
.log {
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
}

.pass {
  margin-bottom: 4px;
}

.pass:nth-of-type(2) {
  margin-top: 12px;
}

.pass::placeholder {
  color: gray;
}

.inpat {
  background: #ecf0f3;
  padding: 10px;
  padding-left: 20px;
  height: 50px;
  font-size: 14px;
  border-radius: 50px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
}
.inpatt {
  background: #ecf0f3;
  padding: 10px;
  padding-left: 20px;
  height: 50px;
  font-size: 14px;
  border-radius: 50px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
}
.pass,
.inpatt,
.log {
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
}

.log {
  color: rgb(255 255 255);
  margin-top: 23px;
  background: #1da1f2;
  height: 47px;
  border-radius: 11px;
  cursor: pointer;
  font-weight: 950;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
  transition: 0.5s;
}

.log:hover {
  box-shadow: none;
}

.tati {
  position: absolute;
  font-size: 8px;
  bottom: 4px;
  right: 4px;
  text-decoration: none;
  color: black;
  background: yellow;
  border-radius: 10px;
  padding: 2px;
}
textarea {
  display: block;
  width: 100%;
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  background: #ecf0f3;
  padding: 10px;
  padding-left: 20px;
  height: 50px;
  font-size: 14px;
  border-radius: 50px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
}
.imaget {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
  border-radius: 50%;
  width: 2cm;
  height: 2cm;
}
.texto{
    text-align: center;
    color:#1da1f2
}
</style>
