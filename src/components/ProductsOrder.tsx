import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useOrder, useSetOrder, useSetSortBy, useSortBy } from "@/store/useProductsStorage";

export default function ProductsOrder() {
  const sortBy = useSortBy();
  const setSortBy = useSetSortBy();

  const order = useOrder();
  const setOrder = useSetOrder();

  const handleSelect = (value: "title" | "price" | "all") => {
    setSortBy(value);
  };

  const handleOrderSelect = (value: "asc" | "desc") => {
    setOrder(value);
  };

  return (
    <div className="flex gap-4">
      <Select onValueChange={handleSelect} value={sortBy}>
        <SelectTrigger className="w-[180px] bg-white border-none cursor-pointer mb-4">
          <SelectValue placeholder="Order By" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">OrderBy</SelectItem>
            <SelectItem value="title">Title</SelectItem>
            <SelectItem value="price">Price</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select onValueChange={handleOrderSelect} value={order}>
        <SelectTrigger className="w-[180px] bg-white border-none cursor-pointer mb-4">
          <SelectValue placeholder="Order" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">Order</SelectItem>
            <SelectItem value="asc">Asc</SelectItem>
            <SelectItem value="desc">Desc</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
