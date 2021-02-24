<template>
    <div :class="contentClass">
      <div :class="weekClass" v-for="(week,index) in weeks" :key="index">
        <!-- TODO change the div for weekClass ????-->
        <CalendarDay v-for="(day,index) in week" :key="index" :day="day"/>
        <!-- TODO sa fac formatarea in CalendarDay !fixed-->
        <!-- TODO sa verific aceeasi data daca egala cu cea de astazi !fixed-->
      </div>
    </div>
</template>

<script src="./index.js"/>

<style lang="scss">
@import "./style.scss";
</style>