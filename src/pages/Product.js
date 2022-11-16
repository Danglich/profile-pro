import { useEffect } from 'react';
import Footer from '../components/Footer';
import ProductItem from '../components/ProductItem';
import { projectsData } from '../data';

function Product() {
    useEffect(() => {
        document.title = 'PROJECTS || MIKIYA KOBAYASHI';
    }, []);

    return (
        <div className="flex flex-wrap  animate-[toTop_1s_ease-in-out] transition-all duration-[1300ms] ease-[cubic-bezier(0.68,0,0.42,1)]">
            {projectsData.map((product) => (
                <ProductItem product={product} key={product.id} />
            ))}
            <Footer />
        </div>
    );
}

export default Product;
