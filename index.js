import {patternVariable as L,createProvider as Z,normalizeEvent as Y,subscriptions as X,bracketAccess as W,createElement as C,navigateHash as V,decodeNumber as T,useDidUpdate as M,useRefSignal as H,patternMany as Q,destructure as J,newVariant as S,useEffect as I,useSignal as F,program as AC,identity as U,fragment as O,pattern as K,compare as G,toArray as D,variant as A,useId as AB,batch as AA,signal as R,setRef as N,record as B,match as P,style as E} from "./runtime.js";export const AD=A(1,`Display`),AE=A(1,`Err`),AF=A(1,`Just`),AG=A(0,`Nothing`),AH=A(1,`Ok`),AI=A(1,`Presenter`),a=B(`LessonFile`),b=B(`Project`),AJ=({children: c=[]})=>{return C(`div`,{className:`h`},[c])},d=C(`svg`,{dangerouslySetInnerHTML:{__html:`<mask id="a">
    <path d="M.297-.288c-14.109 15.433 9.805 40.825 12.879 27.626.244-1.05-.683-2.69-1.69-4.595-.453-1.136-.74-2.772-.855-4.354-.01-.343-.028-.627-.046-1.263-.02-1.19.066-2.377.261-3.547.162-1.03.342-1.51.746-2.614.06-.13.115-.261.178-.38a.504.504 0 0 1 .281-.237.398.398 0 0 1 .332.043c.15.097.287.219.405.36.6-1.54 1.435-3.082 2.46-4.327C26.357-1.856 1.087-2.098.297-.288z" style="fill:#fff;transform-origin:50% 100%">
      <animateTransform attributeName="transform" attributeType="XML" dur="2s" keyTimes="0; 0.1; 0.2; 1" repeatCount="indefinite" type="rotate" values="0; 5; 0; 0"/>
    </path>
  </mask>
  <g mask="url(#a)">
    <path d="M3.492 3.089c.473.064.93.21 1.351.432-.019-.3.217-.54.492-.5a6.014 6.014 0 0 1 1.848.6c.027-.28.273-.47.53-.408a6.46 6.46 0 0 1 2.382 1.204.512.512 0 0 1 .183-.348.411.411 0 0 1 .393-.064c.448.155 1.544.64 2.764 1.964l.148.145c1.34 1.158 2.383 2.357 3.326 4.32.076.18.25.302.444.314a.422.422 0 0 0 .393-.26c.062-.14.133-.276.213-.406 1.541 2.488 2.118 8.338 1.355 11.173-.718 2.8-.84 3.848-.855 4.067-.8-1.912-1.7-4.008-2.528-5.656.688-1.944.5-4.548-.36-6.863-.26-.703-1.064-.438-.81.244.661 1.772.894 3.779.54 5.407a54.308 54.308 0 0 0-3.177-5.211 11.29 11.29 0 0 0-.559-3.458 3.854 3.854 0 0 0-.562-1.137c-.457-.561-1.056.05-.61.598.013.018.016.018.015.014l.043.08c.108.202.201.412.277.629.212.616.352 1.255.418 1.903a52.01 52.01 0 0 0-4.948-5.778c-.49-.488-1.028.188-.55.663a50.243 50.243 0 0 1 4.867 5.688 9.632 9.632 0 0 1-1.61-.747 4.278 4.278 0 0 1-.507-.355.916.916 0 0 0-.067-.053c.004.002.004 0-.01-.016-.364-.563-1.077.132-.61.594.26.28.557.513.885.688.913.515 1.88.929 2.882 1.234a53.32 53.32 0 0 1 3.114 5.11c-1.47-.448-2.936-1.42-4.146-2.504-.452-.438-1 .35-.5.72 1.527 1.373 3.394 2.57 5.266 2.982.605 1.2 1.833 4.294 2.281 5.43-.576-.543-1.958-1.55-5.104-2.486-3.972-1.09-5.675-3.372-6.228-4.311a.541.541 0 0 1 .11-.677c.133-.104.28-.19.435-.255a15.947 15.947 0 0 1-2.096-3.043.57.57 0 0 1-.045-.398.462.462 0 0 1 .218-.29 2.07 2.07 0 0 1 .421-.177 7.518 7.518 0 0 1-1.18-2.657.529.529 0 0 1 .07-.388.437.437 0 0 1 .301-.203l.02-.002a8.16 8.16 0 0 1-.955-2.288c-.066-.27.083-.54.331-.602A8.828 8.828 0 0 1 3.1 5.945a.537.537 0 0 1 .067-.418.428.428 0 0 1 .302-.201 5.807 5.807 0 0 1-.627-1.34.989.989 0 0 1 .012-.556c.09-.33.544-.332.64-.341z" style="fill:#277944;transform-origin:50% 100%">
      <animateTransform attributeName="transform" attributeType="XML" dur="2s" keyTimes="0; 0.1; 0.2; 1" repeatCount="indefinite" type="rotate" values="0; -5; 0; 0"/>
    </path>
  </g>
  <path d="M26.026 2.805a4.08 4.08 0 0 0-1.287.596c-.018-.3-.282-.508-.55-.435a5.983 5.983 0 0 0-1.759.823c-.062-.275-.329-.433-.576-.34a6.453 6.453 0 0 0-2.216 1.489.512.512 0 0 0-.225-.323.411.411 0 0 0-.398-.015c-.425.209-1.453.826-2.5 2.29l.02.01c-1.187 1.314-2.223 2.785-2.917 4.85a.514.514 0 0 1-.402.365.422.422 0 0 1-.422-.21 3.639 3.639 0 0 0-.26-.376c-1.224 2.659-1.075 8.536.032 11.255 1.058 2.69 1.31 3.715 1.35 3.93.558-1.996 1.192-4.187 1.811-5.924-.922-1.844-1.056-4.452-.489-6.855.172-.73 1.002-.566.833.142-.437 1.84-.42 3.86.132 5.432a54.308 54.308 0 0 1 2.51-5.563 11.29 11.29 0 0 1 .128-3.5c.073-.423.215-.828.418-1.198.384-.613 1.054-.08.68.518-.012.02-.015.02-.014.016l-.033.085a4.485 4.485 0 0 0-.198.658 8.557 8.557 0 0 0-.18 1.94 52.01 52.01 0 0 1 4.198-6.344c.427-.545 1.043.06.628.59a50.243 50.243 0 0 0-4.129 6.245 9.632 9.632 0 0 0 1.506-.94c.162-.126.315-.265.46-.415a.916.916 0 0 1 .06-.06c-.005.002-.005 0 .007-.018.292-.603 1.085-.001.68.514a3.4 3.4 0 0 1-.795.793 14.423 14.423 0 0 1-2.708 1.58 53.32 53.32 0 0 0-2.459 5.456c1.403-.627 2.738-1.772 3.805-2.998.394-.49 1.035.224.586.654-1.347 1.55-3.052 2.968-4.859 3.608-.452 1.266-1.29 4.487-1.594 5.67.505-.61 1.752-1.78 4.758-3.097 3.808-1.57 5.216-4.046 5.65-5.046a.541.541 0 0 0-.193-.658 1.885 1.885 0 0 0-.464-.2 15.947 15.947 0 0 0 1.705-3.278.57.57 0 0 0-.004-.4.462.462 0 0 0-.252-.26c-.143-.058-.29-.1-.44-.125a7.518 7.518 0 0 0 .843-2.782.529.529 0 0 0-.117-.377.437.437 0 0 0-.324-.164h-.02a8.16 8.16 0 0 0 .666-2.388c.032-.275-.149-.525-.403-.556a8.828 8.828 0 0 0 .464-1.878.537.537 0 0 0-.118-.407.428.428 0 0 0-.325-.162c.21-.444.365-.918.457-1.407a.989.989 0 0 0-.08-.55c-.13-.316-.58-.262-.676-.26z" style="fill:#36a65d;transform-origin:50% 100%">
    <animateTransform attributeName="transform" attributeType="XML" dur="2s" keyTimes="0; 0.1; 0.2; 1" repeatCount="indefinite" type="rotate" values="0; 5; 0; 0"/>
  </path>`},viewBox:`0 0 29.6 29.6`,height:`29.6`,width:`29.6`}),e=C(`svg`,{dangerouslySetInnerHTML:{__html:`<path d="M0 0v.351h.19c.176 0 .34.071.49.212.152.118.28.27.382.457.1.19.177.391.226.599.051.21.076.398.076.562v19.53c0 .186-.025.399-.077.633a2.598 2.52 0 0 1-.226.598c-.097.183-.227.35-.38.494a.696.675 0 0 1-.49.21H0v.353h4.128v-.354h-.19a.74.717 0 0 1-.53-.209 2.885 2.799 0 0 1-.417-.494 2.587 2.51 0 0 1-.226-.598 3.232 3.136 0 0 1-.077-.634V3.518l9.28 20.48 9.77-21.568v19.28c0 .187-.024.4-.075.634a1.907 1.85 0 0 1-.264.598c-.1.187-.226.353-.376.494a.7.68 0 0 1-.495.21h-.189v.353h5.377v-.354h-.189a.745.723 0 0 1-.53-.209 2.876 2.79 0 0 1-.416-.494 2.587 2.51 0 0 1-.227-.598 3.231 3.135 0 0 1-.076-.634V2.181c0-.164.025-.352.076-.563a2.598 2.52 0 0 1 .227-.598c.127-.187.264-.34.415-.457a.745.723 0 0 1 .532-.212h.189V0h-4.28L12.65 19.25 3.862 0zm62.757 2.181L58.97 3.306v.354c.632.024.997.21 1.1.563.124.329.19.69.19 1.09v3.132h-2.122v1.197h2.12v8.76c0 .68.011 1.348.038 2.007a6.06 5.88 0 0 0 .416 1.794c.227.54.594.972 1.1 1.301.504.329 1.212.494 2.12.494.733 0 1.274-.094 1.629-.282.378-.187.67-.364.87-.529a.79.767 0 0 1 .569-.211v-2.568h-.341a3.265 3.168 0 0 1-.907 1.689c-.456.47-.949.704-1.48.704-.353 0-.63-.082-.831-.246-.202-.187-.354-.446-.454-.775a5.468 5.305 0 0 1-.192-1.232 34.55 33.518 0 0 1-.038-1.654V9.642H67V8.446h-4.243zm-30.866.775c-.505 0-.935.165-1.288.494a1.702 1.651 0 0 0-.493 1.195c0 .47.165.857.493 1.162.353.305.783.458 1.287.458.505 0 .936-.153 1.288-.458.354-.305.53-.693.53-1.162 0-.47-.175-.867-.53-1.195a1.795 1.741 0 0 0-1.287-.494zm1.742 5.067-3.79 1.127v.316c.608.024.975.225 1.102.6.125.352.188.728.188 1.126V21.71c0 .187-.026.4-.076.634a2.556 2.48 0 0 1-.227.598 1.892 1.892 0 0 1-.378.494.74.717 0 0 1-.53.21V24h4.923v-.354a.744.722 0 0 1-.532-.209 1.945 1.887 0 0 1-.377-.494 2.587 2.51 0 0 1-.227-.598 3.232 3.136 0 0 1-.076-.634zm9.014.036-3.788 1.127v.317c.606.023.972.222 1.098.598.125.351.19.727.19 1.126V21.71c0 .187-.024.4-.076.634a1.83 1.83 0 0 1-.266.598c-.1.187-.227.353-.376.494a.7.68 0 0 1-.495.21v.353h4.925v-.354a.74.717 0 0 1-.53-.209 4.645 4.506 0 0 1-.379-.494 2.468 2.468 0 0 1-.228-.598 3.231 3.135 0 0 1-.076-.634v-8.583c0-.492.127-.963.381-1.409a4.425 4.425 0 0 1 1.02-1.195 5.448 5.285 0 0 1 1.44-.846 4.54 4.404 0 0 1 1.668-.316 4.36 4.36 0 0 1 1.628.317 3.808 3.694 0 0 1 1.477.915c.43.422.77.95 1.023 1.583.252.633.378 1.372.378 2.218v7.316c0 .187-.025.4-.076.634a1.84 1.84 0 0 1-.266.598c-.1.187-.227.353-.377.494a.7.68 0 0 1-.495.21v.353h4.888v-.354a.744.722 0 0 1-.531-.21 4.645 4.506 0 0 1-.38-.493 2.587 2.51 0 0 1-.226-.598 3.231 3.135 0 0 1-.075-.634v-7.562c0-.681-.126-1.374-.379-2.077a5.447 5.284 0 0 0-1.137-1.97c-.53-.61-1.21-1.102-2.044-1.478-.834-.376-1.844-.564-3.03-.564-.707 0-1.327.071-1.857.212-.505.118-.96.281-1.364.492a4.845 4.7 0 0 0-.984.634 5.654 5.485 0 0 0-.682.598z" style="fill:currentColor"/>`},viewBox:`0 0 67 24`,height:`24`,width:`67`}),AK=()=>{return C(`div`,{className:`a`},[d,e])},AL=()=>{return C(AJ,{},D(C(`div`,{className:`ad`},[C(AK,{})]),C(`div`,{className:`ae`},[`The programming language for writing single page applications.`])))},f=B(`Slide`),AM=({children: g=[]})=>{return C(AJ,{},D(C(`div`,{className:`i`},[g])))},AN=()=>{return C(AM,{},D(`Why another language?`))},AO=()=>{return C(AM,{},D(`Does it work with AI?`))},h=B(`StackItem`),i=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0`}),C(`path`,{"d":`M12 16v.01`}),C(`path`,{"d":`M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483`})])]),AP=()=>{const j=F([h({category:`View`,example:`React`}),h({category:`State`,example:`Redux`}),h({category:`Routing`,example:`React Router`}),h({category:`Styling`,example:`styled-components`}),h({category:`Type system*`,example:`TypeScript`}),h({category:`Bundler*`,example:`Vite`}),h({category:`Tests*`,example:`Vitest`}),h({category:`Linter*`,example:`ESLint`})]),k=F(i);return C(AJ,{},D(C(`div`,{},[C(`div`,{className:`af`},[`The Single Page Application checklist:`]),C(`div`,{className:`ag`},[(()=>{const _0=[];const _1=j.value;let _i=-1;for(let l of _1){_i++;_0.push(C(`div`,{className:`ai`},[C(`div`,{className:`aj`},[k.value]),C(`div`,{className:`ak`},[C(`div`,{className:`al`},[l.category]),C(`div`,{className:`am`},[`e.g. ${l.example}`])])]))};return _0})()]),C(`div`,{className:`ah`},[`*optional but recommended for sanity`])])))},m=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M5 12l5 5l10 -10`})])]),AQ=()=>{const n=F([`View`,`State`,`Routing`,`Styling`,`Type system`,`Bundler`,`Tests`,`Linter`]),o=F(m);return C(AJ,{},D(C(`div`,{},[C(`div`,{className:`m`},[`…and Mint gives you all of this,`]),C(`div`,{className:`n`},[(()=>{const _0=[];const _1=n.value;let _i=-1;for(let p of _1){_i++;_0.push(C(`div`,{className:`p`},[C(`div`,{className:`q`},[o.value]),C(`div`,{className:`r`},[C(`div`,{className:`s`},[p]),C(`div`,{className:`t`},[`Built-in`])])]))};return _0})()]),C(`div`,{className:`o`},[`…and more. No glue, no config soup.`])])))},AR=({q=``,r=``})=>{return C(AJ,{},D(C(`div`,{className:`j`},[C(`div`,{className:`k`},[q]),C(`div`,{className:`l`},[r])])))},AS=()=>{return C(AR,{r:`Let's see it!`,q:`Demo`})},s=(t)=>{return (t.length)},u=(v)=>{return G(s(v),0)},AT=({w,x=`vertical`,y=`1fr`,z=`1fr`,aa=`14px`,ab=false,ac})=>{const ad=H(new AG()),ae=F(({})),af=()=>{const _={};(ab?Object.assign(_,{[`--e-a`]:`1px solid var(--border-color)`}):null);return _};I(()=>{(()=>{const ag=J(ad.value,K(AF,[L]));if(ag === false){return null};const [ah]=ag;return ((async () => {
      const { default: Ide } =
        await import(`./ide_6aa61bb511e5521fa78a381fe5eb26f2.js`);

      ae.value.ide = new Ide({
        previewHeight: y,
        endpoint: `wss://mint-sandbox-server.szikszai.co/`,
        editorHeight: z,
        orientation: x,
        onChange: w,
        fontSize: aa,
        value: ac,
        base: ah,
      });
    })())})()},[]);M(()=>{return ((ae.value.ide) && !G(ac,(ae.value.ide.value))?(ae.value.ide.setValue(ac)):null)});return C(`div`,{className:`ap`,style:E([af()]),ref:N(ad,AF,AG)})},AU=({ai=``,aj=[],ak=1})=>{const al=F(b({files:(u(aj)?[a({path:`Main.mint`,contents:ai,solution:``})]:aj),activeFile:`Main.mint`})),am=(an)=>{return (!G(an,al.value)?(()=>{al.value=an})():null)},ao=()=>{const _={[`--f-a`]:`scale(` + ak + `)`,[`--f-b`]:100 / ak + `%`,[`--f-c`]:100 / ak + `%`};return _};return C(`div`,{className:`ay`},[C(`div`,{className:`az`,style:E([ao()])},[C(AT,{x:`horizontal`,w:am,ab:true,ac:al.value})])])},AV=({ap=1.2,aq,ar=``,as=[]})=>{return C(AJ,{},D(C(`div`,{className:`ba`},[C(`div`,{className:`bb`},[aq]),C(`div`,{className:`bc`},[C(AU,{ai:ar,aj:as,ak:ap})])])))},AW=()=>{const at=F(`component Main {
  state count = 0

  style root {
    place-content: center;
    min-height: 94vh;
    display: grid;
  }

  style button {
    background: mediumseagreen;
    border-radius: 8px;
    padding: 12px 20px;
    font-size: 18px;
    cursor: pointer;
    color: white;
    border: 0;
  }

  fun render {
    <div::root>
      <button::button onClick={() { next { count: count + 1 } }}>
        "Clicked #{count} times"
      </button>
    </div>
  }
}`);return C(AV,{aq:`Hello, Mint`,ar:at.value})},AX=()=>{return C(AR,{r:`The Language`,q:`Part 1`})},AY=()=>{const au=F(`type User {
  name : String,
  age : Number
}

type LoginResult {
  Rejected(String)
  LoggedIn(User)
  Pending
}

component Main {
  state result : LoginResult = Pending

  fun handleBirthday : Promise(Void) {
    if let LoggedIn(user) = result {
      next { result: LoggedIn({ user | age: user.age + 1 }) }
    }
  }

  fun render : Html {
    <div>
      <div>
        case result {
          LoggedIn(user) => "Hi #{user.name}, you are #{user.age}."
          Rejected(reason) => "Sorry: #{reason}"
          Pending => "Press a button."
        }
      </div>

      <button onClick={() {
        next { result: LoggedIn({ name: "Gus", age: 38 }) }
      }}>
        "Log in"
      </button>

      <button onClick={() {
        next { result: Rejected("bad password") }
      }}>
        "Fail"
      </button>

      <button onClick={handleBirthday}>
        "Birthday"
      </button>
    </div>
  }
}`);return C(AV,{aq:`Types - variants & records`,ar:au.value})},AZ=()=>{const av=F(`type Repo {
  stars : Number using "stargazers_count",
  description : Maybe(String),
  name : String,
}

component Main {
  state repo : Maybe(Repo) = Nothing

  fun load : Promise(Void) {
    let response =
      await Http.send(Http.get("https://api.github.com/repos/mint-lang/mint"))

    let Ok({ body: JSON(body)}) =
      response

    let Ok(repo) =
      decode body as Repo

    next { repo: Just(repo) }
  } or void

  fun render : Html {
    <div>
      <button onClick={load}>"fetch repo"</button>

      if repo {
        <div>
          <h1>"#{repo.name} — #{repo.stars} ⭐"</h1>
          <p>repo.description or ""</p>
        </div>
      } else {
        <div>"(no data)"</div>
      }
    </div>
  }
}`);return C(AV,{aq:`Decoders - typed objects, no library`,ar:av.value})},BA=()=>{const aw=F(`component Main {
  state liked : Bool = false

  use Provider.Tick {
    ticks: () { next { liked: !liked } }
  }

  style button {
    transition: 800ms ease;
    font: inherit;
    color: white;

    padding: 0.6em 1.2em;
    border-radius: 999px;
    border: 0;

    if liked {
      background: crimson;
    } else {
      background: #222222;
    }
  }

  fun render : Html {
    <button::button>
      if liked { "♥ liked" } else { "♡ like" }
    </button>
  }
}`);return C(AV,{aq:`Styles - real CSS, scoped, dynamic`,ar:aw.value})},BB=()=>{const ax=F(`component Main {
  style button(size : Number) {
    transition: 200ms ease;
    background: #6c5ce7;
    font: inherit;
    color: white;

    padding: #{size * 0.4}em #{size * 1}em;
    font-size: #{size}em;

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
}`);return C(AV,{aq:`Styles - parameters & sub-selectors`,ar:ax.value})},BC=()=>{const ay=F(`type Status {
  Loaded(String)
  Failed(String)
  Loading
  Idle
}

component Main {
  state status : Status = Idle

  fun load : Promise(Void) {
    next { status: Loading }

    let ts =
      Time.toUnix(Time.now())

    let response =
      await Http.send(Http.get("https://api.github.com/zen?ts=#{ts}"))

    await Timer.timeout(300)

    case response {
      Ok(res) => next { status: Loaded(res.bodyString) }
      Err => next { status: Failed("network") }
    }
  }

  fun render : Html {
    <div>
      <button onClick={load}>"fetch wisdom"</button>

      <div>
        case status {
          Failed(why) => "Error: #{why}"
          Loaded(text) => "“#{text}”"
          Idle => "(idle)"
          Loading => "…"
        }
      </div>
    </div>
  }
}`);return C(AV,{aq:`Async - await + variants`,ar:ay.value})},BD=()=>{const az=F(`store Counter {
  state value : Number = 0

  fun increment { next { value: value + 1 } }
  fun reset { next { value: 0 } }
}

component GlobalCounter {
  connect Counter exposing { value }

  fun render : Html {
    <div>
      <div>"Count: #{value}"</div>

      <button onClick={Counter.increment}>"+1"</button>
      <button onClick={Counter.reset}>"reset"</button>
    </div>
  }
}
component Main {

  fun render : Html {
    <div>
      <GlobalCounter/>
      <GlobalCounter/>
    </div>
  }
}`);return C(AV,{aq:`Stores - shared state, typed`,ar:az.value})},BE=()=>{return C(AR,{q:`Part 2`,r:`Around the language`})},BF=()=>{const ba=F(`async component HeavyThing {
  fun render : Html {
    <div>"I live in my own bundle file."</div>
  }
}

component Main {
  state shown : Bool = false
  state quote : String = ""

  const QUOTE =
    defer "...and so does this string."

  fun load : Promise(Void) {
    let text = await QUOTE
    next { shown: true, quote: text }
  }

  fun render : Html {
    <div>
      <button onClick={load}>"load it"</button>

      if shown {
        <div>
          <HeavyThing/> or "loading…"
          <div>quote</div>
        </div>
      }
    </div>
  }
}`);return C(AV,{ar:ba.value,aq:C(O,{},[`Code splitting with `,C(`b`,{},[`async`]),` and `,C(`b`,{},[`defer`])])})},BG=()=>{const bb=F(`routes {
  /users/:id (id : Number) { Application.setPage(Page.User(id)) }
  /about { Application.setPage(Page.About) }
  / { Application.setPage(Page.Home) }
  * { Application.setPage(Page.Unkown) }
}

type Page {
  User(Number)
  Unkown
  About
  Home
}

store Application {
  state page : Page = Home

  fun setPage (page : Page) { next { page: page } }
}

component Main {
  fun render : Html {
    <div>
      <a href="/">"Home"</a> " · "
      <a href="/about">"About"</a> " · "
      <a href="/users/42">"User 42"</a> " · "
      <a href="/asd">"Unkown"</a>

      <h2>
        case Application.page {
          User(id) => "User (#{id})"
          Unkown => "Unkown"
          About => "About"
          Home => "Home"
        }
      </h2>
    </div>
  }
}`);return C(AV,{aq:`Routing`,ar:bb.value})},BH=({bc=``,bd=``,be=``})=>{return C(AJ,{},D(C(`div`,{className:`aq`},[C(`div`,{className:`ar`},[bc]),C(`img`,{"src":bd,"alt":be,className:`as`})])))},BI=()=>{return C(BH,{bc:`Testing - built in, no framework`,bd:`./testing_9b4fb490bcff6d1219ab079b30c33a67.jpg`,be:`mint test output`})},BJ=()=>{return C(BH,{bd:`./cli_6b471ea0e831d0047419818f09dd27eb.jpg`,bc:`One binary - No config`,be:`mint --help output`})},bf=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M8 4h-3v16h3`}),C(`path`,{"d":`M16 4h3v16h-3`})])]),bg=B(`Slides.StandardLibrary.Module`),bh=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5`}),C(`path`,{"d":`M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5`})])]),bi=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M3 10l2 -2v8`}),C(`path`,{"d":`M9 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3`}),C(`path`,{"d":`M17 8h2.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-2.5`})])]),bj=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M19 5h-7l-4 14l-3 -6h-2`}),C(`path`,{"d":`M14 13l6 6`}),C(`path`,{"d":`M14 19l6 -6`})])]),bk=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0`}),C(`path`,{"d":`M9 12l2 2l4 -4`})])]),bl=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0`}),C(`path`,{"d":`M12 7v5l3 3`})])]),bm=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M6.5 7h11`}),C(`path`,{"d":`M6.5 17h11`}),C(`path`,{"d":`M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z`}),C(`path`,{"d":`M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z`})])]),bn=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0`}),C(`path`,{"d":`M3.6 9h16.8`}),C(`path`,{"d":`M3.6 15h16.8`}),C(`path`,{"d":`M11.5 3a17 17 0 0 0 0 18`}),C(`path`,{"d":`M12.5 3a17 17 0 0 1 0 18`})])]),bo=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M9 15l6 -6`}),C(`path`,{"d":`M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464`}),C(`path`,{"d":`M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463`})])]),bp=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M7 4a2 2 0 0 0 -2 2v3a2 3 0 0 1 -2 3a2 3 0 0 1 2 3v3a2 2 0 0 0 2 2`}),C(`path`,{"d":`M17 4a2 2 0 0 1 2 2v3a2 3 0 0 0 2 3a2 3 0 0 0 -2 3v3a2 2 0 0 1 -2 2`})])]),bq=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0`}),C(`path`,{"d":`M4 6v6a8 3 0 0 0 16 0v-6`}),C(`path`,{"d":`M4 12v6a8 3 0 0 0 16 0v-6`})])]),br=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z`}),C(`path`,{"d":`M6 8h.01`}),C(`path`,{"d":`M9 8h.01`})])]),bs=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1`})])]),bt=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M5 9l14 0`}),C(`path`,{"d":`M5 15l14 0`}),C(`path`,{"d":`M11 4l-4 16`}),C(`path`,{"d":`M17 4l-4 16`})])]),bu=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M9.183 6.117a6 6 0 1 0 4.511 3.986`}),C(`path`,{"d":`M14.813 17.883a6 6 0 1 0 -4.496 -3.954`})])]),bv=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M6.5 15a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0 -5z`}),C(`path`,{"d":`M17 7.875l3 -1.687`}),C(`path`,{"d":`M17 7.875v3.375`}),C(`path`,{"d":`M17 7.875l-3 -1.687`}),C(`path`,{"d":`M17 7.875l3 1.688`}),C(`path`,{"d":`M17 4.5v3.375`}),C(`path`,{"d":`M17 7.875l-3 1.688`})])]),bw=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2`}),C(`path`,{"d":`M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z`})])]),bx=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M14 3v4a1 1 0 0 0 1 1h4`}),C(`path`,{"d":`M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z`})])]),by=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z`}),C(`path`,{"d":`M3 10h18`}),C(`path`,{"d":`M10 3v18`})])]),bz=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M8 9l3 3l-3 3`}),C(`path`,{"d":`M13 15l3 0`}),C(`path`,{"d":`M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z`})])]),ca=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3`}),C(`path`,{"d":`M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3`}),C(`path`,{"d":`M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7`}),C(`path`,{"d":`M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1`}),C(`path`,{"d":`M17 12h.01`}),C(`path`,{"d":`M13 12h.01`})])]),cb=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0`}),C(`path`,{"d":`M21 21l-6 -6`})])]),cc=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z`}),C(`path`,{"d":`M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z`}),C(`path`,{"d":`M3 21l2.5 -2.5`}),C(`path`,{"d":`M18.5 5.5l2.5 -2.5`}),C(`path`,{"d":`M10 11l-2 2`}),C(`path`,{"d":`M13 14l-2 2`})])]),cd=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0`}),C(`path`,{"d":`M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0`}),C(`path`,{"d":`M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0`}),C(`path`,{"d":`M6.5 17.5l5.5 -4.5l5.5 4.5`}),C(`path`,{"d":`M12 7l0 6`})])]),BK=()=>{const ce=F([bg({name:`Array`,icon:bf}),bg({name:`String`,icon:bh}),bg({name:`Number`,icon:bi}),bg({name:`Math`,icon:bj}),bg({name:`Maybe`,icon:i}),bg({name:`Result`,icon:bk}),bg({name:`Time`,icon:bl}),bg({name:`Timer`,icon:bm}),bg({name:`Http`,icon:bn}),bg({name:`Url`,icon:bo}),bg({name:`Json`,icon:bp}),bg({name:`Storage.Local`,icon:bq}),bg({name:`Window`,icon:br}),bg({name:`Promise`,icon:bs}),bg({name:`Map`,icon:bt}),bg({name:`Set`,icon:bu}),bg({name:`Regexp`,icon:bv}),bg({name:`Clipboard`,icon:bw}),bg({name:`File`,icon:bx}),bg({name:`CSV`,icon:by}),bg({name:`Console`,icon:bz}),bg({name:`FormData`,icon:ca}),bg({name:`SearchParams`,icon:cb}),bg({name:`WebSocket`,icon:cc}),bg({name:`Dom`,icon:cd})]);return C(AJ,{},D(C(`div`,{className:`at`},[C(`div`,{className:`au`},[`Batteries included`]),C(`div`,{className:`av`},[(()=>{const _0=[];const _1=ce.value;let _i=-1;for(let cf of _1){_i++;_0.push(C(`div`,{className:`aw`},[C(`div`,{className:`ax`},[cf.icon]),C(`div`,{},[cf.name])]))};return _0})()])])))},BL=()=>{const cg=F(`component Main {
  state now : String = ""

  fun tick : Promise(Void) {
    let stamp =
      \`new Date().toLocaleTimeString()\`

    next { now: stamp }
  }

  fun render : Html {
    <div>
      <div>"Browser says: #{now}"</div>
      <button onClick={tick}>"read the clock"</button>
    </div>
  }
}`);return C(AV,{aq:`Interop - drop into JavaScript when you must`,ar:cg.value})},BM=()=>{const ch=F(`component Main {
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
}`);return C(AV,{aq:C(O,{},[`Here documents - multi-line strings, `,C(`b`,{},[`with superpowers`])]),ar:ch.value})},BN=()=>{const ci=F([a({path:`Main.mint`,solution:``,contents:`component Main {
  style root {
    svg { fill: #277944; }
  }

  fun render : Html {
    <div::root>
      @svg(circle.svg)

      <pre><code>@inline(data.txt)</code></pre>

      <a href={@asset(data.txt)} download="data.txt">
        "Download data.txt"
      </a>
    </div>
  }
}`}),a({path:`data.txt`,solution:``,contents:`Hello from a bundled asset!`}),a({path:`circle.svg`,solution:``,contents:`<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  height="60"
  width="60">
  <circle cx="50" cy="50" r="50" />
</svg>`})]);return C(AV,{aq:C(O,{},[`Directives - `,C(`b`,{},[`compile-time`]),` magic`]),as:ci.value})},BO=()=>{const cj=F(`locale en {
  ui: {
    ok: "OK",
    greet: (name : String) { "Hello, #{name}!" }
  }
}

locale hu {
  ui: {
    ok: "Rendben",
    greet: (name : String) { "Helló, #{name}!" }
  }
}

component Main {
  fun render : Html {
    <div>
      <div>:ui.greet("Mint")</div>

      <button onClick={() { Locale.set("en") }}>:ui.ok</button>
      <button onClick={() { Locale.set("hu") }}>:ui.ok</button>
    </div>
  }
}`);return C(AV,{aq:C(O,{},[`Locale - `,C(`b`,{},[`i18n`]),` with compile-time checks`]),ar:cj.value})},BP=()=>{return C(BH,{be:`Mint feature matrix vs. JavaScript, TypeScript, Gleam, Elm, ReScript, ClojureScript, PureScript`,bd:`./feature-matrix_f1004ecfddecf668918eb62bb3db940c.jpg`,bc:`What I couldn't show you`})},BQ=()=>{return C(AM,{},D(`Yes, AI writes Mint`))},BR=()=>{return C(AR,{q:`Part 3`,r:`Two examples`})},BS=()=>{return C(AM,{},D(`This deck is a Mint app`))},BT=()=>{return C(AM,{},D(`mint-lang.com — also a Mint app`))},BU=()=>{return C(AJ,{},D(C(`div`,{className:`bo`},[C(`div`,{className:`bp`},[`One language. Ships real software.`]),C(`div`,{className:`bq`},[C(`div`,{className:`br`},[m]),C(`div`,{className:`bs`},[`Why another language?`]),C(`div`,{className:`br`},[m]),C(`div`,{className:`bs`},[`Does it work with AI?`])])])))},ck=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M7 8l-4 4l4 4`}),C(`path`,{"d":`M17 8l4 4l-4 4`}),C(`path`,{"d":`M14 4l-4 16`})])]),cl=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5`})])]),cm=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0`}),C(`path`,{"d":`M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0`}),C(`path`,{"d":`M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3`}),C(`path`,{"d":`M7 16.5c3.5 1 6.5 1 10 0`})])]),BV=()=>{return C(AJ,{},D(C(`div`,{className:`u`},[C(`div`,{className:`v`},[C(AK,{})]),C(`div`,{className:`w`},[C(`div`,{className:`x`},[ck,C(`div`,{},[`https://mint-lang.com/sandbox/try`])]),C(`div`,{className:`x`},[cl,C(`div`,{},[`https://github.com/mint-lang/mint`])]),C(`div`,{className:`x`},[cm,C(`div`,{},[`https://discord.gg/NXFUJs2`])])])])))},cn=[f({render:()=>{return C(AL,{})},position:`stage center`,duration:30,notes:`Hi everyone, thanks for being here. This is my first live talk so
forgive me if I seem nervous or if I make some mistakes anlong the
way.

