const state = {
  hearts: 0,
  coins: 100,
  copies: 0,
  history: []
};
function updateStats(){
  document.querySelector('#heartCount').textContent = state.hearts;
  document.querySelector('#coinCount').textContent = state.coins;
  document.querySelector('#copyCount').textContent = state.copies;
}
function formatTime(date){
  return date.toLocaleTimeString([], { hour:'2-digit', minute:'2-digit', second:'2-digit', hour12: true });
}
function addHistoryItem(name, number, timeStr){
  const list = document.querySelector('#historyList');
  const item = document.createElement('div');
  item.className = 'border rounded-lg p-2 flex justify-between text-sm';
  item.innerHTML = `
    <div>
      <div class="font-semibold">${name}</div>
      <div class="text-gray-500 text-xs">${number}</div>
    </div>
    <div class="text-gray-400 text-xs">${timeStr}</div>
  `;
  list.prepend(item);
}
function alertMsg(msg){ window.alert(msg); }
document.querySelectorAll('article .heart').forEach(btn => {
  btn.addEventListener('click', () => {
    const isNowActive = btn.classList.toggle('active');
    if (isNowActive){
      btn.textContent = '❤';
      state.hearts += 1;
    } else {
      btn.textContent = '♡';
      state.hearts = Math.max(0, state.hearts - 1);
    }
    updateStats();
  });
});
document.querySelectorAll('.btn-copy').forEach(btn => {
  btn.addEventListener('click', async () => {
    const text = btn.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
      state.copies += 1;
      updateStats();
      alertMsg(`Copied "${text}" to clipboard.`);
    } catch {
      alertMsg('Copy failed.');
    }
  });
});
document.querySelectorAll('.btn-call').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('article');
    const name = card.dataset.name;
    const number = card.dataset.number;
    if (state.coins < 20) {
      alertMsg('Not enough coins to make a call. You need 20 coins.');
      return; 
    }
    state.coins -= 20;
    updateStats();
    alertMsg(`Calling ${name} at ${number} ...`);
    const timeStr = formatTime(new Date());
    state.history.unshift({ name, number, time: timeStr });
    addHistoryItem(name, number, timeStr);
  });
});

document.querySelector('#clearHistory').addEventListener('click', () => {
  state.history = [];
  document.querySelector('#historyList').innerHTML = '';
});
updateStats();
