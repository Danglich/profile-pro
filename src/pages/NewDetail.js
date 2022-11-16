import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';
import { newsData } from '../data';

function NewDetail() {
    const { id } = useParams();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isNext, setIsNext] = useState(false);
    const [isPrev, setIsPrev] = useState(false);

    const post = useMemo(() => {
        return newsData.filter((post) => post.id.toString() === id)[0];
    }, [id]);

    const imageCount = useMemo(() => {
        if (post) return post.images.length;
    }, [post]);

    const nextRef = useCallback((node) => {
        if (node) {
            node.addEventListener('mouseenter', () => {
                setIsNext(true);
            });
            node.addEventListener('mouseleave', () => {
                setIsNext(false);
            });
        }
    }, []);

    useEffect(() => {
        if (post) document.title = post.title;
    }, [post]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        setCurrentIndex(0);
    }, [window.location.pathname]);

    // useEffect(() => {
    //     setClassNameListImages(
    //         `absolute top-0 ${`w-[${imageCount * 100}%]`} h-full translate-x-[${
    //             (-currentIndex * 100) / imageCount
    //         }%] peer-hover/left:translate-x-[50px]  peer-hover/right:translate-x-[-50px] transition-all duration-400 ease-out`,
    //     );
    // }, [imageCount, currentIndex]);

    const listRef = useCallback(
        (node) => {
            if (node) {
                node.style.width = `${imageCount * 100}%`;
                node.style.transform = `translateX(${
                    (-currentIndex * 100) / imageCount
                }%)`;
                // if (isNext) {
                //     node.style.transform = `translateX(-50px)`;
                // }
            }
        },
        [imageCount, currentIndex],
    );

    const imageRef = useCallback(
        (node) => {
            if (node) {
                node.style.width = `${100 / imageCount}%`;
            }
        },
        [imageCount],
    );

    const handleSetCurrentIndex = (index) => {
        setCurrentIndex(index);
    };

    if (!post) {
        return (
            <div className="h-[calc(100vh-60px)]">
                <img
                    className="w-full h-full"
                    alt="not found"
                    src="https://cdn4.vectorstock.com/i/1000x1000/85/43/error-page-not-found-vector-27898543.jpg"
                ></img>
            </div>
        );
    }

    return (
        <div className="bg-[#f2f2f2]">
            <div className="w-[1000px] mx-auto bg-white max-lg:w-[100%]">
                <div className="w-[400px] max-md:w-[100%] mx-auto">
                    <Pagination type="news" item={post} datas={newsData} />
                </div>
                <div className="pt-[60.2%] w-full relative overflow-hidden">
                    {/* Overlay left */}
                    <div className="peer/left w-[50%] z-[1] h-full absolute left-[0] cursor-pointer top-0"></div>
                    <div
                        ref={nextRef}
                        className="peer/right w-[50%] z-[1] h-full absolute right-[0] cursor-pointer top-0"
                    ></div>

                    <ul
                        className="absolute top-0 h-full peer-hover/left:translate-x-[50px]  peer-hover/right:translate-x-[-50px] transition-all duration-500 ease-out"
                        ref={listRef}
                    >
                        {post.images.map((image) => (
                            <img
                                key={image}
                                className=" h-full float-left relative"
                                alt=""
                                src={image}
                                ref={imageRef}
                                onClick={() => {
                                    console.log('he luu');
                                }}
                            ></img>
                        ))}
                    </ul>
                </div>

                {/* Dot */}
                <div className="text-center">
                    <div className="flex justify-center mt-[20px]">
                        {post.images.length > 1 && (
                            <>
                                {post.images.map((image, index) => (
                                    <div
                                        key={image.id}
                                        onClick={() => {
                                            handleSetCurrentIndex(index);
                                        }}
                                        className={`w-[30px] h-[30px] flex items-center justify-center group cursor-pointer `}
                                    >
                                        <span
                                            className={`block w-[10px] h-[10px] bg-[#e8e8e8] rounded-full group-hover:bg-[#1a1a1a] transition-all ${
                                                index === currentIndex
                                                    ? 'dot-active'
                                                    : ''
                                            }`}
                                        ></span>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>

                <div className="px-[150px] py-[30px] max-lg:px-[5%] max-lg:pt-[20px]">
                    <h1 className="font-[800] text-[22px]">{post?.title}</h1>
                    <p className="font-[500] text-[17px]">{post?.time}</p>
                    {post?.textEl.map((text) => (
                        <p className="mt-[20px]">{text}</p>
                    ))}
                    <span className="inline-block bg-[#1a1a1a] h-[1px] w-[20px] mt-[28px] mb-[8px]"></span>
                    {post?.textJp.map((text) => (
                        <p className="mt-[20px] text-[14px]">{text}</p>
                    ))}
                </div>
                <div className="w-[400px] max-md:w-[100%] mx-auto">
                    <Pagination type="news" item={post} datas={newsData} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default NewDetail;
