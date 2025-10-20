import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Charterstone Homes | Luxury New Homes in Pecan Plantation, TX | Golf Course Community",
  description:
    "Build your dream home in Pecan Plantation's premier golf community. Charterstone Homes offers luxury custom homes perfect for retirees, aviation enthusiasts, and families. Tour our models today.",
  keywords:
    "Pecan Plantation homes, new construction Granbury TX, golf course homes, luxury homes Texas, 55+ communities, aviation community homes, country club living, custom homes DFW, Charterstone Homes, lake homes Texas",
  generator: "v0.app",
  openGraph: {
    title: "Charterstone Homes | Luxury New Homes in Pecan Plantation, TX",
    description: "Build your dream home in Pecan Plantation's premier golf community.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "Charterstone Homes at Pecan Plantation",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Granbury",
                addressRegion: "TX",
                postalCode: "76049",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 32.3665,
                longitude: -97.6903,
              },
              url: "https://charterstonehomes.com",
              telephone: "+1-847-757-5571",
              priceRange: "$$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "18:00",
              },
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
