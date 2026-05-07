component Logo {
  style root {
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 5%;

    aspect-ratio: 100 / 24;
    width: 100%;

    svg:first-child {
      flex: 0 0 24%;
      height: auto;
    }

    svg:last-child {
      flex: 0 0 50%;
      height: auto;
    }
  }

  fun render {
    <div::root>
      @svg(../../assets/logomark-animated.svg)
      @svg(../../assets/logotype.svg)
    </div>
  }
}
