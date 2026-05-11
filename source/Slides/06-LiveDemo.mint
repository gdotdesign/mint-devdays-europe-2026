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

  fun render {
    <Slide.Live heading="Hello, Mint." code={CODE}/>
  }
}
