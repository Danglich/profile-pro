import { SearchOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header({
    handleSetShowMenu,
    handleSetShowSearch,
    showSearch,
    showMenu,
}) {
    const [pageName, setPageName] = useState('projects');
    const [searchName, setSearchName] = useState('all');

    const handleCloseMenu = () => {
        if (showMenu) {
            handleSetShowMenu(!showMenu);
        }
    };

    const handleCloseSearch = () => {
        if (showSearch) {
            handleSetShowSearch(!showSearch);
        }
    };

    const location = useLocation();

    useEffect(() => {
        setPageName(location.pathname.split('/')[1]);
        if (location.pathname.includes('projects')) {
            setSearchName(location.pathname.split('/')[2] || 'all');
        }
    }, [location]);

    return (
        <div
            onClick={() => {
                handleCloseSearch();
                handleCloseMenu();
            }}
            className="flex top-0 shadow-sm w-full fixed z-[999] overflow-hidden bg-white justify-between items-center h-[60px] px-[30px] max-sm:px-[12px] border-b-[1px] border-[rgba(0,0,0,0.1)]"
        >
            <div
                className="flex cursor-pointer group"
                onClick={handleSetShowMenu}
            >
                {!showMenu && (
                    <div className="w-[36px] h-[28px] relative">
                        <span className="absolute transition-all duration-300 top-[6px] w-[18px] h-[2px] bg-[#1a1a1a] block group-hover:top-[0] group-hover:opacity-0 delay-100"></span>
                        <span className="absolute transition-all duration-300 top-[12px] w-[18px] h-[2px] bg-[#1a1a1a] block group-hover:top-[6px] delay-150"></span>
                        <span className="absolute transition-all duration-300 top-[18px] w-[18px] h-[2px] bg-[#1a1a1a] block  group-hover:top-[12px] delay-[200ms]"></span>
                        <span className="absolute transition-all duration-300 opacity-[0] top-[24px] w-[18px] h-[2px] bg-[#1a1a1a] block group-hover:opacity-[1] group-hover:top-[18px] delay-[250ms]"></span>
                    </div>
                )}
                <div
                    className={
                        !showMenu
                            ? 'w-[0] opacity-[0]'
                            : 'w-[36px] h-[28px] relative '
                    }
                >
                    <span
                        className={
                            showMenu
                                ? 'h-[2px] absolute w-[20px] bg-black block top-[12px]  rotate-[45deg] transition-all duration-300'
                                : 'h-[2px] absolute w-[20px] bg-black block top-[12px] transition-all duration-300'
                        }
                    ></span>
                    <span
                        className={
                            showMenu
                                ? 'h-[2px] absolute w-[20px] bg-black block top-[12px]  rotate-[-45deg] transition-all duration-300'
                                : 'h-[2px] absolute w-[20px] bg-black block top-[12px] transition-all duration-300'
                        }
                    ></span>
                </div>
                <span className="uppercase font-extrabold  tracking-[3px] max-sm:hidden">
                    {pageName}
                </span>
            </div>
            <div className=" px-[14px] cursor-pointer relative after:content-[''] after:absolute after:bg-black  after:h-[0.5px] after:w-[0] after:translate-y-[0.25px] after:left-[100%] after:top-[50%] hover:after:w-[100%] hover:after:left-[0] after:transition-all after:duration-500 hover:after:duration-500 hover:after:transition-[width]">
                <Link to="/" className="w-full">
                    <span className="uppercase font-extrabold text-[21px] tracking-[6px]  max-sm:text-[18px]">
                        MIKIYA KOBAYASHI
                    </span>
                </Link>
            </div>
            <div
                onClick={handleSetShowSearch}
                className="h-full flex items-center group cursor-pointer"
            >
                <div className=" h-full relative flex items-center justify-center  ">
                    <SearchOutlined className="opacity-[1] group-hover:opacity-[0] text-[19px] mr-[14px] group-hover:translate-y-[-60px] transition-all duration-500" />
                    <div className="absolute opacity-[0] group-hover:opacity-[1] group-hover:translate-y-[-60px] transition-all duration-500 top-[60px] h-[60px] flex items-center justify-center cursor-pointer">
                        <SearchOutlined className="text-[19px] mr-[14px] " />
                    </div>
                </div>
                <span className="uppercase text-[17px] font-extrabold tracking-[3px]  max-sm:hidden">
                    {searchName}
                </span>
            </div>
        </div>
    );
}

export default Header;
