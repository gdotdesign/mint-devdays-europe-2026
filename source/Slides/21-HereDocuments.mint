component Slides.HereDocuments {
  const CODE =
    <<~MINT
    component Main {
      const XML =
        <<-XML
        <parent>
          <child/>
        </parent>
        XML

      const NOTE =
        <<~TEXT
        Leading indent is trimmed
          to the least-indented line.
        TEXT

      const DOCS =
        <<#MARKDOWN
        # Heredoc Markdown

        Parsed at compile time, rendered as **Html**.
        MARKDOWN

      fun render : Html {
        <div>
          <pre><code>XML</code></pre>
          <pre><code>NOTE</code></pre>
          DOCS
        </div>
      }
    }
    MINT

  fun render {
    <Slide.Live
      heading=<>"Here documents - multi-line strings, "<b>"with superpowers"</b></>
      code={CODE}
    />
  }
}
