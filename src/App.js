import React, { useState, useCallback, useMemo } from "react";
import { Map, Marker, NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { SlidersHorizontal, Heart, MapPin, List, Map as MapIcon } from "lucide-react";
import { BOSTON_COURSES, BOSTON_CENTER, getDistanceMiles } from "./data/courses";
import { useFavorites } from "./hooks/useFavorites";
import CourseSheet from "./components/CourseSheet";
import FilterPanel from "./components/FilterPanel";
import HomePage from "./HomePage";
const DEFAULT_FILTERS = {
  day: "today",
  maxPrice: 999,
  timeRange: "all",
  maxDistance: 999,
  walkableOnly: false,
};
const FREE_MAP_STYLE = "https://tiles.openfreemap.org/styles/liberty";
export default function App() {
  const [showHome, setShowHome] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [view, setView] = useState("map");
  const [viewState, setViewState] = useState({
    latitude: BOSTON_CENTER.lat,
    longitude: BOSTON_CENTER.lng,
    zoom: 10.5,
  });
  const { isFavorite, toggleFavorite, favorites } = useFavorites();
  if (showHome) return <HomePage onEnter={() => setShowHome(false)} />;
  const filteredCourses = BOSTON_COURSES.filter((course) => {
    if (filters.walkableOnly && !course.walkable) return false;
    const dist = getDistanceMiles(BOSTON_CENTER.lat, BOSTON_CENTER.lng, course.lat, course.lng);
    if (filters.maxDistance !== 999 && dist > filters.maxDistance) return false;
    const hasTeeTime = course.teeTimes.some((t) => {
      if (t.day !== filters.day) return false;
      if (filters.maxPrice !== 999 && t.price > filters.maxPrice) return false;
      if (filters.timeRange === "morning") { const h = parseInt(t.time); if (h < 6 || h >= 10) return false; }
      if (filters.timeRange === "midday") { const h = parseInt(t.time); if (h < 10 || h >= 14) return false; }
      if (filters.timeRange === "twilight") { const h = parseInt(t.time); if (h < 14) return false; }
      return true;
    });
    return hasTeeTime;
  });
  const activeFilterCount = [
    filters.maxPrice !== 999,
    filters.timeRange !== "all",
    filters.maxDistance !== 999,
    filters.walkableOnly,
  ].filter(Boolean).length;
  const handleMarkerClick = (course) => {
    setSelectedCourse(course);
    setViewState((v) => ({ ...v, latitude: course.lat, longitude: course.lng, zoom: 12 }));
  };
  const cheapestTime = (course) => {
    const times = course.teeTimes.filter((t) => t.day === filters.day);
    if (!times.length) return null;
    return Math.min(...times.map((t) => t.price));
  };
  const favoriteCourses = BOSTON_COURSES.filter((c) => isFavorite(c.id));
  return (
<div style={{ height: "100dvh", width: "100vw", background: "#060e06", fontFamily: "'Georgia', serif", overflow: "hidden", position: "relative" }}>
      {/* Header */}
<div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 100, padding: "14px 16px 10px", background: "linear-gradient(to bottom, rgba(6,14,6,0.97) 80%, transparent)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
<div style={{ cursor: "pointer" }} onClick={() => setShowHome(true)}>
<div style={{ fontSize: 20, fontWeight: 700, color: "#e8f0e8", letterSpacing: "-0.02em" }}>⛳ FairwayFinder</div>
<div style={{ fontSize: 11, color: "#4a6a4a", letterSpacing: "0.1em", textTransform: "uppercase" }}>Boston Area · {filteredCourses.length} courses</div>
</div>
<FilterButton onClick={() => setShowFilters(true)} count={activeFilterCount} />
</div>
      {/* View toggle */}
<div style={{ position: "absolute", top: 76, left: "50%", transform: "translateX(-50%)", zIndex: 100, background: "rgba(10,20,10,0.92)", border: "1px solid #1e3a1e", borderRadius: 30, display: "flex", padding: 3 }}>
        {[
          { id: "map", icon: <MapIcon size={14} />, label: "Map" },
          { id: "list", icon: <List size={14} />, label: "List" },
          { id: "favorites", icon: <Heart size={14} />, label: `Saved ${favorites.length > 0 ? `(${favorites.length})` : ""}` },
        ].map((tab) => (
<button key={tab.id} onClick={() => { setView(tab.id); setSelectedCourse(null); }}
            style={{ display: "flex", alignItems: "center", gap: 5, padding: "6px 14px", borderRadius: 28, border: "none", background: view === tab.id ? "#1a3a1a" : "transparent", color: view === tab.id ? "#b8d8b8" : "#4a6a4a", cursor: "pointer", fontSize: 13, fontFamily: "'Georgia', serif" }}>
            {tab.icon}{tab.label}
</button>
        ))}
</div>
      {/* Map view */}
      {view === "map" && (
<Map {...viewState} onMove={(e) => setViewState(e.viewState)} mapStyle={FREE_MAP_STYLE} style={{ width: "100%", height: "100%" }} onClick={() => setSelectedCourse(null)}>
<NavigationControl position="bottom-right" style={{ marginBottom: 100 }} />
          {filteredCourses.map((course) => {
            const isSelected = selectedCourse?.id === course.id;
            const price = cheapestTime(course);
            return (
<Marker key={course.id} latitude={course.lat} longitude={course.lng} anchor="bottom"
                onClick={(e) => { e.originalEvent.stopPropagation(); handleMarkerClick(course); }}>
<div style={{ background: isSelected ? "#7db87d" : isFavorite(course.id) ? "#e87070" : "#0f2a0f", border: `2px solid ${isSelected ? "#b8d8b8" : isFavorite(course.id) ? "#b87070" : "#3a6a3a"}`, borderRadius: isSelected ? 12 : 20, padding: isSelected ? "6px 10px" : "5px 9px", cursor: "pointer", transform: isSelected ? "scale(1.1)" : "scale(1)", transition: "all 0.2s", display: "flex", alignItems: "center", boxShadow: isSelected ? "0 4px 20px rgba(125,184,125,0.4)" : "0 2px 8px rgba(0,0,0,0.5)", whiteSpace: "nowrap" }}>
<span style={{ fontSize: 11, color: isSelected ? "#0a160a" : "#b8d8b8", fontWeight: 700 }}>{price ? `$${price}+` : "⛳"}</span>
</div>
</Marker>
            );
          })}
</Map>
      )}
      {/* List view */}
      {view === "list" && (
<div style={{ position: "absolute", inset: 0, overflowY: "auto", paddingTop: 120, paddingBottom: 20, background: "#060e06" }}>
          {filteredCourses.length === 0
            ? <EmptyState message="No courses match your filters." />
            : filteredCourses.map((course) => (
<CourseListCard key={course.id} course={course} isFav={isFavorite(course.id)}
                onToggleFav={() => toggleFavorite(course.id)}
                onClick={() => { setSelectedCourse(course); setView("map"); }}
                cheapestPrice={cheapestTime(course)} filterDay={filters.day} />
            ))}
</div>
      )}
      {/* Favorites view */}
      {view === "favorites" && (
<div style={{ position: "absolute", inset: 0, overflowY: "auto", paddingTop: 120, paddingBottom: 20, background: "#060e06" }}>
          {favoriteCourses.length === 0
            ? <EmptyState message="No saved courses yet. Tap ♥ on any course to save it." />
            : favoriteCourses.map((course) => (
<CourseListCard key={course.id} course={course} isFav={true}
                onToggleFav={() => toggleFavorite(course.id)}
                onClick={() => { setSelectedCourse(course); setView("map"); }}
                cheapestPrice={cheapestTime(course)} filterDay={filters.day} />
            ))}
</div>
      )}
      {selectedCourse && (
<CourseSheet course={selectedCourse} isFavorite={isFavorite(selectedCourse.id)}
          onToggleFavorite={toggleFavorite} onClose={() => setSelectedCourse(null)} filters={filters} />
      )}
      {showFilters && (
<FilterPanel filters={filters} setFilters={setFilters} onClose={() => setShowFilters(false)} />
      )}
</div>
  );
}
const FilterButton = ({ onClick, count }) => (
<button onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 6, background: count > 0 ? "rgba(125,184,125,0.2)" : "rgba(20,40,20,0.8)", border: `1px solid ${count > 0 ? "#5a9a5a" : "#1e3a1e"}`, color: count > 0 ? "#b8d8b8" : "#6a8a6a", borderRadius: 10, padding: "8px 14px", cursor: "pointer", fontSize: 14, fontFamily: "'Georgia', serif" }}>
<SlidersHorizontal size={15} />
  Filters
  {count > 0 && <span style={{ background: "#7db87d", color: "#0a160a", borderRadius: "50%", width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700 }}>{count}</span>}
