import { Metadata } from 'next';
import { Button } from '@/components/ui/button';

export async function generateMetadata(): Promise<Metadata> {
  const title = "XnodeOS";
  const description = "XnodeOS is a NixOS-based operating system that focuses on no-code deployment with maximum security built in by default.";
  const url = process.env.NEXT_PUBLIC_URL ?? '';
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [`${url}/hero.png`],
    },
    other: {
      "fc:miniapp": JSON.stringify({
        version: "next",
        imageUrl: `${url}/icon.png`,
        ogTitle: title,
        ogDescription: description,
        ogImageUrl: `${url}/icon.png`,
        button: {
          label: "Get Started",
          url: `${url}/download`,
        },
      }),
    },
  };
}

export default function Home() {
  return (
    <main className="flex flex-col gap-12 px-4 py-8 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
            XnodeOS
          </h1>
          <p className="text-lg md:text-xl animate-fade-in delay-200">
            No-code deployment, maximum security, built on NixOS.
          </p>
          <Button variant="outline" size="lg" className="animate-slide-up delay-400">
            Get Started
          </Button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="/hero.png" alt="XnodeOS Hero" className="w-full max-w-md rounded-xl shadow-2xl animate-zoom-in" />
        </div>
      </section>

      {/* Features Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 rounded-2xl shadow-xl">
        <div className="md:w-1/2 flex justify-center">
          <img src="/features.png" alt="Features" className="w-full max-w-md rounded-xl shadow-2xl animate-zoom-in" />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold animate-fade-in">Key Features</h2>
          <ul className="space-y-2 text-lg animate-fade-in delay-200">
            <li>⚡️ Lightning-fast no-code deployment</li>
            <li>🔒 Hardened security out of the box</li>
            <li>🧩 Seamless integration with NixOS packages</li>
            <li>🌐 Cross-platform support</li>
          </ul>
        </div>
      </section>

      {/* Security Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold animate-fade-in">Built for Security</h2>
          <p className="text-lg animate-fade-in delay-200">
            XnodeOS incorporates state‑of‑the‑art security practices, from immutable system images to
            automatic updates and sandboxed applications.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="/security.png" alt="Security" className="w-full max-w-md rounded-xl shadow-2xl animate-zoom-in" />
        </div>
      </section>

      {/* No-code Deployment Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 p-8 rounded-2xl shadow-xl">
        <div className="md:w-1/2 flex justify-center">
          <img src="/deployment.png" alt="No-code Deployment" className="w-full max-w-md rounded-xl shadow-2xl animate-zoom-in" />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold animate-fade-in">No-code Deployment</h2>
          <p className="text-lg animate-fade-in delay-200">
            Deploy entire systems with a single click. No scripts, no terminal. Just a click and your
            secure environment is ready.
          </p>
          <Button variant="outline" size="lg" className="animate-slide-up delay-400">
            Try Now
          </Button>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-semibold animate-fade-in">Ready to experience XnodeOS?</h2>
        <p className="text-lg animate-fade-in delay-200">
          Join the community and start building secure, no-code systems today.
        </p>
        <Button variant="outline" size="lg" className="animate-slide-up delay-400">
          Join the Community
        </Button>
        <img src="/cta.png" alt="Call to Action" className="w-full max-w-md rounded-xl shadow-2xl animate-zoom-in mt-8" />
      </section>
    </main>
  );
}
