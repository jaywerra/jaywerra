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
            {/* <PageNav title="Projects" /> */}

            <Projects
                variants={container}
                initial="hidden"
                animate="show"
            >
                {projects.map((project, i) => (
                    <ProjectItem to={project.slug} key={i} variants={item}> 
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

                {/*


                <ProjectItem to="/"> 
                    <ProjectDesc>
                        <ProjectTitle>
                            Merrill Lynch
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Digitas
                        </ProjectWhere>
                        <ProjectYear>
                            Development
                        </ProjectYear>
                    </ProjectDesc>
                    <ProjectArrow>   
                        <IconRightArrow />
                    </ProjectArrow> 
                </ProjectItem>

                <ProjectItem to="/"> 
                    <ProjectDesc>
                        <ProjectTitle>
                            Porch + Hall
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Werra
                        </ProjectWhere>
                        <ProjectYear>
                            Development
                        </ProjectYear>
                    </ProjectDesc>
                    <ProjectArrow>   
                        <IconRightArrow />
                    </ProjectArrow> 
                </ProjectItem>


                <ProjectItem to="/"> 
                    <ProjectDesc>
                        <ProjectTitle>
                           Michels & Lew
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Werra
                        </ProjectWhere>
                        <ProjectYear>
                            Design / Development
                        </ProjectYear>
                    </ProjectDesc>
                    <ProjectArrow>   
                        <IconRightArrow />
                    </ProjectArrow> 
                </ProjectItem>
                <ProjectItem to="/"> 
                    <ProjectDesc>
                        <ProjectTitle>
                            Freedom Wine
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Werra
                        </ProjectWhere>
                        <ProjectYear>
                            Design / Development
                        </ProjectYear>
                    </ProjectDesc>
                    <ProjectArrow>   
                        <IconRightArrow />
                    </ProjectArrow> 
                </ProjectItem>
                <ProjectItem to="/"> 
                    <ProjectDesc>
                        <ProjectTitle>
                            Ross Erlich Law
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Werra
                        </ProjectWhere>
                        <ProjectYear>
                            Design / Development
                        </ProjectYear>
                    </ProjectDesc>
                    <ProjectArrow>   
                        <IconRightArrow />
                    </ProjectArrow> 
                </ProjectItem>
                <ProjectItem to="/"> 
                    <ProjectDesc>
                        <ProjectTitle>
                            Group Experience
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Werra
                        </ProjectWhere>
                        <ProjectYear>
                            Development
                        </ProjectYear>
                    </ProjectDesc>
                    <ProjectArrow>   
                        <IconRightArrow />
                    </ProjectArrow> 
                </ProjectItem>

                <ProjectItem to="/"> 
                    <ProjectDesc>
                        <ProjectTitle>
                            Terminated
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Werra
                        </ProjectWhere>
                        <ProjectYear>
                            Design / Development
                        </ProjectYear>
                    </ProjectDesc>
                    <ProjectArrow>   
                        <IconRightArrow />
                    </ProjectArrow> 
                </ProjectItem>

                <ProjectItem to="/"> 
                    <ProjectDesc>
                        <ProjectTitle>
                            Merrill Edge
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Digitas
                        </ProjectWhere>
                        <ProjectYear>
                            Development
                        </ProjectYear>
                    </ProjectDesc>
                    <ProjectArrow>   
                        <IconRightArrow />
                    </ProjectArrow> 
                </ProjectItem>
                <ProjectItem to="/"> 
                    <ProjectDesc>
                        <ProjectTitle>
                            Mansell & Mansell
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Werra
                        </ProjectWhere>
                        <ProjectYear>
                            Design / Development
                        </ProjectYear>
                    </ProjectDesc>
                    <ProjectArrow>   
                        <IconRightArrow />
                    </ProjectArrow> 
                </ProjectItem>
                <ProjectItem to="/"> 
                    <ProjectDesc>
                        <ProjectTitle>
                            Brickley Law
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Werra
                        </ProjectWhere>
                        <ProjectYear>
                            Design / Development
                        </ProjectYear>
                    </ProjectDesc>
                    <ProjectArrow>   
                        <IconRightArrow />
                    </ProjectArrow> 
                </ProjectItem>
                <ProjectItem to="/"> 
                    <ProjectDesc>
                        <ProjectTitle>
                            Brickley Law
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Werra
                        </ProjectWhere>
                        <ProjectYear>
                            Design / Development
                        </ProjectYear>
                    </ProjectDesc>
                    <ProjectArrow>   
                        <IconRightArrow />
                    </ProjectArrow> 
                </ProjectItem>
                <ProjectItem to="/"> 
                    <ProjectDesc>
                        <ProjectTitle>
                            Los Angeles Probate
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Werra
                        </ProjectWhere>
                        <ProjectYear>
                            Design / Development
                        </ProjectYear>
                    </ProjectDesc>
                    <ProjectArrow>   
                        <IconRightArrow />
                    </ProjectArrow> 
                </ProjectItem>
                <ProjectItem to="/"> 
                    <ProjectDesc>
                        <ProjectTitle>
                            Discovery Cove
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Verndale
                        </ProjectWhere>
                        <ProjectYear>
                            Development
                        </ProjectYear>
                    </ProjectDesc>
                    <ProjectArrow>   
                        <IconRightArrow />
                    </ProjectArrow> 
                </ProjectItem>
                <ProjectItem to="/"> 
                    <ProjectDesc>
                        <ProjectTitle>
                            Doyle Law
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Werra
                        </ProjectWhere>
                        <ProjectYear>
                            Design / Development
                        </ProjectYear>
                    </ProjectDesc>
                    <ProjectArrow>   
                        <IconRightArrow />
                    </ProjectArrow> 
                </ProjectItem>
                <ProjectItem to="/"> 
                    <ProjectDesc>
                        <ProjectTitle>
                            Foray
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Amalgam
                        </ProjectWhere>
                        <ProjectYear>
                            Development
                        </ProjectYear>
                    </ProjectDesc>
                    <ProjectArrow>   
                        <IconRightArrow />
                    </ProjectArrow> 
                </ProjectItem>
                <ProjectItem to="/"> 
                    <ProjectDesc>
                        <ProjectTitle>
                            B | B Law Group
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Werra
                        </ProjectWhere>
                        <ProjectYear>
                            Design / Development
                        </ProjectYear>
                    </ProjectDesc>
                    <ProjectArrow>   
                        <IconRightArrow />
                    </ProjectArrow> 
                </ProjectItem>
                <ProjectItem to="/"> 
                    <ProjectDesc>
                        <ProjectTitle>
                            Kaleidoscope Adventures
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Werra
                        </ProjectWhere>
                        <ProjectYear>
                            Development
                        </ProjectYear>
                    </ProjectDesc>
                    <ProjectArrow>   
                        <IconRightArrow />
                    </ProjectArrow> 
                </ProjectItem>
                <ProjectItem to="/"> 
                    <ProjectDesc>
                        <ProjectTitle>
                            Bloom Injury Law
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Werra
                        </ProjectWhere>
                        <ProjectYear>
                            Design / Development
                        </ProjectYear>
                    </ProjectDesc>
                    <ProjectArrow>   
                        <IconRightArrow />
                    </ProjectArrow> 
                </ProjectItem>
                <ProjectItem to="/"> 
                    <ProjectDesc>
                        <ProjectTitle>
                            Craig Charles Law
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Werra
                        </ProjectWhere>
                        <ProjectYear>
                            Design / Development
                        </ProjectYear>
                    </ProjectDesc>
                    <ProjectArrow>   
                        <IconRightArrow />
                    </ProjectArrow> 
                </ProjectItem>
                <ProjectItem to="/"> 
                    <ProjectDesc>
                        <ProjectTitle>
                            Thompson Law
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Werra
                        </ProjectWhere>
                        <ProjectYear>
                            Design / Development
                        </ProjectYear>
                    </ProjectDesc>
                    <ProjectArrow>   
                        <IconRightArrow />
                    </ProjectArrow> 
                </ProjectItem>
                <ProjectItem to="/"> 
                    <ProjectDesc>
                        <ProjectTitle>
                            Bicycle Lawyer
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Werra
                        </ProjectWhere>
                        <ProjectYear>
                            Design / Development
                        </ProjectYear>
                    </ProjectDesc>
                    <ProjectArrow>   
                        <IconRightArrow />
                    </ProjectArrow> 
                </ProjectItem>
                <ProjectItem to="/"> 
                    <ProjectDesc>
                        <ProjectTitle>
                            Law Office of Jeff Vallens
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Werra
                        </ProjectWhere>
                        <ProjectYear>
                            Design / Development
                        </ProjectYear>
                    </ProjectDesc>
                    <ProjectArrow>   
                        <IconRightArrow />
                    </ProjectArrow> 
                </ProjectItem> */}
           </Projects>
        </ProjectListView>
    )
}

export default ProjectList
