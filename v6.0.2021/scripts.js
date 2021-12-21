/* 
 * FUNCTIONS
 */
function cssLoader(cssfile)
{
  var css_link = document.createElement('link');
  css_link.rel = 'stylesheet';
  css_link.type = 'text/css';
  css_link.href = cssfile;
  document.getElementsByTagName('HEAD')[0].appendChild(css_link);
}

function metaLoader(mname, mcontent, mproperty, mhttpequiv)
{
  var meta_tag = document.createElement('meta');
  if (mname) {meta_tag.name = mname};
  if (mcontent) {meta_tag.content = mcontent};
  if (mproperty) {meta_tag.property = mproperty}; 
  if (mhttpequiv) {meta_tag.httpEquiv = mhttpequiv};
  document.getElementsByTagName('HEAD')[0].appendChild(meta_tag);
}


/* 
 * EVENTS 
 */
/* Menu Click Event*/
document.getElementById("main-nav").addEventListener("click", function() {
  alert('click!');
});


/* 
 * JS TEMPLATE STRINGS
 */


/* 
 * INITIATE 
 */
metaLoader('', 'IE=edge', '', 'X-UA-Compatible');
metaLoader('viewport', 'width=device-width, initial-scale=1.0');
cssLoader('styles.css'); /* Add Page Styles */