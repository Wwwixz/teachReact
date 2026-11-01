import products from "../../data/products.json";
import ProductCard from "../../components/products/ProductCard";

function Catalog() {
    return (
        <div>
            <h1>Каталог</h1>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    brand={product.brand}
                    img={product.img}
                />
            ))}
        </div>
    )
}

export default Catalog;