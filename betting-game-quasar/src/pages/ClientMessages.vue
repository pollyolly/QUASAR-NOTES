<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%;">
        <q-scroll-area ref="scrollAreaRef" style="height:500px;">
            <q-chat-message
                name="<span class='text-positive'>Untrusted Source</span>"
                avatar="https://cdn.quasar.dev/img/avatar3.jpg"
                :text="['hey, how are <strong>you</strong>?']"
                stamp="7 minutes ago"
                sent
                bg-color="amber-7"
            />
            <q-chat-message
                name="<span class='text-positive'>Untrusted Source</span>"
                avatar="https://cdn.quasar.dev/img/avatar3.jpg"
                :text="['hey, how are <strong>you</strong>?']"
                stamp="7 minutes ago"
                sent
                bg-color="amber-7"
            />
            <q-chat-message
                name="<span class='text-positive'>Untrusted Source</span>"
                avatar="https://cdn.quasar.dev/img/avatar3.jpg"
                :text="['hey, how are <strong>you</strong>?']"
                stamp="7 minutes ago"
                sent
                bg-color="amber-7"
            />
            <q-chat-message
                name="<span class='text-negative'>Jane (trusted name but untrusted text)</span>"
                name-html
                avatar="https://cdn.quasar.dev/img/avatar5.jpg"
                :text="[
                'doing fine, how r you?',
                'I just feel like typing a really, really, <strong>REALLY</strong> long message to annoy you...'
                ]"
                size="6"
                stamp="4 minutes ago"
                text-color="white"
                bg-color="primary"
            />
            <q-chat-message
                name="<image src='https://cdn.quasar.dev/img/lets-encrypt.jpg' />"
                name-html
                avatar="https://cdn.quasar.dev/img/avatar5.jpg"
                :text="['<strong>Did it work?</strong>']"
                text-html
                stamp="1 minutes ago"
                size="8"
                text-color="white"
                bg-color="primary"
            />
            <q-chat-message
                name="<image src='https://cdn.quasar.dev/img/lets-encrypt.jpg' />"
                name-html
                avatar="https://cdn.quasar.dev/img/avatar5.jpg"
                :text="['<strong>Did it work?</strong>']"
                text-html
                stamp="1 minutes ago"
                size="8"
                text-color="white"
                bg-color="primary"
            />
            <q-chat-message
                name="<image src='https://cdn.quasar.dev/img/lets-encrypt.jpg' />"
                name-html
                avatar="https://cdn.quasar.dev/img/avatar5.jpg"
                :text="['<strong>Did it work?</strong>']"
                text-html
                stamp="1 minutes ago"
                size="8"
                text-color="white"
                bg-color="primary"
            />
            <q-chat-message
                name="<image src='https://cdn.quasar.dev/img/lets-encrypt.jpg' />"
                name-html
                avatar="https://cdn.quasar.dev/img/avatar5.jpg"
                :text="['<strong>Did it work?</strong>']"
                text-html
                stamp="1 minutes ago"
                size="8"
                text-color="white"
                bg-color="primary"
            />
        </q-scroll-area>
            <q-input
                v-model="messagetext"
                filled-input
                autogrow
                size="8"
                label="Message Here..."
                type="textarea"
            >
            <template v-slot:after>
                <q-btn round dense flat icon="send" />
            </template>
        </q-input>
    </div>
  </div>
</template>
<script>
import { ref, watch } from 'vue';
    const position = ref(0);
    const scrollAreaRef = ref(null);
    const messagetext = ref('');
    watch(messagetext,async ()=>{
            const scrollTarget = scrollAreaRef.value.getScrollTarget();
            const maxHeight = scrollTarget.scrollHeight;
            // const duration = 2000;
            // scrollAreaRef.value.setVerticalScrollPosition(maxHeight, duration);
            scrollAreaRef.value.setScrollPosition('vertical', maxHeight, 0);
    });
export default {
    setup(){
        return {
            messagetext,
            position,
            scrollAreaRef,

        }
    }
}
</script>