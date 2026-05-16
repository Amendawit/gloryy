/* ═══════════════════════════════════════════════════════════
   GLORY CODING CLUB — script.js
   Handles: Login, Register, XP, Challenges, Events, Leaderboard
═══════════════════════════════════════════════════════════ */

/* ── Data ── */
const EVENTS_DATA = [
  {id:1,title:"Hackathon: Build for Change",date:"Jun 12, 2025",time:"9:00 AM – 5:00 PM",location:"IT Lab, Block A",desc:"24-hour team challenge to build a solution for a real community problem. Form teams of 3–4!",icon:"fas fa-laptop-code"},
  {id:2,title:"Web Design Workshop",date:"Jun 20, 2025",time:"2:00 PM – 4:00 PM",location:"Computer Room 2",desc:"Learn HTML, CSS & JavaScript in this hands-on beginner-friendly workshop for all skill levels.",icon:"fas fa-paint-brush"},
  {id:3,title:"Python Game Jam",date:"Jul 5, 2025",time:"3:00 PM – 6:00 PM",location:"Multi-purpose Hall",desc:"Create a mini game in Python! Prizes for best gameplay, best graphics, and most creative idea.",icon:"fab fa-python"},
  {id:4,title:"AI & Robotics Demo Day",date:"Jul 18, 2025",time:"10:00 AM – 1:00 PM",location:"Science Block",desc:"See cutting-edge AI and robotics demos. Guest speakers from local tech companies!",icon:"fas fa-robot"}
];

