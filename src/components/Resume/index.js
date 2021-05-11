import React from 'react'
import { ResumeView, ResumeHeader, ResumeBody, ResumeRow, ResumeRowHeader } from "./ResumeStyles"

const Resume = () => {
    return (
        <ResumeView>
            <ResumeHeader>
                <h2>Introduction</h2>
                <p>
                    Hello, my name is Jay Werra. I'm passionate web developer with over ten years of professional experience specializing in creative front end development, design & UX.
                </p>
            </ResumeHeader>
            <ResumeBody>
                <ResumeRowHeader>
                    Experience
                </ResumeRowHeader>
                <ResumeRow>
                    <h3>
                        Developer / Designer / Owner. 9/2008 - Present
                    </h3>
                    <h4>
                        <a href="https://werra.io" rel="noreferrer noopener" target="_blank">Werra, LLC</a> / Los Angeles, CA
                    </h4>
                    <p>
                        Founded a small design agency that grew to over 40 clients. Industries include legal, food & beverage, architecture, non-profits and design agencies. I built, designed, provided content and SEO for all of the clients.
                    </p>
                </ResumeRow>
                <ResumeRow>
                    <h3>
                        Senior Front End Engineer. 6/2014 - 8/2019
                    </h3>
                    <h4>
                    <a href="https://www.digitas.com/" rel="noreferrer noopener nofollow" target="_blank">Digitas</a> / Boston, MA & Los Angeles, CA
                    </h4>
                    <p>
                        Lead front end developer role on Bank of America promotional and enterprise websites. Also, worked alongside the client on several projects to build rapid prototypes.
                    </p>
                    <p>
                        Collaborated with other departments to ensure high quality solutions and timely delivery while maintaining a consistent focus.
                    </p>
                    <p>
                        Member of the internal tech innovation team. The team would meet regularly to build out prototypes for client pitch work. Sole developer on mobile banking app that used Phonegap and Firebase to detect the users iBeacon to send messages back and fourth between a touch screen ATM and the user’s iPhone.
                    </p>
                    <p>
                        Performed code reviews for junior developers and off-shore developers.
                    </p>
                    <p>
                        Key role in building department’s custom video player that is built with videojs and Brightcove. The video player was built with a heavy focus on web accessibility and also to have the ability to fire analytic tags based off video progress and user actions.
                    </p>
                    <p>
                        Daily workflows consists of automation using Webpack/Gulp, Sass using BEM methodology, jQuery, Vanilla JS, Git and a build process via Jenkins build server.
                    </p>
                </ResumeRow>
                <ResumeRow>
                    <h3>
                        User Interface Developer. 6/2013 - 6/2014
                    </h3>
                    <h4>
                        <a href="https://verndale.com" rel="noreferrer noopener nofollow" target="_blank">Verndale</a> / Boston, MA
                    </h4>
                    <p>
                        Built out front end code for implementation into Sitecore and Umbraco content management systems.
                    </p>
                    <p>
                        Helped set department’s standards on page optimization and implementing a SMACSS approach to all code and project’s file structure.
                    </p>
                    <p>
                        Assisted internal Application Support team on troubleshooting efforts.
                    </p>
                    <p>
                        Provided oversight on client co-development projects.
                    </p>
                    <p>
                    Clients Include: Seaworld, LogMeIn, Bay Path University, Carson Dellosa, NYSUT, Bay Path College, Suffolk University, Salem State University, PI Worldwide
                    </p>
                </ResumeRow>
                <ResumeRow>
                    <h3>
                        Front End Developer. 10/2011 - 6/2013
                    </h3>
                    <h4>
                        <a href="https://tankdesign.com" rel="noreferrer noopener" target="_blank">Tank Design</a> / Cambridge, MA
                    </h4>
                    <p>
                        Adopted new programming principles such as responsive design, mobile first, and adaptive design
                    </p>
                    <p>
                        Responsible for building & testing HTML email campaigns.
                    </p>
                    <p>
                        Helped build internal HTML e-mail builder using jQUery UI features
                    </p>
                    <p>
                        Implemented HTML/CSS/JS within serveral Wordpress and Drupal based sites.
                    </p>
                    <p>
                        Responsible for building/maintaining new and older Flash/Actionscript projects.
                    </p>
                    <p>
                        Clients include: FedEx, FedEx Office, MiniLux, Citizens Bank, American Home Shield, Rockport Shoes
                    </p>
                </ResumeRow>
                <ResumeRowHeader>
                    Education
                </ResumeRowHeader>
                <ResumeRow>
                    <h3>
                        User Experience Design. 6/2016 - Present
                    </h3>
                    <p>
                        General Assembly / Boston, MA
                    </p>
                </ResumeRow>
                <ResumeRow>
                    <h3>
                        Management, Information Systems. 2010-2013
                    </h3>
                    <p>
                        University of Massachusetts, Lowell / Lowell, MA
                    </p>
                </ResumeRow>
                <ResumeRow>
                    <h3>
                        Graphic Design / Web Development. 2008 - 2010
                    </h3>
                    <p>
                        Bunker Hill Community College / Boston, MA
                    </p>
                </ResumeRow>
            </ResumeBody>
        </ResumeView>
    )
}

export default Resume