</button>
);
const CourseListCard = ({ course, isFav, onToggleFav, onClick, cheapestPrice, filterDay }) => {
  const dist = getDistanceMiles(BOSTON_CENTER.lat, BOSTON_CENTER.lng, course.lat, course.lng);
  return (
<div style={{ margin: "0 12px 10px", background: "#0a160a", border: "1px solid #1a2e1a", borderRadius: 14, padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
<div style={{ flex: 1, cursor: "pointer" }} onClick={onClick}>
<div style={{ fontSize: 16, fontWeight: 600, color: "#d8e8d8", marginBottom: 3 }}>{course.name}</div>
<div style={{ fontSize: 12, color: "#4a6a4a", display: "flex", gap: 10, marginBottom: 8 }}>
<span><MapPin size={10} style={{ marginRight: 3 }} />{course.city}</span>
<span>⬤ {dist.toFixed(1)} mi</span>
<span>Slope {course.slope}</span>
</div>
<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {cheapestPrice && <span style={{ fontSize: 15, fontWeight: 700, color: "#7db87d" }}>From ${cheapestPrice}</span>}
<span style={{ fontSize: 11, color: "#3a5a3a" }}>{course.teeTimes.filter((t) => t.day === filterDay).length} times {filterDay}</span>
</div>
</div>
<button onClick={onToggleFav} style={{ background: "none", border: "none", cursor: "pointer", paddingTop: 2 }}>
<Heart size={20} fill={isFav ? "#e87070" : "none"} color={isFav ? "#e87070" : "#3a5a3a"} />
</button>
</div>
  );
};
const EmptyState = ({ message }) => (
<div style={{ textAlign: "center", color: "#3a5a3a", padding: "60px 20px", fontSize: 15 }}>
<div style={{ fontSize: 36, marginBottom: 12 }}>⛳</div>
    {message}
</div>
);