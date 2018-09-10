(function(){
  const location = window.location.pathname;
  const activeLink = document.getElementById(location);
  changeLinkColor(activeLink);
})();

function changeLinkColor(el){
  el.style.color = '#F4383E';
};