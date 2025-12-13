import React from 'react'
import { ChartPieDonut } from '../ui/ChartPieDonut';
import { ChartPieStacked } from '../ui/ChartPieStacked';
import { ChartBarLabel } from '../ui/ChartBarLabel';
import { ChartAreaDefault } from '../ui/ChartAreaDefault';
import { ChartLineLabel } from '../ui/ChartLineLabel';
import { ChartRadialLabel } from '../ui/ChartRadialLabel';
import { ChartTooltip } from '../ui/chart';
import { ChartTooltipIndicatorLine } from '../ui/ChartTooltipIndicatorLine';
import { ChartPieDonutText } from '../ui/ChartPieDonutText';

const HomeDashboard = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col px-8 sm:px-10 md:px-30 lg:px-60 py-20 lg:py-50 max-w-7xl ">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl text-center font-bold leading-tight">
          Real-Time Financial Insights That Drive Growth
        </h2>
        <p className=" text-md sm:text-xl text-center text-gray-500 pt-4 leading-6 px-10 sm:px-20 md:px-23 lg:px-30">
          Make confident decisions with data visualizations designed for
          finance—revenue trends, portfolio splits, and performance metrics
          updated in real time.
        </p>
        {/* GRID */}
        <div className="grid gap-4 ">
          {/* <div className="grid grid-cols-2 gap-4 pt-15">
          
            <div
              className="w-full gap-10 h-full rounded-2xl bg-gradient-to-t from-white via-blue-100 to-blue-100 shadow-sm
"
            >
              <ChartPieDonutText />
            </div>
            <div
              className="w-full gap-10 h-full rounded-2xl bg-gradient-to-t from-white via-blue-100 to-blue-100 shadow-sm
"
            >
              <ChartPieDonutText />
            </div>
           
          </div> */}
          {/* 2st ROW — 3 columns */}
          <div className="grid  grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-15">
            {/* Card 1 */}
            <div
              className="w-full sm:col-span-2 md:col-span-1 gap-10 h-full rounded-2xl bg-gradient-to-t from-white via-blue-100 to-blue-100 shadow-sm
"
            >
              <ChartTooltipIndicatorLine />
            </div>

            <div className="w-full gap-10 h-full rounded-2xl  bg-gradient-to-t from-white via-blue-100 to-blue-100 shadow-sm">
              <ChartLineLabel heading="Growth Overview" />
            </div>

            <div className="w-full gap-10 h-full rounded-2xl  bg-gradient-to-t from-white via-blue-100 to-blue-100 shadow-sm">
              <ChartAreaDefault />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="w-full gap-10 h-full rounded-2xl  bg-gradient-to-t from-white via-blue-100 to-blue-100 shadow-sm">
              <ChartPieDonut />
            </div>
            <div className="w-full gap-10 h-full rounded-2xl  bg-gradient-to-t from-white via-blue-100 to-blue-100 shadow-sm">
              <ChartBarLabel />
            </div>
          </div>
        </div>
        {/* <p className="text-xl text-center text-gray-900 pt-9 leading-6 px-40">
          Used by 1200+ users
        </p> */}
      </div>
    </div>
  );
}

export default HomeDashboard
