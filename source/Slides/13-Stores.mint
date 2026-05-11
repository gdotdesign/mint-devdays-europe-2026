component Slides.Stores {
  const CODE =
    <<~MINT
    store Counter {
      state value : Number = 0

      fun increment { next { value: value + 1 } }
      fun reset { next { value: 0 } }
    }

    component GlobalCounter {
      connect Counter exposing { value }

      fun render : Html {
        <div>
          <div>"Count: \#{value}"</div>

          <button onClick={Counter.increment}>"+1"</button>
          <button onClick={Counter.reset}>"reset"</button>
        </div>
      }
    }
    component Main {

      fun render : Html {
        <div>
          <GlobalCounter/>
          <GlobalCounter/>
        </div>
      }
    }
    MINT

  fun render {
    <Slide.Live heading="Stores: shared state, typed" code={CODE}/>
  }
}
