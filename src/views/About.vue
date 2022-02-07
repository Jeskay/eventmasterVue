<template>
    <div class="flex justify-center">
        <div class="container">
            <img :src="image1URL">
            <div class="main-card">
                <div class="card-head">
                    <p class="card-title">Bring a leeway to your community!</p>
                    <div class="triangle-border">
                        <div class="triangle">
                            <a class="start-link">Get started</a>
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <p>
                        Events master gives people freedom to interact during the event. The bot will save time of server moderators for other purposes. Let members do something themselves and they will acknowledge it. More of that it's simple to use - just set two channels with a handy slash command from the bot's advice and it will run out of the box!
                    </p>
                </div>
            </div>
            <img :src="image2URL">
            <div class="card">
                <div class="card-head">
                    <p class="card-title">Event moderation</p>
                </div>
                <div class="card-content">
                    <p>
                        Event master provide small but essential toolkit for managing every kind of events. Also there is a variety of settings for each server like rooms limit, minimum amount of participants and even more.
                    </p>
                </div>
            </div>
            <img :src="image3URL">
            <div class="card">
                <div class="card-head">
                    <p class="card-title">Announcements</p>
                </div>
                <div class="card-content">
                    <p>
                        We know some people like pings about some stuff going on server and others don't. That's why Eventmaster keep this announcement function but also makes it possible to announce specific event all across the discord. So every user subscribed to this event will receive a notification regardless of whether he is a member of the server or not. Just add a #mycoolevent to your accouncment message.
                    </p>
                </div>
            </div>
            <img :src="image4URL">
            <div class="card">
                <div class="card-head">
                    <p class="card-title">Subscriptions</p>
                </div>
                <div class="card-content">
                    <p>
                        Tired of thousand of pings from different servers? Just want to be notified of one specific event or game party? Our subscription system will handle it for you. Use our subscribe command and the bot will DM you only when your subscription event is starting on any server with our bot! We will even provide you an invitation to this server you could not think about.
                    </p>
                </div>
            </div>
            <img :src="image5URL">
            <div class="card">
                <div class="card-head">
                    <p class="card-title">Rating</p>
                </div>
                <div class="card-content">
                    <p>
                        Everyone want to know who they are electing for a event host. Hence Eventmaster provide all users with global and local rating as a host and as a participant. Rating system also includes bans from events (separate from common server ban) and like/dislike options. So you will always know who you are dealing with. For those who like to compete we have global and local list of users with largest score which is calculated using all information displayed in your profile.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
data() {
    return {
        image1URL: "/src/assets/community_in_discord.jpg" as String,
        image2URL: "/src/assets/people-playing-games-online.jpg" as String,
        image3URL: "/src/assets/bloggers-advertising.jpg" as String,
        image4URL: "/src/assets/funkis_bilde.jpg" as String,
        image5URL: "/src/assets/leaderboard.jpg" as String,
    }
},
setup: () => {

    },
});
</script>
<style scoped>
    img {
        @apply w-full;
    }
    .start-link {
        @apply relative left-24 bottom-5 text-white;
    }
    .triangle {
        @apply relative;
        width: 0;
        height: 0;
        top: -8rem;
        left: 1rem;
        border-top: 8rem solid transparent;
        border-right: 16rem solid black;
        border-bottom: 8rem solid transparent;
    }
    .triangle:hover {
        border-right-color: rgba(0, 0, 0, 0.829)
    }
    .triangle-border {
        @apply absolute z-10 -right-64 lg:-right-80 xl:-right-96 2xl:-right-116;
        width: 0;
        height: 0;
        top: -9rem;
        border-top: 9rem solid transparent;
        border-right: 18rem solid white;
        border-bottom: 9rem solid transparent;
    }
    .main-card {
        @apply relative grid grid-cols-3 grid-rows-2 gap-x-0 gap-y-0 md:gap-y-2 lg:gap-6;
    }
    .card {
        @apply relative flex flex-col gap-4 mt-1;
    }
    .card-head {
        @apply col-span-2 relative;
    }
    .card-title {
        @apply h-min  text-4xl lg:text-6xl;
    }
    .card-content {
        @apply col-span-3 row-span-3 z-20;
    }
    .container {
        @apply w-full sm:w-3/4 md:w-2/3 shadow-md overflow-hidden;
    }
</style>
