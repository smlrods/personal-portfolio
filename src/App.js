import './App.css';

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
          <h1 className="name">SML RODS</h1>
        </div>
        <div className="content">
          <h2 className="title">About me</h2>
          <p className="description">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
          <div className="socials">
            <a>Github</a>
            <a>Linkdin</a>
            <a>Twitter</a>
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
        <header>
          <div className='name'>Project Name</div>
          <div className='links'>
            <a>Github</a>
            <a>Demo</a>
          </div>
        </header>
        <main>
          Short description of the project. Just a couple sentences will do.
        </main>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
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
          <div className='contat'>
            <span className='icon'></span>
            <p>555-555-5555</p>
          </div>
          <div className='contact'>
            <span className='icon'></span>
            <p>someemail@email.com</p>
          </div>
        </div>
      </div>
      <div className='footer-image'></div>
    </footer>
  );
}

export default App;
