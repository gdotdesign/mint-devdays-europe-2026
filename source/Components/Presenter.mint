component Presenter {
  connect Application exposing { slide, notes, status }

  use Provider.Tick { ticks: tick }

  state lastSeenIndex = -1

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
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr auto;
    display: grid;
    gap: 0.5vmax;

    background: #111;
    padding: 1vmax;
    color: #EEE;

    font-family: Noto Sans;
    box-sizing: border-box;
  }

  style slide {
    border-radius: 0.25vmax;
    grid-column: span 2;
    position: relative;
    overflow: hidden;
    display: grid;
  }

  style notes {
    border-radius: 0.25vmax;
    background: #1A1A1A;
    padding: 1vmax;

    font-size: 1.25vmax;
    line-height: 1.5;
  }

  style timers {
    font-variant-numeric: tabular-nums;
    text-align: right;

    display: grid;
    gap: 0.5vmax;
  }

  style timer {
    align-items: center;
    display: grid;
    gap: 1vmax;

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
    font-size: 2vmax;
  }

  fun render : Html {
    <div::root>
      <div::slide><Display/></div>
      <div::notes>notes</div>

      <div::timers>
        <div::timer>
          <div::timer-label>"Talk"</div>
          <div::timer-value>formatElapsed(talkElapsed)</div>
        </div>

        <div::timer>
          <div::timer-label>"Slide"</div>
          <div::timer-value>formatElapsed(slideElapsed)</div>
        </div>
      </div>
    </div>
  }
}
