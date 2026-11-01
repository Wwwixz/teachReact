import {useState} from "react";

function ProductCard( { name, price, brand, image, rating, inStock }) {
    const [isFavorite, setIsFavorite] = useState(false);
    return (
        <div className="bg-[#FFFFFF] w-full">
            <article className="group w-full bg-white hover:bg-[#F4F4EF] transition-colors duration-200">
                <div className="relative overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-[305px] object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    <button
                        type="button"
                        aria-label={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
                        aria-pressed={isFavorite}
                        onClick={() => setIsFavorite(prev => !prev)}
                        className="absolute top-3 right-3 z-10"
                    >
                        {isFavorite ? "♥" : "♡"}
                    </button>
                </div>
                <div className="w-full min-h-[170px] p-4 flex flex-col gap-2">
                    <span className="font-[Manrope] font-normal text-[10px] tracking-[0.8px]  leading-[15px] text-[#85877E]">{brand}</span>
                    <h3 className="group-hover:text-[#6B8E23] transition duration-300">{name}</h3>
                    <div className="flex items-center gap-2">
                        <span>★ {rating}</span> 
                        <span>{inStock ? "В наличии" : "Нет в наличии"}</span>
                    </div>
                    <b className="w-full h-[21px] font-[Unbounded] font-semibold text-[17px] text-[#171914] mt-auto">{price.toLocaleString('ru-RU')} ₽</b>
                </div>
            </article>
        </div>
    )
}

export default ProductCard;