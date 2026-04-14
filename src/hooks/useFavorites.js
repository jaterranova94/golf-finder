import { useState, useEffect } from "react";
export const useFavorites = () => {
 const [favorites, setFavorites] = useState(() => {
   try {
     const stored = localStorage.getItem("golf-favorites");
     return stored ? JSON.parse(stored) : [];
   } catch {
     return [];
   }
 });
 useEffect(() => {
   localStorage.setItem("golf-favorites", JSON.stringify(favorites));
 }, [favorites]);
 const toggleFavorite = (courseId) => {
   setFavorites((prev) =>
     prev.includes(courseId)
       ? prev.filter((id) => id !== courseId)
       : [...prev, courseId]
   );
 };
 const isFavorite = (courseId) => favorites.includes(courseId);
 return { favorites, toggleFavorite, isFavorite };
};