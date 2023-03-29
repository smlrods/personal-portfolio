import './App.css';
import Icon from '@mdi/react';
import { mdiEmailOutline, mdiOpenInNew, mdiPhone } from '@mdi/js';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header>
      <div className="container">
        <div className="image">
          <h1 className="name">Sml Rods</h1>
        </div>
        <div className="content">
          <h2 className="title">About me</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
          <div className="socials">
            <a href=''>
              <i className="devicon-github-original"></i>
            </a>
            <a href=''>
              <i className="devicon-linkedin-plain"></i>
            </a>
            <a href=''>
              <i className="devicon-twitter-original"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Main() {
  const projects = Array(6).fill(undefined);
  return (
    <main>
      <div className='container'>
        <h2 className='title'>My Work</h2>
        <div className='grid-project'>
          {projects.map((project, index) => {
            return <ProjectCard project={project} index={index + 1} />
          })}
        </div>
      </div>
    </main>
  );
}

function ProjectCard({project, index}) {
  return (
    <div className='project-card' key={`card-${index}`}>
      <div className='screenshort'></div>
      <div className='content'>
        <div className='header'>
          <div className='name'>Project name</div>
          <div className='links'>
            <a href='#'>
              <i className="devicon-github-original"></i>
            </a>
            <a href='#'>
                <Icon path={mdiOpenInNew} size={'20px'} />
            </a>
          </div>
        </div>
        <div className='description'>
          Short description of the project. Just a couple sentences will do.
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='contact-me'>
          <h2>Contact me</h2>
          <div>
            <p>Please get in touch if you think our work could be mutually beneficial!</p>
          </div>
          <div className='address'>
            <p>1234 Random Road</p>
            <p>Random Town, California 12345</p>
          </div>
          <div className='contacts'>
            <div className='contact'>
              <span className='icon'>
                <Icon path={mdiPhone} size={1} />
              </span>
              <p>555-555-5555</p>
            </div>
            <div className='contact'>
              <span className='icon'>
                <Icon path={mdiEmailOutline} size={1} />
              </span>
              <p>someemail@email.com</p>
            </div>
          </div>
          <div className='socials'>
            <a href=''>
              <i className="devicon-github-original"></i>
            </a>
            <a href=''>
              <i className="devicon-linkedin-plain"></i>
            </a>
            <a href=''>
              <i className="devicon-twitter-original"></i>
            </a>
          </div>
        </div>
        <div className='footer-image'></div>
      </div>
    </footer>
  );
}

export default App;
