<template>
  <div id="app">
    <Pagination />
    <WeekDay />
    <GridCalendar />
    <EventModal/>
  </div>
</template>

<script>
import GridCalendar from "././components/GridCalendar/index.vue";
import WeekDay from "././components/WeekDay/index.vue";
import Pagination from "././components/Pagination/index.vue";
import EventModal from "././components/EventModal/index.vue";

export default {
  name: "App",
  components: {
    WeekDay,
    GridCalendar,
    Pagination,
    EventModal
  },
};
</script>
