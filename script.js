//#region page loader
function getScrollHeight()
{
  return document.documentElement.scrollHeight
}

function scrollDownTo(newTop,behaviorType)
{
  requestAnimationFrame(() => {
    window.scrollTo({
      top: newTop,
      left: 0,
      behavior: behaviorType,
    })
  })
}

function scrollToBottom() 
{
  bottom = getScrollHeight()
  scrollDownTo(bottom,/*'instant'*/'smooth')
}

function setHeightObserver(element) 
{
  const observer = new ResizeObserver(entries => {
  
    for (const entry of entries) {
      console.log('Scrolling because page height changed to ' + entry.contentRect.height)
      scrollToBottom()
    }
  })
  observer.observe(element)
}

function loadPage() 
{
  setHeightObserver(document.body)
  scrollToBottom()
}

//#endregion

function downloadData(params) 
{
  loadPage()
  //await new Promise(r => setTimeout(r, 1));
  console.log('HIII')
}

