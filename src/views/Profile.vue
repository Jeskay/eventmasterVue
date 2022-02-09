<template>
    <div class="side-bg">
        <div class="container">
            <div class="grid grid-cols-4 my-4 items-center mx-4">
                <div class="profile-thumbnail">
                    <img class=" rounded-full object-cover w-24 h-24 mx-6 my-3" src="src/assets/avatarsample.jpg"/>
                    <h1 class=" username">User#0001</h1>
                </div>
                <div class=" col-span-1 flex justify-center border-4 mx-6">
                    <span>Server</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 my-auto" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class=" col-span-2">
                    <h2>Place: 1</h2>
                    <h2>Total score: 1000</h2>
                    <div class=" mt-10 mb-5">
                        <h2>Subscriptions</h2>
                        <div class="subs-list">
                            <div class= " chip-small"> 
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <span>Heartstone</span> 
                            </div>
                            <div class= " chip-small"> 
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <span>Dota 2</span> 
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 border-4 border-slate-400 rounded-full m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                    </div>
                </div>
                <div class=" stat-list">
                    <h4 class=" col-span-2 text-center">Weekly</h4>
                    <h6>played:</h6>
                    <div class=" stat">
                        <span class=" text-lg">5</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <h6>hosted:</h6>
                    <div class=" stat">
                        <span class=" text-lg">0</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 15" fill="currentColor">
                            <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <h6>likes:</h6>
                    <div class=" stat">
                        <span class=" text-lg">2</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <h6>dislikes:</h6>
                    <div class="stat">
                        <span class=" text-lg">0</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 15" fill="currentColor">
                            <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div class=" activities-container">
                    <div class=" flex border-2 border-slate-400 m-4 px-3">
                        <h2>Activities</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 my-auto" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class= " chip-big"> 
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>Events played</span> 
                    </div>
                    <div class= " chip-big"> 
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>Likes</span> 
                    </div>
                </div>
                <img class= " col-span-4 m-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Pushkin_population_history.svg/1200px-Pushkin_population_history.svg.png"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
    setup: () => {

    },
});
</script>
<style scoped>
    h2 {
        @apply text-2xl my-2;
    }
    h4 {
        @apply text-2xl mx-9;
    }
    h6 {
        @apply text-xl px-4;
    }
    .username {
        @apply text-2xl text-center col-span-2;
    }
    .chip-small {
        @apply flex border-4 rounded-full items-center pr-2;
    }
    .chip-big {
        @apply flex border-4 rounded-full items-center pr-3 my-4;
    }
    .stat {
        @apply flex my-auto mx-auto;
    }
    .stat-list {
        @apply col-span-2 grid grid-cols-2 gap-2 mt-4 border-4;
    }
    .activities-container {
        @apply col-span-4 flex border-4 gap-3;
    }
    .subs-list {
        @apply flex my-auto mx-auto gap-2;
    }
    .profile-thumbnail {
        @apply col-span-3 grid grid-cols-3 items-center shadow-lg  bg-slate-50;
    }
</style>
