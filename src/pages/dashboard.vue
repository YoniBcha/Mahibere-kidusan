<template>
  <div class="mt-20 ml-5">
    <MainNav class="" />
    <div class="grid grid-cols-3 gap-3 mr-3">
      <div class="grid gird-col-3 bg-[#f5f5f5] mt-5 rounded-md">
        <div class="flex flex-col justify-between py-4 pl-3">
          <div class="text-xl">Total members</div>
          <div class="">
            <p class="font-bold text-5xl mb-1">12,123</p>
            <p class="text-xs">1.23% increase from last month</p>
          </div>
        </div>
        <div class="col-start-2 col-span-2 -ml-2">
          <apexchart
            :options="chartOptions"
            :series="seriesData"
            type="line"
            height="160"
          />
        </div>
      </div>
      <div class="grid gird-col-3 bg-[#f5f5f5] mt-5 rounded-md">
        <div class="flex flex-col justify-between py-4 pl-3">
          <div class="text-xl">Total classes</div>
          <div class="">
            <p class="font-bold text-5xl mb-1">1,123</p>
            <p class="text-xs">1.23% increase from last month</p>
          </div>
        </div>
        <div class="col-start-2 col-span-2 -ml-2">
          <apexchart
            :options="chartOptions"
            :series="seriesData"
            type="line"
            height="160"
          />
        </div>
      </div>
      <div class="grid gird-col-3 bg-[#f5f5f5] mt-5 rounded-md">
        <div class="flex flex-col justify-between py-4 pl-3">
          <div class="text-xl">Total woredas</div>
          <div class="">
            <p class="font-bold text-5xl mb-1">22,123</p>
            <p class="text-xs">1.23% increase from last month</p>
          </div>
        </div>
        <div class="col-start-2 col-span-2 -ml-2">
          <apexchart
            :options="chartOptions"
            :series="seriesData"
            type="line"
            height="160"
          />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-3 mr-3 mt-20">
      <div class="">
        <linegraph />
      </div>
      <div>
        <pichart />
      </div>
    </div>
  </div>
</template>

<script>
import apexchart from "vue3-apexcharts";

import MainNav from "@/components/mainNav.vue";
import linegraph from "@/components/linegraph.vue";
import pichart from "@/components/pichart.vue";

export default {
  name: "DashboardPage",
  components: { MainNav, apexchart, linegraph, pichart },
  data() {
    return {
      chartOptions: {
        chart: {
          id: "line-chart",
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
        grid: {
          show: false,
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
