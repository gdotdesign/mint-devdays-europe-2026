component Slides.Variants {
  const CODE =
    <<~MINT
    type Status {
      Loaded(String)
      Failed(String)
      Loading
      Idle
    }

    component Main {
      state status : Status = Idle

      fun render : Html {
        <div>
          <div>
            case status {
              Failed(reason) => "Error: \#{reason}"
              Loaded(body) => "OK: \#{body}"
              Idle => "Press a button."
              Loading => "Loading…"
            }
          </div>

          <button onClick={() { next { status: Loading } }}>"Load"</button>
          <button onClick={() { next { status: Loaded("hello") } }}>"Done"</button>
          <button onClick={() { next { status: Failed("404") } }}>"Fail"</button>
        </div>
      }
    }
    MINT

  fun render {
    <Slide.Live heading="Variants & exhaustive case" code={CODE}/>
  }
}
