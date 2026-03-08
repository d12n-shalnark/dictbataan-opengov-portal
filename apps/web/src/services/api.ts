export async function fetchCSV(url: string) {
  const response = await fetch(
    `http://localhost:3000/api/csv?url=${encodeURIComponent(url)}`
  )

  if (!response.ok) {
    throw new Error("Failed to fetch CSV")
  }

  return response.json()
}