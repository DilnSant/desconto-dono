import { Video } from "lucide-react"

interface LogoProps {
  variant?: "full" | "icon" | "monochrome"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Logo({ variant = "full", size = "md", className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl",
  }

  if (variant === "icon") {
    return (
      <div className={`${sizeClasses[size]} bg-blue-500 rounded-lg flex items-center justify-center ${className}`}>
        <Video className={`${size === "sm" ? "w-3 h-3" : size === "md" ? "w-5 h-5" : "w-7 h-7"} text-white`} />
      </div>
    )
  }

  if (variant === "monochrome") {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <div className={`${sizeClasses[size]} bg-gray-800 rounded-lg flex items-center justify-center`}>
          <Video className={`${size === "sm" ? "w-3 h-3" : size === "md" ? "w-5 h-5" : "w-7 h-7"} text-white`} />
        </div>
        <span className={`${textSizeClasses[size]} font-bold text-gray-800`}>Desconto do Dono</span>
      </div>
    )
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`${sizeClasses[size]} bg-blue-500 rounded-lg flex items-center justify-center`}>
        <Video className={`${size === "sm" ? "w-3 h-3" : size === "md" ? "w-5 h-5" : "w-7 h-7"} text-white`} />
      </div>
      <span className={`${textSizeClasses[size]} font-bold text-gray-800`}>
        <span className="text-blue-500">Desconto</span> do <span className="text-gold-500">Dono</span>
      </span>
    </div>
  )
}
