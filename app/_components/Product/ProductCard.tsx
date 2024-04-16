import { ProductType } from "@/app/_types/Product";
import Card from "@/app/_components/Card";
import axios from "axios";
import { MouseEventHandler } from "react";

type ProductCardPropsType = Readonly<{
  product: ProductType;
  onClick?: MouseEventHandler<HTMLDivElement>;
}>;

function ProductCard({ product, onClick }: ProductCardPropsType) {
  return (
    <Card
      className="hover:shadow-xl transition-all cursor-pointer"
      onClick={onClick}
    >
      <div
        className="relative overflow-hidden rounded-t-md"
        style={{ minHeight: "225px" }}
      >
        <img
          className="absolute left-0 top-0 w-full h-auto"
          alt={product.name}
          src={`${axios.defaults.baseURL}/assets/${product.image_id}`}
        />
      </div>
      <div className="p-2 bg-primary-900 text-primary-100">
        <h1 className="select-none font-bold">{product.name}</h1>
      </div>
    </Card>
  );
}

export default ProductCard;
