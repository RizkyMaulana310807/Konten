const btn = document.getElementById('show-alert');
const modal = document.getElementById('popup');
const close = document.getElementById('close');
btn.addEventListener('click', ()=>{
    modal.classList.toggle('hidden');
    modal.classList.toggle('show');
    btn.disabled = true;
    btn.classList.add('not-allowed');
    btn.classList.remove('btn-show');
});
close.addEventListener('click', ()=>{
    btn.disabled = false;
    modal.classList.toggle('hidden');
    modal.classList.toggle('show');
    btn.classList.remove('not-allowed');
    btn.classList.add('btn-show');
})