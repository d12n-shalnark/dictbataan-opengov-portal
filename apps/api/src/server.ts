import express from "express"
import cors from "cors"
import { fetchCSV } from "./services/csvService.js"

const app = express()
const PORT = 3000

app.use(cors())

app.get("/api/health", (req, res) => {
  res.json({
    status: "API is running"
  })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

app.get("/api/csv", async (req, res) => {
  try {
    const { url } = req.query

    if (!url) {
      return res.status(400).json({ error: "CSV URL required" })
    }

    const data = await fetchCSV(url as string)

    res.json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Failed to fetch CSV" })
  }
})