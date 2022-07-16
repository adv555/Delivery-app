import React from "react";

import { clsx } from "clsx";
import { Typography } from "./Typography/Typography";

interface ProductCardProps {
  name: string;
  image?: string;
  className?: string;
  button?: React.ReactNode;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  className,
  button,
}) => {
  return (
    <div className={clsx("flex flex-col shadow-card", className)}>
      {image && <img src={image} alt={name} className=" block" />}
      <div className="flex flex-col p-2">
        <div className="mt-2 flex">
          <Typography
            type={"Ag-18-semibold"}
            children={name}
            className=" inline-block text-text-light"
          />
        </div>
        {button && <div className="flex justify-end  mt-2">{button}</div>}
      </div>
    </div>
  );
};
