import { ChangeEvent, useState } from "react"
import { Inter } from "next/font/google"
import { debounce } from "lodash"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { fetchImages } from "@/lib/fetch-images"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const [images, setImages] = useState<string[]>([])
  const { toast } = useToast()
  // event handlers
  const handleSearchInputChange = debounce(
    async (e: ChangeEvent<HTMLInputElement>) => {
      try {
        const value = e.target.value.trim() || ""
        if (value.length < 3)
          return toast({ title: "please provide valid input" })

        const _images = await fetchImages(value)
        setImages(_images)
      } catch (e) {
        toast({
          title: "error",
          description: "something went wrong check the logs",
        })
        console.error(e)
      }
    },
    300
  )

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} space-y-2`}
    >
      <div className="flex w-full flex-col">
        <Input
          name="searchTerm"
          placeholder="search for images"
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {images.map((image) => (
          <img
            key={image}
            src={image}
            alt="no"
            className="w-full"
            tabIndex={0}
          />
        ))}
      </div>
    </main>
  )
}
