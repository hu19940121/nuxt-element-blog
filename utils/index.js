export const stopScroll = ()=>{
  document.documentElement.style.overflowY = 'hidden';    
}
export const allowScroll = ()=>{
  document.documentElement.style.overflowY = 'scroll'; 
   
}