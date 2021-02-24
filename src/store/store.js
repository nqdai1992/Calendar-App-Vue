import Vue from 'vue';
import Vuex from 'vuex';
import dayjs from 'dayjs';

Vue.use(Vuex);

let currentYear = dayjs().year();
let currentMonth = dayjs().month() + 1;
window.dayjs = dayjs;
export const store = new Vuex.Store({
    state: {
        currentYear,
        currentMonth,
        eventModalPositionX: 0,
        eventModalPositionY: 0,
        eventModalActive: false,
        events: [
            { description: 'Go to the gym', date: dayjs('2020-02-10', 'YYYY-MM-DD') }
        ],
        eventFormDate: dayjs()
    },
    getters :{
        getCurrentYear(state) {
            return state.currentYear;
        },
        getCurrentMonth(state) {
            return state.currentMonth;
        },
    },
    mutations: {
        setCurrentMonth(state, payload) { // payload will be be any data that the component wants to send
            state.currentMonth = payload;
        },
        setCurrentYear(state, payload) {
            state.currentYear = payload;
        },
        eventModalPosition(state,payload) {
            state.eventModalPositionX = payload.x;
            state.eventModalPositionY = payload.y;
        },
        eventFormActive(state,payload) {
            state.eventModalActive = payload;
        },
        addEvent(state,payload) {
            state.events.push({
                description:payload,
                date: state.eventFormDate
            })
        },
        eventFormDate(state, payload) {
            state.eventFormDate = payload;
        }
    }
})