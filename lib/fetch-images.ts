export async function fetchImages(value: string): Promise<string[]> {
  const url = `${process.env.NEXT_PUBLIC_GIPHY_API_URL}&q=${value}&limit=25&offset=0&rating=g&lang=e`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  const { data } = await response.json()
  const images = data
    .map((elem: any) => elem.images?.original?.url)
    .filter(Boolean)
  return images
}
