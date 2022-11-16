import { Link } from 'react-router-dom';

function NewItem({ post }) {
    return (
        <div className="w-[25%] px-[10px] py-[10px] max-xl:w-[33.333%] max-md:w-[50%] max-sm:w-[100%] ">
            <Link
                to={`/news/${post.id}`}
                className="w-full cursor-pointer group relative"
            >
                {/* Image */}
                <div className="pt-[60.2%] w-full relative overflow-hidden">
                    <img
                        className="w-full h-[calc(100%+20px)] absolute bottom-0 translate-y-[0] group-hover:translate-y-[20px] transition-all duration-500 ease-out"
                        alt=""
                        src={post?.images[0]}
                    ></img>
                </div>

                {/* Info */}
                <div className="bg-white px-[30px] py-[40px]">
                    <h1 className="font-[900] text-[19px] mb-[8px] leading-[24px]">
                        {post?.title}
                    </h1>
                    <p className="text text-[17px] font-[500]">
                        {post?.textEl[0]}
                    </p>
                </div>

                {/* Overlay */}
                <div className="absolute top-0 h-full w-full bg-[rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-[1] transition-all duration-500 ease-out">
                    <div className="absolute w-full px-[30px] text-center bottom-[60px] group-hover:bottom-[30px] transition-all duration-500 ease-out">
                        <h1 className="font-[900] text-center tracking-[2px] text-white text-[20px] mb-[8px] leading-[24px]">
                            {post?.title}
                        </h1>
                        <span className="block w-[24px] h-[2.5px] bg-white mx-[auto] my-[16px]"></span>
                        <p className="font-[700] text-white text-[18px] tracking-[2px]">
                            {post?.time}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default NewItem;
