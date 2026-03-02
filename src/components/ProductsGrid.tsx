import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import type { IProduct } from "../interfaces/IProduct";
import Product from "./Product";
import ProductsOrder from "./ProductsOrder";

gsap.registerPlugin(ScrollTrigger);

interface IProductsProps {
  products: IProduct[];
  total: number;
  viewedProducts: number;
  createProduct?: () => void;
}

export default function ProductsGrid({
  products,
  createProduct,
  total,
  viewedProducts,
}: IProductsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      // batch — группирует элементы, которые попали в viewport примерно одновременно
      ScrollTrigger.batch(".product-card", {
        // когда элемент(ы) входят в viewport
        onEnter: (batch) => {
          gsap.from(batch, {
            opacity: 0,
            y: 10,
            duration: 3.5,
            stagger: 0.1, // ← вот stagger между карточками
            ease: "power3.out",
          });
        },
        // start — когда нижние 80% карточки входят в нижнюю часть экрана
        start: "top 100%",
        // end — можно не указывать, если не нужен onLeave
        end: "bottom top",

        // очень полезно: предотвращает повторные анимации при быстром скролле
        once: true, // ← чаще всего именно это нужно
        // или false, если хочешь повтор при скролле вверх-вниз
      });
    },
    { scope: containerRef },
  );

  return (
    <>
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl text-white font-bold">Products</h2>
          <span className="bg-white/25 text-white text-sm font-semibold px-3 py-1 rounded-full">
            {viewedProducts}/{total}
          </span>
        </div>

        <ProductsOrder />
      </header>
      <div ref={containerRef} className="grid grid-cols-4 gap-2 mx-auto">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Product product={product} />
          </div>
        ))}
      </div>
    </>
  );
}
