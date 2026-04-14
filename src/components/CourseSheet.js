import React, { useState } from "react";
import { Heart, X, MapPin, ExternalLink, Clock, Phone, Globe } from "lucide-react";
const timeLabel = (time) => {
  const [h, m] = time.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  return `${h12}:${m.toString().padStart(2, "0")} ${period}`;
};
const spotsColor = (spots) =>
  spots <= 1 ? "#e87070" : spots === 2 ? "#e8c070" : "#7db87d";
const PhotoGallery = ({ photos, name }) => {
  const [active, setActive] = React.useState(0);
  return (
<div style={{ position: "relative", width: "100%", height: 220, overflow: "hidden", background: "#060e06" }}>
      {photos.map((src, i) => (
<img
          key={i}
          src={src}
          alt={`${name} ${i + 1}`}
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", opacity: active === i ? 0.85 : 0,
            transition: "opacity 0.4s ease",
          }}
          onError={(e) => { e.target.style.display = "none"; }}
        />
      ))}
<div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, #0a160a)" }} />
      {photos.length > 1 && (
<div style={{ position: "absolute", bottom: 12, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6 }}>
          {photos.map((_, i) => (
<button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: active === i ? 20 : 6,
                height: 6, borderRadius: 3,
                background: active === i ? "#7db87d" : "rgba(255,255,255,0.4)",
                border: "none", cursor: "pointer",
                transition: "all 0.2s", padding: 0,
              }}
            />
          ))}
</div>
      )}
      {photos.length > 1 && (
<>
<button
            onClick={() => setActive((a) => (a - 1 + photos.length) % photos.length)}
            style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.4)", border: "none", color: "#fff", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", fontSize: 16 }}>
            ‹
</button>
<button
            onClick={() => setActive((a) => (a + 1) % photos.length)}
            style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.4)", border: "none", color: "#fff", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", fontSize: 16 }}>
            ›
</button>
</>
      )}
</div>
  );
};
const CourseSheet = ({ course, isFavorite, onToggleFavorite, onClose, filters }) => {
  const [activeDay, setActiveDay] = useState(filters.day || "today");
  const filteredTimes = course.teeTimes.filter((t) => {
    if (t.day !== activeDay) return false;
    if (t.price > filters.maxPrice && filters.maxPrice !== 999) return false;
    if (filters.timeRange === "morning") { const h = parseInt(t.time); if (h < 6 || h >= 10) return false; }
    if (filters.timeRange === "midday") { const h = parseInt(t.time); if (h < 10 || h >= 14) return false; }
    if (filters.timeRange === "twilight") { const h = parseInt(t.time); if (h < 14) return false; }
    return true;
  });
  return (
<div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "#0a160a", borderTop: "1px solid #1e3a1e", borderRadius: "20px 20px 0 0", zIndex: 150, maxHeight: "88vh", overflowY: "auto", fontFamily: "'Georgia', serif", color: "#d8e8d8", boxShadow: "0 -8px 40px rgba(0,0,0,0.6)" }}>
      {/* Drag handle */}
