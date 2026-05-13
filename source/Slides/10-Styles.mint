component Slides.Styles {
  const CODE =
    <<~MINT
    component Main {
      state liked : Bool = false

      use Provider.Tick {
        ticks: () { next { liked: !liked } }
      }

      style button {
        transition: 800ms ease;
        font: inherit;
        color: white;

        padding: 0.6em 1.2em;
        border-radius: 999px;
        border: 0;

        if liked {
          background: crimson;
        } else {
          background: #222222;
        }
      }

      fun render : Html {
        <button::button>
          if liked { "♥ liked" } else { "♡ like" }
        </button>
      }
    }
    MINT

  fun render {
    <Slide.Live heading=<>"Styles - real CSS, scoped, dynamic"</> code={CODE}/>
  }
}
