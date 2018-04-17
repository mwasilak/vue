<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by:200, duration:500})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by:100, duration:250})">Decrement</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ])
        }
    }
</script>
