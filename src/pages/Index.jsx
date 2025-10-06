import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import jprLogo from "@/assets/jaisirlogo.png";
import shadowImage from "@/assets/shadow-image.png";
import { ArrowRight } from "lucide-react";

const COLORS = {
  bgDark: "#0B0B0D",
  text: "#E8E8EC",
  gold: "#CDA434",
  goldDark: "#A5862A",
  subtextGold: "rgba(205,164,52,0.8)",
};

export default function Index() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: COLORS.bgDark, color: COLORS.text }}
    >
      {/* Left silhouette background */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1/3 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${shadowImage})` }}
      />

      {/* Left-to-right dark gradient for focus */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/90 to-black" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full text-center space-y-8">
          {/* Logo + glow */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <img
                src={jprLogo}
                alt="Brand Logo"
                className="w-48 h-48 lg:w-64 lg:h-64 object-contain"
                style={{ filter: `drop-shadow(0 0 40px ${COLORS.subtextGold})` }}
              />
              <div
                className="absolute inset-0 blur-3xl opacity-40"
                style={{
                  background: `radial-gradient(circle, ${COLORS.gold} 0%, transparent 70%)`,
                }}
              />
            </div>
          </div>

          {/* Name */}
          <div className="space-y-6">
            <h1
              className="text-5xl lg:text-7xl font-bold"
              style={{ color: COLORS.text, textShadow: `0 0 20px ${COLORS.subtextGold}` }}
            >
              William Reddy
            </h1>

          </div>

          {/* CTAs */}
          <div className="pt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => navigate("/vision")}
              size="lg"
              className="px-10 py-6 text-lg font-semibold shadow-lg"
              style={{ background: COLORS.gold, color: "#000" }}
            >
              Explore the Vision
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}



