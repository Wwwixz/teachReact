import products from "../../data/products.json";
import ProductCard from "../../components/products/ProductCard";

function Catalog() {
    return (
        <section className="bg-[#F4F4EF] py-20 px-6">
            <div className="max-w-[1155px] mx-auto">

                <h1 className="font-[Unbounded] text-[40px] font-semibold mb-10">
                    Популярное сейчас
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            brand={product.brand}
                            image={product.image}
                            rating={product.rating}
                            inStock={product.inStock}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Catalog;