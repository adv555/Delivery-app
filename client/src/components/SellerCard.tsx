import React from "react";
import { Typography } from "./Typography/Typography";

interface SellerCardProps {
  name: string;
  image?: string;
  onClick?: () => void;
}

export const SellerCard: React.FC<SellerCardProps> = ({
  name,
  image,
  onClick,
}) => {
  return (
    <div
      className="flex flex-col shadow-card mb-5 rounded-2xl"
      onClick={onClick}
    >
      <div className="flex flex-raw p-2 items-center justify-between ">
        <div className=" mr-3">
          <Typography
            type={"h4"}
            children={name}
            className=" inline-block text-text-dark"
          />
        </div>
        <div className="mr-3">
          {image && (
            <div>
              <img
                src={image}
                alt={name}
                className=" block w-32 rounded-lg overflow-hidden "
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
