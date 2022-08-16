const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const value1 = $('#value1');
const timeGame = $('#timeGame');
const teamGame = $('#teamGame');
const ticketAddition1 = $('.ticketAddition1');
const ticketAddition2 = $('.ticketAddition2');
const inRa = $('.inRa');
const btn = $('#btn');
btn.addEventListener('click',function(e){
    e.preventDefault();
    let tienSan = value1.value * timeGame.value.trim();
    let tienThueDongPhuc = teamGame.value.trim() * ticketAddition1.value;
    let tienThueTrongTai = timeGame.value.trim() * ticketAddition2.value;
    let tongTien = tienSan + tienThueTrongTai + tienThueDongPhuc ;
  inRa.innerHTML = tongTien
})