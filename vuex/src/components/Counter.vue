<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
    export default {
        methods: {
            increment(payload) {
                // this.$emit('updated', 1);
                this.$store.commit('increment', payload);
            },
            decrement(payload) {
                // this.$emit('updated', -1);
                this.$store.commit('decrement', payload);
            }
        }
    }
</script>
