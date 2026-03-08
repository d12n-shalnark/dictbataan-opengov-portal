import express from "express"
import cors from "cors"

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