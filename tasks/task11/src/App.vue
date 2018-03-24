<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <h3>With filters:</h3>
                <p>{{text | toReverse}}</p>
                <p>{{mixinText | appendLength}}</p>
                <h3>With computed properties:</h3>
                <p>{{reversedText}}</p>
                <p>{{textWithLength}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {textMixin} from './textMixin';

    export default {
        mixins: [textMixin],
        data () {
            return {
                text: 'abcdefghijklmonpqrstuvwxyz'
            };
        },
        filters: {
            toReverse (value) {
                return value.split("").reverse().join("");
            }
        },
        computed: {
            reversedText () {
                return this.text.split("").reverse().join("");
            }
        }
    }
</script>

<style>
</style>
