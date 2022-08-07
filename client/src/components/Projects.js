import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import projects from '../data/project-data';
import ProjectsCard from './ProjectsCard';

function Projects(props) {
    
    return (
        <div className={props.selected ? 'projects-container-open' : 'projects-container-closed'}>
            <div className='projects-slider'>
                <Swiper 
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    spaceBetween={16}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {projects.map((project) => (
                        <SwiperSlide>
                            <ProjectsCard
                                name={project.name}
                                created={project.created}
                                img={project.img}
                                languages={project.languages}
                                preview={project.preview}
                                code={project.code}
                                info={project.info}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Projects;