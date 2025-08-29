import Image from "next/image"

export default function TrustStrip() {
  return (
    <section className="bg-transparent py-12">
      <div className="container flex flex-col items-center gap-8">
        <h3 className="text-center font-headline text-lg text-muted-foreground">Powering content for innovative brands and startups</h3>
        <div className="w-full overflow-hidden">
          <div className="flex justify-center">
            <Image
 src="https://i.postimg.cc/5t0wy7Wn/Zrzut-ekranu-2025-08-25-233622.png"
              alt="Client logos strip"
 layout="responsive"
 width={700} // Adjust width and height to fit the image and desired display size
 height={40}
            />
 </div>
 </div>
 </div>
 </section>
 )
}
