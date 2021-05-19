import React from 'react'
import useProjects from "../../hooks/use-projects"

import { motion } from 'framer-motion'
import {
    ProjectListView,
    // ProjectListViewToggle,
    Projects,
    ProjectArrow,
    ProjectDesc,
    ProjectItem,
    ProjectTitle,
    ProjectYear,
    ProjectWhere,
} from "./ProjectListStyles"

const ProjectList = () => {

    const projects = useProjects();

    return (
        <ProjectListView>
            <Projects>
              {projects.map((project, i) => (
                  <ProjectItem to={`${project.slug}`} key={i} className="js-project"> 
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
