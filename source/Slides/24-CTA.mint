component Slides.CTA {
  style root {
    place-content: center;
    grid-row-gap: 3vmax;
    display: grid;

    width: 70vw;
  }

  style logo {
    width: 30vmax;
    margin: 0 auto;
  }

  style url {
    font-family: Forum;
    text-align: center;
    font-size: 3vmax;
  }

  style links {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    display: flex;
    gap: 2vmax 4vmax;

    font-family: "Fira Code", monospace;
    font-size: 1.4vmax;
    opacity: 0.75;
  }

  style link {
    align-items: center;
    display: flex;
    gap: 0.5vmax;

    svg {
      height: 1.6vmax;
      width: 1.6vmax;
    }
  }

  fun render {
    <Slide>
      <div::root>
        <div::logo><Logo/></div>
        <div::url>"mint-lang.com"</div>

        <div::links>
          <div::link>
            TablerIcons.BRAND_GITHUB
            <div>"github.com/mint-lang/mint"</div>
          </div>

          <div::link>
            TablerIcons.BRAND_DISCORD
            <div>"discord.gg/mint-lang"</div>
          </div>

          <div::link>
            TablerIcons.CODE
            <div>"mint-lang.com/playground"</div>
          </div>
        </div>
      </div>
    </Slide>
  }
}
