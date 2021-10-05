<template>
  <DialogCard
      :title="create?'Create Event':'Edit Event'"
      :actions="actions">
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
      <v-text-field
          v-model="eventForm.name"
          class="mt-3"
          dense
          :rules="formRules.required"
          outlined
          label="Name *"
          persistent-hint
          placeholder="Name of the event"
      />
      <v-text-field
          v-model="eventForm.details"
          class="mt-3"
          dense
          :rules="formRules.required"
          outlined
          label="Details *"
          persistent-hint
          placeholder="Details"
      />
      <v-datetime-picker :textFieldProps="{rules:formRules.required,outlined:true,dense:true,placeholder:'Event start datetime'}" label="Start" v-model="eventForm.start"> </v-datetime-picker>
      <v-datetime-picker :textFieldProps="{rules:formRules.required,outlined:true,dense:true,placeholder:'Event end datetime'}" label="End" v-model="eventForm.end"> </v-datetime-picker>
      <v-color-picker
          v-model="eventForm.color"
          flat
      ></v-color-picker>
    </v-form>
  </DialogCard>
</template>
<script>
export default {
  props: {
    create: {
      required: true,
      type: Boolean,
      default: true,
    },
    event: {
      required: false,
      type: Object,
      default: null,
    },
    callback: {
      required: true,
      type: Function,
    },

  },
  data () {
    return {
      valid:true,
      menu: false,
      eventForm:{
        id:null,
        name:null,
        start:new Date(),
        end:new Date(),
        color:'blue',
        timed:false,
        details:null
      },
      formRules: {
        required: [
          v => !!v || 'This field is required',
        ],
      }
    }
  },
  created() {
  },
  computed: {
    actions () {
      return {
        cancel: {
          flat: true,
          text: 'Cancel',
          handle: () => {
            return null
          },
        },
        save: {
          flat: true,
          text: 'Save',
          handle: async () => {
            if (this.$refs.form.validate()) {
              return await this.onSaveClick()
            }else{
              return false;
            }

          },
        },
      }
    },
  },
  watch: {
    event: {
      immediate: true,
      handler (val, oldVal) {
        if (val) {
          this.eventForm.id = val.id;
          this.eventForm.name = val.name;
          this.eventForm.start=val.start;
          this.eventForm.end=val.end;
          this.eventForm.color=val.color;
          this.eventForm.timed=val.timed;
          this.eventForm.details=val.details;
        }
      },
    },
  },
  methods: {
    async onSaveClick() {
      this.callback(this.eventForm,this.create)
    },
  },
}
</script>