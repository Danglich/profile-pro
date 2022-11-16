import { useEffect, useState } from 'react';
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { projectsData } from '../data';
import { newsData } from '../data';
import { group } from '../utils';

function SearchBar({ isShowing, toggle }) {
    // Đang ở trang nào
    const [page, setPage] = useState('projects');
    const location = useLocation();

    const categories = useMemo(() => {
        if (page === 'projects') {
            return group(projectsData);
        } else {
            return group(newsData);
        }
    }, [page]);

    useEffect(() => {
        if (location.pathname.includes('news')) {
            setPage('news');
        } else {
            setPage('projects');
        }
    }, [location]);

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
                <ul
                    className={
                        isShowing
                            ? ' fixed right-[0] top-[60px] h-full z-[10001] w-[220px] px-[20px] py-[40px] bg-white  transition-all duration-500  ease-out'
                            : ' fixed right-[-220px] top-[60px] h-full z-[10001] w-[220px] px-[20px] py-[40px] bg-white  transition-all duration-500  ease-out'
                    }
                >
                    <li className="w-full pl-[12px] mb-[28px]">
                        <Link to="/projects" className="w-full">
                            <div className="px-[12px] inline-block cursor-pointer relative after:content-[''] after:absolute after:bg-black  after:h-[0.5px] after:w-[0] after:translate-y-[0.25px] after:left-[100%] after:top-[50%] hover:after:w-[100%] hover:after:left-[0] after:transition-all after:duration-500 hover:after:duration-500 hover:after:transition-[width]">
                                <span className="uppercase font-bold text-[17px] tracking-[2px] ">
                                    all
                                </span>
                            </div>
                        </Link>
                    </li>
                    {categories.map((category) => (
                        <li
                            key={category}
                            className="w-full pl-[12px] mb-[28px]"
                        >
                            <Link to={`${page}/${category}`} className="w-full">
                                <div className="px-[12px] inline-block cursor-pointer relative after:content-[''] after:absolute after:bg-black  after:h-[0.5px] after:w-[0] after:translate-y-[0.25px] after:left-[100%] after:top-[50%] hover:after:w-[100%] hover:after:left-[0] after:transition-all after:duration-500 hover:after:duration-500 hover:after:transition-[width]">
                                    <span className="uppercase font-[800] text-[16px] tracking-[2px] ">
                                        {category}
                                    </span>
                                </div>
                            </Link>
                        </li>
                    ))}
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

export default SearchBar;
