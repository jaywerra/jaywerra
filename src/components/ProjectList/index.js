import React from 'react'
import useProjects from "../../hooks/use-projects"
import {
    ProjectListView,
    // ProjectListViewToggle,
    Projects,
    ProjectArrow,
    ProjectDesc,
    ProjectItem,
    ProjectTitle,
    ProjectYear,
    ProjectWhere
} from "./ProjectListStyles"

const ProjectList = () => {

    const projects = useProjects();

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
          }
        }
      }
      
      const item = {
        show: {
            y: 0,
            opacity: 1,
            transition: {
              y: { stiffness: 1000, velocity: -100 }
            }
          },
          hidden: {
            y: -10,
            opacity: 0,
            transition: {
              y: { stiffness: 1000 }
            }
          }
      }

    return (
        <ProjectListView>
            <Projects
                variants={container}
                initial="hidden"
                animate="show"
            >
                {projects.map((project, i) => (
                    <ProjectItem to={`${project.slug}`} key={i} variants={item}> 
                        <ProjectDesc>
                            <ProjectTitle>
                                {project.title}
                            </ProjectTitle>
                            <ProjectWhere>
                                Agency: {project.agency}
                            </ProjectWhere>
                            <ProjectYear>
                                {project.tasks}
                            </ProjectYear>
                        </ProjectDesc>
                        <ProjectArrow>   
                            &rarr;
                        </ProjectArrow> 
                    </ProjectItem>
                ))}
           </Projects>
        </ProjectListView>
    )
}

export default ProjectList
