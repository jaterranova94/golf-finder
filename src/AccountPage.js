import React, { useState, useEffect } from "react";
import { Heart, Bell, Calendar, ArrowLeft, Trash2, ExternalLink } from "lucide-react";
import { supabase } from "./supabase";
import { BOSTON_COURSES } from "./data/courses";
const AccountPage = ({ user, onBack, onSignInRequired }) => {
  const [activeTab, setActiveTab] = useState("favorites");
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!user) return;
    setLoading(true);
    supabase
      .from("favorites")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setAlerts(data || []);
        setLoading(false);
      });
  }, [user]);
  const removeAlert = async (id) => {
    await supabase.from("favorites").delete().eq("id", id);
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  };
  const favoriteCourses = BOSTON_COURSES.filter((c) =>
    alerts.some((a) => a.course_id === c.id)
  );
  if (!user) {
    return (
<div style={{ height: "100dvh", background: "#060e06", fontFamily: "'Georgia', serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24 }}>
<div style={{ fontSize: 48, marginBottom: 16 }}>⛳</div>
<div style={{ fontSize: 20, color: "#e8f0e8", marginBottom: 8, fontWeight: 700 }}>Sign in to view your account</div>
<div style={{ fontSize: 14, color: "#4a6a4a", marginBottom: 24 }}>Save courses, set alerts, track tee times</div>
<button onClick={onSignInRequired} style={{ background: "#7db87d", color: "#060e06", border: "none", borderRadius: 10, padding: "14px 32px", fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "'Georgia', serif" }}>
          Sign In
</button>
<button onClick={onBack} style={{ marginTop: 16, background: "none", border: "none", color: "#4a6a4a", cursor: "pointer", fontSize: 14, fontFamily: "'Georgia', serif" }}>
          Back to Map
</button>
</div>
    );
  }
  return (
<div style={{ height: "100dvh", background: "#060e06", fontFamily: "'Georgia', serif", color: "#e8f0e8", display: "flex", flexDirection: "column" }}>
<div style={{ padding: "16px 20px", borderBottom: "1px solid #1a2e1a", display: "flex", alignItems: "center", gap: 12, background: "#060e06" }}>
<button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", color: "#7db87d", padding: 4 }}>
<ArrowLeft size={22} />
</button>
<div>
<div style={{ fontSize: 18, fontWeight: 700, color: "#e8f0e8" }}>My Account</div>
<div style={{ fontSize: 12, color: "#4a6a4a" }}>{user.email}</div>
</div>
</div>
<div style={{ display: "flex", borderBottom: "1px solid #1a2e1a" }}>
        {[
          { id: "favorites", icon: <Heart size={14} />, label: "Favorites" },
          { id: "alerts", icon: <Bell size={14} />, label: "Alerts" },
          { id: "teetimes", icon: <Calendar size={14} />, label: "Tee Times" },
        ].map((tab) => (
<button key={tab.id} onClick={() => setActiveTab(tab.id)}
            style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "14px 8px", border: "none", background: "transparent", color: activeTab === tab.id ? "#7db87d" : "#4a6a4a", fontSize: 13, fontFamily: "'Georgia', serif", cursor: "pointer", borderBottom: activeTab === tab.id ? "2px solid #7db87d" : "2px solid transparent" }}>
            {tab.icon}{tab.label}
</button>
        ))}
</div>
<div style={{ flex: 1, overflowY: "auto", padding: "20px 16px" }}>
        {activeTab === "favorites" && (
<div>
<div style={{ fontSize: 13, color: "#4a6a4a", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              {favoriteCourses.length} Saved Courses
</div>
            {loading ? <LoadingState /> : favoriteCourses.length === 0 ? (
<EmptyState icon="♥" message="No saved courses yet." sub="Tap the heart on any course to save it." />
            ) : (
              favoriteCourses.map((course) => <CourseCard key={course.id} course={course} />)
            )}
</div>
        )}
        {activeTab === "alerts" && (
<div>
<div style={{ fontSize: 13, color: "#4a6a4a", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              {alerts.length} Active Alerts
</div>
            {loading ? <LoadingState /> : alerts.length === 0 ? (
<EmptyState icon="🔔" message="No alerts set." sub="Open a course and tap Alert to get daily email updates." />
            ) : (
<>
                {alerts.map((alert) => (
<div key={alert.id} style={{ background: "#0a160a", border: "1px solid #1a2e1a", borderRadius: 14, padding: "14px 16px", marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
<div>
<div style={{ fontSize: 15, fontWeight: 600, color: "#d8e8d8", marginBottom: 4 }}>{alert.course_name}</div>
<div style={{ fontSize: 12, color: "#4a6a4a", display: "flex", alignItems: "center", gap: 6 }}>
<Bell size={11} />Daily email when tee times available
</div>
</div>
<button onClick={() => removeAlert(alert.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#e87070", padding: 8 }}>
<Trash2 size={18} />
</button>
</div>
                ))}
<div style={{ fontSize: 12, color: "#3a5a3a", textAlign: "center", marginTop: 8 }}>
                  Alerts sent to {user.email} every morning at 7am
</div>
</>
            )}
</div>
        )}
        {activeTab === "teetimes" && (
<div>
<div style={{ fontSize: 13, color: "#4a6a4a", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Upcoming Tee Times
</div>
<EmptyState icon="⛳" message="No upcoming tee times." sub="Book a tee time through GolfNow and it will appear here once we connect the live API." />
<div style={{ marginTop: 24, background: "#0a160a", border: "1px solid #1a2e1a", borderRadius: 14, padding: 16, textAlign: "center" }}>
<div style={{ fontSize: 14, color: "#5a7a5a", marginBottom: 12 }}>Book tee times at any of your saved courses</div>
<a href="https://www.golfnow.com" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#7db87d", color: "#060e06", padding: "10px 20px", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 700 }}>
                Open GolfNow <ExternalLink size={13} />
</a>
</div>
</div>
        )}
</div>
</div>
  );
};
const CourseCard = ({ course }) => (
<div style={{ background: "#0a160a", border: "1px solid #1a2e1a", borderRadius: 14, padding: "14px 16px", marginBottom: 10 }}>
<div style={{ fontSize: 15, fontWeight: 600, color: "#d8e8d8", marginBottom: 4 }}>{course.name}</div>
<div style={{ fontSize: 12, color: "#4a6a4a", display: "flex", gap: 12 }}>
<span>📍 {course.city}</span>
<span>Slope {course.slope}</span>
<span>Par {course.par}</span>
</div>
<div style={{ marginTop: 8, fontSize: 13, color: "#7db87d", fontWeight: 600 }}>
      ${course.greenFee.min}–${course.greenFee.max}
</div>
</div>
);
const EmptyState = ({ icon, message, sub }) => (
<div style={{ textAlign: "center", padding: "40px 20px" }}>
<div style={{ fontSize: 40, marginBottom: 12 }}>{icon}</div>
<div style={{ fontSize: 16, color: "#5a7a5a", marginBottom: 6 }}>{message}</div>
<div style={{ fontSize: 13, color: "#3a5a3a" }}>{sub}</div>
</div>
);
const LoadingState = () => (
<div style={{ textAlign: "center", padding: "40px 20px", color: "#3a5a3a", fontSize: 14 }}>Loading...</div>
);
export default AccountPage;