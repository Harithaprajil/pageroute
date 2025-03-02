import React from "react";
import Productcard from "../components/Product-Card/Productcard";
import styles from "../components/Product-Card/productcard.module.css";
import ProductFilter from "../components/Product-Filter/ProductFilter";
import { GetServerSideProps } from "next";
import { ProductService } from "../Services/Product service";


interface Product {
  id: number;
  Category: string;
  Price: number;
  search: string;
  attributes: {
    name: string;
  };
}

interface ProductsPageProps {
  products: Product[];
  search: string;
}

export default function Products({ products }: ProductsPageProps) {
  return (
    <div>
      <ProductFilter />
      <div className={styles.content}>
        {products.map((p) => (
          <Productcard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

// ✅ Fetch products before rendering using `getServerSideProps`
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const data = await ProductService.getProducts();

    let filteredProducts = data.data;
    if (query.Category) {
      filteredProducts = filteredProducts.filter(
        (p: any) => p.Category === query.Category
      );
    }
    if (query.Price) {
      filteredProducts = filteredProducts.filter(
        (p: any) => p.Price <= Number(query.Price)
      );
    }
    console.log("Query   "+query.search)

    if (query?.search) {
        const searchLower = query.search?.toString().toLowerCase();
        filteredProducts = filteredProducts?.filter((p: any) => 
          p.Title.toLowerCase().includes(searchLower)
        );
    }

    return {
      props: { products: filteredProducts },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { props: { products: [] } };
  }
  
};
