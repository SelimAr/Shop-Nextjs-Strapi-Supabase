/*const dataURL = `http://localhost:1337/api/product-names`;

const Options: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `bearer ${process.env.STRAPI_API_KEY}`,
  },
};

async function fetchData() {
  const res = await fetch(dataURL, Options);
  if (!res) {
    return console.log(Error);
  }
  return res.json();
}*/

export default async function Home() {
  //const getData = await fetchData();
  //console.log(getData);

  return <div className="text-black text-arimo">hello</div>;
}
