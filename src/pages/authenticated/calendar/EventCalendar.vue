<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12" lg="12">
        <v-sheet height="64">
          <v-toolbar
              flat
          >
            <v-btn
                outlined
                class="mr-4"
                color="grey darken-2"
                @click="setToday"
            >
              Today
            </v-btn>
            <v-btn
                fab
                text
                small
                color="grey darken-2"
                @click="prev"
            >
              <v-icon small>
                mdi-chevron-left
              </v-icon>
            </v-btn>
            <v-btn
                fab
                text
                small
                color="grey darken-2"
                @click="next"
            >
              <v-icon small>
                mdi-chevron-right
              </v-icon>
            </v-btn>
            <v-toolbar-title v-if="$refs.calendar">
              {{getCalendarTitle}}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn-toggle
                dense
                :value="type"
                mandatory
            >
              <v-btn value="day" @click="type = 'day'">
                Day
              </v-btn>
              <v-btn value="week"   @click="type = 'week'">
                Week
              </v-btn>
              <v-btn value="month"  @click="type = 'month'">
                Month
              </v-btn>
            </v-btn-toggle>
          </v-toolbar>
        </v-sheet>
        <v-card elevation="3" height="600">
          <v-calendar
              @click:day="addEvent"
              ref="calendar"
              v-model="focus"
              color="primary"
              :events="events"
              :event-color="getEventColor"
              :type="type"
              @click:event="showEvent"
              @click:more="viewDay"
              @click:date="viewDay"
              @change="updateRange"
          ></v-calendar>
          <v-menu
              style="max-width: 400px !important;"
              v-model="selectedOpen"
              :close-on-content-click="true"
              :activator="selectedElement"
              offset-x
          >
            <v-card
                color="grey lighten-4"
                min-width="350px"
                flat
            >
              <v-toolbar
                  :color="selectedEvent.color"
                  dark
              >
                <v-btn icon @click="editEvent(selectedEvent)">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click="deleteEvent(selectedEvent)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <h4>Time: {{selectedEvent.start|moment("dddd, MMMM Do YYYY")}} - {{selectedEvent.start|moment("dddd, MMMM Do YYYY")}}</h4>
                <span v-html="selectedEvent.details"></span>
              </v-card-text>
              <v-card-actions>
                <v-btn
                    text
                    color="secondary"
                    @click="selectedOpen = false"
                >
                  Cancel
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>
<script>
import moment from 'moment'
import EventForm from "./components/EventForm";

export default {
  data: () => ({
    start:null,
    end:null,
    focus: '',
    type: 'month',
    typeToLabel: {
      month: 'Month',
      week: 'Week',
      day: 'Day',
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: ['#0024ef', '#1A237E', '#4527A0', '#00838F', '#1B5E20', '#1B5E20', '#1B5E20'],
    names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
  }),
  mounted () {
    this.$refs.calendar.checkChange()
  },
  computed:{
      getCalendarTitle(){
        if(this.start&&this.end){
          return moment(this.start.date).format('MMMM Do YYYY')+' - '+moment(this.end.date).format('MMMM Do YYYY');
        }
      }
  },
  methods: {
    addEvent(date){
      const that=this;
      let event={id:null,name:null,color:'',timed:false,start:new Date(date.date),end:new Date(date.date)}
      this.$dialog.show(EventForm, {
        persistent: true,
        width: '500px',
        create: true,
        event: event,
        callback: (event,create) => {
            console.log("event",event);
            console.log("create",create);
            if(create){
              event.id=that.events[that.events.length - 1].id;
              that.events.push(event);
            }
        },
      })
    },
    deleteEvent(event){
      console.log("delete event",event);
      let index = this.events.map(x => {
        return x.id;
      }).indexOf(event.id);
      this.events.splice(index, 1);
    },
    editEvent(event){
      const that=this;
      this.$dialog.show(EventForm, {
        persistent: true,
        width: '500px',
        create: false,
        event: event,
        callback: (event,create) => {
          console.log("event",event);
          console.log("create",create);
          if(!create){
            let index = that.events.map(x => {
              return x.id;
            }).indexOf(event.id);
            that.events.splice(index, 1);
            that.events.push(event);
          }
        },
      })
    },
    viewDay ({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor (event) {
      return event.color
    },
    setToday () {
      this.focus = ''
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        requestAnimationFrame(() => requestAnimationFrame(() => open()))
      } else {
        open()
      }
      nativeEvent.stopPropagation()
    },

    updateRange ({ start, end }) {
      console.log("start date",start);
      console.log("end date",end);
      this.start=start;
      this.end=end;
      const events = []

      const min = new Date(`${start.date}T00:00:00`)
      const max = new Date(`${end.date}T23:59:59`)
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 20)

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0
        const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)

        events.push({
          id:i+1,
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
          details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
        })
      }
      this.events = events
    },
    rnd (a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
  },
}
</script>
<style>
.v-menu__content{
  max-width: 500px !important;
}
</style>