<div style={{ display: "flex", justifyContent: "center", paddingTop: 12, paddingBottom: 4 }}>
<div style={{ width: 36, height: 4, borderRadius: 2, background: "#2a4a2a" }} />
</div>
      {/* Photo gallery or single photo */}
      {course.photos && course.photos.length > 0 ? (
<PhotoGallery photos={course.photos} name={course.name} />
      ) : course.photo ? (
<div style={{ width: "100%", height: 200, overflow: "hidden", position: "relative" }}>
<img
            src={course.photo}
            alt={course.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
<div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, #0a160a)" }} />
</div>
      ) : null}
      {/* Header */}
<div style={{ padding: "12px 20px 0", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
<div style={{ flex: 1, paddingRight: 12 }}>
<div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.2, color: "#e8f0e8", marginBottom: 4 }}>{course.name}</div>
<div style={{ display: "flex", alignItems: "center", gap: 6, color: "#7db87d", fontSize: 13 }}>
<MapPin size={13} />{course.city} · {course.type.charAt(0).toUpperCase() + course.type.slice(1)}
</div>
</div>
<div style={{ display: "flex", gap: 10 }}>
<button onClick={() => onToggleFavorite(course.id)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
<Heart size={22} fill={isFavorite ? "#e87070" : "none"} color={isFavorite ? "#e87070" : "#5a7a5a"} />
</button>
<button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
<X size={22} color="#5a7a5a" />
</button>
</div>
</div>
      {/* Stats */}
<div style={{ padding: "14px 20px", display: "flex", gap: 20, borderBottom: "1px solid #1a2e1a" }}>
<Stat label="Slope" value={course.slope} />
<Stat label="Rating" value={course.courseRating} />
<Stat label="Par" value={course.par} />
<Stat label="Holes" value={course.holes} />
<Stat label="Walk" value={course.walkable ? "✓" : "Cart"} highlight={course.walkable} />
</div>
      {/* Green fee + tags */}
<div style={{ padding: "14px 20px", borderBottom: "1px solid #1a2e1a" }}>
<div style={{ fontSize: 13, color: "#5a7a5a", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>Green Fees</div>
<div style={{ fontSize: 24, fontWeight: 700, color: "#b8d8b8", marginBottom: 10 }}>${course.greenFee.min}–${course.greenFee.max}</div>
<div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {course.tags.map((tag) => (
<span key={tag} style={{ padding: "4px 10px", borderRadius: 20, background: "rgba(125,184,125,0.1)", border: "1px solid #2a4a2a", fontSize: 12, color: "#7db87d" }}>{tag}</span>
          ))}
</div>
</div>
      {/* Contact + links */}
<div style={{ padding: "14px 20px", borderBottom: "1px solid #1a2e1a", display: "flex", flexDirection: "column", gap: 10 }}>
        {course.phone && (
<a href={`tel:${course.phone}`} style={{ display: "flex", alignItems: "center", gap: 10, color: "#7db87d", textDecoration: "none", fontSize: 14 }}>
<Phone size={14} />{course.phone}
</a>
        )}
        {course.website && (
<a href={course.website} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, color: "#7db87d", textDecoration: "none", fontSize: 14 }}>
<Globe size={14} />Official Website
</a>
        )}
        {course.address && (
<a href={`https://maps.google.com/?q=${encodeURIComponent(course.address)}`} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, color: "#5a7a5a", textDecoration: "none", fontSize: 13 }}>
<MapPin size={14} />{course.address}
</a>
        )}
</div>
      {/* Tee Times */}
<div style={{ padding: "16px 20px" }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
<div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#7db87d", textTransform: "uppercase", letterSpacing: "0.06em" }}>
<Clock size={14} />Tee Times
</div>
<div style={{ display: "flex", gap: 6 }}>
            {["today", "tomorrow"].map((d) => (
<button key={d} onClick={() => setActiveDay(d)}
                style={{ padding: "5px 12px", borderRadius: 8, border: "1px solid", borderColor: activeDay === d ? "#7db87d" : "#1e3a1e", background: activeDay === d ? "rgba(125,184,125,0.15)" : "transparent", color: activeDay === d ? "#b8d8b8" : "#4a6a4a", cursor: "pointer", fontSize: 12, fontFamily: "'Georgia', serif" }}>
                {d.charAt(0).toUpperCase() + d.slice(1)}
</button>
            ))}
</div>
</div>
        {filteredTimes.length === 0 ? (
<div style={{ textAlign: "center", color: "#4a6a4a", padding: "20px 0", fontSize: 14 }}>
            No tee times match your filters for {activeDay}.
</div>
        ) : (
<div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {filteredTimes.map((tt) => (
<a key={tt.id} href={course.teeTimesUrl} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#0f1f0f", border: "1px solid #1e3a1e", borderRadius: 12, padding: "12px 16px", textDecoration: "none", color: "inherit" }}>
<div style={{ display: "flex", alignItems: "center", gap: 14 }}>
<div style={{ fontSize: 17, fontWeight: 600, color: "#d8e8d8" }}>{timeLabel(tt.time)}</div>
<div style={{ fontSize: 12, color: spotsColor(tt.spots) }}>{tt.spots} {tt.spots === 1 ? "spot" : "spots"}</div>
</div>
<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
<div style={{ fontSize: 18, fontWeight: 700, color: "#b8d8b8" }}>${tt.price}</div>
<ExternalLink size={14} color="#4a6a4a" />
</div>
</a>
            ))}
</div>
        )}
</div>
      {/* Description */}
<div style={{ padding: "0 20px 32px", color: "#5a7a5a", fontSize: 14, lineHeight: 1.6 }}>
        {course.description}
</div>
</div>
  );
};
const Stat = ({ label, value, highlight }) => (
<div style={{ textAlign: "center" }}>
<div style={{ fontSize: 16, fontWeight: 700, color: highlight ? "#7db87d" : "#b8d8b8" }}>{value}</div>
<div style={{ fontSize: 11, color: "#4a6a4a", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
</div>
);
export default CourseSheet;