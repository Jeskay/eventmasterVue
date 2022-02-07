<template>
    <div class="nav-bar">
        <div class="flex relative items-center">
            <img class="logo" src="src/assets/bot_logo.png"/>
            <h1>EventMaster</h1>
        </div>
        <div class="grid grid-cols-5 justify-items-center">
            <router-link class ="nav-link" to="/">About</router-link>
            <a class ="nav-link" href="#">Invite bot</a>
            <router-link class ="nav-link" to="/Tutorial">Tutorial</router-link>
            <div class ="relative py-5" @mouseover="showCommunityLinks = true" @mouseleave="showCommunityLinks = false">
                <a class ="nav-link" href="#">Community</a>
                <div v-if="showCommunityLinks" class="nav-list">
                    <a class ="nav-link" href="#">Discord server</a>
                    <router-link class ="nav-link" to="/Reviews">Reviews</router-link>
                    <a class ="nav-link" href="#">Suggestions</a>
                </div>
            </div>
            <a v-if="!userAvatarUrl" class ="nav-link" href="#">Log in</a>
           <img v-else class="avatar" src="src/assets/avatarsample.jpg" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: "NavBar",
    props: {
        userAvatarUrl: { 
            type: String,
            default: undefined
        },
        userTag: {
            type: Number,
            default: undefined
        }
    },
    setup: () => {
        const showCommunityLinks = ref(false);

        return {showCommunityLinks};
    },
});
</script>
<style >
    .avatar {
        @apply rounded-full object-cover w-10 h-10 mr-2 hover:brightness-125;
    }
    .logo {
        @apply max-h-20 md:max-h-24;
    }
    .nav-link {
        @apply px-4 py-5 flex-grow text-center  hover:bg-slate-300;
    }
    .nav-bar {
        @apply flex z-50 justify-between top-0 left-0 right-0 bg-slate-200 shadow-md;
    }
    .nav-list {
        @apply flex flex-col absolute translate-y-5 bg-slate-200;
    }
</style>