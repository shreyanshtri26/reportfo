import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Bajaj Finserv", amount: 35000, percentage: 35 },
  { name: "Shriram Finance", amount: 13000, percentage: 13 },
  { name: "Utkarsh Small Bank Finance", amount: 22000, percentage: 22 },
  { name: "Mahindra Finance", amount: 30000, percentage: 30 },
  
];

const COLORS = ["#6c63ff", "#58cbd3", "#b9c606", "#fa9d16"];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      className="text-xs text-center"
    >
      {`${data[index].amount} (${data[index].percentage}%)`}
    </text>
  );
};

const renderColorfulLegendText = (value, entry, index) => {
  return (
    <span style={{ color: "black", fontSize: "10px" }}>
      {data[index].name}
    </span>
  );
};

const PieChartComponent = () => {
  return (
    <>
      <header className="w-full flex gap-120 px-10 pt-4">
        <h1 className="font-medium">Your FD Portfolio</h1>
        
      </header>

      <ResponsiveContainer width="100%" height={200} className="p-2 mt-5">
        <PieChart>
          <Pie
            data={data}
            cx="50%" 
            cy="50%" 
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100} 
            fill="#8884d8"
            dataKey="amount" 
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend
            iconSize={24}
            layout="vertical"
            verticalAlign="middle"
            align="right"
            formatter={renderColorfulLegendText}
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default PieChartComponent;