Today I want to talk about Mint — a programming language built
specifically for writing single-page web applications. Before we dive
in, I want to set up the two questions I think every one of you is
already asking in your head.`}),f({render:()=>{return C(AN,{})},position:`stage center, take a step left`,duration:45,notes:`The first question. Why another language? We already have
JavaScript, TypeScript, Elm, ReScript, Svelte — the list goes
on. (pause)

That's a fair question and I'll answer it honestly. The short version:
building a frontend today means gluing together a framework, a state
manager, a router, a styling solution, a build tool, a testing setup —
and praying they all work together.

Mint replaces that whole stack with one language. One way to do
things. No glue.`}),f({render:()=>{return C(AO,{})},position:`stage center, take a step right`,duration:30,notes:`And the second question. I know — a lot of talks at this conference
is about AI so I'll keep this short and there's no live AI demo in
this talk. One slide near the end on why it works well, that's it.

We'll come back to both questions before we wrap.`}),f({render:()=>{return C(AP,{})},position:`stage left — the 'problem' side`,duration:90,notes:`So let's start with the first question. Why another language?
Mint is specifically about single-page applications — the kind
with routing, state, forms, real-time updates, and all.

And here's what shipping one of those actually looks like today.

- A framework.
- A type system.
- A state manager.
- A router.
- A styling solution.
- A bundler.
- A test runner.
- A linter.
- ..and a lot more things.(pause and let the audience read)

