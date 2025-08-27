import React from "react";

const chartData = [
  { id: 1, weekDays: "monday", value: 42 },
  { id: 2, weekDays: "tuesday", value: 31 },
  { id: 3, weekDays: "wednesday", value: 54 },
  { id: 4, weekDays: "thursday", value: 24 },
  { id: 5, weekDays: "friday", value: 76 },
  { id: 6, weekDays: "saturday", value: 60 },
  { id: 7, weekDays: "sunday", value: 18 },
];

function CardBottom() {
  const [maxChart] = [...chartData].sort((a, b) => b.value - a.value);

  function chartHeight(h) {
    let { value } = maxChart;
    return `${((h * 100) / value).toFixed(1)}%`;
  }

  return (
    <div className="bg-light pt-8 p-10 rounded-[1.25rem]">
      <h1 className="text-dark-brown font-bold text-[2rem] mb-[4.125rem]">
        Spending - Last 7 days
      </h1>

      <ul className="w-full flex justify-between gap-2">
        {chartData.map((ch) => (
          <li
            key={ch.id}
            className="w-[3.125rem] flex flex-col gap-2 text-center"
          >
            <div className="flex items-end h-[150px] relative">
              <div
                style={{ height: chartHeight(ch.value) }}
                className={`chart-item rounded-[5px] w-full ${
                  ch.value == maxChart.value ? "bg-cyan" : "bg-red"
                } relative`}
              >
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full bg-dark-brown p-2 rounded-[0.25rem] text-light">
                  ${ch.value}
                </span>
              </div>
            </div>
            <span className="w-full">{ch.weekDays.slice(0, 3)}</span>
          </li>
        ))}
                    </ul>
                        <div className="border-t mt-8 pt-8 flex justify-between items-center">
                    <div>
                        <p className="text-sm text-medium-brown">Total this month</p>
                        <p className="text-3xl font-bold text-dark-brown">$478.33</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-bold text-dark-brown">+2.4%</p>
                        <p className="text-xs text-medium-brown">from last month</p>
                    </div>
                </div>
            </div>
        );
    }

export default CardBottom;
