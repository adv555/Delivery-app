import React, { useEffect } from "react";
import { fetchSellers } from "../store/actions/seller.actions";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { ProductCard } from "../components/ProductCard";
import { Button } from "../components/Button";
import { SellerCard } from "../components/SellerCard";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { error, loading, sellers } = useAppSelector((state) => state.sellers);
  console.log(sellers);

  useEffect(() => {
    dispatch(fetchSellers());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 py-6 sm:px-0 sm:flex-row sm:items-start gap-4">
        <div className="w-1/3 max-h-screen sm:h-screen">
          <div className="h-5/6 overflow-scroll px-4 pt-6 border-4 border-dashed border-gray-200">
            {sellers.map((seller) => (
              <div key={seller._id + seller.name}>
                <SellerCard name={seller.name} image={seller.image} />
              </div>
            ))}
          </div>
        </div>

        <div className="w-2/3 h-screen">
          <div className="flex items-start justify-around flex-wrap h-5/6 overflow-scroll px-4 pt-6 border-4 border-dashed border-gray-200 ">
            {sellers.map((seller) => (
              <div key={seller._id} className="">
                <ProductCard
                  name={seller.name}
                  image={seller.image}
                  button={
                    <Button
                      label="add to cart"
                      className="bg-orange-dark text-orange-light  hover:bg-orange-accent focus:outline-none focus:shadow-outline"
                    />
                  }
                  className="w-72 h-full border rounded-lg overflow-hidden"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
