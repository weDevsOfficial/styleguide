<script>
    export default {
        name: "Fetch",
        props: ['url'],
        data() {
            return {
                json: null,
                loading: true
            }
        },
        created() {
            fetch(this.url)
                .then(response => response.json())
                .then(json => {
                    this.json = json
                    this.loading = false
                })
        },
        render() {
            return this.$scopedSlots.default({
                json: this.json,
                loading: this.loading
            })
        }
    };
</script>