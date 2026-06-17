import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedServers } from "@/components/featured-servers"
import { TopicClusters } from "@/components/topic-clusters"
import { StatsBar } from "@/components/stats-bar"
import { AdBanner } from "@/components/AdBanner"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <FeaturedServers />
        <AdBanner />
        <TopicClusters />
      </main>
      <Footer />
    </div>
  )
}
