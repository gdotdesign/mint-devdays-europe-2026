component Slides.Records {
  const CODE =
    <<~MINT
    type User {
      name : String,
      age : Number
    }

    component Main {
      state user : User =
        {
          name: "Gus",
          age: 38
        }

      fun handleClick : Promise(Void) {
        next { user: { user | age: user.age + 1 } }
      }

      fun render : Html {
        <div>
          <div>"\#{user.name} is \#{user.age}"</div>

          <button onClick={handleClick}>
            "It's my Birthday!"
          </button>
        </div>
      }
    }
    MINT

  fun render {
    <Slide.Live heading="Records" code={CODE}/>
  }
}
