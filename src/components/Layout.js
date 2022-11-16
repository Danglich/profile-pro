import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import SearchBar from './SearchBar';
import SideBar from './SideBar';

function Layout() {
    const [showMenu, setShowMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const handleSetShowMenu = useCallback(() => {
        setShowMenu(!showMenu);
    }, [showMenu]);

    const handleSetShowSearch = useCallback(() => {
        setShowSearch(!showSearch);
    }, [showSearch]);

    return (
        <div>
            <Header
                handleSetShowMenu={handleSetShowMenu}
                handleSetShowSearch={handleSetShowSearch}
                showSearch={showSearch}
                showMenu={showMenu}
            />
            <SideBar isShowing={showMenu} toggle={handleSetShowMenu} />
            <SearchBar isShowing={showSearch} toggle={handleSetShowSearch} />
            <div
                className={`
                    ${
                        showMenu
                            ? 'mt-[60px] translate-x-[120px] transition-all duration-500 ease-out'
                            : 'mt-[60px] translate-x-[0] transition-all duration-500 ease-out'
                    }

                        ${
                            showSearch
                                ? 'mt-[60px] translate-x-[-120px] transition-all duration-500 ease-out'
                                : 'mt-[60px] translate-x-[0] transition-all duration-500 ease-out'
                        }
                    
                `}
            >
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
