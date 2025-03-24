"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {

          description: " !text-white",

        },
      }}
      style={{
        "--normal-bg": "hsl(232.7, 27.3%, 23.7%)", // background2 from the theme
        "--normal-text": "hsl(204, 23.8%, 95.9%)", // primary1 from the theme
        "--normal-border": "hsl(205.1, 100%, 36.1%)", // button color from the theme
        "--success-bg": "hsl(232.7, 27.3%, 23.7%)",
        "--success-text": "hsl(204, 23.8%, 95.9%)",
        "--success-border": "hsl(34.9, 98.6%, 72.9%)", // accent1 from the theme
        "--error-bg": "hsl(232.7, 27.3%, 23.7%)",
        "--error-text": "hsl(204, 23.8%, 95.9%)",
        "--error-border": "hsl(0, 100%, 50%)", // Adding a red for error states
        "--info-bg": "hsl(232.7, 27.3%, 23.7%)",
        "--info-text": "hsl(204, 23.8%, 95.9%)",
        "--info-border": "hsl(205.1, 100%, 36.1%)",
        "--description": "text-white",
        "--description-text": "hsl(204, 23.8%, 95.9%)", // Description text color
        fontFamily: "'Space Grotesk', sans-serif"
      } as React.CSSProperties}
      {...props}
    />
  )
}

export { Toaster }
