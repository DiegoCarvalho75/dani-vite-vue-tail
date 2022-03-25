<template>
  <li class="splide__slide">
    <div class="h-full flex flex-col justify-center items-center">
      <img
        :src="'https://daniela-72f7.onrender.com/assets/images/' + image.filename"
        class="slider-image"
      />
    </div>
  </li>
</template>

<script>
export default {
  name: 'Slide',
  props: ['image'],
  data () {
    return {
    }
  }
}
</script>
