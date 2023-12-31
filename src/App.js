function App() {

  const images = [
    'bootstrap', 'html', 'php', 'tailwind', 'mongo',
     'git', 'mysql', 'heroku', 'netlify', 'css',
      'js', 'node', 'github', 'laravel', 'react', 'postman'
  ];
  const description = (
    <p>
      I am a Software Engineer with a foundational understanding of
      designing and implementing new features from concept to production. I
      prioritize user experience while developing reusable and efficient
      code. I am dedicated to merging good design, technology, and
      innovation in every project I undertake, from inception to launch.
      Currently, my focus lies primarily on backend development, with some
      experience in frontend development.
    </p>
  );
  return (
    <div className="myself">
    <h1>About Me</h1>
    
    <h3 style={{ marginBottom: 20 }}>A bit about me</h3>
    { description }
    <h3 style={{ marginTop: 20 }}>Technology and Tools</h3>

    <p>
      Using a combination of cutting-edge technologies and reliable
      open-source software I build user-focused, performant websites for
      smartphones, tablets, and desktops.
    </p>
    
    <div className="packages">

      {images.map((image) => (
        <div className="tool">
          <img src={ `./images/${image}.svg` } alt="#" /> <span>{ image.toUpperCase() }</span>

        </div>
        ))}

    </div>

  </div>
  );
}

export default App;
