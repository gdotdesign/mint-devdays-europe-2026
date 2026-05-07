component Slide.TitleOnly {
  property children : Array(Html) = []

  style root {
    font-family: Forum;
    font-size: 5vmax;
  }

  fun render {
    <Slide><div::root>children</div></Slide>
  }
}
