import { cn } from "@/lib/utils"
import { ImgHTMLAttributes, SyntheticEvent, useState } from "react"
import { Skeleton } from "./ui/skeleton"

type ImageItemProps = ImgHTMLAttributes<HTMLImageElement> & {}

export function ImageItem({ className, ...props }: ImageItemProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  // event handlers
  const handleOnLoad = (e: SyntheticEvent<HTMLImageElement>) => {
    if (props.onLoad) props.onLoad(e)
    setIsLoaded(true)
  }

  return (
    <div className={className}>
      <img
        {...props}
        tabIndex={0}
        onLoad={handleOnLoad}
        className={cn("w-full", {
          "h-0": !isLoaded,
        })}
      />
      {!isLoaded && (
        <Skeleton className="w-full pt-[100%]" aria-label="loading image" />
      )}
    </div>
  )
}
