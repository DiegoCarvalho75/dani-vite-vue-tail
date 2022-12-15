<template>
  <SplideSlide
    class="min-h-full w-full flex flex-col justify-center items-center "
  >
    <div class="bg-gray-400 bg-opacity-10 max-h-full max-w-full ">
      <img
        :src="`${image.filename}`"
        :id="`${image.id}`"
        class="max-h-full max-w-full  shadow-2xl  p-4 "
      />
</div>
  </SplideSlide>
</template>

<script>
export default {
  name: 'SlideComp',
  props: ['image'],
  data() {
    return {}
  },
}
</script>
