<template>
  <div class="">
    <h3>Some User Details</h3>
    <p>User has ID: {{$route.params.id}}</p>
    <router-link
            tag="button"
            :to="link"
            class="btn btn-primary">Edit user</router-link>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                link: {
                    name:'userEdit',
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        locale:'en',
                        q:99
                    },
                    hash:'#data'
                }
            }
        },
        beforeRouteEnter (to, from, next) {
            if (true) {
                console.log('Before enter route');
                next();
            } else {
                next(false);
            }
        }
    }
</script>
