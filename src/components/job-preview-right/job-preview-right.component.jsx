import React from "react";
import parser from "html-react-parser";

import globe from "../../asset/iconmonstr-globe-6.svg";
import clock from "../../asset/iconmonstr-time-3.svg";

import "./job-preview-right.styles.scss";

const JobPreviewRight = () => {
  return (
    <div className="details__large">
      <div className="main-heading">
        <h2 className="title">Front-End Software Engineer</h2>
        <p className="tag">Full Time</p>
      </div>
      <p className="info--small">
        <img src={clock} alt="Clock" />
        <span>5 Days Ago</span>
      </p>

      <div className="company-details">
        <div className="company-logo--small">
          <img
            src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdGFIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0fa9b48edb8f52d899dfc93962c463442d19ac5c/Square_Logo1.png"
            alt="Company Logo"
          />
        </div>

        <div className="job__descriptions">
          <p className="company-name">Kasisto</p>
          <p className="info--small">
            <img src={globe} alt="Globe" /> <span>New York</span>
          </p>
        </div>
      </div>

      <div className="job__description__details">
        {parser(
          "<p>Voted as one of the Best Places to Work and one of the fastest-growing tech companies!</p>\n<p>SmartFinancial is a leading insurance technology company working on building tools to make the insurance shopping process better, simpler, and more effective. ﻿We are experiencing exponential growth so we are seeking a Full-Stack Engineer to help us maintain our growth by improving and adding new features to our current code bases as well as build new applications that will help us move forward with new products and services.</p>\n<p>Our immediate need is to help solidify our existing applications by cleaning up code bases as well as adding additional test coverage. In addition, we have a growing need to harness various workflows and processes for both internal staff as well as our public-facing business – that is to say you will help from idea generation through project completion on new application development.</p>\n<p>We are a small engineering team based in Newport Beach, CA and Columbus, OH. We prefer someone who can work at our offices but are willing to fill this position with a remote candidate. What matters most to us is finding someone who is professional and mature and requires as little oversight as needed in terms of management.</p>\n<p>A typical week will start off with a quick meeting to review the current iteration and plan out the week. Thereafter, we are heads down and work on our tasks via our project management system and conventions. We are looking for a person who not only can grok the job at hand but know the best approach to doing it right. We are primarily a Rails shop but have some JS apps as well, so we’ll want a person who is very knowledgeable on Rails best practices from coding to hosting.</p>\n<p>We focus on results and would rather allow freedom of leading a project as a professional vs. having to be managed the entire way. ﻿</p>\n<p>Duties and Responsibilities:</p>\n<ul>\n<li>Work closely with the Design and Development team to create high-quality web apps</li>\n<li>Design and develop testable production-level code</li>\n<li>Write effective and powerful APIs</li>\n<li>Develop efficient algorithms and data-structures to improve key business logic and processes</li>\n<li>Research and provide alternatives to existing development practices, tools, etc.</li>\n<li>Optimize web pages and back-end UIs</li>\n<li>Modify existing software to correct errors, or to improve its performance</li>\n<li>Develop and direct software system testing and validation procedures, programming, and technical documentation</li>\n</ul>\n<p>Job Requirements</p>\n<ul>\n<li>Experience: 4-6 years in a production environment</li>\n<li>Ability to communicate clearly both verbally and text</li>\n<li>Have a strong sense of awareness of our business and how you are contributing to it</li>\n<li>Self-Motivated – we seek mature professionals vs. people who need to be micromanaged</li>\n<li>Be available for meetings weekly to cover existing and upcoming projects</li>\n</ul>\n<p>Technical Requirements</p>\n<ul>\n<li>Language/Frameworks: Ruby on Rails, Ruby, JavaScript, Node, Angular</li>\n<li>Testing: RSpec, Capybara, Jasmine</li>\n<li>Database: MySQL, Redis, Mongo</li>\n<li>OS: Linux, Bash, MacOS</li>\n<li>Utility: Git, AWS</li>\n<li>Front-End: Bootstrap, CSS, HTML5</li>\n</ul>\n<p>Bonus Items:</p>\n<ul>\n<li>DevOps: Ansible, Chef, Jenkins we may many hats so if you’re comfortable with provisioning servers and being in a shell environment you’ll have an extra edge.</li>\n<li>CI Systems: Semaphore</li>\n</ul>\n<p>﻿WHAT WE OFFER</p>\n<ul>\n<li>Competitive Pay</li>\n<li>401k with Company Match\n﻿- Health Insurance</li>\n<li>Stock Option</li>\n<li>Weekly team lunches</li>\n<li>Advancement opportunities - we promote within</li>\n<li>Remote Position</li>\n</ul>\n<p>﻿If you are looking for a challenge, yet have the freedom to work as you need as a professional then send us your resume, Github, and sample work.﻿</p>\n"
        )}
      </div>
    </div>
  );
};

export default JobPreviewRight;
