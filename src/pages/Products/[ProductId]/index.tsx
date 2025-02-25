
import React from "react";
import { GetServerSideProps } from "next";
import { ProductService } from "../../Services/Product service"; 
import prostyle from "../[ProductId]/productdetail.module.css"; 
import GoToCartButton from "../../components/GoToCartButton"; 

interface Product {
  id: number;
  Title: string;
  Price: number;
  Category: string;
  Description: string;
  quantity: number;
  index:any;
  Image: { formats?: { thumbnail?: { url: string } } }[];
  
  
}

interface ProductPageProps {
  product: Product | null;
}

export default function ProductDetail({ product }: ProductPageProps) {
  console.log("Product received in ProductDetail:", product); 
  if (!product) return <p>Product not found</p>;

  return (
    <div className="container">
      <div className={prostyle.prodetail}>
        <div className={prostyle.prodetailtable1}>
          {product?.Image?.map((image, index) => (
            <img
              src={image?.formats?.thumbnail?.url}
              key={index}
              height="250px"
              width="150px"
              alt="product image"
            />
          ))}
        </div>
        <div className={prostyle.prodetailtable2}>
          <div className={prostyle.prodetailbox}>
            <b>{product.Title}</b>
          </div>
          <div className={prostyle.prodetailbox} style={{ color: "red", fontSize: "25px" }}>
            {"$" + product.Price}
          </div>
          <div className={prostyle.prodetailbox}>{product.Category}</div>
          <div className={prostyle.prodetailbox}>{product.Description}</div>
          <div className={prostyle.prodetailbox}>
            <GoToCartButton product ={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ✅ Fetch product before rendering using `getServerSideProps`
// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   try {
    

//     const { id } = params as { id: string };
//     console.log("Fetching product with ID:", id);
//     console.log("Params received in getServerSideProps:", params);


//     const productData = await ProductService.getProductById(Number(id));
//     console.log("Fetched product data:", productData);


//     return {
//       props: { product: productData.data || null },
//     };
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     return { props: { product: null } }; // Return null if API fails
//   }
// };


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  console.log("Params received in getServerSideProps:", params); // ✅ Debugging

  try {
    const productId = params?.ProductId as string; // ✅ Correctly extract ProductId
    if (!productId) {
      console.error("Invalid Product ID:", params);
      return { props: { product: null } };
    } else {
      console.log("Fetching product with ProductId:", productId);
      const productData = await ProductService.getProductByDocumentId(productId); 

      console.log("Fetched product data:", productData);

      return {
        props: { product: productData?.data || null }, // Ensure proper data structure
      };
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return { props: { product: null } };
  }
};




