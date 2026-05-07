component Display {
  connect Application exposing { slide }

  style root {
    background: #FCFCFC;
    display: grid;
    color: #222;
  }

  style slide {
    position: relative;
    display: grid;
    z-index: 1;

    grid-column: 1;
    grid-row: 1;
  }

  fun render {
    <div::root>
      <Fonts/>
      <Leaves/>
      <div::slide>slide</div>
    </div>
  }
}
