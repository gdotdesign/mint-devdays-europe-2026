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

  style links {
    justify-content: center;
    flex-direction: column;
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

        <div::links>
          <div::link>
            TablerIcons.CODE
            <div>"https://mint-lang.com/sandbox/try"</div>
          </div>

          <div::link>
            TablerIcons.BRAND_GITHUB
            <div>"https://github.com/mint-lang/mint"</div>
          </div>

          <div::link>
            TablerIcons.BRAND_DISCORD
            <div>"https://discord.gg/NXFUJs2"</div>
          </div>
        </div>
      </div>
    </Slide>
  }
}
