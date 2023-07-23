import { useRef, useState } from "react"
import Image from "next/image"
import { Inter } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { fetchImages } from "@/lib/fetch-images"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const inputRef = useRef<any>()
  const [images, setImages] = useState<string[]>([])

  const { toast } = useToast()

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const value = inputRef.current?.value.trim() || ""
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
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} space-y-2`}
    >
      <div className={`flex w-full flex-col`}>
        <form className="space-y-2" onSubmit={handleSubmit}>
          <Input ref={inputRef} name="searchTerm" />
          <Button size="sm" type="submit">
            Search
          </Button>
        </form>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {images.map((image) => (
          <img key={image} src={image} alt="no" className="w-full" />
        ))}
      </div>
    </main>
  )
}
