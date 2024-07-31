import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return <div>My Post: {params.id}</div>;
};

export default page;
