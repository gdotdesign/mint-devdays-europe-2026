component LiveEditor {
  property initialContents : String
  property scale : Number = 1

  state project : Project =
    {
      files: [{ path: "Main.mint", contents: initialContents, solution: "" }],
      activeFile: "Main.mint"
    }

  fun handleChange (incoming : Project) : Promise(Void) {
    if incoming != project {
      next { project: incoming }
    }
  }

  style root {
    overflow: hidden;
    display: grid;
    height: 100%;
    width: 100%;
    min-height: 0;
    min-width: 0;
  }

  style inner {
    transform-origin: top left;
    transform: scale(#{scale});
    height: #{100 / scale}%;
    width: #{100 / scale}%;
    min-height: 0;
    display: grid;
  }

  fun render : Html {
    <div::root>
      <div::inner>
        <Ide
          orientation="horizontal"
          onChange={handleChange}
          bordered={true}
          value={project}
        />
      </div>
    </div>
  }
}
