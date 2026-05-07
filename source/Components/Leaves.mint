component Leaves {
  style root {
    position: absolute;
    overflow: hidden;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }

  style leaf {
    position: absolute;
  }

  style top-left {
    background-image: url(#{@asset(../../assets/top-left.png)});
    transform-origin: 80px 0;
    animation-delay: 3s;
    height: 100px;
    width: 260px;
    left: -15px;
    top: -10px;
  }

  style top-right {
    background-image: url(#{@asset(../../assets/top-right.png)});
    transform-origin: 115px 0;
    height: 159px;
    width: 200px;
    right: -15px;
    top: -10px;
  }

  style bottom-right {
    background-image: url(#{@asset(../../assets/bottom-right.png)});
    transform-origin: 140px 100px;
    animation-delay: 3s;
    height: 100px;
    bottom: -10px;
    width: 260px;
    right: -15px;
  }

  style bottom-left {
    background-image: url(#{@asset(../../assets/bottom-left.png)});
    transform-origin: 20px 159px;
    height: 159px;
    bottom: -10px;
    width: 200px;
    left: -15px;
  }

  fun render : Html {
    <div::root>
      <div::leaf::bottom-right/>
      <div::leaf::bottom-left/>
      <div::leaf::top-right/>
      <div::leaf::top-left/>
    </div>
  }
}
