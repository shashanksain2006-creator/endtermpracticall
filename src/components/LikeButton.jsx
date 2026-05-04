import { useState } from "react";
import "./LikeButton.css";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(!liked);
  };
  return (
    <button className="like-btn" onClick={toggleLike}>
      {liked ? "❤️" : "🤍"}
    </button>
  );
}; 
export default LikeButton;