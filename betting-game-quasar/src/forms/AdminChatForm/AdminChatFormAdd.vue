<template>
    <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Chat</div>
        </q-card-section>
        <!-- Form -->
        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-card-section class="q-pt-none">
            <!-- Input Fields -->
            <q-select v-model="inquiry" hide-selected use-input fill-input :options="inquiryOption" label="Inquiry" />
            <q-select v-model="chatStatus" hide-selected use-input fill-input :options="chatStatusOption" label="Chat Status" />
            <q-select
                v-model="chatBy"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                label="Chat By"
                :options="chatByOption"
                @filter="filterFn"
                @filter-abort="abortFilterFn">
                <template v-slot:no-option>
                <q-item>
                    <q-item-section class="text-grey">
                        No results
                    </q-item-section>
                </q-item>
                </template>
            </q-select>
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


const usersList = [];

for(let i = 0; i < 100000; i++){
    // stringOptions.push({title: 'User' + i , id: i});
    usersList.push('User' + i);
}

console.log(usersList);

const chatStatusOption = ['Open', 'Close'];
const inquiryOption = ['TOP-UP', 'HOW TOs'];

export default {
    setup(){
        const chatByOption = ref(usersList);
        const inquiry = ref('');
        const chatStatus = ref('');
        const chatBy = ref('');

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
            inquiry,
            chatStatus,
            chatBy,
            chatStatusOption,
            chatByOption,
            inquiryOption: ref(inquiryOption),
            filterFn (val, update) { //filterFn (val, update, abort) {
                // call abort() at any time if you can't retrieve data somehow
                setTimeout(() => {
                    update(() => {
                        if (val === '') {
                            chatByOption.value = usersList
                        }
                        else {
                            const needle = val.toLowerCase()
                            chatByOption.value = usersList.filter(v => v.toLowerCase().indexOf(needle) > -1)
                        }
                    })
                }, 1500)
            },
            abortFilterFn () {
                // console.log('delayed filter aborted')
            }
        }
    }
}
</script>