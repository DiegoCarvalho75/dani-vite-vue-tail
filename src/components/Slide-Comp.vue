<template>

<SplideSlide class="min-h-full w-full flex flex-col justify-center items-center text-xl text-white">
  {{image.id}}
  <div >  
    <img :src="`${ image.filename }`" class="slider-image">
  </div>       
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
