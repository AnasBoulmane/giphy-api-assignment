import { useState } from "react"
import { useGiphyImagesStore } from "@/stores/giphy-images-store"
import { Button } from "./ui/button"

export function ImageList() {
  const [loadedImages, setLoadedImages] = useState(0)
  const { images, hasNextPage, nextPage } = useGiphyImagesStore()
  const hasMoreImages = hasNextPage()
  // event handlers
  const onLoadMore = () => nextPage()
  const handleImageLoad = () => {
    setLoadedImages((prevCount) => prevCount + 1)
  }

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
      {images.map((url, index) => (
        <img
          key={index}
          src={url}
          alt=""
          className="w-full"
          tabIndex={0}
          onLoad={handleImageLoad}
        />
      ))}
      {hasMoreImages && (
        <Button
          onClick={onLoadMore}
          disabled={loadedImages < images.length}
          className="col-span-full justify-self-center"
        >
          load more
        </Button>
      )}
    </div>
  )
}
