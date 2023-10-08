<script setup>
import { onMounted, ref } from 'vue';
import VideoItem from './VideoItem.vue';
import SlideUp from './SlideUp.vue';
const video = ref(
    [
        {
            vid: '3RsRofy_wPc',
            title: 'Ciater Tangerang'
        },
        {
            vid: 'oVGB4ohkaVc',
            title: 'Desain Rumah Tinggal Bapak Wahyudi'
        },
        {
            vid: 'MHuBMwJ9Vog',
            title: 'Ruang Podcast DSITD Universitas IPB '
        },

        {
            vid: 'i9a7crMitxc',
            title: 'Musholah Ibu Mendi',
        },
        {
            vid: 'Yt8ZpEBfsqc',
            title: 'Interior Perpustakaan'
        },

    ]
)
</script>
<template>
    <div class="container py-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 justify-center gap-10">

            <div v-for="(item, index) in video" :key="index">
                <slide-up>
                    <video-item :title="item.title" :vid="item.vid" autoplay="false" class="box" />
                </slide-up>
            </div>
        </div>
    </div>
</template>