import { useState, useEffect } from "react";
const cache = {};
export const useCoursePhoto = (courseName, city) => {
 const [photoUrl, setPhotoUrl] = useState(null);
 useEffect(() => {
   const key = `${courseName}-${city}`;
   if (cache[key]) {
     setPhotoUrl(cache[key]);
     return;
   }
   fetch(`/api/course-photo?name=${encodeURIComponent(courseName)}&city=${encodeURIComponent(city)}`)
     .then((r) => r.json())
     .then((data) => {
       if (data.url) {
         cache[key] = data.url;
         setPhotoUrl(data.url);
       }
     })
     .catch(() => {});
 }, [courseName, city]);
 return photoUrl;
};