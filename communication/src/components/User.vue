<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <hr>
        <p>Name is {{name}}</p>
        <p>My age : {{age}}</p>
        <button @click="changeName" type="button" name="button">Change my name!</button>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                    :name='name'
                    @nameWasReset = "name = $event"
                    :resetFn="resetName"
                    :userAge="age">
                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                    :userAge="age"
                    @ageWasEdited="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function () {
          return {
            name: 'Max',
            age: 27
          }
        },
        methods: {
          changeName() {
            this.name = 'Anna';
          },
          resetName() {
            this.name = 'Max';
          }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
