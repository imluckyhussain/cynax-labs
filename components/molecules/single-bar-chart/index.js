import { Chart } from "react-google-charts";

const options = {
  title: "Number of Tickets Available",
  chartArea: { width: "80%", height: 50 },
  isStacked: true,
  legend: { position: "bottom" },
  colors: ['#5E7BFD', '#FF9FB1'],
};

const groupBy = (data, type) => data.reduce(
    (result, item) => ({
      ...result,
      [item[type]]: [
        ...(result[item[type]] || []),
        item,
      ],
    }), 
    {},
  );

export default function SingleBarChart({ data }) {
  const groupData = groupBy(data, 'type');
  const newData = [
    ["", "Drinks", "Food"],
    ["", groupData.drinks.length, groupData.food.length],
  ];

  return (
    <Chart
      chartType="BarChart"
      data={newData}
      options={options}
    />
  );
}
