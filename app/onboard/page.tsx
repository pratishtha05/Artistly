import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArtistForm from "@/components/ArtistForm";

export default function OnboardPage() {
  return (
    <main className="min-h-screen flex flex-col ">
      <Header />
      <div className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Artist Onboarding</h1>
        <ArtistForm />
      </div>
      <Footer />
    </main>
  );
}
