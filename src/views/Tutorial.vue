<template>
    <div class="flex justify-center">
        <div class="w-full sm:w-3/4 md:w-2/3 shadow-md overflow-hidden">
            <div class="tutorial">
                <h2 class=" tutorial-header">Inviting the bot</h2>
                    <img class=" tutorial-image" :src="gif1Path"/>
                <div class="tutorial-description">
                    <p>
                        You can find invite link right on the navigation bar from our website or click "Add to Server" button in the bot's profile. Make sure you give the bot all necessary permissions to create and modify channels as well as to create slash commands. Otherwise, you won't be able to use it.
                    </p>
                </div>
            </div>
            <div class="tutorial">
                <h2 class=" tutorial-header">Setting the bot up</h2>
                    <img class=" tutorial-image" :src="gif2Path"/>
                <div class="tutorial-description">
                    <p>First of all players need a room to play.
                        Use command <code>/owner setup</code> to select category where bot will create voice and text channels for players and voice channel where people will join to initiate an event.
                        That&#39;s minimum setting you can start with.
                        However, settings are not limited to the command above.<br>
                        <code>/owner limit_events</code> - to set max amount of events allowed for creation at the same time.<br>
                        <code>/owner limit_votes</code> - to set minimum amount of votes for single user to be elected as a host.<br>
                        <code>/owner event_role</code> - to set role which will be notified when new event is hosted at the server.<br>
                        <code>/owner logging</code> - to set channel where bot will information about actions related to events.<br>
                        <code>/owner notifications</code> - to set channel where bot will publish notifications about events.<br>
                        <code>/owner set_admin</code> - to give a user permissions to block and unblock users from joining events.<br>
                        <code>/owner remove_admin</code> - to remove the privileges described in previous command.
                    </p>
                </div>
            </div>
            <div class="tutorial">
                <h2 class=" tutorial-header">Electing the host</h2>
                    <img class=" tutorial-image" :src="gif3Path"/>
                <div class="tutorial-description">
                    <p>
                        When there are enough people, the election will start. Participants can vote for another person to become the host and manange te event. 
                        There are two options for voting - in EventMaster's DM using <code>/player voteid </code> or in server's chat using <code>/member vote </code>.
                        Bot will send a message to the event's chat when election is over.
                    </p>
                </div>
            </div>
            <div class="tutorial">
                <h2 class=" tutorial-header">Managing event</h2>
                    <img class=" tutorial-image" :src="gif4Path"/>
                <div class="tutorial-description">
                    <p>
                        Newly elected host usually performs the following steps:
                        <code>/host announce</code> - to publish announcement about the event so more people will join the event.
                        <code>/host start</code> - to start the event and post this information in log channel.
                        <code>/host finishgame</code> - to end current event, record results and delete the channel
                        Whenever someone violates server's policy or annoy other users owner and admins can use the bot to block such users from joining events:
                        <code>/admin block</code> - add user to the blacklist and block him from joining events.
                        <code>/admin unblock</code> - remove user from the blacklist and allow him to join events.
                        <code>/admin blacklist </code> - show all users blocked from joining events on this server.
                    </p>
                </div>
            </div>
            <div class="tutorial">
                <h2 class=" tutorial-header">Profiles</h2>
                    <img class=" tutorial-image" :src="gif5Path"/>
                <div class="tutorial-description">
                    <p>
                       Every user who participated at least one event has guild profile and global profile data.
                        <code>/member guildprofile </code> - Shows user profile at the specific server.
                        <code>/player profile </code> - Shows global profile of the user.
                        <code>/system rating </code> - Global rating of the most active users.
                        <code>/member guildprofile </code> - Rating of the most active users on the server.
                    </p>
                </div>
            </div>
            <div class="tutorial">
                <h2 class=" tutorial-header">Subscriptions</h2>
                    <img class=" tutorial-image" :src="gif6Path"/>
                <div class="tutorial-description">
                    <p>
                        To receive notifications about specific events a user must subscribe to it.
                        Use <code>/system subscribe</code> command to be notified about the event. 
                        For example, <code>/system subscribe title:chess</code> will notify user when public announcement includes "#chess" string in it.
                        <code>/system unsubscribe</code> - to remove subscription from your list.
                        <code>/system subscriptions </code> - shows list of your subscriptions.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
    setup: () => {

    },
    data() {
        return {
            gif1Path: 'src/assets/Bot_invitation.JPG' as String,
            gif2Path: "src/assets/Bot_settings.JPG" as String,
            gif3Path: "src/assets/Bot_election.JPG" as String,
            gif4Path: "src/assets/Bot_managing.JPG" as String,
            gif5Path: "src/assets/Profile.JPG" as String,
            gif6Path: "src/assets/Bot_subscriptions.JPG" as String,
        }
    }
});
</script>
<style scoped>
    .tutorial {
        @apply px-2 pb-5 border-b-8 rounded-md border-blue-200;
    }
    .tutorial-header {
        @apply my-3 text-center text-2xl border-y-4 rounded-xl border-slate-300;
    }
    .tutorial-image {
        @apply mx-auto border-4 border-slate-600 rounded-md;
    }
    .tutorial-description {
        @apply my-5 h-9 hover:h-auto overflow-hidden overflow-ellipsis border-x-4 rounded-md border-slate-300;
    }
</style>
