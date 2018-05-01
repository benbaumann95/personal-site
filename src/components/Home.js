import React from 'react';
import './styles/Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="Home section">
        <div className="home-text">
          <h2 className="">
            Fullstack Web Developer & Teacher Assistant @ Le Wagon Coding
          </h2>
          <p>
            <strong>Ben Baumann</strong> is an Economics & Management graduate
            from UoB with experience in e-commerce & digital marketing. He has a
            strong passion for web dev, UI design and currently learning React &
            Redux
          </p>
          <a
            href="www.linkedin.com/in/ben-baumann"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin-square i-hov" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/benbaumann95"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github i-hov" aria-hidden="true" />
          </a>
          <button className="">
            CV <i className="fa fa-file-pdf-o" aria-hidden="true" />
          </button>
        </div>
        <img
          src="https://res.cloudinary.com/wagon/image/upload/c_fill,g_face,h_200,w_200/mijrgb6ti85frij0ao3u.jpg"
          alt="avatar"
        />
      </div>
    );
  }
}

export default Home;
