import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import hero from "@/assets/img/Hero_mp4.png";

const HeroSection = () => {
  return (
    <section className="bg-black text-white px-6 py-12 md:py-20">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-sm md:text-base font-normal tracking-wide">
            Eclypse<sup className="text-xs">®</sup>
          </h1>
          <span className="text-sm">© 2025</span>
        </div>

        <div className="rounded-2xl overflow-hidden">
          <img
            src={hero}
            alt="Hero"
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-lg md:text-xl leading-relaxed font-light max-w-3xl">
          Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
        </p>

        <Button
          variant="ghost"
          className="text-white font-normal px-0 hover:bg-white group"
        >
          <span className="underline underline-offset-4">Learn more about Eclypse</span>
          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
