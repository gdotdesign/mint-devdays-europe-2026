component Slide.SectionDivider {
  property eyebrow : String = ""
  property title : String = ""

  style root {
    flex-direction: column;
    place-content: center;
    align-items: center;
    display: flex;
    gap: 1vmax;
  }

  style eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.4vmax;
    font-family: Noto Sans;
    font-size: 1.5vmax;
    opacity: 0.55;
  }

  style title {
    font-family: Forum;
    font-size: 6vmax;
    line-height: 1;
  }

  fun render {
    <Slide>
      <div::root>
        <div::eyebrow>eyebrow</div>
        <div::title>title</div>
      </div>
    </Slide>
  }
}
