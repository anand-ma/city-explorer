"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export default function CityForm() {
  const [city, setCity] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (city.trim()) {
      setIsLoading(true)
      const encodedCity = encodeURIComponent(city.trim())
      await router.push(`/attractions/${encodedCity}`)
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md shadow-lg border-2 border-green-200 dark:border-green-800 bg-white dark:bg-gray-900 transition-shadow hover:shadow-xl">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">City Explorer</CardTitle>
        <CardDescription className="text-center">
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
            className="w-full border-green-200 dark:border-green-800 focus:ring-green-500"
            required
            disabled={isLoading}
          />
          <Button 
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white"
            variant="default"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <Spinner size="sm" color="green" />
                <span>Loading...</span>
              </div>
            ) : (
              'Explore Attractions'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

