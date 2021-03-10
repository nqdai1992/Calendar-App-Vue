export default {
    data() {
        return {
            description: '',
            className: 'event',
        }
    },
    computed: {
        modalClass() {
            return `${this.className}__modal`;
        },
        closeButtonClass() {
            return `${this.className}__close-button`;
        },
        createButtonClass() {
            return `${this.className}__create-button`;
        },
        inputClass() {
            return `${this.className}__input-modal`;
        },
        items() {
            return `${this.className}__items`;
        },
        top() {
            return `${this.$store.state.eventModalPositionY}px`;
        },
        left() {
            return `${this.$store.state.eventModalPositionX}px`;
        },
        active() {
            return this.$store.state.eventModalActive;
        },
        date() {
            return this.$store.state.eventFormDate;
        }
    },
    methods: {
        close() {
            this.$store.commit('eventFormActive', false);
        },
        create() {
            if(this.description != "") {
                this.$store.dispatch('addEvent', this.description).then(()=> {
                    this.description = '';
                    this.$store.commit('eventFormActive', false);
                });
            }
        },
    }
}