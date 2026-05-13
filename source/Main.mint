component Main {
  connect Application exposing {
    openPresenter,
    previousSlide,
    nextSlide,
    status
  }

  use Provider.Shortcuts {
    shortcuts:
      [
        {
          shortcut: [Html.Event.PAGE_DOWN],
          condition: () { true },
          bypassFocused: true,
          action: nextSlide
        },
        {
          shortcut: [Html.Event.PAGE_UP],
          condition: () { true },
          action: previousSlide,
          bypassFocused: true
        },
        {
          shortcut: [Html.Event.RIGHT_ARROW],
          condition: () { true },
          bypassFocused: false,
          action: nextSlide
        },
        {
          shortcut: [Html.Event.LEFT_ARROW],
          condition: () { true },
          action: previousSlide,
          bypassFocused: false
        },
        {
          shortcut: [Html.Event.P],
          action: openPresenter,
          bypassFocused: false,
          condition:
            () {
              case status {
                Presenter => false
                Display => true
              }
            }
        }
      ]
  }

  style root {
    display: grid;
    height: 100vh;
    width: 100vw;
  }

  fun render : Html {
    <div::root>
      case status {
        Presenter => <Presenter/>

        Display =>
          <>
            <Display/>
            <Hud/>
          </>
      }
    </div>
  }
}
