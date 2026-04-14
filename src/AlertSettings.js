import React, { useState, useEffect } from "react";
import { Bell, X, Check } from "lucide-react";
import { supabase } from "./supabase";
const AlertSettings = ({ course, user, onClose, onSignInRequired }) => {
  const [alertPrice, setAlertPrice] = useState(999);
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
      if (data) {
        setExisting(data);
        setAlertPrice(data.alert_price);
      }
    };
    fetchAlert();
  }, [user, course.id]);
  const handleSave = async () => {
    if (!user) { onSignInRequired(); return; }
    setLoading(true);
    if (existing) {
      await supabase.from("favorites").update({ alert_price: alertPrice }).eq("id", existing.id);
    } else {
      await supabase.from("favorites").insert({
        user_id: user.id,
        course_id: course.id,
        course_name: course.name,
        alert_price: alertPrice,
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
    setAlertPrice(999);
    setLoading(false);
  };
  return (
<div style={{ margin: "0 20px 16px", background: "#0f2a0f", border: "1px solid #2a4a2a", borderRadius: 14, padding: 16 }}>
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
            Sign in to get email alerts when tee times drop below your target price.
</div>
<button onClick={onSignInRequired} style={{ width: "100%", padding: "10px", background: "#7db87d", color: "#060e06", border: "none", borderRadius: 8, cursor: "pointer", fontSize: 14, fontWeight: 700, fontFamily: "'Georgia', serif" }}>
            Sign In to Set Alert
</button>
</div>
      ) : (
<div>
<div style={{ fontSize: 13, color: "#5a7a5a", marginBottom: 10 }}>
            Get emailed when a tee time drops below:
</div>
<div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
<span style={{ color: "#7db87d", fontSize: 20, fontWeight: 700 }}>
              ${alertPrice === 999 ? "Any" : alertPrice}
</span>
<input
              type="range" min={20} max={150} step={5}
              value={alertPrice === 999 ? 150 : alertPrice}
              onChange={(e) => setAlertPrice(e.target.value === "150" ? 999 : Number(e.target.value))}
              style={{ flex: 1, accentColor: "#7db87d" }}
            />
</div>
<div style={{ display: "flex", gap: 8 }}>
<button
              onClick={handleSave}
              disabled={loading}
              style={{ flex: 1, padding: "10px", background: saved ? "#3a6a3a" : "#7db87d", color: "#060e06", border: "none", borderRadius: 8, cursor: "pointer", fontSize: 14, fontWeight: 700, fontFamily: "'Georgia', serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
              {saved ? <><Check size={14} />Saved!</> : loading ? "..." : existing ? "Update Alert" : "Set Alert"}
</button>
            {existing && (
<button onClick={handleRemove} disabled={loading} style={{ padding: "10px 14px", background: "transparent", color: "#e87070", border: "1px solid #4a2a2a", borderRadius: 8, cursor: "pointer", fontSize: 13, fontFamily: "'Georgia', serif" }}>
                Remove
</button>
            )}
</div>
<div style={{ fontSize: 11, color: "#3a5a3a", marginTop: 8, textAlign: "center" }}>
            Alerts sent to {user.email}
</div>
</div>
      )}
</div>
  );
};
export default AlertSettings;