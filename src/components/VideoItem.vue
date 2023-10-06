<script setup>
import IconPause from './icons/IconPause.vue';
import IconPlay from './icons/IconPlay.vue';
import IconStop from './icons/IconStop.vue';
import {YoutubeVue3} from 'youtube-vue3';
import { useElementVisibility } from '@vueuse/core'
import { onMounted, ref } from 'vue';
const youtube = ref(null)
const targetIsVisible = useElementVisibility(youtube)
const player = ref(null);
const props = defineProps(['vid','title'])

function playCurrentVideo() {
      youtube.player.playVideo();
}
onMounted(()=>{
   console.log(YoutubeVue3)
})
</script>
<template>
    <div class="max-w-full mx-auto">
        <youtube-vue3 ref="yotube" :videoid="vid" loop="1" autoplay="false" class="w-full" />
        <div class="flex gap-2">
            <span class=""> {{ props.title }}</span>
            <div class="flex gap-2">
<icon-play @click="playCurrentVideo" />
            </div>
        </div>
       
    </div>
</template>