type Attraction = {
  id: string
  name: string
  description: string
}

export async function getAttractions(city: string): Promise<Attraction[]> {
  // Replace this with actual API call
  return [
    {
      id: '1',
      name: 'Sample Attraction',
      description: `A popular destination in ${city}`
    }
  ]
}