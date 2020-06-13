<template>
  <input :value="value" ref="dtInput" type="text">
</template>
<script>
    import flatpickr from "flatpickr";
    export default {
        name: 'DateTimePicker',
        props: {
            value: { required: true },
            format: { default: 'Y-m-d' },
            asString: { type: Boolean, default: false },
            time: { type: Boolean, default: false },
            date: { type: Boolean, default: false },
            dateTime: { type: Boolean, default: false },
            options: { default: () => ({}) }
        },
        computed: {
            getFormat() {
                if (this.dateTime) {
                    return 'Y-m-d H:i'
                } else if (this.date) {
                    return 'Y-m-d'
                } else if (this.time) {
                    return 'H:i'
                } else {
                    return null
                }
            }
        },
        mounted() {
            const vm = this;
            flatpickr(vm.$refs.dtInput, {
                onChange: function(selectedDates, dateStr, instance) {
                    if ((vm.options.mode == 'multiple' || vm.options.mode == 'range') && !vm.asString) {
                        const dates = selectedDates.map(date => {
                            const parsed = instance.formatDate(date, vm.getFormat || vm.format)
                            return parsed
                        });
                        vm.$emit('input', dates)
                    } else {
                        vm.$emit('input', dateStr)
                    }
                },
                defaultDate: vm.value,
                enableTime: vm.dateTime || vm.time,
                noCalendar: vm.time,
                dateFormat: vm.getFormat || vm.format,
                ...vm.options
            });
        }
    }
</script>
