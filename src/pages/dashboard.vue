<template>
  <div class="mt-20 ml-5">
    <MainNav class="" />
    <div class="grid grid-cols-3">
      <div class="flex justify-center bg-[#f5f5f5] mt-5 rounded-md">
      <div class="">
        <div class="text-lg font-bold">Total members</div>
        <div class="">12,123</div>
      </div>
      <div class="">
        <apexchart
          :options="chartOptions"
          :series="seriesData"
          type="line"
          height="150"
        />
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import MainNav from "@/components/mainNav.vue";
import apexchart from "vue3-apexcharts";

export default {
  name: "DashboardPage",
  components: { MainNav, apexchart },
  data() {
    return {
      chartOptions: {
        chart: {
          id: "line-chart",
          toolbar: {
            show: false, // Hide the toolbar (zoom, reset, etc.)
          },
        },
        xaxis: {
          labels: {
            show: false, // Hide the x-axis labels
          },
          axisBorder: {
            show: false, // Hide the x-axis line
          },
        },
        yaxis: {
          labels: {
            show: false, // Hide the y-axis labels
          },
          axisBorder: {
            show: false, // Hide the y-axis line
          },
        },
        grid: {
          show: false, // Hide the grid lines
        },
      },
      seriesData: [
        {
          name: "Series 1",
          data: [5, 10, 30, 40, 25, 40],
        },
      ],
    };
  },
};
</script>

