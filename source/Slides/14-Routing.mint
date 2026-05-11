component Slides.Routing {
  const CODE =
    <<~MINT
    routes {
      /users/:id (id : Number) { Application.setPage(Page.User(id)) }
      /about { Application.setPage(Page.About) }
      / { Application.setPage(Page.Home) }
      * { Application.setPage(Page.Unkown) }
    }

    type Page {
      User(Number)
      Unkown
      About
      Home
    }

    store Application {
      state page : Page = Home

      fun setPage (page : Page) { next { page: page } }
    }

    component Main {
      fun render : Html {
        <div>
          <a href="/">"Home"</a> " · "
          <a href="/about">"About"</a> " · "
          <a href="/users/42">"User 42"</a> " · "
          <a href="/asd">"Unkown"</a>

          <h2>
            case Application.page {
              User(id) => "User (\#{id})"
              Unkown => "Unkown"
              About => "About"
              Home => "Home"
            }
          </h2>
        </div>
      }
    }
    MINT

  fun render {
    <Slide.Live heading="Routing" code={CODE}/>
  }
}
