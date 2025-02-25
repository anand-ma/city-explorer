import Link from "next/link"
import { AttractionCard } from "@/components/AttractionCard"
import OpenAI from 'openai';
import { cache } from 'react';

// Create OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Cache the getAttractions function
const getAttractions = cache(async (city: string): Promise<Array<{ name: string; description: string }>> => {
  try {
    const prompt = `Generate 6 major tourist attractions for ${city}. Return only a JSON array in this exact format, with no additional text or formatting:
[{"name":"Attraction Name","description":"Brief description under 150 characters"}]`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that returns only valid JSON arrays containing tourist attractions."
        },
        {
          role: "user", 
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const content = response.choices[0].message.content?.trim();
    if (!content) {
      throw new Error('No content received from OpenAI');
    }

    // Parse the JSON response
    try {
      const attractions = JSON.parse(content);
      return attractions;
    } catch (parseError) {
      console.error('JSON parsing error:', parseError);
      throw new Error('Invalid JSON response from OpenAI');
    }

  } catch (error) {
    console.error('Error fetching attractions:', error);
    return [{ name: "Error loading attractions", description: "Please try again later" }];
  }
});

// Update the page component to be async
export default async function AttractionsPage({ 
  params 
}: { 
  params: Promise<{ city: string }> 
}) {
  const { city: rawCity } = await params;
  const city = decodeURIComponent(rawCity).toUpperCase();
  const attractions = await getAttractions(city);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 bg-gray-950">
      <h1 className="text-3xl font-semibold mb-6 text-green-400">Exploring {city}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        {attractions.map((attraction, index) => (
          <AttractionCard key={index} name={attraction.name} description={attraction.description} />
        ))}
      </div>
      <Link
        href="/"
        className="px-4 py-2 mt-8 bg-purple-700 text-white rounded-md hover:bg-purple-600 
          border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 
          transition-colors"
      >
        Explore Another City
      </Link>
    </main>
  )
}

