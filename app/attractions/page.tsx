import { getAttractions } from '@/lib/attractions'

export default async function AttractionsPage({
  searchParams
}: {
  searchParams: { city?: string }
}) {
  if (!searchParams.city) {
    return <div>Please select a city</div>
  }

  const attractions = await getAttractions(searchParams.city)

  return (
    <main className="p-8">
      <h1 className="text-3xl font-semibold mb-6">Attractions in {searchParams.city}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {attractions.map((attraction) => (
          <div key={attraction.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{attraction.name}</h2>
            <p>{attraction.description}</p>
          </div>
        ))}
      </div>
    </main>
  )
}