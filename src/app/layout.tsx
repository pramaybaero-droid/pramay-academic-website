import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@/app/globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { profile, siteUrl } from "@/content/profile";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | Granular Mechanics and Computational Simulation`,
    template: `%s | ${profile.name}`
  },
  description:
    "Personal academic website for granular materials, constitutive modelling, wave propagation, DEM, contact mechanics, triaxial simulation, and scientific computing.",
  applicationName: `${profile.name} academic website`,
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: [
    "granular materials",
    "granular mechanics",
    "constitutive modelling",
    "wave propagation",
    "discrete element method",
    "DEM",
    "contact mechanics",
    "Hertz-Mindlin",
    "Cundall-Strack",
    "triaxial testing",
    "IISc Aerospace Engineering",
    "scientific computing"
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} | Granular Mechanics and Computational Simulation`,
    description: profile.identity,
    siteName: `${profile.name} academic website`,
    images: [
      {
        url: "/assets/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${profile.name} academic website preview`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Granular Mechanics`,
    description: profile.identity,
    images: ["/assets/og-image.svg"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070A0E" },
    { media: "(prefers-color-scheme: light)", color: "#F7F8F5" }
  ]
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: profile.affiliation
  },
  worksFor: {
    "@type": "CollegeOrUniversity",
    name: profile.affiliation
  },
  email: profile.email,
  url: siteUrl,
  knowsAbout: profile.researchKeywords
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <Script id="theme-boot" strategy="beforeInteractive">
          {`try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light');document.documentElement.dataset.theme='light';}}catch(e){}`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <ThemeProvider>
          <ScrollProgress />
          <div className="grain-noise" aria-hidden="true" />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
