import { ChangeEvent } from "react"
import { debounce } from "lodash"
import { useGiphyImagesStore } from "@/stores/giphy-images-store"
import { useToast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"

export function ImageSearchInput() {
  const { newSearch } = useGiphyImagesStore()

  const { toast } = useToast()
  // event handlers
  const handleSearchInputChange = debounce(
    async (e: ChangeEvent<HTMLInputElement>) => {
      try {
        const value = e.target.value.trim() || ""
        if (value.length < 3)
          return toast({ title: "please provide valid input" })

        newSearch(value)
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
    <Input
      name="searchTerm"
      placeholder="search for images"
      onChange={handleSearchInputChange}
    />
  )
}
