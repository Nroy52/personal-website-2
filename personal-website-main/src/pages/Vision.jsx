import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import jprLogo from "@/assets/jaisirlogo.png";

const COLORS = {
  bgDark: "#0B0B0D",
  bgCard: "#14161B",
  text: "#E8E8EC",
  gold: "#CDA434",
  blue: "#4169E1",
  subtext: "#B3B3B8",
  stroke: "#1F2128",
};

const collapsedHeight = "max-h-16"; // keeps icon + title visible when collapsed
const expandedHeight = "max-h-40"; // allows description to slide in

export default function Vision() {
  const [activePillar, setActivePillar] = useState(null);

  const pillarsLeft = [
    { icon: "fa-tooth", title: "Dentistry", desc: "Global leader in implantology and laser dentistry." },
    { icon: "fa-globe", title: "Entrepreneurship", desc: "Founder & CEO of multi-sector enterprises." },
    { icon: "fa-robot", title: "AI Innovation", desc: "Building next-gen AI assistants and platforms." },
    { icon: "fa-medal", title: "Leadership", desc: "Military discipline shaping global ventures." },
    { icon: "fa-cart-shopping", title: "Market", desc: "Curating premium marketplaces worldwide." },
  ];

  const pillarsRight = [
    { icon: "fa-city", title: "Real Estate", desc: "Designing eco-villages and smart cities." },
    { icon: "fa-graduation-cap", title: "Education", desc: "Mentoring future leaders and talents." },
    { icon: "fa-podcast", title: "Podcasts", desc: "Sharing culture and history via media." },
    { icon: "fa-seedling", title: "Philanthropy", desc: "Transforming communities with social projects." },
    { icon: "fa-chess-king", title: "Strategy", desc: "Architecting visions for societies and businesses." },
  ];

  const togglePillar = (title) => {
    setActivePillar((prev) => (prev === title ? null : title));
  };

  const renderPillar = (pillar) => {
    const isActive = activePillar === pillar.title;

    return (
      <div
        key={pillar.title}
        onClick={() => togglePillar(pillar.title)}
        className={`cursor-pointer rounded-xl border p-4 transition-all duration-300 overflow-hidden text-center shadow-md hover:shadow-lg ${
          isActive ? expandedHeight : collapsedHeight
        }`}
        style={{ background: COLORS.bgCard, borderColor: COLORS.stroke }}
      >
        <div className="flex items-center justify-center gap-3">
          <i className={`fa-solid ${pillar.icon} text-lg`} style={{ color: COLORS.gold }} />
          <h3 className="text-base font-semibold" style={{ color: COLORS.text }}>
            {pillar.title}
          </h3>
        </div>
        <p
          className={`text-sm mt-2 text-center transition-opacity duration-300 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
          style={{ color: COLORS.subtext }}
        >
          {pillar.desc}
        </p>
      </div>
    );
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: COLORS.bgDark, color: COLORS.text }}
    >
      <nav
        className="fixed top-0 left-0 right-0 h-[70px] flex items-center justify-end px-6 border-b z-50"
        style={{ background: `${COLORS.bgCard}f2`, borderColor: COLORS.stroke }}
      >
        <Button
          className="px-6 py-2 font-semibold"
          style={{ background: COLORS.gold, color: COLORS.bgDark }}
        >
          Login
        </Button>
      </nav>

      <main className="flex-1 mt-[70px] flex flex-col items-center text-center px-4 py-10 gap-10">
        <div className="w-full max-w-md mx-auto">
          <img
            src={jprLogo}
            alt="Logo"
            className="w-28 h-28 md:w-40 md:h-40 mx-auto"
          />
        </div>

        <div className="w-full max-w-2xl mx-auto space-y-2">
          <h1
            className="text-3xl md:text-5xl font-bold"
            style={{ color: COLORS.gold }}
          >
            William Reddy
          </h1>
          <p className="text-base md:text-xl" style={{ color: COLORS.subtext }}>
            Strategic partner to the world's visionaries
          </p>
          <p className="text-base md:text-xl" style={{ color: COLORS.subtext }}>
            I do not chase scale. I sculpt legacy.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
          {pillarsLeft.map(renderPillar)}
          {pillarsRight.map(renderPillar)}
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Button
            variant="outline"
            className="w-full px-8 py-4 font-semibold text-lg border-2"
            style={{ borderColor: COLORS.gold, color: COLORS.gold, background: "transparent" }}
          >
            Signup
            <ArrowRight className="ml-2 inline h-5 w-5" />
          </Button>
        </div>
      </main>

      <footer
        className="h-20 flex flex-col justify-center items-center text-center text-sm border-t px-4"
        style={{ background: COLORS.bgCard, borderColor: COLORS.stroke, color: COLORS.subtext }}
      >
        <div>
          <strong>William Reddy HQ</strong> | London, UK
        </div>
        <div>Email: hello@anujareddy.com | Phone: +44 123 456 789</div>
        <div className="flex gap-3 mt-1">
          <i className="fab fa-linkedin text-lg" style={{ color: COLORS.gold }} />
          <i className="fab fa-twitter text-lg" style={{ color: COLORS.gold }} />
          <i className="fab fa-facebook text-lg" style={{ color: COLORS.gold }} />
          <i className="fab fa-instagram text-lg" style={{ color: COLORS.gold }} />
        </div>
        <div className="mt-1">&copy; 2025 William Reddy. All Rights Reserved.</div>
      </footer>
    </div>
  );
}

