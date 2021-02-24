<template>
    <div :class="contentClass">
      <div :class="weekClass" v-for="(week,index) in weeks" :key="index">
        <CalendarDay v-for="(day,index) in week" :key="index" :day="day"/>
      </div>
    </div>
</template>

<script src="./index.js"/>

<style lang="scss">
@import "./style.scss";
</style>
