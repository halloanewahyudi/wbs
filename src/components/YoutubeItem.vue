
<script>
import IconPlay from './icons/IconPlay.vue'
import IconStop from './icons/IconStop.vue'
import IconPause from './icons/IconPause.vue'
import { YoutubeVue3 } from 'youtube-vue3'
import { useElementVisibility } from '@vueuse/core'
import { ref } from 'vue'
export default {
 name: 'App',
 props:['title','vid'],
 setup() {
    const target = ref(null)
    const targetIsVisible = useElementVisibility(target)
    return {
      target,
      targetIsVisible
    }
 },
 data() {
   return {
     temp: { video_id: this.vid, loop: 1 },
     play : { video_id: this.vid, loop: 1 },
   }
 },
 components: {
   YoutubeVue3,
   IconPlay,
   IconStop,
   IconPause
 },
 mounted() {
   if(this.targetIsVisible){
    console.log("kelihatan")
   }
 },
 methods: {
   applyConfig() {
     this.play = Object.assign(this.play, this.temp)
   },
   playCurrentVideo() {
     this.$refs.youtube.player.playVideo();
   },
   stopCurrentVideo() {
     this.$refs.youtube.player.stopVideo();
   },
   pauseCurrentVideo() {
     this.$refs.youtube.player.pauseVideo();
   },
   onEnded() {
     console.log("## OnEnded")
   },
   onPaused() {
     console.log("## OnPaused")
   },
   onPlayed() {
     console.log("## OnPlayed")
   },
 },
}
</script>
<template>
    <div ref="target">
      <div class="flex gap-3">
      <button @click="playCurrentVideo" class="text-brand-400 text-3xl"> <IconPlay/></button>  
      <button @click="stopCurrentVideo" class="text-red-600 text-3xl"> <IconStop/></button>  
        <button @click="pauseCurrentVideo" class="text-yellow-600 text-3xl"><IconPause /></button>
      </div>
      <YoutubeVue3 ref="youtube" :videoid="play.video_id" :loop="play.loop" :width="480" :height="320"
        @ended="onEnded" @paused="onPaused" @played="onPlayed"/>
        <span>{{ title }}</span>
    </div>
  </template>
  