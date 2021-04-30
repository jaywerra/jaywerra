import React from 'react'
import IconRightArrow from '../../images/icons/IconRightArrow'
import {
    ProjectListView,
    ProjectListViewToggle,
    Projects,
    ProjectArrow,
    ProjectDesc,
    ProjectItem,
    ProjectTitle,
    ProjectYear,
    ProjectWhere
} from "./ProjectListStyles"

const ProjectList = () => {
    return (
        <ProjectListView>
            <ProjectListViewToggle>
                <h2>Projects</h2>
                <div>List / Grid</div>
            </ProjectListViewToggle>
           <Projects>
                <ProjectItem to="/"> 
                    <ProjectDesc>
                        <ProjectTitle>
                            Bank of America
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
                            studio ar&d
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Werra
                        </ProjectWhere>
                        <ProjectYear>
                            Development / Design
                        </ProjectYear>
                    </ProjectDesc>
                    <ProjectArrow>   
                        <IconRightArrow />
                    </ProjectArrow> 
                </ProjectItem>
                <ProjectItem to="/"> 
                    <ProjectDesc>
                        <ProjectTitle>
                            Anti-Recidivism Coalition (ARC)
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
                            FedEx
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Tank Design
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
                            Nantucket Poke
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
                            Goldstein Law Group
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
                            Law + Brandmeyer
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
                            Goldfinch Bio
                        </ProjectTitle>
                        <ProjectWhere>
                            Agency: Tank Design
                        </ProjectWhere>
                        <ProjectYear>
                            Development
                        </ProjectYear>
                    </ProjectDesc>
                    <ProjectArrow>   
                        <IconRightArrow />
                    </ProjectArrow> 
                </ProjectItem>
           </Projects>
        </ProjectListView>
    )
}

export default ProjectList
