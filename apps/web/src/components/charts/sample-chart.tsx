import { useEffect, useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

import { fetchCSV } from "@/services/api"
import type { PopulationRecord } from "@repo/types"

type CSVRow = {
  Month: string
  "1958": string
  "1959": string
  "1960": string
}

export default function SampleChart() {
  const [data, setData] = useState<PopulationRecord[]>([])

  useEffect(() => {
    async function loadData() {

      const result = await fetchCSV(
        "https://people.sc.fsu.edu/~jburkardt/data/csv/airtravel.csv"
      )
      
      console.log("API RESULT:", result)

      const transformed: PopulationRecord[] = (result as CSVRow[]).map((row) => ({
        name: row.Month,
        population: Number(row["1958"])
      }))

      setData(transformed)
    }

    loadData()
  }, [])

  return (
    <div className="w-full h-[300px]">
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