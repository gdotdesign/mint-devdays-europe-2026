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
          "Hi everyone, thanks for being here. Today I want to talk about " \
          "Mint — a programming language built specifically for writing " \
          "single-page web applications. Before we dive in, I want to set " \
          "up the two questions I think every one of you is already asking " \
          "in your head."
      },
      {
        render: () { <Slide.TitleOnly>"Why another language?"</Slide.TitleOnly> },
        position: "stage center, take a step left",
        duration: 45,
        notes:
          "The first question. Why another language? We already have " \
          "JavaScript, TypeScript, Elm, ReScript, Svelte — the list goes " \
          "on. (pause) That's a fair question and I'll answer it honestly. " \
          "The short version: building a frontend today means gluing " \
          "together a framework, a state manager, a router, a styling " \
          "solution, a build tool, and a testing setup — and praying they " \
          "all agree. Mint replaces that whole stack with one language. One " \
          "way to do things. No glue."
      },
      {
        render: () { <Slide.TitleOnly>"Does it work with AI?"</Slide.TitleOnly> },
        position: "stage center, take a step right",
        duration: 45,
        notes:
          "And the second question. I know — every second talk at this " \
          "conference is about AI, and you're probably a little tired of " \
          "it. I'll keep this short. The honest question on your mind is: " \
          "can Claude or Copilot actually write Mint? (pause) The answer is " \
          "yes, and I'll show a quick demo later. The more interesting bit " \
          "is why it works well — a small, consistent language surface " \
          "gives an LLM less to get wrong than the " \
          "framework-plus-five-libraries stack we usually throw at it. " \
          "That's the whole detour on AI. We'll come back to both of these " \
          "questions by the end of the talk."
      },
      {
        render: () { <Slides.TheStack/> },
        position: "stage left — the 'problem' side",
        duration: 90,
        notes:
          "So let's start with the first question. Why another language? " \
          "Mint is specifically about single-page applications — the kind " \
          "with routing, state, forms, real-time updates, the works. And " \
          "here's what shipping one of those actually looks like in 2026. A " \
          "framework. A type system. A state manager. A router. A styling " \
          "solution. A bundler. A test runner. A linter. (pause and let the " \
          "audience read) A bunch of independent decisions, a bunch of " \
          "tools that need to agree on conventions, configs, and versions. " \
          "And we haven't even talked about the app yet. This is the soup " \
          "we're swimming in — and it's the thing Mint is reacting to."
      },
      {
        render: () { <Slides.MintHasItAll/> },
        position: "cross to stage right — the 'answer' side",
        duration: 90,
        notes:
          "Now the same picture, but with Mint. Same eight boxes — the " \
          "problems didn't go away. You still need a view layer, you still " \
          "need state, you still need a router. (pause) But instead of " \
          "eight tools that have to negotiate with each other, it's one " \
          "language with all of this baked in. One way to define a " \
          "component. One way to handle state. One way to style. No glue " \
          "code, no config files arguing about module formats, no version " \
          "mismatches at 2 AM. That's the pitch in one slide."
      },
      {
        render: () { <Slides.LiveDemo/> },
        position: "move to lectern — keyboard time",
        duration: 90,
        notes:
          "Enough abstract talk. Let's see actual Mint. This is a live " \
          "editor — what you type compiles in the browser and shows on the " \
          "right. (pause) Walk through the four parts of the component, in " \
          "this order: (1) 'component Main' — the unit, no file " \
          "boilerplate, no imports. (2) 'state count = 0' — state lives in " \
          "the component. Point at it. (3) 'style button { ... }' — styling " \
          "lives in the component. Real CSS, scoped. Point. (4) 'fun " \
          "render' with the onClick handler — view and behavior, same " \
          "place. Point. Then: type something to make it real. Change the " \
          "button text, bump the font-size, whatever the audience suggests."
      },
      {
        render: () { <Slides.LanguageTypesIntro/> },
        position: "step back from lectern, stage center",
        duration: 30,
        notes:
          "Now I want to spend a few minutes on the language itself. Three " \
          "things in this section — variants with exhaustive matching, " \
          "records and stores. The throughline is: the type system isn't " \
          "bolted on, it's how you describe your data and the compiler " \
          "keeps you honest."
      },
      {
        render: () { <Slides.Variants/> },
        position: "lectern — point at the case block",
        duration: 50,
        notes:
          "Variants. A closed set of constructors, some carry payloads. " \
          "(point at Status) The 'case' below is exhaustive — if I delete " \
          "one of these branches the compiler refuses to build. That's the " \
          "part that matters: you can't forget the loading state, you can't " \
          "forget the error state, the compiler walks the whole shape with " \
          "you. (click through the buttons)"
      },
      {
        render: () { <Slides.Records/> },
        position: "lectern — point at the editor",
        duration: 50,
        notes:
          "Records first. You declare them with 'type', fields are typed, " \
          "values are immutable. (point at the type) The update syntax — '{ " \
          "user | age: ... }' — gives you a new record with that field " \
          "replaced. No mutation, no spread soup. (click Birthday a couple " \
          "of times) Same component shape you saw before — state, style, " \
          "render — just with structured data now."
      },
      {
        render: () { <Slides.Stores/> },
        position: "lectern — point at `connect`",
        duration: 50,
        notes:
          "And stores — shared state, still typed. A store has its own " \
          "state and functions. Any component that needs them uses " \
          "'connect' to expose them, and from then on they read like local " \
          "fields. (point at connect) No context providers, no reducers, no " \
          "selectors — one keyword, the types flow through. This is also " \
          "how the deck you're watching is wired together."
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
}
