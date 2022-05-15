import { Chart } from "react-google-charts";

const options = {
  title: "Percentage of Tickets Available",
  chartArea: { width: "60%", height: 100 },
  isStacked: 'percent',
  bars: 'vertical',
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

export default function MultiBarChart({ data }) {
  const groupData = groupBy(data, 'product');
  console.log('groupData', groupData);
  const newData = [
    ["", "Left", "Sold"],
  ];
  data.forEach(ticket => {
    newData.push([ticket.product.toUpperCase(), ticket.quantity, (20 - ticket.quantity)]);
  });

  return (
    <Chart
      chartType="ColumnChart"
      data={newData}
      options={options}
    />
  );
}
