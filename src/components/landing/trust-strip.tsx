import Image from "next/image"

export default function TrustStrip() {
  return (
    <section className="bg-transparent py-12">
      <div className="container flex flex-col items-center gap-8">
        <h3 className="text-center font-headline text-lg text-muted-foreground">Powering content for innovative brands and startups</h3>
        <div className="w-full overflow-hidden">
          <Image
            src="https://i.postimg.cc/5t0wy7Wn/Zrzut-ekranu-2025-08-25-233622.png"
            alt="Client logos strip"
            width={1000} // Adjust width and height as needed to fit the image and desired animation
            height={60}
            className="animate-slide"
          />
        </div>
      </div>
    </section>
  )
}
