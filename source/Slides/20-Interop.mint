component Slides.Interop {
  const CODE =
    <<~MINT
    component Main {
      state now : String = ""

      fun tick : Promise(Void) {
        let stamp =
          `new Date().toLocaleTimeString()`

        next { now: stamp }
      }

      fun render : Html {
        <div>
          <div>"Browser says: \#{now}"</div>
          <button onClick={tick}>"read the clock"</button>
        </div>
      }
    }
    MINT

  fun render {
    <Slide.Live
      heading=<>"Interop - drop into JavaScript when you must"</>
      code={CODE}
    />
  }
}
