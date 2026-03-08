import { useEffect, useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

import { fetchGoogleSheet } from "@/services/api"
import type { PopulationRecord } from "@repo/types"

export default function SampleChart() {
  const [data, setData] = useState<PopulationRecord[]>([])

  useEffect(() => {
    async function loadData() {
      const sheetId =
        "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"

      const result = await fetchGoogleSheet(sheetId)

      setData(result)
    }

    loadData()
  }, [])

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