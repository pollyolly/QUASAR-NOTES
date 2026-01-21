<template>
   <div class="flex">
        <q-ajax-bar
            ref="bar"
            position="top"
            color="accent"
            size="10px"
            :delay="delay" 
        />
        <div class="q-pa-sm">
            <q-btn label="Add Inquiry" color="primary" @click="showAddForm = true" />
        </div>
        <q-dialog v-model="showEditForm" persistent maximize='true'>
            <AdminInquiryFormEdit :propsEditData=propsEditData />
        </q-dialog>
        <q-dialog v-model="showAddForm" persistent>
            <AdminInqiuryFormAdd />
        </q-dialog>
        <q-dialog v-model="showDeleteForm" persistent>
            <AdminInquiryFormDelete :propsDeleteData=propsDeleteData />
        </q-dialog>
        <div class="q-pa-sm" style="width: 100%">
            <!-- <div class="text-subtitle1 q-pa-sm">Use <kbd>SHIFT</kbd> to select / deselect a range and <kbd>CTRL</kbd> to add to selection</div> -->
            <q-table
                flat bordered
                ref="tableRef"
                title="Inquiry List"
                :rows="rows"
                :columns="columns"
                :loading="loading"
                :filter="filter"
                row-key="id"
                selection="multiple"
                v-model:selected="selected"
                @selection="handleSelection"
            >
            <template v-slot:top>
                <q-btn color="negative" :disable="loading" label="Delete" @click="deleteSelect" />
                <!-- <q-btn v-if="rows.length !== 0" class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" /> -->
                <q-space />
                <q-input borderless dense debounce="300" color="primary" v-model="filter" placeholder="Search">
                <template v-slot:append>
                    <q-icon name="search" />
                </template>
                </q-input>
            </template>
            <template v-slot:header-selection="scope">
                <q-checkbox v-model="scope.selected" />
            </template>
            <template v-slot:body-selection="scope">
                <q-checkbox :model-value="scope.selected" @update:model-value="(val, evt) => { Object.getOwnPropertyDescriptor(scope, 'selected').set(val, evt) }" />
            </template>
            <!-- <template v-slot:top-right>
                <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
                <template v-slot:append>
                    <q-icon name="search" />
                </template>
                </q-input>
            </template> -->
             <template v-slot:body-cell-chatnumber="props">
                <q-td :props="props">
                    <q-btn unelevated color="primary" :label="props.row.chatnumber" to="message"/>
                </q-td>
             </template>
            <template v-slot:body-cell-action="props">
                <q-td :props="props">
                    <q-btn
                        dense
                        round
                        flat
                        icon="edit"
                        @click="editRow(props.row)"
                        color="primary"
                        class="q-ml-sm"
                    />
                    <q-btn
                        dense
                        round
                        flat
                        icon="delete"
                        @click="deleteRow(props.row)"
                        color="negative"
                        class="q-ml-sm"
                        />
                </q-td>
            </template>
            </q-table>
        </div>
    </div>
</template>
<script>
import { ref, toRaw, nextTick } from 'vue';
import AdminInqiuryFormAdd from 'src/forms/AdminInquiryForm/AdminInquiryFormAdd.vue';
import AdminInquiryFormEdit from 'src/forms/AdminInquiryForm/AdminInquiryFormEdit.vue';
import AdminInquiryFormDelete from 'src/forms/AdminInquiryForm/AdminInquiryFormDelete.vue';
import bus from 'src/utility/bus';

const columns = [
  { name: 'title', label: 'Title', field: 'title', sortable: true },
  { name: 'description', label: 'Description', field: 'description', sortable: true },
  { name: 'status', label: 'Status', field: 'status', sortable: true },
  { name: 'createddate', label: 'Created Date', field: 'createddate', sortable: true },
  { name: 'updateddate', label: 'Updated Date', field: 'updateddate', sortable: true},
  { name: 'action', label: 'Action', field: 'action', sortable: true }
];

