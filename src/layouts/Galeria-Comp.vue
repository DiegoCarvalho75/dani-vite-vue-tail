<template>
  <Splide
    :options="{
      type: 'fade',
      arrows: true,
      flickPower: 50,
      flickMaxPages: 1,
      cover:true
    }"
    class=" bg-gray-500"
    id="splideVh"
  >
    <Slide
      v-for="(slide, index) in images"
      :image="slide"
      :key="index"
      class="slideVh"
      :alt="index"
    ></Slide>
    
  </Splide>
</template>

<script>
import Slide from '../components/Slide-Comp.vue'
import data from './data.json'

function updateVh() {
  let windowVh = window.innerHeight
  document.getElementById('splideVh').style.height =
    windowVh + 'px'
  let slides = document.getElementsByClassName('slideVh')
  for (let index = 0; index < slides.length; index++) {
    slides[index].style.height = '90vh'
    console.log(slides[index])
  }
}

window.addEventListener('resize', () => {
  updateVh()
})

export default {
  data() {
    return {
      images: data,
    }
  },
  components: {
    Slide,
  },
  mounted() {
    updateVh()
  },
}
</script>
