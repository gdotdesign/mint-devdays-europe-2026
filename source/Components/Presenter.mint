component Presenter {
  connect Application exposing {
    expectedElapsed,
    duration,
    position,
    status,
    slide,
    notes
  }

  use Provider.Tick { ticks: tick }

  state lastSeenIndex = -1

  /*
  The slide the iframe loads on, captured once so `src` stays constant —
     binding it to the live index would reload the iframe on every slide
     change. State initializers run once, so this freezes the mount value.
  */
  state initialIndex = Status.index(status)

  state talkStartedAt = 0
  state talkElapsed = 0

  state slideStartedAt = 0
  state slideElapsed = 0

  fun componentDidMount {
    let now =
      Time.toUnix(Time.now())

    next {
      lastSeenIndex: Status.index(status),
      slideStartedAt: now,
      talkStartedAt: now
    }
  }

  fun tick {
    let now =
      Time.toUnix(Time.now())

    let currentIndex =
      Status.index(status)

    if currentIndex != lastSeenIndex {
      next {
        talkElapsed: now - talkStartedAt,
        lastSeenIndex: currentIndex,
        slideStartedAt: now,
        slideElapsed: 0
      }
    } else {
      next {
        slideElapsed: now - slideStartedAt,
        talkElapsed: now - talkStartedAt
      }
    }
  }

  get pace : Number {
    talkElapsed - expectedElapsed * 1000
  }

  get paceLabel : String {
    if pace == 0 {
      "on time"
    } else if pace > 0 {
      "+#{formatElapsed(pace)} behind"
    } else {
      "−#{formatElapsed(0 - pace)} ahead"
    }
  }

  fun formatElapsed (ms : Number) : String {
    let totalSeconds =
      Math.floor(ms / 1000)

    let minutes =
      Math.floor(totalSeconds / 60)

    let minutesFormatted =
      minutes
      |> Number.toString()
      |> String.padStart("0", 2)

    let secondsFormatted =
      (totalSeconds - minutes * 60)
      |> Number.toString()
      |> String.padStart("0", 2)

    "#{minutesFormatted}:#{secondsFormatted}"
  }

  style root {
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    display: grid;
    gap: 0.5vmax;

    background: #111;
    padding: 1vmax;
    height: 100vh;
    width: 100vw;
    color: #EEE;

    font-family: Noto Sans;
    box-sizing: border-box;
  }

  style slide {
    border-radius: 0.25vmax;
    aspect-ratio: 16 / 9;
    place-self: center;

    position: relative;
    overflow: hidden;
    display: block;

    width: 100%;
    max-height: 100%;
    background: #FCFCFC;
  }

  style slide-frame {
    transform-origin: top left;
    transform: scale(0.5);

    aspect-ratio: 1920 / 1060;
    position: absolute;
    width: 100vw;
    border: 0;
    left: 0;
    top: 0;
  }

  style sidebar {
    grid-template-rows: auto 1fr auto;
    display: grid;
    gap: 0.5vmax;
    min-height: 0;
  }

  style notes {
    border-radius: 0.25vmax;
    background: #1A1A1A;
    padding: 1vmax;

    font-family: "Fira Code", monospace;
    white-space: pre-wrap;
    font-size: 1vmax;
    line-height: 1.5;

    overflow: auto;
    min-height: 0;
  }

  style timers {
    grid-template-columns: 1fr 1fr;
    font-variant-numeric: tabular-nums;

    display: grid;
    gap: 0.5vmax;
  }

  style timer {
    align-items: center;
    display: grid;
    gap: 0.5vmax;

    border-radius: 0.25vmax;
    background: #1A1A1A;
    padding: 1vmax;
  }

  style timer-label {
    text-transform: uppercase;
    letter-spacing: 0.1vmax;
    font-size: 0.75vmax;
    text-align: center;
    color: #888;
  }

  style timer-value {
    text-align: center;
    font-size: 2vmax;
  }

  style timer-budget {
    text-align: center;
    font-size: 1vmax;
    color: #888;
  }

  style position {
    padding: 0.75vmax 1vmax;
    border-radius: 0.25vmax;
    background: #1A1A1A;

    text-align: center;
    font-style: italic;
    font-size: 1vmax;
    color: #BBB;
  }

  fun render : Html {
    <div::root>
      <div::slide><iframe::slide-frame src="/#{initialIndex}"/></div>

      <div::sidebar>
        <div::position>position</div>
        <div::notes>notes</div>

        <div::timers>
          <div::timer>
            <div::timer-label>"Talk"</div>
            <div::timer-value>formatElapsed(talkElapsed)</div>
            <div::timer-budget>paceLabel</div>
          </div>

          <div::timer>
            <div::timer-label>"Slide"</div>
            <div::timer-value>formatElapsed(slideElapsed)</div>
            <div::timer-budget>"of #{formatElapsed(duration * 1000)}"</div>
          </div>
        </div>
      </div>
    </div>
  }
}
