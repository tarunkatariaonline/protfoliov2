import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

export function CompanyMark({
  logo,
  initials,
  name,
  inset = false,
  className
}: {
  logo?: StaticImageData;
  initials: string;
  name: string;
  /** Pad the logo inside the mark — for full-bleed logomarks that
   *  otherwise collide with the container's rounded corners. */
  inset?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative grid size-14 shrink-0 place-items-center overflow-hidden rounded-2xl border shadow-sm",
        logo ? "bg-white" : "bg-card",
        className
      )}
    >
      {logo ? (
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          sizes="56px"
          className={cn(inset ? "object-contain p-1.5" : "object-cover")}
          placeholder="blur"
        />
      ) : (
        <span className="text-brand font-mono text-base font-semibold">
          {initials}
        </span>
      )}
    </div>
  );
}