const CHALLENGES = [
  {id:"q1",title:"Hello, World!",diff:"easy",pts:50,icon:"fas fa-star",desc:"Your very first coding challenge",questions:[
    {q:"What does  print('Hello, World!')  output?",opts:["Hello, World!","hello, world!","Nothing","Error"],ans:0,exp:"print() outputs exactly what's in the quotes. Python is case-sensitive!"},
    {q:"Which symbol starts a comment in Python?",opts:["//","/* */","#","--"],ans:2,exp:"# starts a comment in Python. Everything after it on that line is ignored."},
    {q:"What does  print(2 + 3)  display?",opts:["2 + 3","23","5","Error"],ans:2,exp:"Python evaluates the math inside print(). 2 + 3 = 5."}
  ]},
  {id:"q2",title:"Web Builder",diff:"easy",pts:75,icon:"fas fa-globe",desc:"Test your HTML & CSS knowledge",questions:[
    {q:"Which HTML tag creates the BIGGEST heading?",opts:["<h6>","<h1>","<big>","<heading>"],ans:1,exp:"<h1> is the biggest heading. They go from h1 (biggest) to h6 (smallest)."},
    {q:"Which CSS property changes text colour?",opts:["font-color","text-color","color","foreground"],ans:2,exp:"The property is simply 'color'. Example: color: red;"},
    {q:"What does HTML stand for?",opts:["Hyper Text Markup Language","High Tech Modern Language","Hyper Transfer Markup Logic","How To Make Layouts"],ans:0,exp:"HTML = HyperText Markup Language — the skeleton of every webpage!"},
    {q:"Which HTML tag adds a clickable link?",opts:["<link>","<a>","<href>","<url>"],ans:1,exp:"The <a> anchor tag creates links. Example: <a href='https://...'>Click me</a>"}
  ]},
  {id:"q3",title:"Algorithm Apprentice",diff:"medium",pts:150,icon:"fas fa-project-diagram",desc:"Loops, conditions & logic puzzles",questions:[
    {q:"What does  for i in range(3): print(i)  output?",opts:["1 2 3","0 1 2","0 1 2 3","1 2"],ans:1,exp:"range(3) gives 0, 1, 2. Python's range starts at 0 and excludes the end number."},
    {q:"A loop that never stops is called a(n)...",opts:["Fast loop","Infinite loop","Turbo loop","Mega loop"],ans:1,exp:"An infinite loop runs forever because its exit condition is never met!"},
    {q:"What is the purpose of an 'else' block?",opts:["Runs if condition is True","Runs if condition is False","Always runs","Skips the if block"],ans:1,exp:"else runs when the if condition is False — it's the 'otherwise' path."},
    {q:"Which data structure is LIFO (Last In, First Out)?",opts:["Queue","Stack","Array","Linked List"],ans:1,exp:"A Stack is LIFO — like a stack of plates. You add and remove from the top!"},
    {q:"What is the time complexity of linear search?",opts:["O(1)","O(log n)","O(n)","O(n²)"],ans:2,exp:"O(n) — in the worst case you check every item once."}
  ]},
  {id:"q4",title:"Cybersecurity Scout",diff:"medium",pts:200,icon:"fas fa-shield-alt",desc:"Stay safe online — know the threats",questions:[
    {q:"What makes a password strong?",opts:["password123","Your pet's name","Mix of letters, numbers & symbols (e.g. T#9xQ!)","Your birthdate"],ans:2,exp:"Strong passwords are long, random, and use uppercase, lowercase, numbers, and symbols!"},
    {q:"What is phishing?",opts:["A sport","Trick emails/messages that steal your info","A programming language","A type of virus"],ans:1,exp:"Phishing tricks you into sharing passwords by pretending to be someone you trust."},
    {q:"What does HTTPS mean in a URL?",opts:["The site is fast","The connection is encrypted","The site is popular","The site is fun"],ans:1,exp:"HTTPS means your connection is encrypted and secure. Look for the padlock icon!"},
    {q:"What should you do with a suspicious password-requesting email?",opts:["Reply with password","Click all links","Delete and report it","Forward to friends"],ans:2,exp:"Legitimate services NEVER ask for your password by email. Always delete and report!"}
  ]},
  {id:"q5",title:"AI Explorer",diff:"hard",pts:300,icon:"fas fa-brain",desc:"Dive into artificial intelligence",questions:[
    {q:"What is Machine Learning?",opts:["Robots learning to walk","Teaching computers to learn from data without explicit programming","A programming language","A type of hardware"],ans:1,exp:"Machine Learning lets computers improve at tasks by finding patterns in data!"},
    {q:"What is a neural network inspired by?",opts:["Computer chips","The internet","The human brain","Electrical circuits"],ans:2,exp:"Artificial Neural Networks are inspired by how neurons in our brains connect and communicate."},
    {q:"What does 'training' an AI model mean?",opts:["Physical exercises","Showing it examples so it learns patterns","Writing code for every situation","Adding more RAM"],ans:1,exp:"Training means feeding the model lots of labeled examples so it learns to predict outcomes."},
    {q:"Which is an example of AI in everyday life?",opts:["Calculator","Light switch","A chatbot like ChatGPT","A keyboard"],ans:2,exp:"Chatbots use Natural Language Processing (NLP) — a branch of AI!"},
    {q:"What is the Turing Test?",opts:["A speed test","A test if AI can fool a human in conversation","A memory test","A programming exam"],ans:1,exp:"If an AI can chat indistinguishably from a human, it passes the Turing Test!"}
  ]},
  {id:"q6",title:"Database Basics",diff:"hard",pts:350,icon:"fas fa-database",desc:"SQL, tables and data storage",questions:[
    {q:"What does SQL stand for?",opts:["Structured Query Language","Simple Question Logic","System Queue List","Stored Question Language"],ans:0,exp:"SQL = Structured Query Language — the standard for working with databases!"},
    {q:"Which SQL command retrieves data?",opts:["INSERT","UPDATE","SELECT","DELETE"],ans:2,exp:"SELECT retrieves data. Example: SELECT * FROM students;"},
    {q:"What is a PRIMARY KEY?",opts:["The most important column","A unique identifier for each row","The first column","A password for the table"],ans:1,exp:"A PRIMARY KEY uniquely identifies each row. No two rows can have the same key!"},
    {q:"What does WHERE do in SQL?",opts:["Sorts results","Filters rows based on a condition","Joins tables","Counts rows"],ans:1,exp:"WHERE filters rows. Example: SELECT * FROM students WHERE grade = 'A';"}
  ]},
  {id:"q7",title:"Code Breaker",diff:"expert",pts:500,icon:"fas fa-lock",desc:"Advanced logic, binary & Big O",questions:[
    {q:"What is recursion?",opts:["A backwards loop","A function that calls itself","A type of variable","A sorting method"],ans:1,exp:"Recursion is when a function calls itself! It needs a base case to eventually stop."},
    {q:"What is the decimal value of binary 1010?",opts:["8","10","12","16"],ans:1,exp:"1010 = (1×8)+(0×4)+(1×2)+(0×1) = 10. Each bit doubles in value from right to left!"},
    {q:"What does Big O notation measure?",opts:["Code file size","Algorithm efficiency relative to input size","Number of bugs","RAM installed"],ans:1,exp:"Big O describes how runtime grows as input grows. O(1) constant, O(n) linear, O(n²) quadratic."},
    {q:"Difference between compiler and interpreter?",opts:["No difference","Compilers translate all at once; interpreters translate line-by-line","Interpreters are always faster","Compilers only work with Python"],ans:1,exp:"Compilers translate all code first then run. Interpreters translate and run line by line."},
    {q:"Which sorting algorithm has best average complexity?",opts:["Bubble Sort O(n²)","Selection Sort O(n²)","Merge/Quick Sort O(n log n)","Insertion Sort O(n²)"],ans:2,exp:"Merge Sort and Quick Sort achieve O(n log n) on average — much faster than O(n²)!"}
  ]}
];

