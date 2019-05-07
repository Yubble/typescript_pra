type EventNames = 'click' | 'scroll' | 'mousemove';

// Element 是ts内置类型，用来标准dom元素的
// EventNames 只能是'click','scroll','mousemove'其中一个
function handleEvent(ele: Element, event: EventNames) {}

handleEvent(document.getElementById("box"), 'scroll')
handleEvent(document.getElementById("box"), 'click')