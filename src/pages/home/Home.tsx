import Carrossel from "../../components/carrossel/Carrossel";
import ListProduct from "../../components/product/list/ListProduct";

function Home() {
  return (
    <>
      <div className="bg-bio-City-cream font-roboto">
        <Carrossel />
        <div className="mx-10">
          <div>
            <h2 className="m-6 border-l-4 border-verde-um pl-4 text-4xl font-bold">
              Novidades
            </h2>
            <ListProduct />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
