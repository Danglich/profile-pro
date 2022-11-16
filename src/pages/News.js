import { useEffect } from 'react';
import Footer from '../components/Footer';
import NewItem from '../components/NewItem';
import { newsData } from '../data';

function News() {
    useEffect(() => {
        document.title = 'NEWS || MIKIYA KOBAYASHI';
    }, []);

    return (
        <div className="flex flex-wrap bg-[#f2f2f2] animate-[toTop_1s_ease-in-out] transition-all duration-[1300ms] ease-[cubic-bezier(0.68,0,0.42,1)]">
            {newsData.map((post) => (
                <NewItem key={post.id} post={post} />
            ))}
            <Footer />
        </div>
    );
}

export default News;
