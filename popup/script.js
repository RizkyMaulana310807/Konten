var popupModal = document.getElementById('popup');
var btn = document.getElementById('btn');
var closeBtn = document.getElementById('closeModal');
btn.addEventListener('click', ()=>{
    popupModal.classList.toggle('hidden');
});
closeBtn.addEventListener('click',()=> {
    popupModal.classList.toggle('hidden');
});