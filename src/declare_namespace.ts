declare namespace Http {
  function ajax(url: string, settings?: any): void;
  const version: number;
  class Event {
    blur(eventType: EventType): void
  }
  enum EventType {
    CustomClick
  }
  namespace nest {
    function fn(onlyObj: any): string
  }
}

// Http.ajax = function (url: string, settings?:any): void {
//   console.log('url is ', url)
// }

Http.ajax('www.ronnieo.wang')
Http.nest.fn('oly')