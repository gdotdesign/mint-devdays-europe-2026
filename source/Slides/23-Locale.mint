component Slides.Locale {
  const CODE =
    <<~MINT
    locale en {
      ui: {
        ok: "OK",
        greet: (name : String) { "Hello, \#{name}!" }
      }
    }

    locale hu {
      ui: {
        ok: "Rendben",
        greet: (name : String) { "Helló, \#{name}!" }
      }
    }

    component Main {
      fun render : Html {
        <div>
          <div>:ui.greet("Mint")</div>

          <button onClick={() { Locale.set("en") }}>:ui.ok</button>
          <button onClick={() { Locale.set("hu") }}>:ui.ok</button>
        </div>
      }
    }
    MINT

  fun render {
    <Slide.Live
      heading=<>"Locale - "<b>"i18n"</b>" with compile-time checks"</>
      code={CODE}
    />
  }
}
