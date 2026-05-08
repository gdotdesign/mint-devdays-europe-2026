type BroadcastChannel {
  native : Object
}

module BroadcastChannel {
  fun create (
    name : String,
    callback : Function(Object, Promise(Void))
  ) : BroadcastChannel {
    `
    (() => {
      const channel = new BroadcastChannel(#{name});
      channel.onmessage = (event) => { #{callback(`event.data`)} }
      return #{{native: `channel`}}
    })()
    `
  }

  fun send (channel : BroadcastChannel, data : Object) : Promise(Void) {
    `#{channel.native}.postMessage(#{data})`
  }
}
