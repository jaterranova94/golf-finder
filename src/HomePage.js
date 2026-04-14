import React from "react";
const HomePage = ({ onEnter }) => {
  return (
<div style={{
      height: "100dvh", width: "100vw",
      background: "#060e06",
      fontFamily: "'Georgia', serif",
      color: "#e8f0e8",
      display: "flex",
      flexDirection: "column",
      overflowY: "auto",
    }}>
      {/* Hero */}
<div style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "60px 24px 40px",
        textAlign: "center",
        borderBottom: "1px solid #1a2e1a",
      }}>
<div style={{ fontSize: 48, marginBottom: 16 }}>⛳</div>
<h1 style={{
          fontSize: 36, fontWeight: 700, margin: "0 0 8px",
          letterSpacing: "-0.02em", color: "#e8f0e8",
        }}>
          FairwayFinder
</h1>
<div style={{
          fontSize: 12, letterSpacing: "0.15em",
          textTransform: "uppercase", color: "#4a6a4a",
          marginBottom: 24,
        }}>
          Massachusetts Golf — Simplified
</div>
<p style={{
          fontSize: 17, lineHeight: 1.7, color: "#8aaa8a",
          maxWidth: 480, margin: "0 0 36px",
        }}>
          Finding a tee time in the Boston area shouldn't mean visiting
          a dozen different websites. FairwayFinder puts every public
          course, price, and available tee time in one place — on a map.
</p>
<button
          onClick={onEnter}
          style={{
            background: "#7db87d", color: "#060e06",
            border: "none", borderRadius: 12,
            padding: "16px 40px", fontSize: 17,
            fontWeight: 700, cursor: "pointer",
            fontFamily: "'Georgia', serif",
            letterSpacing: "0.02em",
            boxShadow: "0 4px 20px rgba(125,184,125,0.3)",
          }}
>
          Find Tee Times →
</button>
<div style={{ fontSize: 12, color: "#3a5a3a", marginTop: 12 }}>
          Free · No account required · Boston area
</div>
</div>
      {/* Why section */}
<div style={{ padding: "40px 24px", borderBottom: "1px solid #1a2e1a" }}>
<h2 style={{ fontSize: 20, fontWeight: 700, color: "#b8d8b8", marginBottom: 24, textAlign: "center" }}>
          Why FairwayFinder?
</h2>
<div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 480, margin: "0 auto" }}>
<Feature
            icon="🗺️"
            title="See Every Course on a Map"
            desc="Stop Googling courses one by one. See all public courses near you at once, with starting prices shown right on the map."
          />
<Feature
            icon="⏰"
            title="Compare Tee Times Instantly"
            desc="No more jumping between GolfNow, individual course sites, and phone calls. See available times side by side."
          />
<Feature
            icon="✈️"
            title="Perfect for Visitors & Travelers"
            desc="New to the Boston area? Visiting for a weekend? Find the right course for your skill level and budget without the local knowledge."
          />
<Feature
            icon="🏌️"
            title="Built for Serious Golfers"
            desc="Slope ratings, course ratings, and walkability info front and center — because you care about more than just the price."
          />
</div>
</div>
      {/* About section */}
<div style={{ padding: "40px 24px", borderBottom: "1px solid #1a2e1a" }}>
<h2 style={{ fontSize: 20, fontWeight: 700, color: "#b8d8b8", marginBottom: 16, textAlign: "center" }}>
          About
</h2>
<p style={{ fontSize: 15, lineHeight: 1.8, color: "#6a8a6a", maxWidth: 480, margin: "0 auto 16px", textAlign: "center" }}>
          FairwayFinder was built by a golfer frustrated with the fragmented
          experience of finding a tee time in metro Boston. Golf in a major city
          is competitive — courses fill up fast, prices vary wildly, and the
          information is scattered across dozens of sites.
</p>
<p style={{ fontSize: 15, lineHeight: 1.8, color: "#6a8a6a", maxWidth: 480, margin: "0 auto", textAlign: "center" }}>
          The goal is simple: one place to see every public course,
          compare prices, check availability, and get on the course faster.
          Whether you're a scratch golfer or a weekend hacker,
          you deserve an easier way to play.
</p>
</div>
      {/* Stats */}
<div style={{ padding: "40px 24px", borderBottom: "1px solid #1a2e1a" }}>
<div style={{ display: "flex", justifyContent: "space-around", maxWidth: 480, margin: "0 auto" }}>
<Stat number="20+" label="Courses" />
<Stat number="$22" label="Lowest Fee" />
<Stat number="45min" label="Max Drive" />
</div>
</div>
      {/* Bottom CTA */}
<div style={{ padding: "40px 24px 60px", textAlign: "center" }}>
<button
          onClick={onEnter}
          style={{
            background: "transparent", color: "#7db87d",
            border: "1px solid #7db87d", borderRadius: 12,
            padding: "14px 36px", fontSize: 16,
            cursor: "pointer", fontFamily: "'Georgia', serif",
          }}
>
          Open the Map →
</button>
<div style={{ fontSize: 11, color: "#2a4a2a", marginTop: 16, letterSpacing: "0.05em" }}>
FAIRWAYFINDERMA.COM
</div>
</div>
</div>
  );
};
const Feature = ({ icon, title, desc }) => (
<div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
<div style={{ fontSize: 28, flexShrink: 0 }}>{icon}</div>
<div>
<div style={{ fontSize: 15, fontWeight: 700, color: "#b8d8b8", marginBottom: 4 }}>{title}</div>
<div style={{ fontSize: 14, color: "#5a7a5a", lineHeight: 1.6 }}>{desc}</div>
</div>
</div>
);
const Stat = ({ number, label }) => (
<div style={{ textAlign: "center" }}>
<div style={{ fontSize: 28, fontWeight: 700, color: "#7db87d" }}>{number}</div>
<div style={{ fontSize: 12, color: "#4a6a4a", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
</div>
);
export default HomePage;