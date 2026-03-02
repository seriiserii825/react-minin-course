import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
export default function ProductsOrder() {
  const [orderBy, setOrderBy] = useState<string | null>();
  const handleSelect = (value: string) => {
    setOrderBy(value);
  };

  return (
    <Select onValueChange={handleSelect} value={orderBy || undefined}>
      <SelectTrigger className="w-[180px] bg-white border-none cursor-pointer mb-4">
        <SelectValue placeholder="Order By" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="title">Title</SelectItem>
          <SelectItem value="price">Price</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
