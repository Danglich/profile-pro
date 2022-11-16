import { useMemo } from 'react';
import { Link } from 'react-router-dom';

function Pagination({ type, datas, item }) {
    const nextItem = useMemo(() => {
        const index = datas.findIndex((i) => i.id === item?.id);

        return datas[index + 1];
    }, [datas, item]);

    const prevItem = useMemo(() => {
        const index = datas.findIndex((i) => i.id === item?.id);

        return datas[index - 1];
    }, [datas, item]);

    if (!item) {
        return null;
    }

    return (
        <div className="h-[80px] px-[30px] py-[20px] bg-white flex items-center justify-between border-b-[1px] border-[#e5e5e5]">
            {/* Lefy btn */}
            {datas[0]?.id === item.id ? (
                <div className="relative h-[46px] w-[46px] ">
                    <span className="absolute h-[2px] w-[10px] bg-[#ccc] rounded-[1px] rotate-[-45deg] top-[calc(50%-4px)] right-[calc(50%-4px)]"></span>
                    <span className="absolute top-[6px] h-[2px] w-[10px] bg-[#ccc] rounded-[1px] rotate-[45deg] top-[calc(50%+2px)] right-[calc(50%-4px)]"></span>
                </div>
            ) : (
                <div className="relative cursor-pointer h-[46px] w-[46px] group ">
                    <Link
                        to={`/${type}/${prevItem?.id}`}
                        className="block h-[100%]"
                    >
                        <span className="absolute h-[2px] w-[10px] bg-[#171717] rounded-[1px] rotate-[-45deg] top-[calc(50%-4px)] right-[calc(50%-4px)] group-hover:rotate-[135deg] transition-all duration-[500ms] ease-out"></span>
                        <span className="absolute top-[6px] h-[2px] w-[10px] bg-[#171717] rounded-[1px] rotate-[45deg] top-[calc(50%+2px)] right-[calc(50%-4px)] group-hover:rotate-[-135deg] transition-all duration-[500ms] ease-out"></span>
                    </Link>
                </div>
            )}
            {/* Middle */}
            <div className="relative h-[20px] w-[40px] cursor-pointer overflow-hidden group">
                <Link to={`/${type}`} className="w-full ">
                    <span className="absolute w-[6px] h-[7px] top-[0] left-[9px] bg-black group-hover:top-[-10px] transition-all duration-[400ms] ease-[cubic-bezier(0.75,0,0.3,1)]"></span>
                    <span className="absolute w-[6px] h-[10px] top-[0] left-[17px] bg-black  group-hover:top-[-10px]  transition-all duration-[400ms] ease-[cubic-bezier(0.75,0,0.3,1)]"></span>
                    <span className="absolute w-[6px] h-[5px] top-[0]  left-[25px] bg-black  group-hover:top-[-10px]  transition-all duration-[400ms] ease-[cubic-bezier(0.75,0,0.3,1)]"></span>

                    <span className="absolute w-[6px] h-[7px] top-[9px] left-[9px] bg-black  group-hover:top-[0]  transition-all duration-[400ms] ease-[cubic-bezier(0.75,0,0.3,1)]"></span>
                    <span className="absolute w-[6px] h-[7px] top-[12px] left-[17px] bg-black  group-hover:top-[0]  group-hover:h-[10px] transition-all duration-[400ms] ease-[cubic-bezier(0.75,0,0.3,1)]"></span>
                    <span className="absolute w-[6px] h-[7px] top-[7px]  left-[25px] bg-black  group-hover:top-[0]  group-hover:h-[5px] transition-all duration-[400ms] ease-[cubic-bezier(0.75,0,0.3,1)]"></span>

                    <span className="absolute w-[6px] h-[7px] top-[44px] left-[9px] bg-black  group-hover:top-[9px]  transition-all duration-[400ms] ease-[cubic-bezier(0.75,0,0.3,1)]"></span>
                    <span className="absolute w-[6px] h-[7px] top-[47px] left-[17px] bg-black  group-hover:top-[12px]  transition-all duration-[400ms] ease-[cubic-bezier(0.75,0,0.3,1)]"></span>
                    <span className="absolute w-[6px] h-[7px] top-[42px]  left-[25px] bg-black  group-hover:top-[7px]  transition-all duration-[400ms] ease-[cubic-bezier(0.75,0,0.3,1)]"></span>
                </Link>
            </div>
            {/* Right btn */}
            {datas.slice(-1)[0]?.id === item?.id ? (
                <div className="relative h-[46px] w-[46px] ">
                    <span className="absolute h-[2px] w-[10px] bg-[#ccc] rounded-[1px] rotate-[45deg] top-[calc(50%-4px)] right-[calc(50%-4px)]"></span>
                    <span className="absolute top-[6px] h-[2px] w-[10px] bg-[#ccc] rounded-[1px] rotate-[-45deg] top-[calc(50%+2px)] right-[calc(50%-4px)]"></span>
                </div>
            ) : (
                <div className="relative cursor-pointer h-[46px] w-[46px] group">
                    <Link
                        to={`/${type}/${nextItem?.id}`}
                        className="block h-[100%]"
                    >
                        <span className="absolute h-[2px] w-[10px] bg-[#171717] rounded-[1px] rotate-[45deg] top-[calc(50%-4px)] right-[calc(50%-4px)] group-hover:rotate-[-135deg] transition-all duration-[500ms] ease-out"></span>
                        <span className="absolute top-[6px] h-[2px] w-[10px] bg-[#171717] rounded-[1px] rotate-[-45deg] top-[calc(50%+2px)] right-[calc(50%-4px)] group-hover:rotate-[135deg] transition-all duration-[500ms] ease-out"></span>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Pagination;
