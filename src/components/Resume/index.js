import React from 'react'
import { 
    ResumeView,
    ResumeBody,
    ResumeRow,
    ResumeRowHeader,
    Job,
    JobTitle,
    JobName,
    JobDescription,
    School,
    SchoolName,
    SchoolProgram,
    SkillsBlock,
    SkillsTag
} from "./ResumeStyles"

const Resume = () => {
    
    const skills = [
        "Javascript",
        "GatsbyJS",
        "React",
        "Jekyll",
        "CSS",
        "Styled Components",
        "WordPress",
        "Shopify",
        "Headless CMS",
        "Headless Shopify",
        "Markdown",
        "Google Analytics/Tag Manager",
        "Basic PHP",
        "Basic Python",
        "SEO",
        "Client Relationships",
        "Entrepreneurship",
        "Project Management",
        "Experience Design",
        "Rapid Prototyping",
        "Wireframing",
        "Sketch",
        "Framer",
        "Adobe Creative Suite",
        "Figma",
        "Jira"
    ];

    return (
        <ResumeView
            // variants={resumeContainer}
            // initial="hidden"
            // animate="show"
        >
            <ResumeBody>
                <ResumeRowHeader>
                    Experience
                </ResumeRowHeader>
                <ResumeRow>
                    <Job>
                        <JobName href="https://werra.io" rel="noreferrer noopener" target="_blank">
                            Werra Design
                        </JobName>
                        <JobTitle>
                            Owner // 2008 - Present
                        </JobTitle>
                        <JobDescription>
                            Founded a small design agency that grew to over 40 clients. Industries include legal, food & beverage, architecture, non-profits and design agencies. I built, designed, provided content and SEO for all of the clients.
                        </JobDescription>
                    </Job>
                    <Job>
                        <JobName href="https://www.digitas.com" rel="noreferrer noopener nofollow" target="_blank">
                            Digitas
                        </JobName>
                        <JobTitle>
                            Senior Front End Engineer // Jun 2014 - Aug 2019
                        </JobTitle>
                        <JobDescription>
                            <p>
                                Joined Digitas as an engineer in 2014. Lead developer on several Bank of America and Merrill Lynch websites. Daily tasks/technolgies included:
                            </p>
                            <ul>
                                <li>
                                    Daily workflows consisted of automation using Webpack/Gulp, CSS, jQuery, Vanilla JS, Git, Jira, Jenkins
                                </li>
                                <li>
                                    Close collaboration with designers, analytics strategists, project managers and account teams to ensure high quality solutions and timely delivery
                                </li>
                                <li>
                                    Member of the internal technology innovation team. The team would meet regularly to build out prototypes for client pitch work. Sole developer on mobile banking app pitch that used Phonegap and Firebase to detect the users iBeacon to send messages back and fourth between a touch screen ATM and the user’s iPhone
                                </li>
                                <li>
                                    Strong focus on building accessible websites following W3C Standards
                                </li>
                                <li>
                                    Code reviews and mentoring for junior developers
                                </li>
                            </ul>
                        </JobDescription>
                    </Job>
                    <Job>
                        <JobName href="https://www.verndale.com" rel="noreferrer noopener nofollow" target="_blank">
                            Verndale
                        </JobName>
                        <JobTitle>
                            UI Engineer // Jun 2013 - June 2014
                        </JobTitle>
                        <JobDescription>
                            <ul>
                                <li>
                                    Built out front end code for implementation into Sitecore and Umbraco content management systems
                                </li>
                                <li>
                                    Helped set department’s standards on page optimization and implementing an OOCSS approach to all code and project’s file structure
                                </li>
                                <li>
                                    Assisted internal Application Support team on troubleshooting efforts
                                </li>
                                <li>
                                    Issue tracking via FogBugs
                                </li>
                                <li>
                                    Provided oversight on client co-development projects
                                </li>
                                <li>
                                    Clients include: Seaworld, LogMeIn, Bay Path University, Bay Path College, Suffolk University, Salem State University
                                </li>
                            </ul>
                        </JobDescription>
                    </Job>
                    <Job>
                        <JobName href="https://www.tankdesign.com" rel="noreferrer noopener nofollow" target="_blank">
                            Tank Design
                        </JobName>
                        <JobTitle>
                            Front End Developer // Sept 2012 - June 2013
                        </JobTitle>
                        <JobDescription>
                            <p>
                                First full-time front end role. At Tank I learned how to work and collaborate on multidisciplinary teams. Daily tasks included:
                            </p>
                            <ul>
                                <li>
                                    Built & tested HTML emails for FedEx campaigns
                                </li>
                                <li>
                                    Adopted new programming principles such as responsive design, mobile first, and adaptive design
                                </li>
                                <li>
                                    Worked on new & legacy Flash/ActionScript projects
                                </li>
                                <li>
                                    Custom Wordpress & Drupal site builds
                                </li>
                                <li>
                                    Clients include: FedEx, FedEx Office, MiniLux, Citizens Bank, American Home Shield, Rockport Shoes
                                </li>
                            </ul>
                        </JobDescription>
                    </Job>
                </ResumeRow>
                <ResumeRowHeader>
                    Education
                </ResumeRowHeader>
                <ResumeRow>
                    <School>
                        <SchoolName>
                            General Assembly
                        </SchoolName>
                        <SchoolProgram>
                            User Experience Design // Jun 2016 - Aug 2016
                        </SchoolProgram>
                    </School>
                    <School>
                        <SchoolName>
                            University of Massachusetts, Lowell
                        </SchoolName>
                        <SchoolProgram>
                            Management, Information Systems // 2010-2013
                        </SchoolProgram>
                    </School>
                    <School>
                        <SchoolName>
                            Bunker Hill Community College
                        </SchoolName>
                        <SchoolProgram>
                            Graphic Design & Web Development // 2008 - 2010
                        </SchoolProgram>
                    </School>
                </ResumeRow>
                <ResumeRowHeader>
                    Skills
                </ResumeRowHeader>
                <ResumeRow>
                    <SkillsBlock>
                        {skills.map(function(skill){
                            return <SkillsTag
                                    whileHover={{ scale: 1.3 }}
                                    key={skill}
                                >
                                    {skill}
                                </SkillsTag>
                        })}
                    </SkillsBlock>
                </ResumeRow>
            </ResumeBody>
        </ResumeView>
    )
}

export default Resume
