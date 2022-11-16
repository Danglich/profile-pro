import { projectsData } from '../data';

import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const delay = 3.5;

    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'MIKIYA KOBAYASHI';
    }, []);

    useEffect(() => {
        let timer = setTimeout(() => {
            if (index >= projectsData.length) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        }, delay * 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [index]);

    useEffect(() => {
        const handleListen = () => {
            navigate('/projects');
        };

        window.addEventListener('scroll', handleListen);

        return () => window.removeEventListener('scroll', handleListen);
    }, [navigate]);

    return (
        <div className="relative h-[100vh] w-[100vw] overflow-hidden mb-[20px]">
            {/* Ảnh */}
            {projectsData.map((pro, i) => {
                if (i === index)
                    return (
                        <div
                            key={pro.id}
                            className="w-full h-full  animate-[zoomOutImage_7.2s_linear]"
                        >
                            <img
                                className="w-full h-full"
                                alt="Ảnh"
                                src={pro.images[0]}
                            ></img>
                        </div>
                    );
                else return null;
            })}

            {/* Name */}
            <div className="absolute text-center w-[100%] top-[50%] translate-y-[-50%]">
                <span className="text-[40px] mr-[10px] font-[800] inline-block animate-[zoomOutText_0.75s_ease-out]">
                    M
                </span>
                <span className="text-[40px] mr-[10px] font-[800]  inline-block animate-[zoomOutText_0.8s_ease-out]">
                    I
                </span>
                <span className="text-[40px] mr-[10px] font-[800]  inline-block animate-[zoomOutText_0.35s_ease-out]">
                    K
                </span>
                <span className="text-[40px] mr-[10px] font-[800]  inline-block animate-[zoomOutText_0.6s_ease-out]">
                    I
                </span>
                <span className="text-[40px] mr-[10px] font-[800]  inline-block animate-[zoomOutText_0.5s_ease-out]">
                    Y
                </span>
                <span className="text-[40px] mr-[36px] font-[800]  inline-block animate-[zoomOutText_0.55s_ease-out]">
                    A
                </span>

                <span className="text-[40px] mr-[10px] font-[800]  inline-block animate-[zoomOutText_0.9s_ease-out]">
                    K
                </span>
                <span className="text-[40px] mr-[10px] font-[800]  inline-block animate-[zoomOutText_0.35s_ease-out]">
                    O
                </span>
                <span className="text-[40px] mr-[10px] font-[800]  inline-block animate-[zoomOutText_0.6s_ease-out]">
                    B
                </span>
                <span className="text-[40px] mr-[10px] font-[800]  inline-block animate-[zoomOutText_0.8s_ease-out]">
                    A
                </span>
                <span className="text-[40px] mr-[10px] font-[800]  inline-block animate-[zoomOutText_0.5s_ease-out]">
                    Y
                </span>
                <span className="text-[40px] mr-[10px] font-[800]  inline-block animate-[zoomOutText_0.6s_ease-out]">
                    A
                </span>
                <span className="text-[40px] mr-[10px] font-[800]  inline-block animate-[zoomOutText_0.35s_ease-out]">
                    S
                </span>
                <span className="text-[40px] mr-[10px] font-[800]  inline-block animate-[zoomOutText_0.55s_ease-out]">
                    H
                </span>
                <span className="text-[40px] mr-[10px] font-[800]  inline-block animate-[zoomOutText_0.9s_ease-out]">
                    I
                </span>
            </div>

            {/* Footer */}
            <div className="absolute w-full bottom-[42px]  animate-[up_1s_ease-out]">
                <div className="relative h-[45px] overflow-hidden w-[80px] mx-[auto] text-center py-[14px] text-[17px] tracking-[2px]">
                    <span className="font-[900]">scroll</span>
                    <span className="absolute h-[1.6px] w-[100%] bottom-0 block bg-black animate-[scrollLine_1.3s_ease-in-out_infinite]"></span>
                </div>
            </div>
        </div>
    );
}

export default Home;
