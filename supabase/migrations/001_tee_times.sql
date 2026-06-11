CREATE TABLE tee_times (
  id TEXT PRIMARY KEY,           -- "{course_id}-{date}-{time}"
  course_id INTEGER NOT NULL,
  date DATE NOT NULL,
  time TEXT NOT NULL,            -- "07:00"
  price INTEGER NOT NULL,
  spots INTEGER NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_tee_times_course_date ON tee_times (course_id, date);

ALTER TABLE tee_times ENABLE ROW LEVEL SECURITY;

-- Anyone can read tee times (public data)
CREATE POLICY "public_read" ON tee_times
  FOR SELECT USING (true);
