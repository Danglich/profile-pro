import { useMemo } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import ProductItem from '../components/ProductItem';
import { projectsData } from '../data';

function ProductCategory() {
    useEffect(() => {
        document.title = 'PROJECTS || MIKIYA KOBAYASHI';
    }, []);

    const location = useLocation();

    const projectsFillter = useMemo(() => {
        return projectsData.filter((el) => location.pathname.includes(el.type));
    }, [location]);

    return (
        <div className="flex flex-wrap  animate-[toTop_1s_ease-in-out] transition-all duration-[1300ms] ease-[cubic-bezier(0.68,0,0.42,1)]">
            {projectsFillter.map((product) => (
                <ProductItem product={product} key={product.id} />
            ))}
            <Footer />
        </div>
    );
}

export default ProductCategory;
