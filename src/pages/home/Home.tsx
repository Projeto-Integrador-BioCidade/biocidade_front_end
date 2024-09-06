import Carousel from "../../components/carousel/Carousel";
import ListCategory from "../../components/category/list/ListCategory";
import ListProduct from "../../components/product/list/ListProduct";

function Home() {
  return (
    <>
      <div className="bg-gray-200 font-roboto">
        <Carousel />
        <div className="mx-10">
          <div>
            <h2 className="text-4xl font-bold mb-4">Novidades</h2>
            <ListProduct />
          </div>
          <hr className="border border-b-0 border-black opacity-50 mt-6" />
          <div>
            <h2 className="text-4xl font-bold mb-4">Categorias</h2>
            <ListCategory />
          </div>
        </div>
        <div>
        </div>
      </div>

    </>
  );
}

export default Home;
