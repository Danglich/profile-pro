import { useEffect } from 'react';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Pagination from '../components/Pagination';
import { projectsData } from '../data';

function ProductDetail() {
    const { id } = useParams();

    const project = useMemo(() => {
        return projectsData.filter((pro) => pro.id.toString() === id)[0];
    }, [id]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="h-[calc(100vh-60px)]">
                <img
                    className="w-full h-full"
                    alt="not found"
                    src="https://cdn4.vectorstock.com/i/1000x1000/85/43/error-page-not-found-vector-27898543.jpg"
                ></img>
            </div>
        );
    }

    return (
        <div className="flex w-full max-md:block  animate-[toTop_1s_ease-in-out]">
            <div className="flex-1 bg-[#f2f2f2] ">
                {project?.images.map((img) => (
                    <img
                        key={img}
                        className="px-[20px] pt-[20px]"
                        alt="ảnh"
                        src={img}
                    ></img>
                ))}
            </div>
            <div className="w-[400px] ml-[20px]  max-lg:w-[40%] max-md:w-[100%] max-md:relative max-md:ml-0 sticky bg-white top-[60px] right-0 z-[1000] h-[calc(100vh-60px)]">
                <Pagination
                    type="projects"
                    datas={projectsData}
                    item={project}
                />
                <div className="pl-[50px]  pt-[20px] pb-[150px] h-[100%]">
                    <div className="overflow-y-auto h-full pr-[6px]">
                        <h1 className="font-[900] text-[21px] tracking-[3px] mb-[14px]">
                            {project?.name}
                        </h1>
                        <span className="font-[500] text-[19px]">
                            {project?.year}
                        </span>
                        <h2 className="font-[500] text-[19px] tracking-[1px] mt-[2px]">
                            {project?.author}
                        </h2>
                        <h2 className="font-[500] text-[19px] tracking-[1px] mt-[2px] mb-[8px]">
                            {project?.category}
                        </h2>
                        <p className="">{project?.desc}</p>
                    </div>
                </div>
                <div className="absolute bottom-[26px] tracking-[2px] ml-[50px] text-[14px]">
                    © MIKIYA KOBAYASHI INC. All Rights Reserved.
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
