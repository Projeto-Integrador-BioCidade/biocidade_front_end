import Carrossel from "../../components/carrossel/Carrossel";
import ListProduct from "../../components/product/list/ListProduct";

function Home() {
  return (
    <>
        <div>
          <Carrossel />
        </div>
        <div className="h-1/2 p-10">
          <h2 className=" border-l-4 border-black  text-3xl font-bold my-2">
            Novidades
          </h2>
          <ListProduct />
        </div>
          </>
  );
}

export default Home;
