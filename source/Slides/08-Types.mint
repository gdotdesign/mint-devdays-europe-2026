component Slides.Types {
  const CODE =
    <<~MINT
    type User {
      name : String,
      age : Number
    }

    type LoginResult {
      LoggedIn(User)
      Rejected(String)
      Pending
    }

    component Main {
      state result : LoginResult = Pending

      fun handleBirthday : Promise(Void) {
        if let LoggedIn(user) = result {
          next { result: LoggedIn({ user | age: user.age + 1 }) }
        }
      }

      fun render : Html {
        <div>
          <div>
            case result {
              LoggedIn(user) => "Hi \#{user.name}, you are \#{user.age}."
              Rejected(reason) => "Sorry: \#{reason}"
              Pending => "Press a button."
            }
          </div>

          <button onClick={() { next { result: LoggedIn({ name: "Gus", age: 38 }) } }}>
            "Log in"
          </button>

          <button onClick={() { next { result: Rejected("bad password") } }}>
            "Fail"
          </button>

          <button onClick={handleBirthday}>
            "Birthday"
          </button>
        </div>
      }
    }
    MINT

  fun render {
    <Slide.Live heading="Types: variants & records" code={CODE}/>
  }
}