const rows = [
    {
        title: 'Add Token',
        description: 'Request token to be added in user account.',
        status: 'Active',
        createddate: '2026/01/08',
        updateddate: '2026/01/04',
        action: ''
    },
    {
        title: 'Use System',
        description: "Request assistance on how to use the system.",
        status: 'Inactive',
        createddate: '2026/01/08',
        updateddate: '2026/01/04',
        action: ''
    },
    {
        title: 'Create Account',
        description: "Request to create account.",
        status: 'Inactive',
        createddate: '2026/01/08',
        updateddate: '2026/01/04',
        action: ''
    }
];
    const showAddForm = ref(false);
    const showEditForm = ref(false);
    const showDeleteForm = ref(false);
    const deleteSelect = ref(null);
    const bar = ref(0);
    const delay = ref(3000);
    const triggerLoading = () => {
        const barRef = bar.value;
        barRef.start();
        setTimeout(()=>{
            const barRef = bar.value;
            if(barRef) {
                barRef.stop();
            }
        }, Math.random() * 3000 + 1000);
    }
export default {
    components:{
        AdminInquiryFormDelete,
        AdminInqiuryFormAdd,
        AdminInquiryFormEdit
    },
    mounted(){
        bus.on('closeEditForm', (status, type) => {
            showEditForm.value = status;
            console.log('Event Bus', status);
            if(type == 'submit'){
                triggerLoading();
            }
        });
        bus.on('closeAddForm', (status, type) => {
            showAddForm.value = status;
            console.log('Event Bus', status);
            if(type == 'submit'){
                triggerLoading();
            }
        });
    },
    setup () {
        const loading         = ref(false);
        const tableRef        = ref();
        const selected        = ref([]);
        const filter          = ref('');
        const propsEditData   = ref({});
        const propsDeleteData = ref({});
        let storedSelectedRow;

        const editRow = (row) => {
            propsEditData.value.messagetitle = row.title;
            propsEditData.value.messagetext = row.description;
            propsEditData.value.messagestatus = row.status;
            showEditForm.value = true;
        }
        const deleteRow = (row) => {
            propsDeleteData.value.title = row.title;
            showDeleteForm.value = true;
        }
    return {
        delay,
        bar,
        triggerLoading,
        deleteSelect,
        showAddForm,
        showEditForm,
        showDeleteForm,
        propsEditData,
        propsDeleteData,
        editRow,
        deleteRow,
        loading,
        tableRef,
        selected,
        columns,
        rows,
        filter,
        handleSelection ({ rows, added, evt }) {
        // ignore selection change from header of not from a direct click event
        if (rows.length !== 1 || evt === void 0) return

        const oldSelectedRow = storedSelectedRow
        const [newSelectedRow] = rows
        const { ctrlKey, shiftKey, metaKey } = evt
        if (shiftKey !== true) {
          storedSelectedRow = newSelectedRow
        }
        // wait for the default selection to be performed
        nextTick(() => {
          if (shiftKey === true) {

            const tableRows = tableRef.value.filteredSortedRows
            let firstIndex = tableRows.indexOf(oldSelectedRow)
            let lastIndex = tableRows.indexOf(newSelectedRow)
            
            if (firstIndex < 0) {
              firstIndex = 0
            }

            if (firstIndex > lastIndex) {
              [ firstIndex, lastIndex ] = [ lastIndex, firstIndex ]
            }
            const rangeRows = tableRows.slice(firstIndex, lastIndex + 1)
            // we need the original row object so we can match them against the rows in range
            const selectedRows = selected.value.map(toRaw)

            selected.value = added === true
              ? selectedRows.concat(rangeRows.filter(row => selectedRows.includes(row) === false))
              : selectedRows.filter(row => rangeRows.includes(row) === false)
          }
          else if ((ctrlKey || metaKey) !== true && added === true) {
            selected.value = [newSelectedRow]
          }
        })
      }
    }
  }
}
</script>