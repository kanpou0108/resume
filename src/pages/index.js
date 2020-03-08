import React from 'react';

import linkSvg from '../assets/images/link-solid.svg';
import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          {/* <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div> */}
          <br />
          <p className="lead mb-5">
          I am an experienced frontend engineer. See LinkedIn for more detail.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                  {icon
                    ? <i className={`fab ${icon}`}></i>
                    : <img height="22" width="22" src={linkSvg} alt="link" />
                  }
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="udacity"
      >
        <div className="w-100">
          <h2 className="mb-5">Udacity React Nanodegree</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa text-warning"></i>
              <strong>Project 1. MyReads: a book tracking web app</strong>
            </li>
            <li>
              &nbsp;&nbsp;
              <i className="fa-li fa text-warning"></i>
              <a href="https://github.com/kanpou0108/reactnd-project-myreads-starter" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </li>
            <li>
              &nbsp;&nbsp;
              <i className="fa-li fa text-warning"></i>
              <a href="https://reactnd-project-myreads.netlify.com/" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </li>

            <br/>

            <li>
              <i className="fa-li fa text-warning"></i>
              <strong>Project 2. Readable: a content and comment web app</strong>
            </li>
            <li>
              &nbsp;&nbsp;
              <i className="fa-li fa text-warning"></i>
              <a href="https://github.com/kanpou0108/reactnd-project-readable-starter" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </li>
            <li>
              &nbsp;&nbsp;
              <i className="fa-li fa text-warning"></i>
              <a href="https://reactnd-project-readable.netlify.com/" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </li>

            <br/>

            <li>
              <i className="fa-li fa text-warning"></i>
              <strong>Project 3. Mobile Flashcards: a mobile flashcard app using React Native</strong>
            </li>
            <li>
              &nbsp;&nbsp;
              <i className="fa-li fa text-warning"></i>
              <a href="https://github.com/kanpou0108/mobile-flashcards" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
