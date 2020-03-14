<template>
  <div>
    <h1>Events Listing</h1>
    <event-card
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></event-card>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'
import EventService from '@/services/EventService'
export default {
  components: {
    'event-card': EventCard
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    EventService.getEvents()
      .then(response => (this.events = response.data))
      .catch(error => console.log(error))
  }
}
</script>

<style></style>
