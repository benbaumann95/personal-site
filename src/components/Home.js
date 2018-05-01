import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the Home page</h1>
        <img
          src="https://res.cloudinary.com/wagon/image/upload/c_fill,g_face,h_200,w_200/mijrgb6ti85frij0ao3u.jpg"
          alt="avatar"
        />
        <h2 className="red">
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
    );
  }
}

export default Home;