const DEMO_LB = [
  {name:"Bereket T.",xp:1250,badges:["🏆 Champion","⚡ Speed Coder"],color:"#1a56db"},
  {name:"Tigist M.",xp:1100,badges:["🔥 Streak x7","🛡 Security Pro"],color:"#7c3aed"},
  {name:"Dawit H.",xp:980,badges:["🤖 AI Explorer","📐 Algorithm Ace"],color:"#059669"},
  {name:"Hana A.",xp:850,badges:["🌐 Web Wizard"],color:"#dc2626"},
  {name:"Samuel K.",xp:720,badges:["🐍 Python Pro"],color:"#d97706"},
  {name:"Yohannes F.",xp:610,badges:["🌟 Rising Star"],color:"#0891b2"}
];

const LEVELS=[
  {min:0,max:100,label:"⭐ Beginner"},{min:100,max:300,label:"💻 Coder"},
  {min:300,max:600,label:"🔥 Developer"},{min:600,max:1000,label:"⚡ Hacker"},
  {min:1000,max:2000,label:"🚀 Engineer"},{min:2000,max:99999,label:"👑 Master"}
];

/* ── State ── */
let currentUser = null;
let isAdmin = false;
let userXP = 0;
let completedChallenges = new Set();
let registeredEvents = new Set();
let quizState = null;
let toastTimer = null;

/* ══════════════════════════════════════════
   UTILS
══════════════════════════════════════════ */
function getUsers(){try{return JSON.parse(localStorage.getItem('gcc_users')||'{}')}catch{return{}}}
function saveUsers(u){localStorage.setItem('gcc_users',JSON.stringify(u))}

function showToast(msg, type='success'){
  const t=document.getElementById('toast');
  if(!t) return;
  document.getElementById('toast-txt').textContent=msg;
  t.className='show '+type;
  t.querySelector('i').className=type==='gold'?'fas fa-star':type==='info'?'fas fa-info-circle':'fas fa-check-circle';
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.remove('show'),3500);
}

function fireParticles(){
  for(let i=0;i<14;i++){
    const p=document.createElement('div');
    const colors=['#00d4ff','#fbbf24','#10b981','#818cf8','#f59e0b','#f472b6'];
    const c=colors[Math.floor(Math.random()*colors.length)];
    const size=Math.random()*8+4;
    p.className='particle';
    p.style.cssText=`left:${Math.random()*window.innerWidth}px;top:${window.innerHeight/2}px;width:${size}px;height:${size}px;background:${c};animation-delay:${Math.random()*.3}s;`;
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),1400);
  }
}

function logActivity(msg){
  const feed=JSON.parse(localStorage.getItem('gcc_activity')||'[]');
  feed.push({msg, time:new Date().toLocaleTimeString()});
  if(feed.length>30) feed.splice(0,feed.length-30);
  localStorage.setItem('gcc_activity',JSON.stringify(feed));
}

/* ══════════════════════════════════════════
   AUTH — LOGIN
══════════════════════════════════════════ */
function switchAuthTab(tab){
  document.querySelectorAll('.auth-tab').forEach((b,i)=>{
    b.classList.toggle('active',(i===0&&tab==='login')||(i===1&&tab==='register'));
  });
  const lf=document.getElementById('form-login');
  const rf=document.getElementById('form-register');
  if(lf) lf.style.display = tab==='login'?'block':'none';
  if(rf) rf.style.display = tab==='register'?'block':'none';
  clearMsgs();
}

function clearMsgs(){
  const e=document.getElementById('err-box');
  const o=document.getElementById('ok-box');
  if(e) e.style.display='none';
  if(o) o.style.display='none';
}
function showError(t){
  const b=document.getElementById('err-box');
  if(b){b.style.display='flex';b.querySelector('span').textContent=t;}
}
function showOk(t){
  const b=document.getElementById('ok-box');
  if(b){b.style.display='flex';b.querySelector('span').textContent=t;}
}

function togglePw(id, btn){
  const inp=document.getElementById(id);
  const hide=inp.type==='password';
  inp.type=hide?'text':'password';
  btn.querySelector('i').className=hide?'fas fa-eye-slash':'fas fa-eye';
}

function doLogin(){
  clearMsgs();
  const u=document.getElementById('l-user').value.trim();
  const p=document.getElementById('l-pass').value;
  if(!u||!p){showError('Please enter username and password.');return;}
  if(u==='admin'&&p==='admin123'){
    localStorage.setItem('gcc_loggedIn','admin');
    localStorage.setItem('gcc_isAdmin','1');
    window.location.href='welcome.html';
    return;
  }
  const users=getUsers();
  if(!users[u]){showError('Username not found. Please register first!');return;}
  if(users[u].password!==btoa(p)){showError('Incorrect password. Try again!');return;}
  localStorage.setItem('gcc_loggedIn',u);
  localStorage.setItem('gcc_isAdmin','0');
  logActivity(u+' logged in');
  window.location.href='welcome.html';
}

function doRegister(){
  clearMsgs();
  const u=document.getElementById('r-user').value.trim();
  const p=document.getElementById('r-pass').value;
  const c=document.getElementById('r-confirm').value;
  if(!u||!p){showError('Please fill in all fields.');return;}
  if(u.length<3){showError('Username must be at least 3 characters.');return;}
  if(p.length<4){showError('Password must be at least 4 characters.');return;}
  if(p!==c){showError('Passwords do not match!');return;}
  const users=getUsers();
  if(users[u]){showError('Username already taken — choose another!');return;}
  users[u]={password:btoa(p),xp:0,joined:new Date().toISOString()};
  saveUsers(users);
  logActivity(u+' joined the club!');
  showOk('Account created! Taking you to welcome page...');
  localStorage.setItem('gcc_loggedIn',u);
  localStorage.setItem('gcc_isAdmin','0');
  setTimeout(()=>{window.location.href='welcome.html';},1000);
}

/* ══════════════════════════════════════════
   LOGOUT (shared)
══════════════════════════════════════════ */
function doLogout(){
  localStorage.removeItem('gcc_loggedIn');
  localStorage.removeItem('gcc_isAdmin');
  window.location.href='index.html';
}

