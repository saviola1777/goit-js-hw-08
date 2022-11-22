import throttle from 'lodash.throttle';
const refs = {
formRef: document.querySelector('.feedback-form '), 
emailRef:document.querySelector('.feedback-form input'),
textareaRef:document.querySelector('.feedback-form textarea'),
}
refs.formRef.addEventListener('input', throttle(onInput,500))
refs.formRef.addEventListener('submit', onSubmit)
populateTextatera() 

function onInput(event) {
  const textEmailTextatera = {}
  textEmailTextatera.email = refs.emailRef.value
  textEmailTextatera.textarea=refs.textareaRef.value
  localStorage.setItem("feedback-form-state", JSON.stringify(textEmailTextatera))
  
 }
function onSubmit(event) {
  event.preventDefault()
  event.currentTarget.reset() 
  localStorage.removeItem("feedback-form-state")
  
}
function populateTextatera() {
const saveMassage = localStorage.getItem("feedback-form-state")
  if (saveMassage) {
let valueInTexT=JSON.parse(saveMassage)
    refs.textareaRef.value = valueInTexT.textarea
    refs.emailRef.value = valueInTexT.email
   console.log(valueInTexT)
  }
 
 }
