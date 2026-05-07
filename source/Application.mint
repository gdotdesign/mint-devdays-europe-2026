type Slide {
  render : Function(Html),
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
        notes:
          "Hi everyone, thanks for being here. Today I want to talk about " \
          "Mint — a programming language built specifically for writing " \
          "single-page web applications. Before we dive in, I want to set " \
          "up the two questions I think every one of you is already asking " \
          "in your head."
      },
      {
        render: () { <Slide.TitleOnly>"Why another language?"</Slide.TitleOnly> },
        notes:
          "The first question. Why another language? We already have " \
          "JavaScript, TypeScript, Elm, ReScript, Svelte, the list goes on. " \
          "(pause) That's a fair question and I'll answer it honestly. The " \
          "short version: building a frontend today means gluing together a " \
          "framework, a state manager, a router, a styling solution, a " \
          "build tool, and a testing setup — and praying they all agree. " \
          "Mint replaces that whole stack with one language. One way to do " \
          "things. No glue."
      },
      {
        render: () { <Slide.TitleOnly>"Does it work with AI?"</Slide.TitleOnly> },
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
}
