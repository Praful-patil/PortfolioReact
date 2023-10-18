import React from 'react'
import './RecentProjects.scss'

const projectImages = [
    {
        image: "assets/images/project1.png",
        alt: 'projectImage'
    },
    {
        image: "assets/images/project2.png",
        alt: 'projectImage'
    },
    {
        image: "assets/images/project3.png",
        alt: 'projectImage'
    },

]

const RecentProjects = () => {
    return (
        <>
            <div className="projectMain">
                <div className="projectContainer container">
                    <h2 className="primary-heading">Recent Projects</h2>
                    <p className='primary-discription'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in layingLorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying</p>

                    <div className="projectsImages">
                        {projectImages.map((item, i) => {
                            return <img className='project-img' src={item.image} alt={item.alt + " " + i} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentProjects