/* Salve como: script.js (arquivo atualizado)
   Nota principal: limite máximo de perguntas agora é 50 (máx global).
*/

(() => {
  // ====== Perguntas (adicione mais se quiser) ======
  const QUESTIONS = [
    { q: "Qual é a capital do Brasil?", choices: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"], a: 1 },
    { q: "Qual destes planetas é conhecido como o Planeta Vermelho?", choices: ["Vênus", "Marte", "Júpiter", "Mercúrio"], a: 1 },
    { q: "Quem pintou a Mona Lisa?", choices: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"], a: 1 },
    { q: "Em que ano o homem pisou na Lua pela primeira vez?", choices: ["1959", "1969", "1979", "1989"], a: 1 },
    { q: "Qual é o idioma com mais falantes nativos?", choices: ["Inglês", "Mandarim", "Espanhol", "Hindi"], a: 1 },
    { q: "Qual elemento tem símbolo 'O'?", choices: ["Ouro", "Osmio", "Oxigênio", "Prata"], a: 2 },
    { q: "Quem escreveu 'Dom Quixote'?", choices: ["Miguel de Cervantes", "Jorge Luis Borges", "Gabriel García Márquez", "Machado de Assis"], a: 0 },
    { q: "Qual é o maior oceano do mundo?", choices: ["Atlântico", "Índico", "Ártico", "Pacífico"], a: 3 },
    { q: "Qual é a moeda oficial do Japão?", choices: ["Yen", "Won", "Dólar", "Euro"], a: 0 },
    { q: "Quem foi o primeiro presidente do Brasil?", choices: ["Deodoro da Fonseca", "Getúlio Vargas", "Dom Pedro II", "Floriano Peixoto"], a: 0 },
    { q: "Qual país é conhecido como a Terra do Sol Nascente?", choices: ["China", "Japão", "Coreia do Sul", "Tailândia"], a: 1 },
    { q: "Qual é a montanha mais alta do mundo?", choices: ["Everest", "K2", "Kilimanjaro", "Mont Blanc"], a: 0 },
    { q: "Quantos continentes existem?", choices: ["5", "6", "7", "8"], a: 2 },
    { q: "Quem descobriu o Brasil em 1500?", choices: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Vasco da Gama", "Fernão de Magalhães"], a: 0 },
    { q: "Qual é o maior país do mundo em território?", choices: ["China", "Rússia", "Canadá", "Estados Unidos"], a: 1 },
    { q: "Qual é a capital da França?", choices: ["Londres", "Roma", "Paris", "Berlim"], a: 2 },
    { q: "Em que continente fica o Egito?", choices: ["Ásia", "África", "Europa", "América"], a: 1 },
    { q: "Qual destes animais é um mamífero?", choices: ["Crocodilo", "Golfinho", "Galinha", "Jacaré"], a: 1 },
    { q: "Quantos segundos tem um minuto?", choices: ["60", "100", "90", "30"], a: 0 },
    { q: "Quem criou a teoria da relatividade?", choices: ["Isaac Newton", "Albert Einstein", "Galileu Galilei", "Stephen Hawking"], a: 1 },
    { q: "Qual é a capital da Argentina?", choices: ["Buenos Aires", "Santiago", "Montevidéu", "Assunção"], a: 0 },
    { q: "O que as abelhas produzem?", choices: ["Açúcar", "Cera", "Mel", "Pólen"], a: 2 },
    { q: "Qual é o planeta mais próximo do Sol?", choices: ["Vênus", "Terra", "Mercúrio", "Marte"], a: 2 },
    { q: "Quem foi o autor de 'O Pequeno Príncipe'?", choices: ["Hans Christian Andersen", "Antoine de Saint-Exupéry", "Charles Dickens", "Victor Hugo"], a: 1 },
    { q: "Qual é o menor país do mundo?", choices: ["Mônaco", "Vaticano", "San Marino", "Liechtenstein"], a: 1 },
    { q: "Quantos lados tem um quadrado?", choices: ["3", "4", "5", "6"], a: 1 },
    { q: "Qual é a fórmula química da água?", choices: ["H2", "O2", "H2O", "CO2"], a: 2 },
    { q: "Quem pintou o teto da Capela Sistina?", choices: ["Leonardo da Vinci", "Michelangelo", "Rafael", "Donatello"], a: 1 },
    { q: "Qual é o maior deserto do mundo?", choices: ["Saara", "Gobi", "Atacama", "Kalahari"], a: 0 },
    { q: "Quantos anos tem um século?", choices: ["10", "50", "100", "1000"], a: 2 },
    { q: "Qual é o esporte mais popular do mundo?", choices: ["Basquete", "Futebol", "Tênis", "Vôlei"], a: 1 },
    { q: "Quem foi o primeiro homem a viajar para o espaço?", choices: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "John Glenn"], a: 1 },
    { q: "Qual é a capital da Itália?", choices: ["Paris", "Madri", "Roma", "Berlim"], a: 2 },
    { q: "Qual é o maior rio do mundo?", choices: ["Amazonas", "Nilo", "Yangtzé", "Mississipi"], a: 0 },
    { q: "Quem é considerado o pai da computação?", choices: ["Alan Turing", "Bill Gates", "Steve Jobs", "Charles Babbage"], a: 3 },
    { q: "Qual é o metal cujo símbolo é 'Fe'?", choices: ["Ferro", "Prata", "Estanho", "Fósforo"], a: 0 },
    { q: "Qual é a capital de Portugal?", choices: ["Madri", "Lisboa", "Barcelona", "Porto"], a: 1 },
    { q: "Quem escreveu 'Hamlet'?", choices: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Oscar Wilde"], a: 0 },
    { q: "Qual é o maior mamífero do mundo?", choices: ["Elefante", "Baleia Azul", "Hipopótamo", "Orca"], a: 1 },
    { q: "Quantos dias tem um ano bissexto?", choices: ["365", "366", "364", "360"], a: 1 },
    { q: "Qual destes é um planeta gasoso?", choices: ["Mercúrio", "Terra", "Marte", "Júpiter"], a: 3 },
    { q: "Quem inventou a lâmpada elétrica?", choices: ["Nikola Tesla", "Thomas Edison", "Benjamin Franklin", "Alexander Graham Bell"], a: 1 },
    { q: "Qual é a capital da Alemanha?", choices: ["Berlim", "Munique", "Hamburgo", "Frankfurt"], a: 0 },
    { q: "Quantos estados tem o Brasil?", choices: ["24", "26", "27", "25"], a: 1 },
    { q: "Qual é o nome científico dos seres humanos?", choices: ["Homo erectus", "Homo habilis", "Homo sapiens", "Homo neanderthalensis"], a: 2 },
    { q: "Qual destes é um instrumento de corda?", choices: ["Violino", "Trompete", "Bateria", "Clarinete"], a: 0 },
    { q: "Qual é a cor resultante da mistura de azul e amarelo?", choices: ["Verde", "Roxo", "Laranja", "Marrom"], a: 0 },
    { q: "Quem escreveu 'A Odisséia'?", choices: ["Homero", "Sófocles", "Platão", "Aristóteles"], a: 0 },
    { q: "Em que país estão as pirâmides de Gizé?", choices: ["México", "Egito", "Peru", "Índia"], a: 1 },
    { q: "Qual é o símbolo químico do Ouro?", choices: ["O", "Ag", "Au", "Pt"], a: 2 },
    { q: "Qual é o animal símbolo da Austrália?", choices: ["Canguru", "Coala", "Diabo-da-tasmânia", "Ema"], a: 0 },
    { q: "Qual é a capital do Canadá?", choices: ["Toronto", "Ottawa", "Vancouver", "Montreal"], a: 1 },
    { q: "Quantos minutos tem uma hora?", choices: ["30", "45", "60", "90"], a: 2 }
    
  ];

  // ====== Selectors ======
  const startScreen = document.getElementById('startScreen');
  const quizScreen = document.getElementById('quizScreen');
  const resultScreen = document.getElementById('resultScreen');

  const qCountInput = document.getElementById('qCount');
  const timerInput = document.getElementById('timerValue');
  const toggleTimer = document.getElementById('toggleTimer');

  const autoSaveCheckbox = document.getElementById('autoSave');
  const confettiCheckbox = document.getElementById('confettiEnabled');

  const btnStart = document.getElementById('btnStart');
  const btnNext = document.getElementById('btnNext');
  const btnQuit = document.getElementById('btnQuit');
  const btn5050 = document.getElementById('btn5050');

  const questionText = document.getElementById('questionText');
  const choicesEl = document.getElementById('choices');
  const currentIndex = document.getElementById('currentIndex');
  const totalQ = document.getElementById('totalQ');
  const progressEl = document.getElementById('progress');
  const timerText = document.getElementById('timerText');
  const timerBarFill = document.getElementById('timerBarFill');
  const ariaLive = document.getElementById('ariaLive');

  const finalScore = document.getElementById('finalScore');
  const correctCountEl = document.getElementById('correctCount');
  const totalCountEl = document.getElementById('totalCount');
  const reviewEl = document.getElementById('review');
  const playerName = document.getElementById('playerName');
  const saveScoreBtn = document.getElementById('saveScore');
  const shareBtn = document.getElementById('shareBtn');
  const tryAgain = document.getElementById('tryAgain');
  const btnBackHome = document.getElementById('btnBackHome');
  const highscoresEl = document.getElementById('highscores');
  const btnResetScores = document.getElementById('btnResetScores');
  const btnOpenScores = document.getElementById('btnOpenScores');
  const btnClearSettings = document.getElementById('btnClearSettings');

  // ====== State & constants ======
  const STORAGE_KEY = 'quiz_v3_settings';
  const HS_KEY = 'quiz_v3_highscores'; // objeto: { "<qCount>": [ entries... ], ... }
  const MAX_TIME = 60; // segundos (limite fixo)
  const MAX_QUESTIONS = 50; // novo limite máximo solicitado

  let state = {
    questions: [],
    index: 0,
    total: 0,
    score: 0,
    correct: 0,
    timePerQ: 15,     // valor definido pelo usuário (0 = sem limite)
    timerActive: true,
    timerId: null,
    timeLeft: 0,
    answering: true,
    used5050: false,
    history: [],      // histórico por pergunta { q, choices, correctAnswer, userAnswer, timeTaken, pointsAwarded }
    questionStartTs: null,
    confettiEnabled: true,
    autoSave: false
  };

  // ====== Util ======
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
  function announce(text) {
    ariaLive.textContent = '';
    setTimeout(() => ariaLive.textContent = text, 50);
  }

  // ====== Persistence ======
  function loadSettings() {
    try { const raw = localStorage.getItem(STORAGE_KEY); return raw ? JSON.parse(raw) : {}; } catch (e) { return {}; }
  }
  function saveSettings(s) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch (e) { /* ignore */ }
  }

  function loadHighscores() {
    try { const raw = localStorage.getItem(HS_KEY); return raw ? JSON.parse(raw) : {}; } catch (e) { return {}; }
  }
  function saveHighscores(obj) {
    try { localStorage.setItem(HS_KEY, JSON.stringify(obj)); } catch (e) { /* ignore */ }
  }

  // apply saved settings if exist
  (function applySavedSettings() {
    const s = loadSettings();
    if (s.qCount) qCountInput.value = s.qCount;
    if (typeof s.timerValue !== 'undefined') timerInput.value = s.timerValue;
    if (typeof s.timerActive === 'boolean') {
      state.timerActive = s.timerActive;
      toggleTimer.setAttribute('aria-pressed', String(s.timerActive));
      toggleTimer.textContent = s.timerActive ? 'Temporizador: Ativado' : 'Temporizador: Desativado';
    }
    if (typeof s.confettiEnabled === 'boolean') {
      confettiCheckbox.checked = s.confettiEnabled;
      state.confettiEnabled = s.confettiEnabled;
    }
    if (typeof s.autoSave === 'boolean') {
      autoSaveCheckbox.checked = s.autoSave;
      state.autoSave = s.autoSave;
    }
  })();

  // ====== Scoring function ======
  function computePoints(timeTakenSeconds, numberOfQuestions) {
    let t = Number(timeTakenSeconds) || 0;
    if (t < 0) t = 0;
    if (t > MAX_TIME) t = MAX_TIME;
    const base = 100;
    const timeFactor = (MAX_TIME - t) / MAX_TIME; // 1 .. 0
    const questionMultiplier = 1 + (numberOfQuestions / 20); // linear bonus by number of questions
    const points = Math.round(base * (1 + timeFactor) * questionMultiplier);
    return { points, timeFactor, questionMultiplier };
  }

  // ====== Confetti & Audio (simples) ======
  function doConfetti() {
    if (!state.confettiEnabled) return;
    try { if (window.confetti) confetti({ particleCount: 40, spread: 60, origin: { y: 0.2 } }); } catch (e) { /* ignore */ }
  }
  let audioCtx = null;
  function ensureAudioCtx() {
    if (!audioCtx) {
      try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { audioCtx = null; }
    }
  }
  function playTone(freq = 440, dur = 180, vol = 0.02) {
    ensureAudioCtx();
    if (!audioCtx) return;
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.connect(g); g.connect(audioCtx.destination);
    o.frequency.value = freq; g.gain.value = vol;
    o.start();
    g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur / 1000);
    setTimeout(() => o.stop(), dur + 20);
  }

  // ====== Highscore operations (segmented por qCount) ======
  function getHighscoresForCount(qCount) {
    const all = loadHighscores();
    return all[qCount] || [];
  }
  function saveHighscoreForCount(qCount, entry) {
    const all = loadHighscores();
    const list = all[qCount] || [];
    list.push(entry);
    // ordenar por pontos desc
    list.sort((a, b) => b.points - a.points || a.avgTime - b.avgTime);
    all[qCount] = list.slice(0, 50); // manter top 50
    saveHighscores(all);
  }
  function renderHighscoresForCurrentCount() {
    const qCount = String(getCurrentQCount());
    const list = getHighscoresForCount(qCount);
    if (!list || list.length === 0) {
      highscoresEl.innerHTML = '<p>Nenhum placar para este número de perguntas.</p>';
      return;
    }
    let html = '<table><thead><tr><th>#</th><th>Nome</th><th>Pontos</th><th>%</th><th>Tempo total</th><th>Tempo médio</th><th>Q</th><th>Data</th></tr></thead><tbody>';
    list.slice(0, 10).forEach((s, i) => {
      const date = new Date(s.date);
      html += `<tr><td>${i + 1}</td><td>${escapeHtml(s.name)}</td><td>${s.points}</td><td>${s.percent}%</td><td>${s.totalTime}s</td><td>${s.avgTime.toFixed(1)}s</td><td>${s.qCount}</td><td>${date.toLocaleDateString()}</td></tr>`;
    });
    html += '</tbody></table>';
    highscoresEl.innerHTML = html;
  }

  // ====== Build questions and start ======
  function buildQuestions(qcount) {
    const pool = QUESTIONS.slice();
    shuffle(pool);
    return pool.slice(0, qcount).map(q => {
      const choices = shuffle(q.choices.slice());
      return { q: q.q, choices, correctAnswer: q.choices[q.a] };
    });
  }

  function getCurrentQCount() {
    // agora usa MAX_QUESTIONS como limite superior
    const n = Math.max(3, Math.min(MAX_QUESTIONS, parseInt(qCountInput.value) || 10));
    return n;
  }

  function startQuiz() {
    // clamp timer value and qCount
    let qcount = getCurrentQCount();
    let tval = Math.max(0, Math.min(MAX_TIME, parseInt(timerInput.value) || 15));
    timerInput.value = tval; // enforce clamped value
    state.timePerQ = tval;
    state.timerActive = toggleTimer.getAttribute('aria-pressed') === 'true';
    state.confettiEnabled = confettiCheckbox.checked;
    state.autoSave = autoSaveCheckbox.checked;

    // save settings
    saveSettings({ qCount: qcount, timerValue: tval, timerActive: state.timerActive, confettiEnabled: state.confettiEnabled, autoSave: state.autoSave });

    // build questions
    state.questions = buildQuestions(qcount);
    state.index = 0;
    state.total = state.questions.length;
    state.score = 0;
    state.correct = 0;
    state.answering = true;
    state.used5050 = false;
    state.history = [];

    // show screens
    startScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    resultScreen.style.display = 'none';
    totalQ.textContent = state.total;
    updateProgress();
    renderQuestion();
  }

  // ====== Render question ======
  function renderQuestion() {
    state.answering = true;
    clearTimer();
    const cur = state.questions[state.index];
    currentIndex.textContent = state.index + 1;
    questionText.textContent = cur.q;
    choicesEl.innerHTML = '';
    cur.choices.forEach((c, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice';
      btn.setAttribute('role', 'listitem');
      btn.innerHTML = `<strong>${String.fromCharCode(65 + i)}</strong> ${escapeHtml(c)}`;
      btn.dataset.choice = c;
      btn.addEventListener('click', () => { if (state.answering) markAnswer(c); });
      choicesEl.appendChild(btn);
    });
    updateProgress();
    btn5050.disabled = state.used5050;

    // start time measurement
    state.questionStartTs = Date.now();
    if (state.timerActive && state.timePerQ > 0) {
      state.timeLeft = state.timePerQ;
      updateTimerUI();
      startTimer();
    } else {
      timerText.textContent = 'Sem limite';
      timerBarFill.style.width = '0%';
    }
    announce(`Pergunta ${state.index + 1} de ${state.total}.`);
  }

  function updateProgress() {
    const pct = Math.round((state.index / state.total) * 100);
    progressEl.value = pct;
  }

  // ====== Timer control ======
  function startTimer() {
    clearTimer();
    timerText.textContent = `${state.timeLeft}s`;
    timerBarFill.style.width = `${Math.round((state.timeLeft / Math.max(1, state.timePerQ)) * 100)}%`;
    state.timerId = setInterval(() => {
      state.timeLeft--;
      updateTimerUI();
      if (state.timeLeft <= 0) {
        clearTimer();
        if (state.answering) markAnswer(null); // timeout -> treat as no answer
      }
    }, 1000);
  }
  function updateTimerUI() {
    timerText.textContent = `${state.timeLeft}s`;
    const pct = (state.timePerQ > 0) ? Math.round((state.timeLeft / state.timePerQ) * 100) : 0;
    timerBarFill.style.width = `${pct}%`;
  }
  function clearTimer() {
    if (state.timerId) {
      clearInterval(state.timerId);
      state.timerId = null;
    }
  }

  // ====== 50/50 ======
  function apply5050() {
    if (state.used5050) return;
    const cur = state.questions[state.index];
    const correct = cur.correctAnswer;
    const buttons = Array.from(choicesEl.querySelectorAll('.choice'));
    const wrongs = buttons.filter(b => b.dataset.choice !== correct);
    shuffle(wrongs);
    const toDisable = wrongs.slice(0, Math.min(2, wrongs.length));
    toDisable.forEach(b => { b.classList.add('disabled'); b.setAttribute('aria-hidden', 'true'); });
    state.used5050 = true;
    btn5050.disabled = true;
    announce('50 por cento aplicado: duas alternativas removidas.');
  }

  // ====== Mark answer & scoring ======
  function markAnswer(choice) {
    state.answering = false;
    clearTimer();
    const cur = state.questions[state.index];
    const buttons = Array.from(choicesEl.querySelectorAll('.choice'));
    const correct = cur.correctAnswer;

    // compute timeTaken
    const now = Date.now();
    let timeTakenSeconds = 0;
    if (state.questionStartTs) {
      timeTakenSeconds = (now - state.questionStartTs) / 1000;
      if (timeTakenSeconds < 0) timeTakenSeconds = 0;
    }
    // cap to MAX_TIME
    if (timeTakenSeconds > MAX_TIME) timeTakenSeconds = MAX_TIME;

    // highlight choices
    buttons.forEach(b => {
      if (b.dataset.choice === correct) b.classList.add('correct');
      if (choice && b.dataset.choice === choice && b.dataset.choice !== correct) b.classList.add('wrong');
      b.classList.add('disabled');
    });

    // scoring
    let awarded = 0;
    if (choice && choice === correct) {
      // calculate points
      const { points } = computePoints(timeTakenSeconds, state.total);
      awarded = points;
      state.score += awarded;
      state.correct++;
      // effects
      doConfetti();
      playTone(880, 180, 0.03);
      announce(`Resposta correta! +${awarded} pontos`);
    } else if (choice === null) {
      // timed out or skipped
      playTone(440, 120, 0.02);
      announce('Tempo esgotado ou pergunta pulada.');
    } else {
      // wrong
      playTone(220, 220, 0.03);
      announce('Resposta incorreta.');
    }

    // push to history
    state.history.push({
      q: cur.q,
      choices: cur.choices.slice(),
      correctAnswer: correct,
      userAnswer: choice,
      timeTaken: Number(timeTakenSeconds.toFixed(2)),
      pointsAwarded: awarded
    });

    // next btn text
    btnNext.textContent = (state.index + 1 >= state.total) ? 'Finalizar' : 'Próxima';

    // if last question, end soon
    if (state.index + 1 >= state.total) {
      setTimeout(() => endQuiz(), 800);
    }
  }

  function nextQuestion() {
    state.index++;
    if (state.index >= state.total) { endQuiz(); return; }
    renderQuestion();
  }

  // ====== End quiz & review & autosave ======
  function endQuiz() {
    clearTimer();
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    finalScore.textContent = Math.round((state.correct / state.total) * 100 || 0) + '%';
    correctCountEl.textContent = state.correct;
    totalCountEl.textContent = state.total;
    renderReview();
    renderHighscoresForCurrentCount();

    // if autoSave enabled, save automatically using name field or 'Anon'
    if (state.autoSave) {
      const name = (playerName.value || 'Anon').trim().slice(0, 12);
      saveResult(name, true);
      announce('Placar salvo automaticamente.');
    } else {
      announce(`Quiz finalizado. Você acertou ${state.correct} de ${state.total}.`);
    }
  }

  function renderReview() {
    reviewEl.innerHTML = '';
    state.history.forEach((h, i) => {
      const item = document.createElement('div');
      item.className = 'revwItem';
      const ua = h.userAnswer === null ? '— (não respondeu)' : escapeHtml(h.userAnswer);
      const correct = escapeHtml(h.correctAnswer);
      const correctClass = (h.userAnswer && h.userAnswer === h.correctAnswer) ? 'revwCorrect' : 'revwWrong';
      item.innerHTML = `<div><strong>Q${i + 1}:</strong> ${escapeHtml(h.q)}</div>
        <div>Sua resposta: <span class="${correctClass}">${ua}</span> (${h.timeTaken}s)</div>
        <div>Resposta certa: <span class="revwCorrect">${correct}</span> • Pontos: ${h.pointsAwarded}</div>`;
      reviewEl.appendChild(item);
    });
  }

  // ====== Save result (manual or auto) ======
  function saveResult(nameInput, auto = false) {
    const name = (nameInput || 'Anon').trim().slice(0, 12);
    const percent = Math.round((state.correct / state.total) * 100 || 0);
    const points = state.score;
    const totalTime = state.history.reduce((s, h) => s + (h.timeTaken || 0), 0);
    const avgTime = state.history.length ? totalTime / state.history.length : 0;
    const qCount = state.total;
    const entry = {
      name, points, percent, totalTime: Math.round(totalTime), avgTime: Number(avgTime.toFixed(1)), qCount, date: Date.now()
    };
    saveHighscoreForCount(String(qCount), entry);
    renderHighscoresForCurrentCount();
    if (!auto) alert('Placar salvo!');
  }

  // ====== Events ======
  btnStart.addEventListener('click', startQuiz);
  btnNext.addEventListener('click', () => {
    if (state.answering) {
      // skip
      markAnswer(null);
    } else {
      nextQuestion();
    }
  });
  btnQuit.addEventListener('click', () => { if (confirm('Deseja desistir do quiz?')) endQuiz(); });
  btn5050.addEventListener('click', apply5050);

  // keyboard
  window.addEventListener('keydown', (e) => {
    if (quizScreen.style.display !== 'block') return;
    const k = e.key;
    if (k >= '1' && k <= '4') {
      const idx = parseInt(k) - 1;
      const btns = Array.from(choicesEl.querySelectorAll('.choice:not(.disabled)'));
      if (btns[idx]) btns[idx].click();
    }
    if (k === 'Enter') {
      if (state.answering) return;
      btnNext.click();
    }
    if (k === 'Escape') btnQuit.click();
  });

  // save score manual
  saveScoreBtn.addEventListener('click', () => {
    const name = (playerName.value || 'Anon').trim().slice(0, 12);
    saveResult(name, false);
  });

  shareBtn.addEventListener('click', () => {
    const percent = Math.round((state.correct / state.total) * 100 || 0);
    const txt = `Meu resultado: ${percent}% (${state.correct}/${state.total}) no Quiz Conhecimentos Gerais!`;
    navigator.clipboard?.writeText(txt).then(() => alert('Resultado copiado!')).catch(() => prompt('Copie seu resultado:', txt));
  });

  tryAgain.addEventListener('click', () => {
    // restart with same settings
    startQuiz();
  });

  btnBackHome.addEventListener('click', () => {
    resultScreen.style.display = 'none';
    startScreen.style.display = 'block';
    quizScreen.style.display = 'none';
  });

  btnResetScores.addEventListener('click', () => {
    if (!confirm('Resetar todos os placares (todos os N de perguntas)?')) return;
    localStorage.removeItem(HS_KEY);
    renderHighscoresForCurrentCount();
    alert('Todos os placares resetados.');
  });

  btnOpenScores.addEventListener('click', () => {
    startScreen.style.display = 'none';
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    renderHighscoresForCurrentCount();
  });

  btnClearSettings.addEventListener('click', () => {
    if (!confirm('Limpar configurações salvas?')) return;
    localStorage.removeItem(STORAGE_KEY);
    qCountInput.value = 10;
    timerInput.value = 15;
    toggleTimer.setAttribute('aria-pressed', 'true');
    toggleTimer.textContent = 'Temporizador: Ativado';
    confettiCheckbox.checked = true;
    autoSaveCheckbox.checked = false;
    state.confettiEnabled = true;
    state.autoSave = false;
    alert('Configurações limpas.');
  });

  // toggle timer label and attribute
  toggleTimer.addEventListener('click', () => {
    const cur = toggleTimer.getAttribute('aria-pressed') === 'true';
    toggleTimer.setAttribute('aria-pressed', cur ? 'false' : 'true');
    toggleTimer.textContent = cur ? 'Temporizador: Desativado' : 'Temporizador: Ativado';
  });

  // update confetti / autosave flags on change
  confettiCheckbox.addEventListener('change', () => { state.confettiEnabled = confettiCheckbox.checked; });
  autoSaveCheckbox.addEventListener('change', () => { state.autoSave = autoSaveCheckbox.checked; });

  // safety: clear timers
  window.addEventListener('beforeunload', () => clearTimer());

  // boot: render highscores for default count
  (function boot() {
    renderHighscoresForCurrentCount();
    // ensure toggle label consistent on load
    const cur = toggleTimer.getAttribute('aria-pressed') === 'true';
    toggleTimer.textContent = cur ? 'Temporizador: Ativado' : 'Temporizador: Desativado';
  })();

})();