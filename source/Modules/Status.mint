type Status {
  Presenter(Number)
  Display(Number)
}

module Status {
  fun index (status : Status) : Number {
    case status {
      Presenter(index) | Display(index) => index
    }
  }

  fun path (status : Status) : String {
    case status {
      Presenter(index) => "/presenter/#{index}"
      Display(index) => "/#{index}"
    }
  }

  fun set (status : Status, index : Number) : Status {
    case status {
      Presenter => Status.Presenter(index)
      Display => Status.Display(index)
    }
  }
}
