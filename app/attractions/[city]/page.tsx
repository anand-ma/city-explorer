import Link from "next/link"
import { AttractionCard } from "@/components/AttractionCard"

// Updated mock function to include descriptions
function getAttractions(city: string): Array<{ name: string; description: string }> {
  const attractions = {
    "new york": [
      {
        name: "Statue of Liberty",
        description:
          "Iconic symbol of freedom, a colossal neoclassical sculpture on Liberty Island. A gift from France to the United States.",
      },
      {
        name: "Central Park",
        description:
          "Urban oasis spanning 843 acres in the heart of Manhattan. Features lakes, walking paths, and various attractions.",
      },
      {
        name: "Empire State Building",
        description:
          "102-story Art Deco skyscraper in Midtown Manhattan. Offers panoramic views from its observation deck.",
      },
    ],
    paris: [
      {
        name: "Eiffel Tower",
        description:
          "Wrought-iron lattice tower on the Champ de Mars. Symbol of Paris and one of the world's most recognizable structures.",
      },
      {
        name: "Louvre Museum",
        description:
          "World's largest art museum and home to many famous works, including the Mona Lisa. Housed in a historic palace.",
      },
      {
        name: "Notre-Dame Cathedral",
        description:
          "Medieval Catholic cathedral known for its French Gothic architecture. Currently under restoration after 2019 fire.",
      },
    ],
    tokyo: [
      {
        name: "Tokyo Skytree",
        description:
          "Tallest tower in the world and the second tallest structure. Offers observation decks with stunning city views.",
      },
      {
        name: "Senso-ji Temple",
        description: "Ancient Buddhist temple in Asakusa. Tokyo's oldest temple, and one of its most significant.",
      },
      {
        name: "Meiji Shrine",
        description:
          "Shinto shrine dedicated to Emperor Meiji and Empress Shoken. Set in a tranquil forest in the heart of Tokyo.",
      },
    ],
    london: [
      {
        name: "Big Ben",
        description:
          "Iconic clock tower at the north end of the Houses of Parliament. One of London's most recognizable landmarks.",
      },
      {
        name: "Tower Bridge",
        description:
          "Combined bascule and suspension bridge built in the late 19th century. Crosses the River Thames close to the Tower of London.",
      },
      {
        name: "Buckingham Palace",
        description:
          "London residence and administrative headquarters of the monarch of the United Kingdom. Open to visitors during summer.",
      },
    ],
  }
  return attractions[city.toLowerCase()] || [{ name: "No attractions found", description: "Try another city" }]
}

export default function AttractionsPage({ params }: { params: { city: string } }) {
  const city = decodeURIComponent(params.city)
  const attractions = getAttractions(city)

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 bg-background">
      <h1 className="text-3xl font-semibold mb-6 text-text">Exploring {city}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {attractions.map((attraction, index) => (
          <AttractionCard key={index} name={attraction.name} description={attraction.description} />
        ))}
      </div>
      <Link
        href="/"
        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
      >
        Explore Another City
      </Link>
    </main>
  )
}

