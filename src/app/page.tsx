import Image from "next/image";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Logo />
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 leading-tight">
            Emotify
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
            Discover and organize your music through emotions. Create the perfect playlist for every mood.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="text-orange-400 text-4xl mb-4">🎵</div>
            <h3 className="text-xl font-bold mb-2">Emotion-Based Categorization</h3>
            <p className="text-gray-400">Organize your favorite songs by emotions and moods, making it easier to find the perfect track for any moment.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="text-orange-400 text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Smart Playlists</h3>
            <p className="text-gray-400">Let AI create personalized playlists based on your current mood and emotional state.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
            <div className="text-orange-400 text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2">Visual Emotion Map</h3>
            <p className="text-gray-400">Explore your music collection through an intuitive visual interface that maps songs to emotions.</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-gray-800/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">1</span>
            </div>
            <h3 className="font-bold mb-2">Connect</h3>
            <p className="text-gray-400">Link your Spotify account</p>
          </div>
          <div className="text-center">
            <div className="bg-gray-800/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">2</span>
            </div>
            <h3 className="font-bold mb-2">Categorize</h3>
            <p className="text-gray-400">Tag your songs with emotions</p>
          </div>
          <div className="text-center">
            <div className="bg-gray-800/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">3</span>
            </div>
            <h3 className="font-bold mb-2">Discover</h3>
            <p className="text-gray-400">Explore your emotional music map</p>
          </div>
          <div className="text-center">
            <div className="bg-gray-800/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">4</span>
            </div>
            <h3 className="font-bold mb-2">Enjoy</h3>
            <p className="text-gray-400">Create mood-based playlists</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your music experience?</h2>
          <p className="text-gray-300 mb-8">Join Emotify today and discover a new way to connect with your music.</p>
          <button className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}
