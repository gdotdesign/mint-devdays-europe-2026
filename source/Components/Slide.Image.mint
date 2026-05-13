component Slide.Image {
  property heading : String = ""
  property src : String = ""
  property alt : String = ""

  style root {
    grid-template-rows: auto 1fr;
    place-content: center;
    grid-row-gap: 2vmax;
    display: grid;

    width: 90vw;
    height: 80vh;
  }

  style heading {
    font-family: Forum;
    text-align: center;
    font-size: 3vmax;
    opacity: 0.85;
  }

  style image {
    border: 1px solid var(--border-color);
    object-fit: contain;
    max-height: 65vh;
    max-width: 100%;
    margin: 0 auto;
    display: block;
  }

  fun render {
    <Slide>
      <div::root>
        <div::heading>heading</div>
        <img::image src={src} alt={alt}/>
      </div>
    </Slide>
  }
}
