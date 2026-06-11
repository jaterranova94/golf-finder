import { createClient } from "@supabase/supabase-js";
import { BOSTON_COURSES } from "../src/data/courses.js";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.headers["x-cron-secret"] !== process.env.CRON_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

  const rows = [];

  for (const course of BOSTON_COURSES) {
    for (const date of [today, tomorrow]) {
      // TODO: Replace with real GolfNow affiliate API call once approved.
      //
      // When the key arrives:
      //   1. Add course.golfnowId (numeric facilityId) to each entry in courses.js
      //   2. Uncomment and adapt the fetch below:
      //
      // const r = await fetch(
      //   `https://api.golfnow.com/api/i/v5/tee-times` +
      //   `?facilityId=${course.golfnowId}&date=${date}&numberOfPlayers=1&rateType=public`,
      //   { headers: { Authorization: `Bearer ${process.env.GOLFNOW_API_KEY}` } }
      // );
      // const { teetimes } = await r.json();
      // teetimes.forEach((t) => {
      //   rows.push({
      //     id: `${course.id}-${date}-${t.time}`,
      //     course_id: course.id,
      //     date,
      //     time: t.time,
      //     price: Math.round(t.rate),
      //     spots: t.availableSpots,
      //   });
      // });
    }
  }

  if (rows.length === 0) {
    return res.status(200).json({
      ok: true,
      message: "GolfNow API not yet connected — no rows written.",
    });
  }

  const { error } = await supabase
    .from("tee_times")
    .upsert(rows, { onConflict: "id" });

  if (error) return res.status(500).json({ error: error.message });

  return res.status(200).json({ ok: true, count: rows.length });
}
