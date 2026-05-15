component Slides.Directives {
  const FILES =
    [
      {
        path: "Main.mint",
        solution: "",
        contents:
          <<~MINT
          component Main {
            style root {
              svg { fill: #277944; }
            }

            fun render : Html {
              <div::root>
                @svg(circle.svg)

                <pre><code>@inline(data.txt)</code></pre>

                <a href={@asset(data.txt)} download="data.txt">
                  "Download data.txt"
                </a>
              </div>
            }
          }
          MINT
      },
      {
        path: "data.txt",
        solution: "",
        contents:
          <<~TEXT
          Hello from a bundled asset!
          TEXT
      },
      {
        path: "circle.svg",
        solution: "",
        contents:
          <<~SVG
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            height="60"
            width="60">
            <circle cx="50" cy="50" r="50" />
          </svg>
          SVG
      }
    ]

  fun render {
    <Slide.Live
      heading=<>"Directives - "<b>"compile-time"</b>" magic"</>
      files={FILES}
    />
  }
}
