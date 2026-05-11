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
    font-size: 4vmax;
    text-align: center;
  }

  style image {
    object-fit: contain;
    max-height: 70vh;
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
