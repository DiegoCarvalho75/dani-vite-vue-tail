<template>
    <SplideSlide class="min-h-full w-full flex flex-col justify-center items-center">
       <img :src="`${ image.filename }`" class="slider-image">
    </SplideSlide>
</template>

<script>

export default {
  name: 'SlideComp',
  props: ['image'],
  data () {
    return {
    }
  }
}
</script>
