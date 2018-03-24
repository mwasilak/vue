<template>
    <div>
        <label for="first-name">First name</label>
        <input type="text"
            id="first-name"
            class="form-control"
            ref="firstName"
            :value="value.firstName"
            @input="nameChanged()">
        <label for="last-name">Last name</label>
        <input type="text"
            id="last-name"
            class="form-control"
            ref="lastName"
            :value="value.lastName"
            @input="nameChanged()">
    </div>
</template>

<script>
export default {
    props: ['value'],
    methods: {
        nameChanged() {
            this.$emit('input', {
                firstName: this.$refs.firstName.value,
                lastName: this.$refs.lastName.value
            });
        }
    }
}
</script>

<style>
</style>
