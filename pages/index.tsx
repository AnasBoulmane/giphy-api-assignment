import { Inter } from "next/font/google"
import { ImageList } from "@/components/image-list"
import { ImageSearchInput } from "@/components/image-search-input"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} space-y-2`}
    >
      <ImageSearchInput />
      <ImageList />
    </main>
  )
}
