component Slides.MintHasItAll {
  const ITEMS =
    [
      "View",
      "State",
      "Routing",
      "Styling",
      "Type system",
      "Bundler",
      "Tests",
      "Linter"
    ]

  const ICON =
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke="currentColor"
      viewBox="0 0 24 24"
      stroke-width="2"
      fill="none"
      height="24"
      width="24"
    ><path d="M5 12l5 5l10 -10"/></svg>

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
    color: #2e8b57;

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

  style answer {
    font-size: 1.2vmax;
    opacity: 0.55;
  }

  fun render {
    <Slide>
      <div>
        <div::heading>"…and Mint gives you all of this,"</div>

        <div::grid>
          for item of ITEMS {
            <div::tile>
              <div::mark>ICON</div>

              <div::label>
                <div::category>item</div>
                <div::answer>"Built-in"</div>
              </div>
            </div>
          }
        </div>

        <div::footnote>"…and more. No glue, no config soup."</div>
      </div>
    </Slide>
  }
}
