import React, { useState, useEffect } from "react";
import { Bell, X, Check } from "lucide-react";
import { supabase } from "./supabase";
const AlertSettings = ({ course, user, onClose, onSignInRequired }) => {
  const [saved, setSaved] = useState(false);
  const [existing, setExisting] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!user) return;
    const fetchAlert = async () => {
      const { data } = await supabase
        .from("favorites")
        .select("*")
        .eq("user_id", user.id)
        .eq("course_id", course.id)
        .single();
      if (data) setExisting(data);
    };
    fetchAlert();
  }, [user, course.id]);
  const handleSave = async () => {
    if (!user) { onSignInRequired(); return; }
    setLoading(true);
    if (!existing) {
      await supabase.from("favorites").insert({
        user_id: user.id,
        course_id: course.id,
        course_name: course.name,
        alert_price: 999,
      });
    }
    setLoading(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };
  const handleRemove = async () => {
    if (!existing) return;
    setLoading(true);
    await supabase.from("favorites").delete().eq("id", existing.id);
    setExisting(null);
    setLoading(false);
  };
  return (
<div style={{ margin: "0 0 16px", background: "#0f2a0f", border: "1px solid #2a4a2a", borderRadius: 14, padding: 16 }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
<div style={{ display: "flex", alignItems: "center", gap: 8, color: "#7db87d", fontSize: 13, fontWeight: 600 }}>
<Bell size={14} />
          Tee Time Alert
</div>
<button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "#4a6a4a" }}>
<X size={16} />
</button>
</div>
      {!user ? (
<div>
<div style={{ fontSize: 13, color: "#5a7a5a", marginBottom: 10 }}>
            Sign in to get emailed when tee times open up at this course.
</div>
<button onClick={onSignInRequired} style={{ width: "100%", padding: "10px", background: "#7db87d", color: "#060e06", border: "none", borderRadius: 8, cursor: "pointer", fontSize: 14, fontWeight: 700, fontFamily: "'Georgia', serif" }}>
            Sign In to Set Alert
</button>
</div>
      ) : (
<div>
<div style={{ fontSize: 13, color: "#5a7a5a", marginBottom: 14 }}>
            {existing
              ? `✓ You'll be emailed when tee times are available at ${course.name}.`
              : `Get emailed every morning when tee times are available at ${course.name}.`}
</div>
<div style={{ display: "flex", gap: 8 }}>
            {!existing ? (
<button
                onClick={handleSave}
                disabled={loading}
                style={{ flex: 1, padding: "10px", background: saved ? "#3a6a3a" : "#7db87d", color: "#060e06", border: "none", borderRadius: 8, cursor: "pointer", fontSize: 14, fontWeight: 700, fontFamily: "'Georgia', serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                {saved ? <><Check size={14} />Alert Set!</> : loading ? "..." : <><Bell size={14} />Notify Me</>}
</button>
            ) : (
<button
                onClick={handleRemove}
                disabled={loading}
                style={{ flex: 1, padding: "10px", background: "transparent", color: "#e87070", border: "1px solid #4a2a2a", borderRadius: 8, cursor: "pointer", fontSize: 14, fontFamily: "'Georgia', serif" }}>
                {loading ? "..." : "Remove Alert"}
</button>
            )}
</div>
<div style={{ fontSize: 11, color: "#3a5a3a", marginTop: 8, textAlign: "center" }}>
            Alerts sent to {user.email} every morning
</div>
</div>
      )}
</div>
  );
};
export default AlertSettings;