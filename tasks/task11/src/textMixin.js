export const textMixin = {
    data () {
        return {
            mixinText: 'Cat'
        };
    },
    computed: {
        textWithLength () {
            return this.mixinText.concat('('+this.mixinText.length+')');
        }
    }
};
