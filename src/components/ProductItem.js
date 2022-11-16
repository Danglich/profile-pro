import { Link } from 'react-router-dom';

function ProductItem({ product }) {
    const Wraper = ({ children }) => {
        if (product.id % 4 === 1) {
            return <div className="">{children}</div>;
        } else return <div>{children}</div>;
    };
    return (
        <Link
            to={`/projects/${product.id}`}
            className="w-[25%] max-xl:w-[33.333%] max-md:w-[50%] max-sm:w-[100%] relative group cursor-pointer overflow-hidden"
        >
            <Wraper>
                <div className=" pt-[60.75%]"></div>
                <div className="w-full h-full  translate-y-[-10%] absolute top-0 left-0 group-hover:translate-y-[0] transition-all duration-[500ms] ease-out">
                    <img
                        className="w-full h-[110%]"
                        alt=""
                        src={product?.images[0]}
                    ></img>
                </div>
                <div className="w-full h-full flex items-center   absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] opacity-[0] group-hover:translate-y-[0] group-hover:opacity-[1] transition-all duration-[500ms] ease-out">
                    <div className="flex flex-col items-center justify-center w-full group-hover:translate-y-[40px] ease-out transition-all duration-[500ms]">
                        <span className="text-white text-[20px] font-[900] tracking-[3px]">
                            {product?.name}
                        </span>
                        <span className="bg-white w-[20px] h-[2px] my-[12px]"></span>
                        <span className="text-white text-[17px] font-[800] tracking-[2.5px]">
                            {product?.author}
                        </span>
                    </div>
                </div>
            </Wraper>
        </Link>
    );
}

export default ProductItem;
