import React from "react";
import { SlidersHorizontal, X } from "lucide-react";
const FilterPanel = ({ filters, setFilters, onClose }) => {
  const update = (key, value) => setFilters((f) => ({ ...f, [key]: value }));
  return (
<div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(10,20,10,0.7)", zIndex: 200, display: "flex", alignItems: "flex-end" }} onClick={onClose}>
<div onClick={(e) => e.stopPropagation()} style={{ background: "#0f1f0f", borderTop: "1px solid #2a4a2a", borderRadius: "20px 20px 0 0", padding: "24px 20px 40px", width: "100%", color: "#e8f0e8", fontFamily: "'Georgia', serif" }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
<div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 18, fontWeight: 600 }}>
<SlidersHorizontal size={18} color="#7db87d" />Filters
</div>
<button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "#7db87d" }}>
<X size={22} />
</button>
</div>
<Label>Day</Label>
<ToggleGroup
          options={[{ value: "today", label: "Today" }, { value: "tomorrow", label: "Tomorrow" }]}
          value={filters.day}
          onChange={(v) => update("day", v)}
        />
<Label>Max Green Fee: {filters.maxPrice === 999 ? "Any" : `$${filters.maxPrice}`}</Label>
<input type="range" min={20} max={120} step={5}
          value={filters.maxPrice === 999 ? 120 : filters.maxPrice}
          onChange={(e) => update("maxPrice", e.target.value === "120" ? 999 : Number(e.target.value))}
          style={{ width: "100%", accentColor: "#7db87d", marginBottom: 20 }}
        />
<Label>Tee Time</Label>
<ToggleGroup
          options={[
            { value: "all", label: "Any" },
            { value: "morning", label: "Morning (6–10am)" },
            { value: "midday", label: "Midday (10am–2pm)" },
            { value: "twilight", label: "Twilight (2pm+)" },
          ]}
          value={filters.timeRange}
          onChange={(v) => update("timeRange", v)}
        />
<Label>Max Distance: {filters.maxDistance === 999 ? "Any" : `${filters.maxDistance} mi`}</Label>
<input type="range" min={5} max={50} step={5}
          value={filters.maxDistance === 999 ? 50 : filters.maxDistance}
          onChange={(e) => update("maxDistance", e.target.value === "50" ? 999 : Number(e.target.value))}
          style={{ width: "100%", accentColor: "#7db87d", marginBottom: 20 }}
        />
<Label>Walkable Only</Label>
<ToggleGroup
          options={[{ value: false, label: "All Courses" }, { value: true, label: "Walkable Only" }]}
          value={filters.walkableOnly}
          onChange={(v) => update("walkableOnly", v)}
        />
<button onClick={() => { setFilters({ day: "today", maxPrice: 999, timeRange: "all", maxDistance: 999, walkableOnly: false }); onClose(); }}
          style={{ marginTop: 24, width: "100%", padding: "14px", background: "transparent", border: "1px solid #2a4a2a", color: "#7db87d", borderRadius: 10, cursor: "pointer", fontFamily: "'Georgia', serif", fontSize: 15 }}>
          Reset Filters
</button>
</div>
</div>
  );
};
const Label = ({ children }) => (
<div style={{ fontSize: 12, letterSpacing: "0.08em", color: "#7db87d", textTransform: "uppercase", marginBottom: 10, marginTop: 4 }}>{children}</div>
);
const ToggleGroup = ({ options, value, onChange }) => (
<div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
    {options.map((opt) => (
<button key={String(opt.value)} onClick={() => onChange(opt.value)}
        style={{ padding: "8px 14px", borderRadius: 8, border: "1px solid", borderColor: value === opt.value ? "#7db87d" : "#2a4a2a", background: value === opt.value ? "rgba(125,184,125,0.15)" : "transparent", color: value === opt.value ? "#b8d8b8" : "#6a8a6a", cursor: "pointer", fontSize: 13, fontFamily: "'Georgia', serif" }}>
        {opt.label}
</button>
    ))}
</div>
);
export default FilterPanel;