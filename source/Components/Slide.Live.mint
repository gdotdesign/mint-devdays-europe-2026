component Slide.Live {
  property scale : Number = 1.2
  property heading : Html
  property code : String

  style root {
    grid-template-rows: auto 1fr;
    display: grid;
    height: 80vh;
    width: 90vw;
    gap: 2vmin;
  }

  style heading {
    font-family: Forum;
    text-align: center;
    font-size: 3vmax;
    opacity: 0.85;

    b {
      font-weight: normal;
      color: #277944;
    }
  }

  style editorWrap {
    font-size: 1.4vmin;
    min-height: 0;
    display: grid;
  }

  fun render {
    <Slide>
      <div::root>
        <div::heading>heading</div>
        <div::editorWrap><LiveEditor initialContents={code} scale={scale}/></div>
      </div>
    </Slide>
  }
}
