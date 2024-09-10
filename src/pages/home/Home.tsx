import Carrossel from "../../components/carrossel/Carrossel";
import ListProduct from "../../components/product/list/ListProduct";

function Home() {
  return (
    <>
      <div className="bg-bio-City-cream font-roboto">
        <Carrossel />
        <div className="mx-10">
          <div>
            <h2 className="m-6 pl-4 border-l-4 border-bio-City-footer-navbar-color text-4xl font-bold">Novidades</h2>
            <ListProduct />
          </div>
          
          <div>
            <div className="h-[30vh]">
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
