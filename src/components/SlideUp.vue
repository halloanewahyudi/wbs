<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';
function shoUp() {
    const boxes = gsap.utils.toArray('.box');
    boxes.forEach((box, i) => {
        const anim = gsap.fromTo(box, { scale:1.1, translateY: 50 }, { duration: 1, scale: 1, translateY: 0 });
        ScrollTrigger.create({
            trigger: box,
            animation: anim,
            scrub: 1
        });
    });
}
onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    shoUp()
}
)
</script>
<template>
    <div>
        <slot />
    </div>
</template>
<style scoped>
.box{
    position:relative;
}
</style>