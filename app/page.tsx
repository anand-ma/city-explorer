import CityForm from "@/components/CityForm"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-background bg-gray-950">
      <h1 className="text-3xl font-semibold text-center text-green-400 mb-6">City Explorer</h1>
      <div className="w-full max-w-md">
        <CityForm />
      </div>
    </main>
  )
}

