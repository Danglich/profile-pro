import { useState } from 'react';
import { Link } from 'react-router-dom';

function SideBar({ isShowing, toggle }) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div
            className={
                isShowing ? 'w-[100vw] h-[100vh] z-[10] fixed' : 'w-[0] h-[0]'
            }
            onClick={() => {
                toggle();
            }}
        >
            <div className="h-full">
                <div
                    className={
                        isLoading
                            ? 'fixed z-[10001] bg-black top-0 h-[4px] animate-[load_1s_ease-in-out]'
                            : 'fixed z-[10001] bg-black top-0 h-[4px]  w-0'
                    }
                ></div>
                <ul
                    className={
                        isShowing
                            ? ' fixed left-[0] top-[60px] h-full z-[10001] w-[220px] px-[20px] py-[40px] bg-white  transition-all duration-500  ease-out'
                            : ' fixed left-[-220px] top-[60px] h-full z-[10001] w-[220px] px-[20px] py-[40px] bg-white  transition-all duration-500  ease-out'
                    }
                >
                    <li
                        className="w-full pl-[12px] mb-[28px]"
                        onClick={() => {
                            setIsLoading(true);
                        }}
                    >
                        <Link to="/projects" className="w-full">
                            <div className="px-[12px] inline-block cursor-pointer relative after:content-[''] after:absolute after:bg-black  after:h-[0.5px] after:w-[0] after:translate-y-[0.25px] after:left-[100%] after:top-[50%] hover:after:w-[100%] hover:after:left-[0] after:transition-all after:duration-500 hover:after:duration-500 hover:after:transition-[width]">
                                <span className="uppercase font-bold text-[17px] tracking-[2px] ">
                                    projects
                                </span>
                            </div>
                        </Link>
                    </li>
                    <li className="w-full pl-[12px] mb-[28px]">
                        <Link to="/news" className="w-full">
                            <div className="px-[12px] inline-block cursor-pointer relative after:content-[''] after:absolute after:bg-black  after:h-[0.5px] after:w-[0] after:translate-y-[0.25px] after:left-[100%] after:top-[50%] hover:after:w-[100%] hover:after:left-[0] after:transition-all after:duration-500 hover:after:duration-500 hover:after:transition-[width]">
                                <span className="uppercase font-[800] text-[16px] tracking-[2px] ">
                                    news
                                </span>
                            </div>
                        </Link>
                    </li>
                    <li className="w-full pl-[12px] mb-[28px]">
                        <Link to="/profile" className="w-full">
                            <div className="px-[12px] inline-block cursor-pointer relative after:content-[''] after:absolute after:bg-black  after:h-[0.5px] after:w-[0] after:translate-y-[0.25px] after:left-[100%] after:top-[50%] hover:after:w-[100%] hover:after:left-[0] after:transition-all after:duration-500 hover:after:duration-500 hover:after:transition-[width]">
                                <span className="uppercase font-[800] text-[16px] tracking-[2px] ">
                                    profile
                                </span>
                            </div>
                        </Link>
                    </li>
                    <li className="w-full pl-[12px] mb-[28px]">
                        <Link to="/press" className="w-full">
                            <div className="px-[12px] inline-block cursor-pointer relative after:content-[''] after:absolute after:bg-black  after:h-[0.5px] after:w-[0] after:translate-y-[0.25px] after:left-[100%] after:top-[50%] hover:after:w-[100%] hover:after:left-[0] after:transition-all after:duration-500 hover:after:duration-500 hover:after:transition-[width]">
                                <span className="uppercase font-[800] text-[16px] tracking-[2px] ">
                                    press
                                </span>
                            </div>
                        </Link>
                    </li>
                    <li className="w-full pl-[12px] mb-[28px]">
                        <Link to="/contact" className="w-full">
                            <div className="px-[12px] inline-block cursor-pointer relative after:content-[''] after:absolute after:bg-black  after:h-[0.5px] after:w-[0] after:translate-y-[0.25px] after:left-[100%] after:top-[50%] hover:after:w-[100%] hover:after:left-[0] after:transition-all after:duration-500 hover:after:duration-500 hover:after:transition-[width]">
                                <span className="uppercase font-[800] text-[16px] tracking-[2px] ">
                                    contact
                                </span>
                            </div>
                        </Link>
                    </li>
                    <li className="w-full pl-[12px] mb-[28px]">
                        <a
                            href="http://taiyouandc.jp/jp/"
                            className="w-full"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="px-[12px] inline-block cursor-pointer relative after:content-[''] after:absolute after:bg-black  after:h-[0.5px] after:w-[0] after:translate-y-[0.25px] after:left-[100%] after:top-[50%] hover:after:w-[100%] hover:after:left-[0] after:transition-all after:duration-500 hover:after:duration-500 hover:after:transition-[width]">
                                <span className="uppercase font-[800] text-[16px] tracking-[2px] ">
                                    TAIYOU&C.
                                </span>
                            </div>
                        </a>
                    </li>
                    <li className="w-full pl-[12px] mb-[28px]">
                        <a
                            href="https://implements.jp/"
                            className="w-full"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="px-[12px] inline-block cursor-pointer relative after:content-[''] after:absolute after:bg-black  after:h-[0.5px] after:w-[0] after:translate-y-[0.25px] after:left-[100%] after:top-[50%] hover:after:w-[100%] hover:after:left-[0] after:transition-all after:duration-500 hover:after:duration-500 hover:after:transition-[width]">
                                <span className="uppercase font-[800] text-[16px] tracking-[2px] ">
                                    IMPLEMENTS
                                </span>
                            </div>
                        </a>
                    </li>

                    <li className="w-full pl-[12px] mb-[28px]">
                        <a
                            href="https://www.facebook.com/MikiyaKobayashiInc"
                            className="w-full"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="px-[12px] inline-block cursor-pointer relative after:content-[''] after:absolute after:bg-black  after:h-[0.5px] after:w-[0] after:translate-y-[0.25px] after:left-[100%] after:top-[50%] hover:after:w-[100%] hover:after:left-[0] after:transition-all after:duration-500 hover:after:duration-500 hover:after:transition-[width]">
                                <span className="uppercase font-[800] text-[16px] tracking-[2px] ">
                                    facebook
                                </span>
                            </div>
                        </a>
                    </li>
                    <li className="w-full pl-[12px] mb-[28px]">
                        <a
                            href="https://www.instagram.com/mikiyakobayashi/"
                            className="w-full"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="px-[12px] inline-block cursor-pointer relative after:content-[''] after:absolute after:bg-black  after:h-[0.5px] after:w-[0] after:translate-y-[0.25px] after:left-[100%] after:top-[50%] hover:after:w-[100%] hover:after:left-[0] after:transition-all after:duration-500 hover:after:duration-500 hover:after:transition-[width]">
                                <span className="uppercase font-[800] text-[16px] tracking-[2px] ">
                                    INSTAGRAM
                                </span>
                            </div>
                        </a>
                    </li>
                </ul>
                {/* Over lay */}
                <div
                    className={
                        isShowing
                            ? 'h-full bg-[rgba(0,0,0,0.7)] opacity-[1]  transition-opacity duration-500'
                            : 'opacity-[0] h-[0] w-[0]'
                    }
                ></div>
            </div>
        </div>
    );
}

export default SideBar;
