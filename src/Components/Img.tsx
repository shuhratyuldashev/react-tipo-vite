import { useState } from "react";
import { Post } from "./Cards";

export default function ImgComponent({
  photo,
  alt,
}: {
  photo: Post["userImg"];
  alt: Post["userName"];
}) {
  const [isCorrect, setIsCorrect] = useState(true);

  function hiddenPhoto() {
    setIsCorrect(false);
  }
  return isCorrect ? <img className="img-post" src={photo} alt={alt} onError={hiddenPhoto} /> : null;
}