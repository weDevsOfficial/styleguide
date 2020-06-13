<template>
  <section>
    <h1>DateTimePicker</h1>
    <p>This DateTimePicker component has the following features: </p>
    <ol>
      <li>Date Picker</li>
      <li>Time Picker</li>
      <li>Date Time Picker</li>
      <li>Date Range Picker</li>
      <li>Multi Date Picker</li>
    </ol>
    <h4>Examples:</h4>
    <div class="sep">
      <h3>1. Date Picker:</h3>
      <p><code>{{ datePickerSample }}</code></p>
      <date-time-picker v-model="datePicker" />
      <!--  Or, <date-time-picker v-model="dateTime" date />  -->
    </div>

    <div class="sep">
      <h3>2. Time Picker:</h3>
      <p><code>{{ timePickerSample }}</code></p>
      <date-time-picker v-model="timePicker" time />
    </div>

    <div class="sep">
      <h3>3. Date Time Picker:</h3>
      <p><code>{{ dateTimePickerSample }}</code></p>
      <date-time-picker v-model="dateTimePicker" date-time />
    </div>

    <div class="sep">
      <h3>4. Date Range Picker (v-model as string):</h3>
      <p><code>{{ dateRangePickerStringSample }}</code></p>
      <date-time-picker v-model="dateRangePickerString" :options="{mode: 'range'}" as-string />
    </div>

    <div class="sep">
      <h3>5. Date Range Picker (v-model as array):</h3>
      <p><code>{{ dateRangePickerArraySample }}</code></p>
      <date-time-picker v-model="dateRangePickerArray" :options="{mode: 'range'}" />
    </div>

    <div class="sep">
      <h3>6. Multi Date Picker (v-model as string):</h3>
      <p><code>{{ multiDatePickerStringSample }}</code></p>
      <date-time-picker v-model="multiDatePickerString" :options="{mode: 'multiple'}" as-string />
    </div>

    <div class="sep">
      <h3>7. Multi Date Picker (v-model as array):</h3>
      <p><code>{{ multiDatePickerArraySample }}</code></p>
      <date-time-picker v-model="multiDatePickerArray" :options="{mode: 'multiple'}" />
    </div>

    <p>Additional configurations may be passed in the <code>options</code> prop <a href="https://flatpickr.js.org/options/">as listed here.</a></p>
    <p>[<strong>Note: To apply a theme, uncomment your prefered theme from <code>app.css</code></strong>]</p>
  </section>
</template>
<script>
    import DateTimePicker from '@/components/DateTimePicker'

    export default {
        components: {
            DateTimePicker
        },
        data() {
            return {
                datePicker: Date.now(),
                timePicker: Date.now(),
                dateTimePicker: Date.now(),
                dateRangePickerString: Date.now(),
                dateRangePickerArray: Date.now(),
                multiDatePickerString: Date.now(),
                multiDatePickerArray: Date.now(),

                datePickerSample: '<date-time-picker v-model="datePicker" />',
                timePickerSample: '<date-time-picker v-model="datePicker" time />',
                dateTimePickerSample: '<date-time-picker v-model="datePicker" date-time />',
                dateRangePickerStringSample: '<date-time-picker v-model="dateRangePickerString" :options="{mode: \'range\'}" as-string />',
                dateRangePickerArraySample: '<date-time-picker v-model="dateRangePickerArray" :options="{mode: \'range\'}" />',
                multiDatePickerStringSample: '<date-time-picker v-model="multiDatePickerString" :options="{mode: \'multiple\'}" as-string />',
                multiDatePickerArraySample: '<date-time-picker v-model="multiDatePickerArray" :options="{mode: \'multiple\'}" />',
            }
        }
    }
</script>
<style scoped>
  .sep {
    margin: 1rem 0 2rem 0;
  }
</style>