/* ══════════════════════════════════════════
   LOAD USER STATE
══════════════════════════════════════════ */
function loadUserState(){
  currentUser=localStorage.getItem('gcc_loggedIn');
  isAdmin=localStorage.getItem('gcc_isAdmin')==='1';
  if(!currentUser){window.location.href='index.html';return false;}
  const users=getUsers();
  userXP=isAdmin?9999:(users[currentUser]?users[currentUser].xp||0:0);
  completedChallenges=new Set(JSON.parse(localStorage.getItem('gcc_done_'+currentUser)||'[]'));
  registeredEvents=new Set(JSON.parse(localStorage.getItem('gcc_revents_'+currentUser)||'[]').map(Number));
  return true;
}

function setHeaderUser(){
  const na=document.getElementById('hdr-name');
  const av=document.getElementById('hdr-ava');
  if(na) na.textContent=currentUser;
  if(av) av.textContent=currentUser[0].toUpperCase();
  const adminBtn=document.getElementById('admin-nav-btn');
  if(adminBtn) adminBtn.style.display=isAdmin?'flex':'none';
}

/* ══════════════════════════════════════════
   XP SYSTEM
══════════════════════════════════════════ */
function addXP(pts, msg){
  userXP+=pts;
  const users=getUsers();
  if(users[currentUser]&&!isAdmin){users[currentUser].xp=userXP;saveUsers(users);}
  showToast(msg||`+${pts} XP earned! 🎉`,'gold');
  updateXPBar();
  renderLeaderboard();
  const sxp=document.getElementById('s-xp');
  if(sxp) sxp.textContent=userXP;
}

function updateXPBar(){
  const lv=LEVELS.find(l=>userXP>=l.min&&userXP<l.max)||LEVELS[LEVELS.length-1];
  const pct=Math.min(100,((userXP-lv.min)/(lv.max-lv.min))*100);
  const fill=document.getElementById('xp-fill');
  const cur=document.getElementById('xp-cur');
  const nxt=document.getElementById('xp-nxt');
  const chip=document.getElementById('level-chip');
  const lbl=document.getElementById('pb-label');
  const sub=document.getElementById('pb-sub');
  if(fill) fill.style.width=pct+'%';
  if(cur) cur.textContent=userXP+' XP';
  if(nxt) nxt.textContent=userXP>=lv.max?'MAX LEVEL!':(lv.max-userXP)+' XP to next level';
  if(chip) chip.textContent=lv.label;
  if(lbl) lbl.textContent='My Progress — '+lv.label;
  if(sub) sub.textContent='Keep going, '+currentUser+'! You\'re doing amazing.';
  const sxp=document.getElementById('s-xp');
  if(sxp) sxp.textContent=userXP;
}

/* ══════════════════════════════════════════
   EVENTS
══════════════════════════════════════════ */
function renderEvents(){
  const grid=document.getElementById('events-grid');
  if(!grid) return;
  grid.innerHTML=EVENTS_DATA.map(e=>{
    const done=registeredEvents.has(e.id);
    return `<div class="ev-card">
      <div class="ev-date"><i class="${e.icon}"></i>&nbsp;&nbsp;${e.date}</div>
      <h4>${e.title}</h4>
      <p>${e.desc}</p>
      <div class="ev-meta">
        <span><i class="fas fa-clock"></i>${e.time}</span>
        <span><i class="fas fa-map-marker-alt"></i>${e.location}</span>
      </div>
      <button class="ev-reg-btn${done?' done':''}" onclick="toggleEventReg(${e.id},this)">
        ${done?'<i class="fas fa-check-circle"></i> Registered!':'<i class="fas fa-plus-circle"></i> Register for this Event'}
      </button>
    </div>`;
  }).join('');
}

function toggleEventReg(id,btn){
  if(registeredEvents.has(id)){
    registeredEvents.delete(id);
    btn.className='ev-reg-btn';
    btn.innerHTML='<i class="fas fa-plus-circle"></i> Register for this Event';
    showToast('Unregistered from event.','info');
  } else {
    registeredEvents.add(id);
    btn.className='ev-reg-btn done';
    btn.innerHTML='<i class="fas fa-check-circle"></i> Registered!';
    addXP(25,'Event registration +25 XP! 🎉');
    fireParticles();
    logActivity(currentUser+' registered for an event');
  }
  localStorage.setItem('gcc_revents_'+currentUser,JSON.stringify([...registeredEvents]));
}

