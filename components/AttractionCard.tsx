import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface AttractionCardProps {
  name: string
  description: string
}

export function AttractionCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="bg-gray-900 border-2 border-green-500 rounded-lg p-6 shadow-md 
      hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-2 
      transition-all duration-300 ease-in-out transform">
      <h2 className="text-xl font-semibold mb-2 text-green-400">{name}</h2>
      <p className="text-purple-200">{description}</p>
    </div>
  )
}

