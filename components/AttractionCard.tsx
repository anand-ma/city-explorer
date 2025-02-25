import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface AttractionCardProps {
  name: string
  description: string
}

export function AttractionCard({ name, description }: AttractionCardProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

