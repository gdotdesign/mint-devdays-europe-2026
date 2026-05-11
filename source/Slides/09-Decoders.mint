component Slides.Decoders {
  const CODE =
    <<~MINT
    type Repo {
      stars : Number using "stargazers_count",
      description : Maybe(String),
      name : String,
    }

    component Main {
      state repo : Maybe(Repo) = Nothing

      fun load : Promise(Void) {
        let response =
          await Http.send(Http.get("https://api.github.com/repos/mint-lang/mint"))

        let Ok({ body: JSON(body)}) =
          response

        let Ok(repo) =
          decode body as Repo

        next { repo: Just(repo) }
      } or void

      fun render : Html {
        <div>
          <button onClick={load}>"fetch repo"</button>

          if repo {
            <div>
              <h1>"\#{repo.name} — \#{repo.stars} ⭐"</h1>
              <p>repo.description or ""</p>
            </div>
          } else {
            <div>"(no data)"</div>
          }
        </div>
      }
    }
    MINT

  fun render {
    <Slide.Live heading="Decoders: typed Objects, no library" code={CODE}/>
  }
}
