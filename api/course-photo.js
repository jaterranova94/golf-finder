export default async function handler(req, res) {
  const { name, city } = req.query;
  const apiKey = process.env.REACT_APP_GOOGLE_PLACES_KEY;
  if (!name || !city || !apiKey) {
    return res.status(400).json({ error: "Missing params" });
  }
  try {
    const searchRes = await fetch(
      "https://places.googleapis.com/v1/places:searchText",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "places.photos",
        },
        body: JSON.stringify({
          textQuery: `${name} golf course ${city} Massachusetts`,
          maxResultCount: 1,
        }),
      }
    );
    const data = await searchRes.json();
    const photoName = data?.places?.[0]?.photos?.[0]?.name;
    if (!photoName) {
      return res.status(404).json({ error: "No photo found" });
    }
    const photoUrl =
      "https://places.googleapis.com/v1/" +
      photoName +
      "/media?maxWidthPx=800&key=" +
      apiKey;
    return res.status(200).json({ url: photoUrl });
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch photo" });
  }
}