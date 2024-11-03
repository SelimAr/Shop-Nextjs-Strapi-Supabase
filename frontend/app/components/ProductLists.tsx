import React from "react";

type ProductListsProps = {
  path: string | undefined;
};

export default function ProductLists(props: ProductListsProps) {
  const { path } = props;
  return (
    <div className="">
      <div className="text-3xl font-semibold font-arimo capitalize">{path}</div>
    </div>
  );
}
