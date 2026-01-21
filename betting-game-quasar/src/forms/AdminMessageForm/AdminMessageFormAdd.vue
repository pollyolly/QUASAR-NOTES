<template>
    <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Messages</div>
        </q-card-section>
        <!-- Form -->
        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-card-section class="q-pt-none">
            <!-- Input Fields -->
            <q-select
                v-model="chatnumber"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                label="Chat Number"
                :options="chatnumberOption"
                @filter="chatnumberFilterFn"
                @filter-abort="chatnumberAbortFilterFn">
                <template v-slot:no-option>
                <q-item>
                    <q-item-section class="text-grey">
                        No results
                    </q-item-section>
                </q-item>
                </template>
            </q-select>
            <q-select
                v-model="users"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                label="Users"
                :options="usersOption"
                @filter="userFilterFn"
                @filter-abort="userAbortFilterFn">
                <template v-slot:no-option>
                <q-item>
                    <q-item-section class="text-grey">
                        No results
                    </q-item-section>
                </q-item>
                </template>
            </q-select>
            <q-input
                v-model="messagetext"
                filled-input
                autogrow
                label="Message Text"
                type="textarea"
            />
            <q-file filled-input bottom-slots v-model="attachment" label="Message Photo" counter>
                <template v-slot:prepend>
                <q-icon name="cloud_upload" @click.stop.prevent />
                </template>
                <template v-slot:append>
                <q-icon name="close" @click.stop.prevent="attachment = null" class="cursor-pointer" />
                </template>

                <template v-slot:hint>
                Field hint
                </template>
            </q-file>
          </q-card-section>
          <!-- Actions Buttons -->
          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" @click="onCancel" />
            <q-btn flat label="Submit" type="submit" />
          </q-card-actions>
        </q-form>
    </q-card>
</template>
<script>
import { ref } from 'vue';
import { Notify } from 'quasar';
import bus from 'src/utility/bus';

const chatnumberList = [];

for(let i = 0; i < 100000; i++){
    // stringOptions.push({title: 'User' + i , id: i});
    chatnumberList.push(i);
}

const usersList = [];

for(let i = 0; i < 100000; i++){
    // stringOptions.push({title: 'User' + i , id: i});
    usersList.push('User' + i);
}

// console.log(usersList);

const messageStatusOption = ['Open', 'Close'];
const inquiryOption = ['TOP-UP', 'HOW TOs'];

export default {
    setup(){
        const usersOption = ref(usersList);
        const chatnumberOption = ref(chatnumberList);
        const messageStatus = ref('');
        const users = ref('');
        const chatnumber = ref('');
        const messagetext = ref('');
        const attachment = ref('');

        const onCancel = () => {
            Notify.create({
                message: 'Form was cancelled!',
                color: 'red-4',
                icon: 'cancel',
                position: 'top'
            });
            bus.emit('closeAddForm', false, 'cancel');
        };
        const onSubmit = () => {
            Notify.create({
                message: 'Form submitted successfully!',
                color: 'green-4',
                icon: 'check_circle',
                position: 'top'
            });
            bus.emit('closeAddForm', false, 'submit');
        };
        return {
            onSubmit, onCancel,
            attachment,
            messagetext,
            messageStatus,
            users,
            chatnumber,
            chatnumberOption,
            messageStatusOption,
            usersOption,
            inquiryOption: ref(inquiryOption),
            userFilterFn (val, update) { //filterFn (val, update, abort) {
                // call abort() at any time if you can't retrieve data somehow
                setTimeout(() => {
                    update(() => {
                        if (val === '') {
                            usersOption.value = usersList
                        }
                        else {
                            const needle = val.toLowerCase()
                            usersOption.value = usersList.filter(v => v.toLowerCase().indexOf(needle) > -1)
                        }
                    })
                }, 1500)
            },
            userAbortFilterFn () {
                // console.log('delayed filter aborted')
            },
            chatnumberFilterFn (val, update) { //filterFn (val, update, abort) {
                // call abort() at any time if you can't retrieve data somehow
                setTimeout(() => {
                    update(() => {
                        if (val === '') {
                            chatnumberOption.value = chatnumberList
                        }
                        else {
                            const needle = val.toLowerCase()
                            chatnumberOption.value = chatnumberList.filter(v => v.toLowerCase().indexOf(needle) > -1)
                        }
                    })
                }, 1500)
            },
            chatnumberAbortFilterFn () {
                // console.log('delayed filter aborted')
            }
        }
    }
}
</script>