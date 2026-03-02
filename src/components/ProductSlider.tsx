import { useState } from "react";

interface IProductSlider {
  images: string[];
}

export default function ProductSlider({ images }: IProductSlider) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageClassDefault =
    "w-20 h-20 object-contain border rounded-lg cursor-pointer opacity-50 transition-opacity";
  const imageClassActive = `${imageClassDefault} border-indigo-600 opacity-100`;
  const imageClass = (index: number) =>
    index === currentIndex ? imageClassActive : imageClassDefault;

  return (
    <div>
      <div className="rounded-xl overflow-hidden border mb-4">
        <img
          src={images[currentIndex]}
          alt="Essence Mascara Lash Princess"
          className="w-full h-96 object-contain bg-gray-50"
        />
      </div>
      {images && images.length > 1 && (
        <div className="flex gap-3">
          {images.map((imgUrl, index) => (
            <img
              key={index}
              src={imgUrl}
              className={imageClass(index)}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