A bunch of independent decisions, a bunch of tools that need to agree
on conventions, configs, and versions. And we haven't even talked
about the app yet. This is the complexity Mint was built to address.`}),f({render:()=>{return C(AQ,{})},position:`cross to stage right — the 'answer' side`,duration:90,notes:`Now the same picture, but with Mint. Same boxes — the problems didn't
go away. You still need a view layer, you still need state, you still
need a router, you still need all of that. (pause)

But instead of these tools that have to negotiate with each other,
it's one language with all of this baked in. One way to define a
component. One way to handle state. One way to style. No glue
code, no config files arguing about module formats, no version
mismatches, no dependency hell.`}),f({render:()=>{return C(AS,{})},position:`stage center — beat before the demo`,duration:15,notes:`So the most important question: what does it look like?`}),f({render:()=>{return C(AW,{})},position:`move to lectern — keyboard time`,duration:120,notes:`This is a live editor — what you type compiles locally and shows on
the right. It uses the built in language server (what every other IDE
would use) for syntax highlighting, editing and compiling. And it does
this over a websocket connection. (pause)

'component Main'
  -> This is the thing that gets rendered on the screen, components
     are the building blocks of the language since they are opaquely
     composable.

'state count = 0'
  —> This declares a typed field on the component. Local to this
     component, type inferred, accessed by name, updated explicitly
     with \`next˙. Later we'll see stores — same idea, same mechanics,
     but shared across components.

'style button { ... }'
  -> Styling also lives inside the component. Real CSS, scoped, you
     can use variables that are in scope, you can have conditional
     logic, nested selectors, media queries, etc...

'fun render'
  -> And finally, render. We've already seen state at the top, style
     in the middle — and now the view and the click handler that
     updates that state. Four things, one component, in the order
     you'd read them. That's the whole shape of a Mint component.`}),f({render:()=>{return C(AX,{})},position:`step back from lectern, stage center`,duration:20,notes:`Now a few minutes on the language itself. Strings, numbers, functions,
modules — they're all here, and they look and work exactly like you'd
expect; I'm going to skip past them. What I want to show you is the
part that's different: how the compiler and type system add
restrictions that actually help you.`}),f({render:()=>{return C(AY,{})},position:`lectern — point at the case block`,duration:75,notes:`Mint is fundamentally a functional, strongaly tyepd language.
And as usual it has types. Two similar shapes you'll see everywhere in
Mint.

Variants — a closed set of tags, some carry payloads. (point at
\`LoginResult\`)

The \`case\` below is exhaustive: if I delete the \`Rejected\` branch the
compiler refuses to build. (demo) You can't forget the error state,
the compiler walks the whole shape with you.

Records — typed fields, immutable. (point at \`User\`)

The update syntax '{ user | age: ... }' gives you a new record with
that field replaced.

Together: a variant carrying a record, updated immutably inside an
exhaustive case. That's how data flows through every Mint program.
(click Log in, then Birthday)`}),f({render:()=>{return C(AZ,{})},position:`lectern — point at the decode line`,duration:75,notes:`Decoders. In most stacks, when an HTTP response comes in and you've
parsed the JSON, you're holding an untyped object — and you reach for
a validation library, or you cast it 'as Repo' and pray.

In Mint, 'decode' is a keyword. The compiler looks at the type,
generates the decoder at compile time, which called on a JavaScript
\`Object\` will give you back a \`Result\` which can either succeed (Ok)
or fail (Err).

(point at 'using "stargazers_count"') And if the API names a
field differently from your code, you rename it inline. No
third-party library, no schema declaration separate from your type —
the type is the schema. (click fetch repo)`}),f({render:()=>{return C(BA,{})},position:`lectern — point at the style block`,duration:90,notes:`Styles. Real CSS, scoped to the component, and — this is one of the
fun parts — dynamic. (point at the if)

That's a Mint expression inside the CSS. The style reacts to state
without you wiring up class toggles. No CSS-in-JS framework, no
className soup, no Tailwind config — just CSS that knows about
your data. (the button is already flipping every second — let
them watch it for a beat before moving on)`}),f({render:()=>{return C(BB,{})},position:`lectern — point at the style signature`,duration:90,notes:`A few more things you get from the same style blocks. (point at
'style button(size : Number)')

Style blocks can take parameters. One style, called three times with
different sizes — small, medium, large — and the padding and font-size
are computed from the argument. (point at the call sites)

Sub-selectors — '&:hover' and '&:active' — work the way you expect,
scoped to this component. (hover the buttons)

No styling library to install, no template-literal syntax bolted on
top of JS — it's the same scoped CSS, parameterized like a function,
compiled to static CSS and part of the language.`}),f({render:()=>{return C(BC,{})},position:`lectern — point at await + case`,duration:120,notes:`Async. (point at 'await') 'await' is a keyword — and there's no
'async' keyword to go with it. Anything that returns a Promise
can be awaited; the type system tracks it from there. No
ceremony to opt a function in.

'await' unwraps the boxed value — whatever the Promise carries.
In this slide that happens to be a Result, so we 'case' on
the Ok / Err. (point at the case)


Notice: loading, success, failure, and idle are all the same kind of
thing — a \`Status\` variant. Real network code. Compiler checks all
four. (click 'fetch wisdom')`}),f({render:()=>{return C(BD,{})},position:`lectern — point at \`connect\``,duration:75,notes:`Stores — shared state, still typed.

A store has its own state and functions. Any component that needs
them uses either 'connect' to expose them locally (and from then on
they read like local fields) or can use them directly. (point at
connect)

No context providers, no reducers, no selectors — one keyword, the
types flow through.`}),f({render:()=>{return C(BE,{})},position:`stage center — section break`,duration:20,notes:`So those were some highlights of the language - of many. Now: the
stuff around the language — the parts that usually mean ten more
dependencies.`}),f({render:()=>{return C(BF,{})},position:`lectern — point at \`async component\` and \`defer\``,duration:90,notes:`Code splitting. In JS this means bundler configuration, a
dynamic import call, a loading-state wrapper, and a runtime
loader. In Mint it's two keywords.

(point at 'async component HeavyThing') Mark a component
'async' and the compiler puts it in its own bundle file. When
something renders it, the file gets fetched. The 'or
"loading…"' part is the fallback while it's in flight. (click
'load it')

(point at 'defer') And 'defer' is the same idea for any
expression — a string, a function, a value. You 'await' it
where you need it. The compiler splits, the runtime loads on
demand.

No bundler config. No wrapper components. Two keywords.`}),f({render:()=>{return C(BG,{})},position:`lectern — point at routes block`,duration:90,notes:`Routing. (point at the routes block) That's the whole router.

Path patterns, typed parameters, blocks that run when the URL
matches. No router library, no separate config, no component
wrapping the world. (click the links)

Links are handled automatically, no need for a separate link
component that pushes the URL, just simple anchor tags.`}),f({render:()=>{return C(BI,{})},position:`step back from lectern — point at the screen`,duration:75,notes:`Testing. The live editor doesn't run tests, so this one is a
screenshot. (point at the code side)

Suites and tests are language constructs, not a framework you install.
The expression in the test body is what gets checked — true passes,
false fails, can be async. That's the whole API.

(point at the output side) 'mint test' runs them. This is the
standard library's own test suite, run with the same one binary
you'd use on your own project.

Tests run in the browser too, so no browser driver needed, you can
even run them manually in browser if you desire.`}),f({render:()=>{return C(BJ,{})},position:`stage center — talk to the audience`,duration:75,notes:`Tooling. One binary called 'mint'.

- 'mint init' makes a project
- 'mint start' runs the dev server with live reload
- 'mint build' produces the bundle
- 'mint format' formats source files
- 'mint test' runs tests
- \`mint tool ls\` runs the language server

(pause) That's most of the CLI. No bundler config, no linter
config, no formatter config, no test runner config. There's
nothing to configure because there's nothing to choose.`}),f({render:()=>{return C(BK,{})},position:`stage center — sweep a hand across the grid`,duration:60,notes:`The usual question at this point: what about the ecosystem? And
I'll be honest — Mint's third-party ecosystem is small. But the
standard library is big, and it ships with the language.

(gesture at the grid) Arrays, strings, numbers, maths. Maybe and
Result for the nullable and fallible cases. Time, timers.
Http for the network. Url and SearchParams for the address bar.
Json. Local and Session Storage. Clipboard, Files, CSV, WebSockets,
form data. (pause)

In JS most of these are packages because the standard web APIs are
not enough — some of them famous ones, some of them transitively
pulled in by your framework. Here they're modules and they are
included in the \`mint\` binary.`}),f({render:()=>{return C(BL,{})},position:`lectern — point at the backticks`,duration:90,notes:`Interop. Sometimes you need a browser API Mint doesn't wrap yet,
or a JS library. (point at the backticks) Backticks drop you
into JavaScript as an expression. The escape hatch is right
there. (click 'read the clock') You don't pay for it until you
use it, and when you do, it's one line.`}),f({render:()=>{return C(BM,{})},position:`lectern — point at the \`<<\` openers`,duration:90,notes:`Here documents. Multi-line strings without escape-quote soup —
and three flavors. (point at each opener)

'<<-' keeps your indentation verbatim. '<<~' strips the
smallest leading indent from every line, so you can indent the
body to match the surrounding code and still get a clean
string. (pause)

And '<<#MARKDOWN' parses the body at compile time and gives
you 'Html' back. The website site and the docs are written
this way — Markdown straight in source, type-checked, no
runtime parser. Three openers, one feature.`}),f({render:()=>{return C(BN,{})},position:`lectern — point at the three \`@\` calls`,duration:90,notes:`Directives. Things that run at compile time, starting with '@'.
Three in one component, reaching out to two files next to
'Main.mint'. (point at the file tabs)

(point at '@svg') Takes an SVG file and inlines it as Html —
one fewer HTTP request, and it picks up your CSS, so I can
color it from the component's style block.

(point at '@inline') Pastes the file's contents in as a
String, at compile time. The text is baked into the bundle.

(point at '@asset') Doesn't inline — gives you a hashed path
and tells the bundler to ship the file alongside. The
download link works because the file is really there.

There are more — '@format', '@highlight', '@size' — but the
shape is the same: the compiler resolves them before anything
ships.`}),f({render:()=>{return C(BO,{})},position:`lectern — point at the \`locale\` blocks`,duration:90,notes:`Locale. Internationalization as a language feature.

(point at the two 'locale' blocks) You declare translations
per language — ISO codes, nested keys, values can be plain
strings or functions. (point at ':ui.greet') And you reference
them with a colon literal. The compiler checks that every
language has the same tokens with the same types — add a key
to 'en' and forget it in 'hu', it won't build.

'Locale.set' swaps the active language at runtime and
everything re-renders. (click the buttons) No i18n library,
no JSON files to keep in sync, no missing-key bugs at
runtime.`}),f({render:()=>{return C(BP,{})},position:`step back from lectern — sweep a hand across the matrix`,duration:45,notes:`A quick honesty slide before we wrap. (gesture at the matrix)

This is Mint compared to the usual suspects. A few rows
of a much longer table. One column per language, one row per
feature, green where it exists.

The point isn't any one row. The point is: there's a lot in the
language I didn't have time to show you. Pattern matching, pipes,
tuples, string interpolation, default arguments, structural
equality — most of what you'd expect from a modern typed
language, and a few things you wouldn't.

(pause) Eighty rows so far — the full matrix is on mint-lang.com.`}),f({render:()=>{return C(BQ,{})},position:`stage center — pay off the AI question`,duration:120,notes:`Coming back to question two. (pause) Yes, AI writes Mint, and
it does it well. Not because of anything magic — because of what
an LLM can actually do.

Keywords. The language has a limited, fixed set. Nothing for an
agent to invent. (pause)

Error messages. The compiler tells you exactly what's wrong, in
plain English, with a location. An agent reads that error,
changes one thing, runs again.

And 'mint lint' — fast type-check with structured diagnostics.
That's the loop: write, lint, read the error, fix, lint again.
Sub-second feedback, machine-readable output. The same property
that makes the language pleasant for humans — limited surface,
explicit errors, fast feedback — is what makes it tractable for
an agent.

(placeholder slide — swap in a real Claude-generated Mint
screenshot before the talk)`}),f({render:()=>{return C(BR,{})},position:`stage center — section break`,duration:15,notes:`And now, I want to show you two examples of things shipped in Mint.`}),f({render:()=>{return C(BS,{})},position:`stage center — gesture at the screen`,duration:90,notes:`Number one: this. The slides you've been watching are a Mint
app. Routing, state, broadcast channel between presenter window
and main window, scoped styles, all of it. ~200 lines, builds in
1second.

(show the presenter view and some of it in the editor)`}),f({render:()=>{return C(BT,{})},position:`stage center`,duration:90,notes:`Number two: mint-lang.com itself. The marketing site, the docs,
the playground — all Mint. Different shape of app —
content-heavy, SEO-conscious, lots of pages. Same
language.

And this is where the 'async component' and 'defer' keywords
earn their keep. The playground, the lesson runner, every
reference page — each one is its own bundle, loaded only when
you navigate to it. The initial page is small, the rest streams
in as you click. No bundler plugin, no manual splitting; just
two keywords we want things split.`}),f({render:()=>{return C(BU,{})},position:`stage center — bring it home`,duration:60,notes:`The two questions. Why another language? Because the stack we
have is a patchwork of tools that have to negotiate, and one language
replaces that with one way to do each thing. Also having a compiler
access to everything makes it tight and error free.

Does it work with AI? Yes — and the same property that makes it good
for humans is what makes it good for LLMs: keywords, expressive error
messages and quick iteration.`}),f({render:()=>{return C(BV,{})},position:`stage center — open palms, take questions`,duration:45,notes:`Try it. mint-lang.com has a playground in the browser, no
install. The repo is on GitHub, the Discord is linked from the
site, and I'll be around for the rest of the conference if you want
to talk.

Thank you. (pause for applause, then: questions?)`})],co=(cp)=>{return P(cp,[[Q([K(AI,[L]),K(AD,[L])]),(cq,cr)=>{return cq}]])},cs=R(S(AD)(0)),ct=B(`BroadcastChannel`),cu=(cv,cw)=>{return (cv.native.postMessage(cw))},cx=(cy,cz)=>{return ((() => {
      const channel = new BroadcastChannel(cy);
      channel.onmessage = (event) => { cz((event.data)) }
      return ct({native:(channel)})
    })())},da=(db)=>{return (Promise.resolve(db))},dc=R(cx(`slides`,(dd)=>{const de=J(T(AH,AE)(dd),K(AH,[L]));if(de === false){return da(null)};const [df]=de;return dg(df)})),dh=()=>{return ((window.self !== window.top))},di=(dj)=>{(!dh() && !G(co(dj),co(cs.value))?cu(dc.value,U(co(dj))):null);return (()=>{cs.value=dj})()},dk=(dl,dm)=>{return P(dl,[[K(AI,[]),()=>{return S(AI)(dm)}],[K(AD,[]),()=>{return S(AD)(dm)}]])},dn=(dp)=>{return (V(
      dp,
      /* dispatch */ true,
      /* triggerJump */ false,
      /* routeInfo */ null
    ))},dq=(dr)=>{return P(dr,[[K(AI,[L]),(ds)=>{return `/presenter/${ds}`}],[K(AD,[L]),(dt)=>{return `/${dt}`}]])},dg=(du)=>{return (!G(du,co(cs.value))?(()=>{cu(dc.value,U(du));return (dh()?di(dk(cs.value,du)):dn(dq(dk(cs.value,du))))})():null)},dv=(dw,dx)=>{return (Math.min(dw, dx))},dy=()=>{return dg(dv(co(cs.value) + 1,s(cn) - 1))},dz=(ea,eb)=>{return (Math.max(ea, eb))},ec=()=>{return dg(dz(co(cs.value) - 1,0))},ed=()=>{return (window.open(dq(S(AI)(co(cs.value))), "presenter", "popup"))},ee=()=>{return dn(dq(S(AI)(co(cs.value))))},ef=()=>{return P(W(cn,co(cs.value),AF,AG),[[K(AF,[L]),(eg)=>{return eg.render()}],[K(AG,[]),()=>{return null}]])},eh=()=>{return P(W(cn,co(cs.value),AF,AG),[[K(AF,[L]),(ei)=>{return ei.notes}],[K(AG,[]),()=>{return ``}]])},ej=()=>{return P(W(cn,co(cs.value),AF,AG),[[K(AF,[L]),(ek)=>{return ek.duration}],[K(AG,[]),()=>{return 0}]])},el=()=>{return P(W(cn,co(cs.value),AF,AG),[[K(AF,[L]),(em)=>{return em.position}],[K(AG,[]),()=>{return ``}]])},en=(eo,ep,eq)=>{return (eo.reduce(eq, ep))},er=(es,et,eu)=>{return (es.slice(et, eu))},ev=()=>{return en(er(cn,0,co(cs.value)),0,(ew,ex)=>{return ew + ex.duration})},ey=()=>{return co(cs.value)},ez=()=>{return s(cn)},fa=(fb,fc)=>{return ((() => {
      return fb.sort((a, b) => {
        let aVal = fc(a)
        let bVal = fc(b)

        if (aVal < bVal) {
          return -1
        }

        if (aVal > bVal) {
          return 1
        }

        return 0
      })
    })())},fd=(fe,ff)=>{return ([...fe, ff])},fg=(fh)=>{return en(fh,[],(fi,fj)=>{return P(fj,[[K(AF,[L]),(fk)=>{return fd(fi,fk)}],[K(AG,[]),()=>{return fi}]])})},fl=B(`Provider.Shortcuts.Shortcut`),fm=B(`Provider.Shortcuts`),fn=(fo)=>{return (fo.event.stopPropagation())},fp=(fq)=>{return (fq.event.preventDefault())},fr=(fs)=>{const ft=(fs.ctrlKey && !G(fs.keyCode,17)?S(AF)(17):new AG());const fu=(fs.shiftKey && !G(fs.keyCode,16)?S(AF)(16):new AG());const fv=fa(fg([S(AF)(fs.keyCode),ft,fu]),(fw)=>{return fw});const fx=(document.querySelector("*:focus"));return (()=>{const _0=[];const _1=X(fy);let _i=-1;for(let fz of _1){_i++;_0.push((()=>{const _0=[];const _1=fz.shortcuts;let _i=-1;for(let ga of _1){_i++;const _2=(()=>{const gb=fa(ga.shortcut,(gc)=>{return gc});return (G(gb,fv) && ga.condition()) && (!fx || ga.bypassFocused)})();if(!_2){continue};_0.push((()=>{fn(fs);fp(fs);return ga.action()})())};return _0})())};return _0})()},gd=(ge,gf)=>{return P(ge,[[K(AF,[L]),(gg)=>{return S(AF)(gf(gg))}],[K(AG,[]),()=>{return new AG()}]])},gh=R(new AG()),gi=(gj,gk,gl)=>{return ((() => {
      const listener = (event) => {
        gl(Y(event))
      }

      window.addEventListener(gj, listener, gk);
      return () => window.removeEventListener(gj, listener, gk);
    })())},fy=new Map(),BW=Z(fy,()=>{return (u(X(fy))?(()=>{gd(gh.value,(gm)=>{return gm()});return (()=>{gh.value=new AG()})()})():(G(gh.value,new AG())?(()=>{gh.value=S(AF)(gi(`keydown`,true,fr))})():null))}),gn=34,go=33,gp=39,gq=37,gr=80,gs=B(`Provider.Tick`),gt=()=>{return (()=>{const _0=[];const _1=X(gu);let _i=-1;for(let gv of _1){_i++;_0.push(gv.ticks())};return _0})()},gw=R(-1),gu=new Map(),BX=Z(gu,()=>{return (u(X(gu))?(()=>{gw.value=(clearInterval(gw.value) || -1)})():(G(gw.value,-1)?(()=>{gw.value=(setInterval(gt, 1000))})():null))}),gx=(gy)=>{return (gy.getTime())},gz=()=>{return (new Date())},ha=(hb)=>{return (Math.floor(hb))},hc=(hd,he,hf)=>{return (hd.padStart(hf, he))},hg=(hh)=>{return (hh.toString())},BY=()=>{const hi=F(-1),hj=F(co(cs.value)),hk=F(0),hl=F(0),hm=F(0),hn=F(0),ho=()=>{return hl.value - ev() * 1000},hp=()=>{return (G(ho(),0)?`on time`:(ho() > 0?`+${hq(ho())} behind`:`−${hq(0 - ho())} ahead`))},hr=()=>{const hs=gx(gz());const ht=co(cs.value);return (!G(ht,hi.value)?AA(()=>{hl.value=hs - hk.value;hi.value=ht;hm.value=hs;hn.value=0}):AA(()=>{hn.value=hs - hm.value;hl.value=hs - hk.value}))},hq=(hu)=>{const hv=ha(hu / 1000);const hw=ha(hv / 60);const hx=hc(hg(hw),`0`,2);const hy=hc(hg((hv - hw * 60)),`0`,2);return `${hx}:${hy}`},hz=AB();I(()=>{(()=>{const ia=gx(gz());return AA(()=>{hi.value=co(cs.value);hm.value=ia;hk.value=ia})})()},[]);BX(hz,()=>{return gs({ticks:hr})});return C(`div`,{className:`bd`},[C(`div`,{className:`be`},[C(`iframe`,{"src":`/${hj.value}`,className:`bf`})]),C(`div`,{className:`bg`},[C(`div`,{className:`bn`},[el()]),C(`div`,{className:`bh`},[eh()]),C(`div`,{className:`bi`},[C(`div`,{className:`bj`},[C(`div`,{className:`bk`},[`Talk`]),C(`div`,{className:`bl`},[hq(hl.value)]),C(`div`,{className:`bm`},[hp()])]),C(`div`,{className:`bj`},[C(`div`,{className:`bk`},[`Slide`]),C(`div`,{className:`bl`},[hq(hn.value)]),C(`div`,{className:`bm`},[`of ${hq(ej() * 1000)}`])])])])])},BZ=()=>{return C(`style`,{},[`@font-face {
  src: url(${`./noto-sans-v36-latin_latin-ext-300_d834501f0188268a94fb947540fb5214.woff2`})
       format('woff2');

  font-family: 'Noto Sans';
  font-display: swap;
  font-style: normal;
  font-weight: 300;
}

@font-face {
  src: url(${`./noto-sans-v36-latin_latin-ext-regular_3b1abbaae4b2d2611477e7e2a4a221b0.woff2`})
       format('woff2');

  font-family: 'Noto Sans';
  font-display: swap;
  font-style: normal;
  font-weight: 400;
}

@font-face {
  src: url(${`./noto-sans-v36-latin_latin-ext-500_ec6842091b60ce268c1b9491971b0322.woff2`})
       format('woff2');

  font-family: 'Noto Sans';
  font-display: swap;
  font-style: normal;
  font-weight: 500;
}

@font-face {
  src: url(${`./forum-v18-latin_latin-ext-regular_a7c27ddadbc3aec901c4341839b950d2.woff2`}
       format('woff2');

  font-family: 'Forum';
  font-display: swap;
  font-style: normal;
  font-weight: 400;
}

@font-face {
  src: url(${`./fira-code-v22-latin_latin-ext-regular_ab8e0831be504c61f00d6e73e201a438.woff2`})
       format('woff2');

  font-family: 'Fira Code';
  font-display: swap;
  font-style: normal;
  font-weight: 400;
}`])},CA=()=>{const ib=()=>{const _={[`--a-a`]:`url(` + `./top-left_1bdfda531adf5e5cee231eb289200eb3.png` + `)`};return _},ic=()=>{const _={[`--b-a`]:`url(` + `./top-right_123c71ce6bfa294c5309c6a2962de7fc.png` + `)`};return _},id=()=>{const _={[`--c-a`]:`url(` + `./bottom-right_1eb184b03e0340e4801be214997ac620.png` + `)`};return _},ie=()=>{const _={[`--d-a`]:`url(` + `./bottom-left_7499a21d0dc589bf82416932f9992c7f.png` + `)`};return _};return C(`div`,{className:`b`},[C(`div`,{className:`c f`,style:E([id()])}),C(`div`,{className:`c g`,style:E([ie()])}),C(`div`,{className:`c e`,style:E([ic()])}),C(`div`,{className:`c d`,style:E([ib()])})])},CB=()=>{return C(`div`,{className:`an`},[C(BZ,{}),C(CA,{}),C(`div`,{className:`ao`},[ef()])])},ig=C(`svg`,{"viewBox":`0 0 24 24`},[C(`g`,{"stroke-linejoin":`round`,"stroke-linecap":`round`,"stroke":`currentColor`,"fill":`none`,style:E([`stroke-width: var(--tabler-stroke-width);`])},[C(`path`,{"d":`M3 4l18 0`}),C(`path`,{"d":`M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10`}),C(`path`,{"d":`M12 16l0 4`}),C(`path`,{"d":`M9 20l6 0`}),C(`path`,{"d":`M8 12l3 -3l2 2l3 -3`})])]),CC=()=>{return C(`div`,{className:`z`},[C(`div`,{className:`aa`},[`${ey() + 1} / ${ez()}`]),C(`div`,{className:`ab`}),C(`button`,{"onClick":ee,className:`ac`},[ig,C(`div`,{},[`Presenter`])])])},CD=()=>{const ih=AB();BW(ih,()=>{return fm({shortcuts:[fl({shortcut:[gn],condition:()=>{return true},bypassFocused:true,action:dy}),fl({shortcut:[go],condition:()=>{return true},action:ec,bypassFocused:true}),fl({shortcut:[gp],condition:()=>{return true},bypassFocused:false,action:dy}),fl({shortcut:[gq],condition:()=>{return true},action:ec,bypassFocused:false}),fl({shortcut:[gr],action:ed,bypassFocused:false,condition:()=>{return P(cs.value,[[K(AI,[]),()=>{return false}],[K(AD,[]),()=>{return true}]])}})]})});return C(`div`,{className:`y`},[P(cs.value,[[K(AI,[]),()=>{return C(BY,{})}],[K(AD,[]),()=>{return C(O,{},[C(CB,{}),C(CC,{})])}]])])};export default ()=>{AC(CD,{},AH,[{await:false,path:`/presenter/:index`,decoders:[T(AH,AE)],mapping:[`index`],handler:(ii)=>{return di(S(AI)(ii))}},{await:false,path:`/presenter/`,decoders:[],mapping:[],handler:()=>{return di(S(AI)(0))}},{await:false,path:`/presenter`,decoders:[],mapping:[],handler:()=>{return di(S(AI)(0))}},{await:false,path:`/:index`,decoders:[T(AH,AE)],mapping:[`index`],handler:(ij)=>{return di(S(AD)(ij))}},{await:false,path:`*`,decoders:[],mapping:[],handler:()=>{return di(S(AD)(0))}}],true)};