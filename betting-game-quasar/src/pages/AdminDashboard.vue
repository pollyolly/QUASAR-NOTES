<template>
    <div class="flex-center row">
        <div class="q-pa-sm">
            <p class="flex flex-center">Users Line Graph</p>
            <usersGraph
                width="500"
                type="line"
                :options="usersOptions"
                :series="userSeries">
            </usersGraph>
        </div>
        <div class="q-pa-sm">
            <p class="flex flex-center">Loses and Wins Graph</p>
            <losewinGraph
                width="500"
                type="bar"
                :options="losewinOptions"
                :series="losewinSeries">
            </losewinGraph>
        </div>
    </div>
</template>
<script>
import VueApexCharts from 'vue3-apexcharts';

export default {
    
    components: {
        usersGraph: VueApexCharts,
        losewinGraph: VueApexCharts
    },
    data () {
    return {
      usersOptions: {
        chart: {
          id: "usersgraph",
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug' ,'Sep', 'Oct', 'Nov', 'Dec'],
        },
      },
      userSeries: [
        {
          name: "Users Per Month",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 78, 90, 34, 45],
        },
      ],
      losewinOptions: {
        chart: {
          id: "losewingraph",
        },
        xaxis: {
          categories: ['Loses', 'Wins'],
        },
      },
      losewinSeries: [
        {
          name: "Loses and Wins",
          data: [30, 40],
        },
      ],
    };
  },
}
</script>