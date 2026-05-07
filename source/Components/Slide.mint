component Slide {
  property children : Array(Html) = []

  style root {
    place-content: center;
    display: grid;
  }

  fun render {
    <div::root>children</div>
  }
}
