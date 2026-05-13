type Slides.StandardLibrary.Module {
  name : String,
  icon : Html
}

component Slides.StandardLibrary {
  const MODULES =
    [
      { name: "Array", icon: TablerIcons.BRACKETS },
      { name: "String", icon: TablerIcons.QUOTE },
      { name: "Number", icon: TablerIcons.NUMBER_123 },
      { name: "Math", icon: TablerIcons.MATH },
      { name: "Maybe", icon: TablerIcons.HELP_CIRCLE },
      { name: "Result", icon: TablerIcons.CIRCLE_CHECK },
      { name: "Time", icon: TablerIcons.CLOCK },
      { name: "Timer", icon: TablerIcons.HOURGLASS },
      { name: "Http", icon: TablerIcons.WORLD },
      { name: "Url", icon: TablerIcons.LINK },
      { name: "Json", icon: TablerIcons.BRACES },
      { name: "Storage.Local", icon: TablerIcons.DATABASE },
      { name: "Window", icon: TablerIcons.APP_WINDOW },
      { name: "Promise", icon: TablerIcons.ARROW_FORWARD },
      { name: "Map", icon: TablerIcons.HASH },
      { name: "Set", icon: TablerIcons.CIRCLES_RELATION },
      { name: "Regexp", icon: TablerIcons.REGEX },
      { name: "Clipboard", icon: TablerIcons.CLIPBOARD },
      { name: "File", icon: TablerIcons.FILE },
      { name: "CSV", icon: TablerIcons.TABLE },
      { name: "Console", icon: TablerIcons.TERMINAL_2 },
      { name: "FormData", icon: TablerIcons.FORMS },
      { name: "SearchParams", icon: TablerIcons.SEARCH },
      { name: "WebSocket", icon: TablerIcons.PLUG_CONNECTED },
      { name: "Dom", icon: TablerIcons.HIERARCHY }
    ]

  style root {
    place-content: center;
    grid-row-gap: 3vmax;
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

  style grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    align-content: center;
    grid-gap: 1.2vmax;
    display: grid;
  }

  style cell {
    font-family: "Fira Code", monospace;
    font-size: 1.4vmax;

    border: 2px solid currentColor;
    border-radius: 0.5vmax;

    grid-template-columns: auto 1fr;
    align-items: center;
    display: grid;
    gap: 0.8vmax;

    padding: 1vmax 1.2vmax;
  }

  style icon {
    svg {
      height: 2vmax;
      width: 2vmax;
    }
  }

  fun render {
    <Slide>
      <div::root>
        <div::heading>"Batteries included"</div>

        <div::grid>
          for module of MODULES {
            <div::cell>
              <div::icon>module.icon</div>
              <div>module.name</div>
            </div>
          }
        </div>
      </div>
    </Slide>
  }
}
