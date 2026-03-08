import axios from "axios"
import { parse } from "csv-parse/sync"

export async function fetchCSV(url: string) {
  const response = await axios.get(url)

  const records = parse(response.data, {
    columns: true,
    skip_empty_lines: true,
    relax_quotes: true,
    relax_column_count: true,
    trim: true
  })

  return records
}