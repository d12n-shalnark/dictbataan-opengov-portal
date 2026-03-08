export async function fetchGoogleSheet(sheetId: string) {
  const response = await fetch(
    `http://localhost:3000/api/google-sheet/${sheetId}`
  )

  if (!response.ok) {
    throw new Error("Failed to fetch sheet")
  }

  return response.json()
}