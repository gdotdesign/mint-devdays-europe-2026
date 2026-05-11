component Slides.Async {
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

      fun load : Promise(Void) {
        next { status: Loading }

        let ts =
          Time.toUnix(Time.now())

        let response =
          await Http.send(Http.get("https://api.github.com/zen?ts=\#{ts}"))

        await Timer.timeout(300)

        case response {
          Ok(res) => next { status: Loaded(res.bodyString) }
          Err => next { status: Failed("network") }
        }
      }

      fun render : Html {
        <div>
          <button onClick={load}>"fetch wisdom"</button>

          <div>
            case status {
              Failed(why) => "Error: \#{why}"
              Loaded(text) => "“\#{text}”"
              Idle => "(idle)"
              Loading => "…"
            }
          </div>
        </div>
      }
    }
    MINT

  fun render {
    <Slide.Live heading="Async: await + variants" code={CODE}/>
  }
}
