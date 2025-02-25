import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    console.log("Hereeee");
    const response = await fetch(
      "https://secure-creativity-35fee2e16d.strapiapp.com/api/Products?populate=*"
    );
    const products = await response.json();
    res.status(200).json(products);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
