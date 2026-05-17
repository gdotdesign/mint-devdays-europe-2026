type Slide {
  render : Function(Html),
  duration : Number,
  position : String,
  notes : String
}

store Application {
  state status : Status = Status.Display(0)

  state channel : BroadcastChannel =
    BroadcastChannel.create("slides",
      (data : Object) {
        let Ok(index) =
          decode data as Number or return Promise.resolve(void)

        goToSlide(index)
      })

  const SLIDES =
    [
      {
        render: () { <Slides.Initial/> },
        position: "stage center",
        duration: 30,
        notes:
          <<~TEXT
          Hi everyone, thanks for being here. This is my first live talk so
          forgive me if I seem nervous or if I make some mistakes anlong the
          way.

          Today I want to talk about Mint — a programming language built
          specifically for writing single-page web applications. Before we dive
          in, I want to set up the two questions I think every one of you is
          already asking in your head.
          TEXT
      },
      {
        render: () { <Slides.Why/> },
        position: "stage center, take a step left",
        duration: 45,
        notes:
          <<~TEXT
          The first question. Why another language? We already have
          JavaScript, TypeScript, Elm, ReScript, Svelte — the list goes
          on. (pause)

          That's a fair question and I'll answer it honestly. The short version:
          building a frontend today means gluing together a framework, a state
          manager, a router, a styling solution, a build tool, a testing setup —
          and praying they all work together.

          Mint replaces that whole stack with one language. One way to do
          things. No glue.
          TEXT
      },
      {
        render: () { <Slides.WorksWithAI/> },
        position: "stage center, take a step right",
        duration: 30,
        notes:
          <<~TEXT
          And the second question. I know — a lot of talks at this conference
          is about AI so I'll keep this short and there's no live AI demo in
          this talk. One slide near the end on why it works well, that's it.

          We'll come back to both questions before we wrap.
          TEXT
      },
      {
        render: () { <Slides.TheStack/> },
        position: "stage left — the 'problem' side",
        duration: 90,
        notes:
          <<~TEXT
          So let's start with the first question. Why another language?
          Mint is specifically about single-page applications — the kind
          with routing, state, forms, real-time updates, and all.

          And here's what shipping one of those actually looks like today.

          - A framework.
          - A type system.
          - A state manager.
          - A router.
          - A styling solution.
          - A bundler.
          - A test runner.
          - A linter.
          - ..and a lot more things.(pause and let the audience read)

          A bunch of independent decisions, a bunch of tools that need to agree
          on conventions, configs, and versions. And we haven't even talked
          about the app yet. This is the complexity Mint was built to address.
          TEXT
      },
      {
        render: () { <Slides.MintHasItAll/> },
        position: "cross to stage right — the 'answer' side",
        duration: 90,
        notes:
          <<~TEXT
          Now the same picture, but with Mint. Same boxes — the problems didn't
          go away. You still need a view layer, you still need state, you still
          need a router, you still need all of that. (pause)

          But instead of these tools that have to negotiate with each other,
          it's one language with all of this baked in. One way to define a
          component. One way to handle state. One way to style. No glue
          code, no config files arguing about module formats, no version
          mismatches, no dependency hell.
          TEXT
      },
      {
        render: () { <Slides.LetsSeeIt/> },
        position: "stage center — beat before the demo",
        duration: 15,
        notes: "So the most important question: what does it look like?"
      },
      {
        render: () { <Slides.LiveDemo/> },
        position: "move to lectern — keyboard time",
        duration: 120,
        notes:
          <<~TEXT
          This is a live editor — what you type compiles locally and shows on
          the right. It uses the built in language server (what every other IDE
          would use) for syntax highlighting, editing and compiling. And it does
          this over a websocket connection. (pause)

          'component Main'
            -> This is the thing that gets rendered on the screen, components
               are the building blocks of the language since they are opaquely
               composable.

          'state count = 0'
            —> This declares a typed field on the component. Local to this
               component, type inferred, accessed by name, updated explicitly
               with `next˙. Later we'll see stores — same idea, same mechanics,
               but shared across components.

          'style button { ... }'
            -> Styling also lives inside the component. Real CSS, scoped, you
               can use variables that are in scope, you can have conditional
               logic, nested selectors, media queries, etc...

          'fun render'
            -> And finally, render. We've already seen state at the top, style
               in the middle — and now the view and the click handler that
               updates that state. Four things, one component, in the order
               you'd read them. That's the whole shape of a Mint component.
          TEXT
      },
      {
        render: () { <Slides.LanguageTypesIntro/> },
        position: "step back from lectern, stage center",
        duration: 20,
        notes:
          <<~TEXT
          Now a few minutes on the language itself. Strings, numbers, functions,
          modules — they're all here, and they look and work exactly like you'd
          expect; I'm going to skip past them. What I want to show you is the
          part that's different: how the compiler and type system add
          restrictions that actually help you.
          TEXT
      },
      {
        render: () { <Slides.Types/> },
        position: "lectern — point at the case block",
        duration: 75,
        notes:
          <<~TEXT
          Mint is fundamentally a functional, strongaly tyepd language.
          And as usual it has types. Two similar shapes you'll see everywhere in
          Mint.

          Variants — a closed set of tags, some carry payloads. (point at
          `LoginResult`)

          The `case` below is exhaustive: if I delete the `Rejected` branch the
          compiler refuses to build. (demo) You can't forget the error state,
          the compiler walks the whole shape with you.

          Records — typed fields, immutable. (point at `User`)

          The update syntax '{ user | age: ... }' gives you a new record with
          that field replaced.

          Together: a variant carrying a record, updated immutably inside an
          exhaustive case. That's how data flows through every Mint program.
          (click Log in, then Birthday)
          TEXT
      },
      {
        render: () { <Slides.Decoders/> },
        position: "lectern — point at the decode line",
        duration: 75,
        notes:
          <<~TEXT
          Decoders. In most stacks, when an HTTP response comes in and you've
          parsed the JSON, you're holding an untyped object — and you reach for
          a validation library, or you cast it 'as Repo' and pray.

          In Mint, 'decode' is a keyword. The compiler looks at the type,
          generates the decoder at compile time, which called on a JavaScript
          `Object` will give you back a `Result` which can either succeed (Ok)
          or fail (Err).

          (point at 'using "stargazers_count"') And if the API names a
          field differently from your code, you rename it inline. No
          third-party library, no schema declaration separate from your type —
          the type is the schema. (click fetch repo)
          TEXT
      },
      {
        render: () { <Slides.Styles/> },
        position: "lectern — point at the style block",
        duration: 90,
        notes:
          <<~TEXT
          Styles. Real CSS, scoped to the component, and — this is one of the
          fun parts — dynamic. (point at the if)

          That's a Mint expression inside the CSS. The style reacts to state
          without you wiring up class toggles. No CSS-in-JS framework, no
          className soup, no Tailwind config — just CSS that knows about
          your data. (the button is already flipping every second — let
          them watch it for a beat before moving on)
          TEXT
      },
      {
        render: () { <Slides.StylesDepth/> },
        position: "lectern — point at the style signature",
        duration: 90,
        notes:
          <<~TEXT
          A few more things you get from the same style blocks. (point at
          'style button(size : Number)')

          Style blocks can take parameters. One style, called three times with
          different sizes — small, medium, large — and the padding and font-size
          are computed from the argument. (point at the call sites)

          Sub-selectors — '&:hover' and '&:active' — work the way you expect,
          scoped to this component. (hover the buttons)

          No styling library to install, no template-literal syntax bolted on
          top of JS — it's the same scoped CSS, parameterized like a function,
          compiled to static CSS and part of the language.
          TEXT
      },
      {
        render: () { <Slides.Async/> },
        position: "lectern — point at await + case",
        duration: 120,
        notes:
          <<~TEXT
          Async. (point at 'await') 'await' is a keyword — and there's no
          'async' keyword to go with it. Anything that returns a Promise
          can be awaited; the type system tracks it from there. No
          ceremony to opt a function in.

          'await' unwraps the boxed value — whatever the Promise carries.
          In this slide that happens to be a Result, so we 'case' on
          the Ok / Err. (point at the case)


          Notice: loading, success, failure, and idle are all the same kind of
          thing — a `Status` variant. Real network code. Compiler checks all
          four. (click 'fetch wisdom')
          TEXT
      },
      {
        render: () { <Slides.Stores/> },
        position: "lectern — point at `connect`",
        duration: 75,
        notes:
          <<~TEXT
          Stores — shared state, still typed.

          A store has its own state and functions. Any component that needs
          them uses either 'connect' to expose them locally (and from then on
          they read like local fields) or can use them directly. (point at
          connect)

          No context providers, no reducers, no selectors — one keyword, the
          types flow through.
          TEXT
      },
      {
        render: () { <Slides.AroundTheLanguage/> },
        position: "stage center — section break",
        duration: 20,
        notes:
          <<~TEXT
          So those were some highlights of the language - of many. Now: the
          stuff around the language — the parts that usually mean ten more
          dependencies.
          TEXT
      },
      {
        render: () { <Slides.CodeSplitting/> },
        position: "lectern — point at `async component` and `defer`",
        duration: 90,
        notes:
          <<~TEXT
          Code splitting. In JS this means bundler configuration, a
          dynamic import call, a loading-state wrapper, and a runtime
          loader. In Mint it's two keywords.

          (point at 'async component HeavyThing') Mark a component
          'async' and the compiler puts it in its own bundle file. When
          something renders it, the file gets fetched. The 'or
          "loading…"' part is the fallback while it's in flight. (click
          'load it')

          (point at 'defer') And 'defer' is the same idea for any
          expression — a string, a function, a value. You 'await' it
          where you need it. The compiler splits, the runtime loads on
          demand.

          No bundler config. No wrapper components. Two keywords.
          TEXT
      },
      {
        render: () { <Slides.Routing/> },
        position: "lectern — point at routes block",
        duration: 90,
        notes:
          <<~TEXT
          Routing. (point at the routes block) That's the whole router.

          Path patterns, typed parameters, blocks that run when the URL
          matches. No router library, no separate config, no component
          wrapping the world. (click the links)

          Links are handled automatically, no need for a separate link
          component that pushes the URL, just simple anchor tags.
          TEXT
      },
      {
        render: () { <Slides.Testing/> },
        position: "step back from lectern — point at the screen",
        duration: 75,
        notes:
          <<~TEXT
          Testing. The live editor doesn't run tests, so this one is a
          screenshot. (point at the code side)

          Suites and tests are language constructs, not a framework you install.
          The expression in the test body is what gets checked — true passes,
          false fails, can be async. That's the whole API.

          (point at the output side) 'mint test' runs them. This is the
          standard library's own test suite, run with the same one binary
          you'd use on your own project.

          Tests run in the browser too, so no browser driver needed, you can
          even run them manually in browser if you desire.
          TEXT
      },
      {
        render: () { <Slides.Tooling/> },
        position: "stage center — talk to the audience",
        duration: 75,
        notes:
          <<~TEXT
          Tooling. One binary called 'mint'.

          - 'mint init' makes a project
          - 'mint start' runs the dev server with live reload
          - 'mint build' produces the bundle
          - 'mint format' formats source files
          - 'mint test' runs tests
          - `mint tool ls` runs the language server

          (pause) That's most of the CLI. No bundler config, no linter
          config, no formatter config, no test runner config. There's
          nothing to configure because there's nothing to choose.
          TEXT
      },
      {
        render: () { <Slides.StandardLibrary/> },
        position: "stage center — sweep a hand across the grid",
        duration: 60,
        notes:
          <<~TEXT
          The usual question at this point: what about the ecosystem? And
          I'll be honest — Mint's third-party ecosystem is small. But the
          standard library is big, and it ships with the language.

          (gesture at the grid) Arrays, strings, numbers, maths. Maybe and
          Result for the nullable and fallible cases. Time, timers.
          Http for the network. Url and SearchParams for the address bar.
          Json. Local and Session Storage. Clipboard, Files, CSV, WebSockets,
          form data. (pause)

          In JS most of these are packages because the standard web APIs are
          not enough — some of them famous ones, some of them transitively
          pulled in by your framework. Here they're modules and they are
          included in the `mint` binary.
          TEXT
      },
      {
        render: () { <Slides.Interop/> },
        position: "lectern — point at the backticks",
        duration: 90,
        notes:
          <<~TEXT
          Interop. Sometimes you need a browser API Mint doesn't wrap yet,
          or a JS library. (point at the backticks) Backticks drop you
          into JavaScript as an expression. The escape hatch is right
          there. (click 'read the clock') You don't pay for it until you
          use it, and when you do, it's one line.
          TEXT
      },
      {
        render: () { <Slides.HereDocuments/> },
        position: "lectern — point at the `<<` openers",
        duration: 90,
        notes:
          <<~TEXT
          Here documents. Multi-line strings without escape-quote soup —
          and three flavors. (point at each opener)

          '<<-' keeps your indentation verbatim. '<<~' strips the
          smallest leading indent from every line, so you can indent the
          body to match the surrounding code and still get a clean
          string. (pause)

          And '<<#MARKDOWN' parses the body at compile time and gives
          you 'Html' back. The website site and the docs are written
          this way — Markdown straight in source, type-checked, no
          runtime parser. Three openers, one feature.
          TEXT
      },
      {
        render: () { <Slides.Directives/> },
        position: "lectern — point at the three `@` calls",
        duration: 90,
        notes:
          <<~TEXT
          Directives. Things that run at compile time, starting with '@'.
          Three in one component, reaching out to two files next to
          'Main.mint'. (point at the file tabs)

          (point at '@svg') Takes an SVG file and inlines it as Html —
          one fewer HTTP request, and it picks up your CSS, so I can
          color it from the component's style block.

          (point at '@inline') Pastes the file's contents in as a
          String, at compile time. The text is baked into the bundle.

          (point at '@asset') Doesn't inline — gives you a hashed path
          and tells the bundler to ship the file alongside. The
          download link works because the file is really there.

          There are more — '@format', '@highlight', '@size' — but the
          shape is the same: the compiler resolves them before anything
          ships.
          TEXT
      },
      {
        render: () { <Slides.Locale/> },
        position: "lectern — point at the `locale` blocks",
        duration: 90,
        notes:
          <<~TEXT
          Locale. Internationalization as a language feature.

          (point at the two 'locale' blocks) You declare translations
          per language — ISO codes, nested keys, values can be plain
          strings or functions. (point at ':ui.greet') And you reference
          them with a colon literal. The compiler checks that every
          language has the same tokens with the same types — add a key
          to 'en' and forget it in 'hu', it won't build.

          'Locale.set' swaps the active language at runtime and
          everything re-renders. (click the buttons) No i18n library,
          no JSON files to keep in sync, no missing-key bugs at
          runtime.
          TEXT
      },
      {
        render: () { <Slides.FeatureMatrix/> },
        position: "step back from lectern — sweep a hand across the matrix",
        duration: 45,
        notes:
          <<~TEXT
          A quick honesty slide before we wrap. (gesture at the matrix)

          This is Mint compared to the usual suspects. A few rows
          of a much longer table. One column per language, one row per
          feature, green where it exists.

          The point isn't any one row. The point is: there's a lot in the
          language I didn't have time to show you. Pattern matching, pipes,
          tuples, string interpolation, default arguments, structural
          equality — most of what you'd expect from a modern typed
          language, and a few things you wouldn't.

          (pause) Eighty rows so far — the full matrix is on mint-lang.com.
          TEXT
      },
      {
        render: () { <Slides.AI/> },
        position: "stage center — pay off the AI question",
        duration: 120,
        notes:
          <<~TEXT
          Coming back to question two. (pause) Yes, AI writes Mint, and
          it does it well. Not because of anything magic — because of what
          an LLM can actually do.

          Keywords. The language has a limited, fixed set. Nothing for an
          agent to invent. (pause)

          Error messages. The compiler tells you exactly what's wrong, in
          plain English, with a location. An agent reads that error,
          changes one thing, runs again.

          And 'mint lint' — fast type-check with structured diagnostics.
          That's the loop: write, lint, read the error, fix, lint again.
          Sub-second feedback, machine-readable output. The same property
          that makes the language pleasant for humans — limited surface,
          explicit errors, fast feedback — is what makes it tractable for
          an agent.

          (placeholder slide — swap in a real Claude-generated Mint
          screenshot before the talk)
          TEXT
      },
      {
        render: () { <Slides.TwoExamples/> },
        position: "stage center — section break",
        duration: 15,
        notes:
          "And now, I want to show you two examples of things shipped in Mint."
      },
      {
        render: () { <Slides.ShowcaseDeck/> },
        position: "stage center — gesture at the screen",
        duration: 90,
        notes:
          <<~TEXT
          Number one: this. The slides you've been watching are a Mint
          app. Routing, state, broadcast channel between presenter window
          and main window, scoped styles, all of it. ~200 lines, builds in
          1second.

          (show the presenter view and some of it in the editor)
          TEXT
      },
      {
        render: () { <Slides.ShowcaseWebsite/> },
        position: "stage center",
        duration: 90,
        notes:
          <<~TEXT
          Number two: mint-lang.com itself. The marketing site, the docs,
          the playground — all Mint. Different shape of app —
          content-heavy, SEO-conscious, lots of pages. Same
          language.

          And this is where the 'async component' and 'defer' keywords
          earn their keep. The playground, the lesson runner, every
          reference page — each one is its own bundle, loaded only when
          you navigate to it. The initial page is small, the rest streams
          in as you click. No bundler plugin, no manual splitting; just
          two keywords we want things split.
          TEXT
      },
      {
        render: () { <Slides.Recap/> },
        position: "stage center — bring it home",
        duration: 60,
        notes:
          <<~TEXT
          The two questions. Why another language? Because the stack we
          have is a patchwork of tools that have to negotiate, and one language
          replaces that with one way to do each thing. Also having a compiler
          access to everything makes it tight and error free.

          Does it work with AI? Yes — and the same property that makes it good
          for humans is what makes it good for LLMs: keywords, expressive error
          messages and quick iteration.
          TEXT
      },
      {
        render: () { <Slides.CTA/> },
        position: "stage center — open palms, take questions",
        duration: 45,
        notes:
          <<~TEXT
          Try it. mint-lang.com has a playground in the browser, no
          install. The repo is on GitHub, the Discord is linked from the
          site, and I'll be around for the rest of the conference if you want
          to talk.

          Thank you. (pause for applause, then: questions?)
          TEXT
      }
    ]

  fun nextSlide {
    goToSlide(Math.min(Status.index(status) + 1, Array.size(SLIDES) - 1))
  }

  fun previousSlide {
    goToSlide(Math.max(Status.index(status) - 1, 0))
  }

  fun goToSlide (index : Number) {
    if index != Status.index(status) {
      BroadcastChannel.send(channel, encode index)
      Window.navigate(Status.path(Status.set(status, index)))
    }
  }

  fun setStatus (status : Status) {
    next { status: status }
  }

  fun openPresenter {
    `window.open(#{Status.path(Status.Presenter(Status.index(status)))}, "presenter", "popup")`
  }

  fun switchToPresenter {
    Window.navigate(Status.path(Status.Presenter(Status.index(status))))
  }

  get slide {
    case SLIDES[Status.index(status)] {
      Just(entry) => entry.render()
      Nothing => <></>
    }
  }

  get notes {
    case SLIDES[Status.index(status)] {
      Just(entry) => entry.notes
      Nothing => ""
    }
  }

  get duration {
    case SLIDES[Status.index(status)] {
      Just(entry) => entry.duration
      Nothing => 0
    }
  }

  get position {
    case SLIDES[Status.index(status)] {
      Just(entry) => entry.position
      Nothing => ""
    }
  }

  get expectedElapsed : Number {
    SLIDES
    |> Array.slice(0, Status.index(status))
    |> Array.reduce(0, (acc : Number, entry : Slide) { acc + entry.duration })
  }

  get currentIndex : Number {
    Status.index(status)
  }

  get slideCount : Number {
    Array.size(SLIDES)
  }
}
