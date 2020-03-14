<template>
  <div>
    <h1>Events Listing</h1>
    <event-card></event-card>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'
export default {
  components: {
    'event-card': EventCard
  }
}
</script>

<style></style>
