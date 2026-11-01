function ProductCard( { name, price, brand }) {
    return (
        <div className="bg-[#FFFFFF]">
            <div className="w-[298px] h-[183px] p-[20px 20px] bg-[#FFFFFF]">
                <span className="font-[Manrope] font-normal text-[10px] tracking-[0.8px]  leading-[15px] text-[#85877E]">{brand}</span>
                <h3 className="w-[256px] h-[20px] font-[Unbounded] font-medium text-[16px] tracking-[-0.64px] text-[#171914]">{name}</h3>
                <b className="w-[99px] h-[21px] font-[Unbounded] font-semibold text-[17px] text-[#171914]">{price}</b>
            </div>
        </div>
    )
}

export default ProductCard;