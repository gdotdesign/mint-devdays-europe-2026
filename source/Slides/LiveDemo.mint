component Slides.LiveDemo {
  const CODE =
    <<~MINT
    component Main {
      state count = 0

      style root {
        place-content: center;
        min-height: 94vh;
        display: grid;
      }

      style button {
        background: mediumseagreen;
        border-radius: 8px;
        padding: 12px 20px;
        font-size: 18px;
        cursor: pointer;
        color: white;
        border: 0;
      }

      fun render {
        <div::root>
          <button::button onClick={() { next { count: count + 1 } }}>
            "Clicked \#{count} times"
          </button>
        </div>
      }
    }
    MINT

  style root {
    grid-template-rows: auto 1fr;
    display: grid;
    height: 80vh;
    width: 90vw;
    gap: 2vmin;
  }

  style heading {
    font-family: Forum;
    text-align: center;
    font-size: 3vmax;
    opacity: 0.85;
  }

  style editorWrap {
    font-size: 1.4vmin;
    min-height: 0;
    display: grid;
  }

  fun render {
    <Slide>
      <div::root>
        <div::heading>"Hello, Mint."</div>
        <div::editorWrap><LiveEditor initialContents={CODE} scale={1.2}/></div>
      </div>
    </Slide>
  }
}
