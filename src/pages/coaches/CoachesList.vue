<template>
<div>cos</div>
<button @click="getCoaches">Coaches</button>
<ul>
    <li v-for="coach in coaches" :key="coach"> {{ coach.firstName }}</li>
</ul>
</template>

<script>
    export default {
        data() {
            return {
                coaches: this.$store.getters.getCoachesList
            }
        },
        methods: {
            getCoaches() {
                this.coaches = this.$store.getters.getCoachesList;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>