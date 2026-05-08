component Ide {
  property onChange : Function(Project, Promise(Void))
  property orientation : String = "vertical"
  property previewHeight : String = "1fr"
  property editorHeight : String = "1fr"
  property fontSize : String = "14px"
  property bordered : Bool = false
  property value : Project

  state this : Object = `{}`

  fun componentDidMount : Void {
    let Just(base) =
      root or return void

    `
    (async () => {
      const { default: Ide } =
        await import(#{@asset(../../assets/ide.js)});

      #{this}.ide = new Ide({
        previewHeight: #{previewHeight},
        endpoint: #{@SANDBOX_ENDPOINT},
        editorHeight: #{editorHeight},
        orientation: #{orientation},
        onChange: #{onChange},
        fontSize: #{fontSize},
        value: #{value},
        base: #{base},
      });
    })()
    `
  }

  fun componentDidUpdate : Void {
    if `#{this}.ide` && value != `#{this}.ide.value` {
      `#{this}.ide.setValue(#{value})`
    }
  }

  style root {
    min-height: 0;
    display: grid;

    if bordered {
      border: 1px solid var(--border-color);
    }
  }

  fun render : Html {
    <div::root as root/>
  }
}