/* ══════════════════════════════════════════
   CHALLENGES
══════════════════════════════════════════ */
function renderChallenges(){
  const list=document.getElementById('ch-list');
  if(!list) return;
  list.innerHTML=CHALLENGES.map(ch=>{
    const done=completedChallenges.has(ch.id);
    return `<div class="ch-card" onclick="startChallenge('${ch.id}')">
      <div class="ch-ico ${ch.diff}"><i class="${ch.icon}"></i></div>
      <div class="ch-body">
        <h4>${done?'✅ ':''}${ch.title}</h4>
        <p>${ch.desc}&nbsp;·&nbsp;${ch.questions.length} questions</p>
      </div>
      <div class="ch-right">
        <div class="diff-tag ${ch.diff}">${ch.diff.toUpperCase()}</div>
        <div class="ch-pts"><strong>+${ch.pts}</strong> XP</div>
      </div>
    </div>`;
  }).join('');
}

function startChallenge(id){
  const ch=CHALLENGES.find(c=>c.id===id);
  if(!ch) return;
  quizState={ch,qIndex:0,score:0,alreadyDone:completedChallenges.has(id)};
  document.getElementById('quiz-modal').classList.add('open');
  renderQ();
}

function closeQuiz(){
  document.getElementById('quiz-modal').classList.remove('open');
  quizState=null;
}

function renderQ(){
  const {ch,qIndex}=quizState;
  const q=ch.questions[qIndex];
  const pct=(qIndex/ch.questions.length)*100;
  const isCode=q.q.includes('\n')||q.q.includes('print(');
  document.getElementById('quiz-inner').innerHTML=`
    <div style="margin-bottom:8px;">
      <span style="font-size:1.1rem;font-weight:800;color:var(--accent)">${ch.title}</span>
      <span style="font-size:.8rem;color:var(--muted);margin-left:10px;">${ch.diff.toUpperCase()} · +${ch.pts} XP</span>
    </div>
    <div class="qz-prog-wrap"><div class="qz-prog-fill" style="width:${pct}%"></div></div>
    <div class="qz-qnum">Question ${qIndex+1} of ${ch.questions.length}</div>
    <div class="qz-q${isCode?' code-q':''}">${q.q.replace(/\n/g,'<br>')}</div>
    <div class="qz-opts">${q.opts.map((o,i)=>`<button class="qz-opt" onclick="pickAns(${i})">${o}</button>`).join('')}</div>
    <div class="qz-explain" id="qz-exp"></div>
    <button class="qz-next" id="qz-nxt" onclick="nextQ()">
      ${qIndex+1<ch.questions.length?'Next Question →':'See My Results 🎉'}
    </button>`;
}

function pickAns(idx){
  const {ch,qIndex}=quizState;
  const q=ch.questions[qIndex];
  const opts=document.querySelectorAll('.qz-opt');
  opts.forEach(o=>o.classList.add('disabled'));
  const ok=idx===q.ans;
  opts[idx].classList.add(ok?'correct':'wrong');
  if(!ok) opts[q.ans].classList.add('correct');
  if(ok){quizState.score++;fireParticles();}
  const exp=document.getElementById('qz-exp');
  exp.style.display='block';
  exp.className='qz-explain '+(ok?'ok':'no');
  exp.innerHTML=(ok?'✅ Correct! ':'❌ Not quite — ')+q.exp;
  document.getElementById('qz-nxt').style.display='block';
}

function nextQ(){
  quizState.qIndex++;
  if(quizState.qIndex>=quizState.ch.questions.length) showResult();
  else renderQ();
}

