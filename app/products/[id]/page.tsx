import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

const Products = async ({ params }: Props) => {
  const { id } = await params;
  return <div>id -- {id}</div>;
};

export default Products;
