type Project {
  files : Array(LessonFile),
  activeFile : String
}

type LessonFile {
  solution : String,
  contents : String,
  path : String
}
