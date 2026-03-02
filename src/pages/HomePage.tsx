import CreateProduct from "../components/CreateProduct";
import Modal from "../components/Modal";
import Preloader from "../components/Preloader";
import ProductsGrid from "../components/ProductsGrid";
import useProducts from "../hooks/useProducts";

export default function HomePage() {
  const { products, isLoading, isError, isModalOpen, setIsModalOpen, total, viewedProducts } =
    useProducts();
  return (
    <div className=" min-h-screen">
      <div className="container mx-auto">
        {isLoading ? (
          <Preloader />
        ) : (
          <ProductsGrid
            createProduct={() => setIsModalOpen(true)}
            products={products}
            total={total}
            viewedProducts={viewedProducts}
          />
        )}
        {isError && <p className="text-white text-center font-bold">{isError}</p>}
      </div>
      {isModalOpen && (
        <Modal title="Create New Product">
          <CreateProduct onCreate={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
}
