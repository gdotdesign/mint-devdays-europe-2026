type StackItem {
  category : String,
  example : String
}

component Slides.TheStack {
  const ITEMS =
    [
      { category: "View", example: "React" },
      { category: "State", example: "Redux" },
      { category: "Routing", example: "React Router" },
      { category: "Styling", example: "styled-components" },
      { category: "Type system*", example: "TypeScript" },
      { category: "Bundler*", example: "Vite" },
      { category: "Tests*", example: "Vitest" },
      { category: "Linter*", example: "ESLint" }
    ]

  const ICON = TablerIcons.HELP_CIRCLE

  style heading {
    font-family: Forum;
    text-align: center;
    font-size: 3vmax;

    margin-bottom: 3vmax;
    opacity: 0.85;
  }

  style grid {
    grid-template-columns: repeat(4, auto);
    justify-content: center;
    display: grid;
    gap: 1.5vmax;
  }

  style footnote {
    font-family: Forum;
    font-style: italic;
    text-align: center;
    font-size: 1.4vmax;

    margin-top: 2.5vmax;
    opacity: 0.6;
  }

  style tile {
    border: 2px solid currentColor;
    padding: 1.5vmax 2.5vmax;
    border-radius: 0.5vmax;
    font-family: Forum;
    min-width: 12ch;

    grid-template-columns: auto 1fr;
    align-items: start;
    display: grid;
    gap: 0.8vmax;
  }

  style mark {
    color: #b86b00;

    svg {
      position: relative;
      top: 0.15vmax;
      height: 2vmax;
      width: 2vmax;
    }
  }

  style label {
    text-align: left;
    display: grid;
    gap: 0.2vmax;
  }

  style category {
    font-size: 2vmax;
  }

  style example {
    font-size: 1.2vmax;
    opacity: 0.55;
  }

  fun render {
    <Slide>
      <div>
        <div::heading>"The Single Page Application checklist:"</div>

        <div::grid>
          for item of ITEMS {
            <div::tile>
              <div::mark>ICON</div>

              <div::label>
                <div::category>item.category</div>
                <div::example>"e.g. #{item.example}"</div>
              </div>
            </div>
          }
        </div>

        <div::footnote>"*optional but recommended for sanity"</div>
      </div>
    </Slide>
  }
}
