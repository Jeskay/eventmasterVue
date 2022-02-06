<template>
    <div class="nav-bar">
        <div class="flex relative items-center">
            <img class="logo" src="src/assets/bot_logo.png"/>
            <h1>EventMaster</h1>
        </div>
        <ul class="flex relative items-center">
            <li><a class ="nav-link" href="#">About</a></li>
            <li><a class ="nav-link" href="#">Invite bot</a></li>
            <li><a class ="nav-link" href="#">Tutorial</a></li>
            <li class ="relative" @mouseleave="showCommunityLinks = false">
                <a class ="nav-link" @mouseover="showCommunityLinks = true" href="#">Community</a>
                <div v-if="showCommunityLinks" class="nav-list">
                    <a class ="nav-link" href="#">Discord server</a>
                    <a class ="nav-link" href="#">Reviews</a>
                    <a class ="nav-link" href="#">Suggestions</a>
                </div>
            </li>
            <a v-if="!userAvatarUrl" class ="nav-link" href="#">Log in</a>
           <img v-else class="avatar" src="src/assets/avatarsample.jpg" />
        </ul>
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
<style scoped>
    .avatar {
        @apply rounded-full object-cover w-10 h-10 mr-2 hover:brightness-125;
    }
    .logo {
        @apply max-h-20 md:max-h-24;
    }
    .nav-link {
        @apply px-4 py-5 hover:bg-slate-300;
    }
    .nav-bar {
        @apply fixed flex justify-between items-center top-0 left-0 right-0 bg-slate-200 shadow-sm;
    }
    .nav-list {
        @apply flex flex-col absolute translate-y-5 bg-slate-200;
    }
</style>