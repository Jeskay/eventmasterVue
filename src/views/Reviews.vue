<template>
        <div class="side-bg">
            <div class="container">
                <div class="flex justify-center gap-5 my-8">
                    <h1 class=" text-xl">Sort by</h1>
                    <div class="flex border-4 rounded-xl px-3">
                        <span>date</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 my-auto" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div class="flex relative flex-col shadow-lg bg-slate-50 rounded-md p-5 mx-20">
                    <div class="flex items-center mb-4">
                        <img class=" w-10 h-10 object-cover rounded-full" src="src/assets/avatarsample.jpg"/>
                        <h2 class=" mx-3">User1</h2>
                    </div>
                    <p>
                            Cool review by a first user.
                    </p>
                    <div class="relative flex -left-4 top-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="green">
                            <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span> 2 </span>
                    </div>
                    <span class=" relative text-right">2021/01/01</span>
                </div>
                <button class=" rounded-2xl bg-lime-500 px-3 mx-auto my-5 block">Load more</button>
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

</style>
