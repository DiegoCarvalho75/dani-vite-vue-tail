<template>
    <SplideSlide class="min-h-full w-full flex flex-col justify-center items-center">
       <img :src="(`${ image.filename }`)" class="slider-image">
    </SplideSlide>
</template>

<script>
// import imgUrl from `../src/assets/images/$image.filename`;
var baseUrl = import.meta.env.BASE_URL + "images/"

export default {
  name: 'Slide',
  props: ['image'],
  data () {
    return {
      baseUrl: baseUrl,
    }
  }
}
</script>
