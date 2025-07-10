import Image, { StaticImageData } from "next/image";

interface GradientImageProps {
  src: StaticImageData | string;
  alt?: string;
  size?: number;
  rounded?: string;
}

export function GradientImage({
  src,
  alt = "",
  size = 192,
  rounded = "rounded-[40px]"
}: GradientImageProps) {
  return (
    <div
      className={`bg-animated-gradient relative bg-gradient-to-br from-indigo-500 from-10% via-pink-500 via-30% to-blue-500 to-90% p-[3px] ${rounded}`}
      style={{ width: size, height: size }}
    >
      {/* White mask to create 4px gap */}
      <div className={`absolute inset-[4px] z-10 bg-white ${rounded}`} />

      {/* Image */}
      <div
        className={`relative z-20 overflow-hidden ${rounded} shadow-xl`}
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <Image
          src={src}
          alt={alt}
          className="object-cover"
          placeholder="blur"
          fill
        />
      </div>
    </div>
  );
}
