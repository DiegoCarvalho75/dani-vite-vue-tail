<template>
    <div class="splide h-screen" id="splideVh">
        <div class="splide__track h-full bg-gray-500">
            <ul class="splide__list">
                <Slide v-for="(slide, index) in images" :image="slide"></Slide>
            </ul>
        </div>
    </div>
</template>

<script>
import Slide from '../components/Slide.vue'
import data from './data.json'

export default {
    data () {
        return {
            images: data
        }
    },
    components: {
        Slide
    }
}
</script>
