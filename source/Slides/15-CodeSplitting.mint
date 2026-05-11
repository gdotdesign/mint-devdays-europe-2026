component Slides.CodeSplitting {
  const CODE =
    <<~MINT
    async component HeavyThing {
      fun render : Html {
        <div>"I live in my own bundle file."</div>
      }
    }

    component Main {
      state shown : Bool = false
      state quote : String = ""

      const QUOTE =
        defer "...and so does this string."

      fun load : Promise(Void) {
        let text = await QUOTE
        next { shown: true, quote: text }
      }

      fun render : Html {
        <div>
          <button onClick={load}>"load it"</button>

          if shown {
            <div>
              <HeavyThing/> or "loading…"
              <div>quote</div>
            </div>
          }
        </div>
      }
    }
    MINT

  fun render {
    <Slide.Live heading="Code splitting: `async` and `defer`" code={CODE}/>
  }
}
