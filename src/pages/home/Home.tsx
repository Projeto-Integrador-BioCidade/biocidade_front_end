import Carrossel from "../../components/carrossel/Carrossel";
import ListCategory from "../../components/category/list/ListCategory";
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
          <hr className="mt-6 border border-b-0 border-black opacity-50" />
          <div>
            <h2 className="m-6 pl-4 border-l-4 border-bio-City-footer-navbar-color text-4xl font-bold">Categorias</h2>
            <div className="h-[30vh]">
              <ListCategory />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
