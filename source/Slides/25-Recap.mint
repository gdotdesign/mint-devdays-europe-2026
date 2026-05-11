component Slides.Recap {
  style root {
    grid-template-rows: auto 1fr;
    place-content: center;
    grid-row-gap: 3vmax;
    display: grid;

    width: 80vw;
    height: 80vh;
  }

  style heading {
    font-family: Forum;
    text-align: center;
    font-size: 4vmax;
    opacity: 0.85;
  }

  style questions {
    grid-template-columns: auto 1fr;
    align-content: center;
    align-items: center;
    grid-row-gap: 2vmax;
    grid-column-gap: 1.5vmax;
    display: grid;
    max-width: 60ch;
    margin: 0 auto;
  }

  style mark {
    color: #2e8b57;

    svg {
      height: 3vmax;
      width: 3vmax;
    }
  }

  style question {
    font-family: Forum;
    font-size: 2.5vmax;
  }

  fun render {
    <Slide>
      <div::root>
        <div::heading>"One language. Ships real software."</div>

        <div::questions>
          <div::mark>TablerIcons.CHECK</div>
          <div::question>"Why another language?"</div>

          <div::mark>TablerIcons.CHECK</div>
          <div::question>"Does it work with AI?"</div>
        </div>
      </div>
    </Slide>
  }
}
