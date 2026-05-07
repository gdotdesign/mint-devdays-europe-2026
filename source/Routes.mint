routes {
  /presenter/:index (index : Number) {
    Application.setStatus(Status.Presenter(index))
  }

  /presenter/ {
    Application.setStatus(Status.Presenter(0))
  }

  /presenter {
    Application.setStatus(Status.Presenter(0))
  }

  /:index (index : Number) {
    Application.setStatus(Status.Display(index))
  }

  * {
    Application.setStatus(Status.Display(0))
  }
}
