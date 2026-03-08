import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const data = [
  { name: "Balanga", population: 104000 },
  { name: "Orani", population: 70000 },
  { name: "Hermosa", population: 65000 },
  { name: "Dinalupihan", population: 118000 },
]

export default function SampleChart() {
  return (
    <div className="w-full h-75">
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="population" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}