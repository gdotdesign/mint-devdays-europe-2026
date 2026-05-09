component Slides.Stores {
  const CODE =
    <<~MINT
    // Stores: typed shared state. Components `connect`
    // to expose fields and functions as if local.
    store Counter {
      state value : Number = 0

      fun increment { next { value: value + 1 } }
      fun reset { next { value: 0 } }
    }

    component Main {
      connect Counter exposing { value, increment, reset }

      fun render : Html {
        <div>
          <div>"Count: \#{value}"</div>

          <button onClick={(_ : Html.Event) { increment() }}>"+1"</button>
          <button onClick={(_ : Html.Event) { reset() }}>"reset"</button>
        </div>
      }
    }
    MINT

  fun render {
    <Slide.Live heading="Stores: shared state, typed" code={CODE}/>
  }
}
