import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      console.log("yesttttt");
      const response = await fetch(
        `https://secure-creativity-35fee2e16d.strapiapp.com/api/Products/${id}?populate=*`
      );

      if (!response.ok) {
        return res
          .status(response.status)
          .json({ message: "Product not found" });
      }

      const product = await response.json();
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
