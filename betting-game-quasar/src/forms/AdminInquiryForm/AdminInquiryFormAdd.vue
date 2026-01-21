<template>
    <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Inquiry</div>
        </q-card-section>
        <!-- Form -->
        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-card-section class="q-pt-none">
            <!-- Input Fields -->
            <q-input
                v-model="messagetitle"
                filled-input
                label="Title"
                type="input"
            />
            <q-input
                v-model="messagetext"
                filled-input
                autogrow
                label="Description"
                type="textarea"
            />
            <q-select use-input hide-selected fill-input v-model="messagestatus" :options="messageOptions" label="Status" />
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

const messageStatusList = ['Active', 'Inactive'];

export default {
    setup(){
        const messagetitle = ref('');
        const messagetext = ref('');
        const messageOptions = ref(messageStatusList);

        const onCancel = () => {
            Notify.create({
                message: 'Form was cancelled!',
                color: 'red-4',
                icon: 'cancel',
                position: 'top'
            });
            bus.emit('closeAddForm', false);
        };
        const onSubmit = () => {
            Notify.create({
                message: 'Form submitted successfully!',
                color: 'green-4',
                icon: 'check_circle',
                position: 'top'
            });
            bus.emit('closeAddForm', false);
        };
        return {
            onSubmit, onCancel,
            messagetitle,
            messagetext,
            messageOptions
        }
    }
}
</script>