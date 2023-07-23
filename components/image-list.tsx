import { useGiphyImagesStore } from "@/stores/giphy-images-store"

export function ImageList() {
  const { images } = useGiphyImagesStore()

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
      {images.map((url, index) => (
        <img key={index} src={url} alt="" className="w-full" tabIndex={0} />
      ))}
    </div>
  )
}
