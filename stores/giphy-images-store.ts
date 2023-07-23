import { create } from "zustand"

type GiphyImagesState = {
  images: string[]
  searchTerm: string
  totalCount: number
  hasNextPage: () => boolean
  newSearch: (searchTerm: string) => Promise<void>
  nextPage: () => Promise<void>
  fetchImages: (searchTerm: string, offset: number) => Promise<void>
}

export const useGiphyImagesStore = create<GiphyImagesState>()((set, get) => ({
  images: [],
  searchTerm: "",
  totalCount: 0,
  hasNextPage: () => get().images?.length < get().totalCount,
  newSearch: async (searchTerm: string) => {
    set({ searchTerm, images: [] })
    await get().fetchImages(searchTerm, 0)
  },
  nextPage: async () => {
    const { searchTerm, images } = get()
    if (images?.length === get().totalCount) throw new Error("No more images")
    await get().fetchImages(searchTerm, images?.length || 0)
  },
  fetchImages: async (searchTerm: string, offset: number = 0) => {
    const url = `${process.env.NEXT_PUBLIC_GIPHY_API_URL}&q=${searchTerm}&limit=25&offset=${offset}&rating=g&lang=e`
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const { data, pagination } = await response.json()
    const images = data
      .map((elem: any) => elem.images?.original?.url)
      .filter(Boolean)
    set((state: GiphyImagesState) => ({
      images: [...state.images, ...images],
      totalCount: pagination.total_count,
    }))
  },
}))
