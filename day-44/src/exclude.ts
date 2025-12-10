type EventType = 'click' | 'scroll' | 'move'

type excludeEvent = Exclude<EventType,'scroll'>

const  handleEvent = (event: excludeEvent) => {
    console.log("holding event " + event)
}

handleEvent('click')

// handleEvent('scroll')