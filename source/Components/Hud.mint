component Hud {
  connect Application exposing { switchToPresenter, currentIndex, slideCount }

  style root {
    transform: translateX(-50%);
    position: fixed;
    bottom: 1vmax;
    left: 50%;
    z-index: 100;

    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 999px;

    align-items: center;
    display: flex;
    gap: 0.5vmax;

    padding: 0.5vmax 1.2vmax;

    font-family: "Fira Code", monospace;
    font-size: 0.9vmax;
    color: #333;

    opacity: 0.35;
    transition: opacity 200ms ease;

    &:hover {
      opacity: 1;
    }
  }

  style counter {
    font-variant-numeric: tabular-nums;
    padding: 0.3vmax 0.8vmax;
  }

  style separator {
    background: rgba(0, 0, 0, 0.15);
    height: 1.4vmax;
    width: 1px;
  }

  style button {
    align-items: center;
    display: flex;
    gap: 0.4vmax;

    background: transparent;
    border-radius: 999px;
    cursor: pointer;
    color: inherit;
    border: 0;

    padding: 0.3vmax 0.8vmax;
    font: inherit;

    &:hover {
      background: #FCFCFC;
    }

    svg {
      height: 1.1vmax;
      width: 1.1vmax;
    }
  }

  fun render : Html {
    <div::root>
      <div::counter>"#{currentIndex + 1} / #{slideCount}"</div>

      <div::separator/>

      <button::button onClick={switchToPresenter}>
        TablerIcons.PRESENTATION
        <div>"Presenter"</div>
      </button>
    </div>
  }
}
