import { Chart } from "react-google-charts";

const options = {
  title: "Percentage of Tickets Available",
  chartArea: { width: "60%", height: 100 },
  isStacked: 'percent',
  bars: 'vertical',
  colors: ['#5E7BFD', '#FF9FB1'],
};

export default function MultiBarChart({ data }) {
  const newData = [
    ["", "Left", "Sold"],
  ];
  data.forEach(ticket => {
    newData.push([ticket.product.toUpperCase(), parseInt(ticket.quantity), (20 - ticket.quantity)]);
  });

  return (
    <Chart
      chartType="ColumnChart"
      data={data.length ? newData : []}
      options={options}
    />
  );
}
