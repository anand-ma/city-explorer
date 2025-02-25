import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AttractionCardProps {
  name: string
  description: string
}

export function AttractionCard({ name, description }: AttractionCardProps) {
  return (
    <Card className="border-2 border-green-500 bg-gray-900 shadow-md 
      hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-2 
      transition-all duration-300 ease-in-out transform">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-green-400">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-purple-200">{description}</p>
      </CardContent>
    </Card>
  )
}

