import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import NewItem from '../components/NewItem';
import { newsData } from '../data';

function NewCategory() {
    useEffect(() => {
        document.title = 'NEWS || MIKIYA KOBAYASHI';
    }, []);

    const location = useLocation();

    const newsFillter = useMemo(() => {
        return newsData.filter((el) => location.pathname.includes(el.type));
    }, [location]);

    return (
        <div className="flex flex-wrap bg-[#f2f2f2] animate-[toTop_1s_ease-in-out] transition-all duration-[1300ms] ease-[cubic-bezier(0.68,0,0.42,1)]">
            {newsFillter.map((post) => (
                <NewItem key={post.id} post={post} />
            ))}
            <Footer />
        </div>
    );
}

export default NewCategory;
