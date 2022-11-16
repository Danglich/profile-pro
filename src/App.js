import Layout from './components/Layout';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Press from './pages/Press';
import ProductDetail from './pages/ProductDetail';
import News from './pages/News';
import NewDetail from './pages/NewDetail';
import { useEffect, useMemo, useState } from 'react';
import { newsData, projectsData } from './data';
import { group } from './utils';
import ProductCategory from './pages/ProductCategory';
import NewCategory from './pages/NewCategory';
import NotFound from './components/NotFound';

function App() {
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
        <div className="App">
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/" element={<Layout />}>
                    <Route path="/projects" element={<Product />} />
                    {page === 'projects' &&
                        categories.map((category) => (
                            <Route
                                path={`/${page}/${category}`}
                                element={<ProductCategory />}
                            />
                        ))}
                    <Route path="/projects/:id" element={<ProductDetail />} />

                    <Route path="/contact" element={<Contact />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/press" element={<Press />} />
                    <Route path="/news" element={<News />} />
                    {page === 'news' &&
                        categories.map((category) => (
                            <Route
                                path={`/${page}/${category}`}
                                element={<NewCategory />}
                            />
                        ))}
                    <Route path="/news/:id" element={<NewDetail />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
