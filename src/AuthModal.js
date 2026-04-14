import React, { useState } from "react";
import { X } from "lucide-react";
import { supabase } from "./supabase";
const AuthModal = ({ onClose, onSuccess }) => {
 const [mode, setMode] = useState("login");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [loading, setLoading] = useState(false);
 const [message, setMessage] = useState("");
 const handleSubmit = async () => {
   setLoading(true);
   setMessage("");
   try {
     if (mode === "login") {
       const { error } = await supabase.auth.signInWithPassword({ email, password });
       if (error) throw error;
       onSuccess();
       onClose();
     } else if (mode === "signup") {
       const { error } = await supabase.auth.signUp({ email, password });
       if (error) throw error;
       setMessage("Check your email to confirm your account, then log in!");
       setMode("login");
     } else {
       const { error } = await supabase.auth.resetPasswordForEmail(email);
       if (error) throw error;
       setMessage("Password reset email sent!");
     }
   } catch (err) {
     setMessage(err.message);
   }
   setLoading(false);
 };
 return (
<div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
<div style={{ background: "#0a160a", border: "1px solid #1e3a1e", borderRadius: 20, padding: 28, width: "100%", maxWidth: 380, fontFamily: "'Georgia', serif", color: "#e8f0e8" }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
<div style={{ fontSize: 20, fontWeight: 700 }}>
           {mode === "login" ? "Sign In" : mode === "signup" ? "Create Account" : "Reset Password"}
</div>
<button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "#5a7a5a" }}>
<X size={22} />
</button>
</div>
<div style={{ fontSize: 13, color: "#4a6a4a", marginBottom: 20 }}>
         {mode === "signup" ? "Save your favorite courses and get tee time alerts." : mode === "login" ? "Welcome back to FairwayFinder." : "We'll send you a reset link."}
</div>
<input
         type="email"
         placeholder="Email address"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         style={{ width: "100%", padding: "12px 14px", background: "#060e06", border: "1px solid #2a4a2a", borderRadius: 10, color: "#e8f0e8", fontSize: 15, fontFamily: "'Georgia', serif", marginBottom: 12, boxSizing: "border-box" }}
       />
       {mode !== "reset" && (
<input
           type="password"
           placeholder="Password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
           style={{ width: "100%", padding: "12px 14px", background: "#060e06", border: "1px solid #2a4a2a", borderRadius: 10, color: "#e8f0e8", fontSize: 15, fontFamily: "'Georgia', serif", marginBottom: 12, boxSizing: "border-box" }}
         />
       )}
       {message && (
<div style={{ padding: "10px 14px", background: "rgba(125,184,125,0.1)", border: "1px solid #2a4a2a", borderRadius: 8, fontSize: 13, color: "#7db87d", marginBottom: 12 }}>
           {message}
</div>
       )}
<button
         onClick={handleSubmit}
         disabled={loading}
         style={{ width: "100%", padding: "14px", background: "#7db87d", color: "#060e06", border: "none", borderRadius: 10, fontSize: 16, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", fontFamily: "'Georgia', serif", marginBottom: 16, opacity: loading ? 0.7 : 1 }}>
         {loading ? "..." : mode === "login" ? "Sign In" : mode === "signup" ? "Create Account" : "Send Reset Email"}
</button>
<div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
         {mode === "login" && (
<>
<button onClick={() => { setMode("signup"); setMessage(""); }} style={{ background: "none", border: "none", color: "#7db87d", cursor: "pointer", fontSize: 13, fontFamily: "'Georgia', serif" }}>
               Don't have an account? Sign up
</button>
<button onClick={() => { setMode("reset"); setMessage(""); }} style={{ background: "none", border: "none", color: "#4a6a4a", cursor: "pointer", fontSize: 12, fontFamily: "'Georgia', serif" }}>
               Forgot password?
</button>
</>
         )}
         {mode !== "login" && (
<button onClick={() => { setMode("login"); setMessage(""); }} style={{ background: "none", border: "none", color: "#7db87d", cursor: "pointer", fontSize: 13, fontFamily: "'Georgia', serif" }}>
             Already have an account? Sign in
</button>
         )}
</div>
</div>
</div>
 );
};
export default AuthModal;