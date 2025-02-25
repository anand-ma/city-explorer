"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function CityForm() {
  const [city, setCity] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    setIsLoading(true)
    e.preventDefault()
    if (!city.trim()) return;
    try {
      const encodedCity = encodeURIComponent(city.trim())
      router.push(`/attractions/${encodedCity}`)
    } catch (error) {
      console.error('Navigation error:', error)
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md shadow-lg border-2 border-green-500 bg-gray-900 transition-shadow hover:shadow-xl hover:shadow-purple-900/20">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-green-400">Find City Attractions</CardTitle>
        <CardDescription className="text-center text-purple-200">
          Discover amazing attractions in your favorite cities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="w-full bg-gray-800 border-green-600 text-purple-50 placeholder-purple-300 focus:ring-green-500 focus:border-purple-400"
            required
            disabled={isLoading}
          />
          <Button 
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-600 text-white border border-green-500"
            variant="default"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Explore Attractions'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

