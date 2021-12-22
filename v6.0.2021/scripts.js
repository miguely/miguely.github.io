/* 
 * FUNCTIONS
 */
function htmlCssLoader(cssfile)
{
  const css_link = document.createElement('link');
  css_link.rel = 'stylesheet';
  css_link.type = 'text/css';
  css_link.href = cssfile;
  document.getElementsByTagName('HEAD')[0].appendChild(css_link);
}

function htmlMetaLoader(mname, mcontent)
{
  const meta_tag = document.createElement('meta');
  if (mname) {meta_tag.name = mname};
  if (mcontent) {meta_tag.content = mcontent};
  document.getElementsByTagName('HEAD')[0].appendChild(meta_tag);
}

function menuAction()
{
  if(document.getElementById('main-nav').className == 'hide')
  {
    document.getElementById('main-nav').className = 'show';
  }else{
    document.getElementById('main-nav').className = 'hide';
  }
}

function menuLoader()
{
  /* Menu Click Event*/
  document.getElementById("hamburger").addEventListener("click", menuAction);

  /* Menu Close Button */
  const closeLink = document.createElement('button');
  closeLink.classList.add('nav-close');
  closeLink.innerText = "[ x ]";
  closeLink.tabIndex = 0;
  closeLink.addEventListener("click", menuAction);
  document.getElementById('main-nav').appendChild(closeLink);
}

/* Formspree.io Scripts for Contact Form */
function formHandler()
{
  const form = document.getElementById("my-form");
  const formSubmit = document.getElementById("my-form-button");

  async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("my-form-status");
    const data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      status.innerHTML = "Thanks for reaching out! <br> I'll be in touch soon.";
      formSubmit.classList.add('fade-In');
      form.reset()
    }).catch(error => {
      status.innerHTML = "There was a problem submitting your form. <br> Please try again."
    });
  }
  form.addEventListener("submit", handleSubmit)
}


/* 
 * INITIATE 
 */
htmlMetaLoader('viewport', 'width=device-width, initial-scale=1.0');
// htmlCssLoader('styles.css'); /* Debug Only. Styles should be embedded on page via SSG. */
menuLoader();
formHandler();



