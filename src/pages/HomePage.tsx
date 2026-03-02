import CreateProduct from "../components/CreateProduct";
import Modal from "../components/Modal";
import Pagination from "../components/Pagination";
import Preloader from "../components/Preloader";
import ProductsGrid from "../components/ProductsGrid";
import useProducts from "../hooks/useProducts";

export default function HomePage() {
  const {
    products,
    isLoading,
    isError,
    isModalOpen,
    setIsModalOpen,
    total,
    skip,
    limit,
    setSkip,
    viewedProducts,
  } = useProducts();

  function onPageChange(newPage: number) {
    setSkip((newPage - 1) * limit);
  }

  return (
    <div className="min-h-[50vh] pb-10">
      <div className="container mx-auto">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <ProductsGrid
              createProduct={() => setIsModalOpen(true)}
              products={products}
              total={total}
              viewedProducts={viewedProducts}
            />
            {total > limit && (
              <Pagination total={total} skip={skip} limit={limit} onPageChange={onPageChange} />
            )}
          </>
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
