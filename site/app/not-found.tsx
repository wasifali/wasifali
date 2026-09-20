import Link from "next/link";
import { Eyebrow, Tile } from "@/components/tile";

export default function NotFound() {
  return (
    <div className="bento">
      <Tile cols={12} rows={2} tone="hero" as="section" className="justify-between p-8 md:p-10">
        <Eyebrow>404</Eyebrow>
        <div className="flex flex-col gap-4">
          <h1 className="text-[36px] font-bold leading-[1] tracking-[-0.035em] md:text-[54px]">That route returned nothing.</h1>
          <Link href="/" className="w-fit rounded-full bg-accent px-4 py-2.5 text-[14px] font-semibold text-bg hover:bg-peach">Back to home</Link>
        </div>
      </Tile>
    </div>
  );
}