function showResult(){
  const {ch,score,alreadyDone}=quizState;
  const total=ch.questions.length;
  const pct=Math.round((score/total)*100);
  const passed=score>=Math.ceil(total/2);
  let xpEarned=0;
  if(passed&&!alreadyDone){
    xpEarned=ch.pts;
    completedChallenges.add(ch.id);
    localStorage.setItem('gcc_done_'+currentUser,JSON.stringify([...completedChallenges]));
    logActivity(currentUser+' completed "'+ch.title+'"');
  }
  const msgs=['Keep practicing! 💪','Getting there! 📖','Nice work! 🌟','Great job! 🔥','Almost perfect! ⚡','PERFECT SCORE! 👑'];
  const mi=Math.min(Math.floor(pct/20),5);
  document.getElementById('quiz-inner').innerHTML=`
    <div style="text-align:center;padding:10px 0;">
      <div class="result-circle">${score}/${total}</div>
      <div class="result-msg">${msgs[mi]} — ${pct}% correct</div>
      ${xpEarned?`<div class="result-xp">🏆 +${xpEarned} XP Earned!</div>`:
        alreadyDone?'<div class="result-xp" style="color:var(--dim)">Already completed (XP not re-awarded)</div>':
        passed?'':'<div class="result-xp" style="color:var(--dim)">Score ≥ 50% to earn XP</div>'}
      <button class="result-back" onclick="closeQuiz();renderChallenges()">← Back to Challenges</button>
    </div>`;
  if(xpEarned) setTimeout(()=>addXP(xpEarned,'🏆 '+ch.title+' complete! +'+xpEarned+' XP'),400);
}

/* ══════════════════════════════════════════
   LEADERBOARD
══════════════════════════════════════════ */
function renderLeaderboard(){
  const list=document.getElementById('lb-list');
  if(!list) return;
  const myEntry={name:currentUser+' (You)',xp:userXP,badges:['🚀 Active'],color:'#00d4ff',isMe:true};
  const all=[...DEMO_LB,myEntry].sort((a,b)=>b.xp-a.xp).slice(0,9);
  const rnk=['🥇','🥈','🥉'];
  const rcls=['rank-gold','rank-silver','rank-bronze'];
  list.innerHTML=all.map((p,i)=>`
    <div class="lb-row${p.isMe?' me':''}">
      <div class="lb-rank-num ${rcls[i]||'rank-other'}">${rnk[i]||i+1}</div>
      <div class="lb-ava" style="background:${p.color||'#1a56db'}">${p.name[0]}</div>
      <div class="lb-info">
        <div class="name">${p.name}</div>
        <div class="lb-badges">${p.badges.map(b=>`<span class="lb-badge">${b}</span>`).join('')}</div>
      </div>
      <div class="lb-xp">${p.xp.toLocaleString()}<small>XP</small></div>
    </div>`).join('');
}

/* ══════════════════════════════════════════
   NAV TABS (main app)
══════════════════════════════════════════ */
function showTab(id){
  document.querySelectorAll('.tab-section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-pill').forEach(b=>b.classList.remove('active'));
  document.getElementById('tab-'+id).classList.add('active');
  document.querySelectorAll('.nav-pill').forEach(b=>{
    if(b.getAttribute('onclick')&&b.getAttribute('onclick').includes("'"+id+"'"))
      b.classList.add('active');
  });
  if(id==='leaderboard') renderLeaderboard();
  if(id==='challenges') renderChallenges();
  if(id==='events') renderEvents();
}

/* ══════════════════════════════════════════
   COUNTER ANIMATION
══════════════════════════════════════════ */
function animateCount(id, target){
  let v=0; const step=Math.ceil(target/40)||1;
  const el=document.getElementById(id);
  if(!el) return;
  const iv=setInterval(()=>{
    v=Math.min(v+step,target);el.textContent=v;
    if(v>=target) clearInterval(iv);
  },40);
}

/* ══════════════════════════════════════════
   ENTER KEY SUPPORT
══════════════════════════════════════════ */
document.addEventListener('keydown',e=>{
  if(e.key!=='Enter') return;
  const lf=document.getElementById('form-login');
  const rf=document.getElementById('form-register');
  if(lf&&lf.style.display!=='none') doLogin();
  else if(rf&&rf.style.display!=='none') doRegister();
});
