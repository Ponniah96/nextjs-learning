import Image from "next/image";

export default function ImagesPage() {
  return (
    <main>
      <h1>Next.js Image Optimization</h1>

      <Image
        src="/hero.png"
        width={800}
        height={500}
        alt="Hero Image"
      />
      <Image
        src="/hero.png"
        width={800}
        height={500}
        alt="Hero Image"
        placeholder="blur"
        blurDataURL="/hero.jpg"
      />
      {/* <div style={{ position: "relative", width: "100%", height: "300px" }}>

      <Image
        src="/hero.png"
        width={800}
        height={500}
        alt="Hero Image"
        fill
        style={{ objectFit: "cover" }}
      />
      </div> */}

      {/* <Image
  src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
  width={600}
  height={400}
  alt="Remote Image"
/> */}
    {/* <div style={{ position: "relative", width: "100%", height: "300px" }}>
      <Image
        src="/hero.jpg"
        alt="Hero"
        fill
        style={{ objectFit: "cover" }}
      />
    </div> */}
    <Image
  src="/hero.jpg"
  width={800}
  height={500}
  alt="Hero"
  placeholder="blur"
  blurDataURL="/hero.jpg"
/>

      <p>This image is automatically optimized by Next.js.</p>
    </main>
  );
}