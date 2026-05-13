component Slides.Initial {
  style logo {
    width: 30vmax;

    margin: 0 auto;
    margin-bottom: 1.5vmax;
  }

  style slogan {
    font-family: Forum;
    font-size: 2.5vmax;

    text-align: center;
    max-width: 30ch;
    opacity: 0.85;
  }

  fun render {
    <Slide>
      <div::logo><Logo/></div>

      <div::slogan>
        "The programming language for writing single page applications."
      </div>
    </Slide>
  }
}
