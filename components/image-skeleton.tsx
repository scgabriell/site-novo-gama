interface ImageSkeletonProps {
  width: number
  height: number
  className?: string
}

export function ImageSkeleton({ width, height, className = "" }: ImageSkeletonProps) {
  return (
    <div
      className={`bg-gradient-to-br from-blue-100 via-purple-100 to-teal-100 animate-pulse ${className}`}
      style={{ width, height }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    </div>
  )
}
