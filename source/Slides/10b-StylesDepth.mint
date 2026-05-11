component Slides.StylesDepth {
  const CODE =
    <<~MINT
    component Main {
      style button(size : Number) {
        transition: 200ms ease;
        background: #6c5ce7;
        font: inherit;
        color: white;

        padding: \#{size * 0.4}em \#{size * 1}em;
        font-size: \#{size}em;

        border-radius: 999px;
        border: 0;

        &:hover { background: #574bd6; }
        &:active { transform: translateY(1px); }
      }

      style row {
        align-items: center;
        display: flex;
        gap: 10px;
      }

      fun render : Html {
        <div::row>
          <button::button(0.8)>"small"</button>
          <button::button(1)>"medium"</button>
          <button::button(1.6)>"large"</button>
        </div>
      }
    }
    MINT

  fun render {
    <Slide.Live heading="Styles: parameters & sub-selectors" code={CODE}/>
  }
}
