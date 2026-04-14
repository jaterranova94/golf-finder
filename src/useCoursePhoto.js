import { useState, useEffect } from "react";
const cache = {};
export const useCoursePhoto = (courseName, city) => {
  const [photoUrl, setPhotoUrl] = useState(null);
  const key = `${courseName}-${city}`;
  useEffect(() => {
    if (cache[key]) { setPhotoUrl(cache[key]); return; }
    const apiKey = process.env.REACT_APP_GOOGLE_PLACES_KEY;
    if (!apiKey) return;
    const query = `${courseName} golf course ${city} Massachusetts`;
    fetch(`https://places.googleapis.com/v1/places:searchText`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "places.photos",
      },
      body: JSON.stringify({ textQuery: query, maxResultCount: 1 }),
    })
      .then((r) => r.json())
      .then((data) => {
        const photoName = data?.places?.[0]?.photos?.[0]?.name;
        if (photoName) {
          const url = `https://places.googleapis.com/v1/${photoName}/media?maxWidthPx=800&key=${apiKey}`;
          cache[key] = url;
          setPhotoUrl(url);
        }
      })
      .catch(() => {});
  }, [key]);
  return photoUrl;
};