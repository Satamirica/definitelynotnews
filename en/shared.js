/* ── SHARED DATA (EN) ───────────────────────────────────────────────────── */

const EPISODES = [
  { id:1,  ch:'tv', block:'manip', theme:'agenda',    fairy:'Little Red Riding Hood', title:'The forest is dangerous again',               desc:'The Herald covers what matters: the wolf is caught, everyone is safe.',           dur:'~80 sec' },
  { id:2,  ch:'gl', block:'manip', theme:'agenda',    fairy:'Little Red Riding Hood', title:'They sent the girl alone',                    desc:'The Crier asks the question nobody asked: why did the child walk alone.',         dur:'~80 sec' },
  { id:3,  ch:'tv', block:'manip', theme:'agenda',    fairy:'Little Red Riding Hood', title:'Order in the forest restored',                desc:'The Herald closes the story: case closed, the system worked.',                   dur:'~75 sec' },
  { id:4,  ch:'gl', block:'manip', theme:'agenda',    fairy:'Little Red Riding Hood', title:'Nobody counts wolves anymore',                desc:'The Crier keeps the story open: one wolf is not the end of the story.',         dur:'~80 sec' },
  { id:5,  ch:'tv', block:'manip', theme:'framing',   fairy:'Cinderella',             title:'The prince found his person',                 desc:'The ball as a triumph: the prince showed exceptional discernment.',              dur:'~80 sec' },
  { id:6,  ch:'gl', block:'manip', theme:'framing',   fairy:'Cinderella',             title:'A girl fled the royal ball',                  desc:'Same ball — a detective story with a mystery and a protocol breach.',           dur:'~80 sec' },
  { id:7,  ch:'tv', block:'manip', theme:'framing',   fairy:'Cinderella',             title:'The slipper found its owner',                 desc:'Search complete, order restored. Other circumstances are irrelevant.',          dur:'~75 sec' },
  { id:8,  ch:'gl', block:'manip', theme:'framing',   fairy:'Cinderella',             title:'Who is the stepmother and why did nobody speak?', desc:'Before the happy ending there were years. Why did nobody intervene?',      dur:'~80 sec' },
  { id:9,  ch:'tv', block:'manip', theme:'narrative', fairy:'Three Little Pigs',      title:'The builders held against the threat',        desc:'Hard work won: Practical Pig foresaw the danger and saved all three.',         dur:'~80 sec' },
  { id:10, ch:'gl', block:'manip', theme:'narrative', fairy:'Three Little Pigs',      title:'The wolf was just looking for food',          desc:'Villain or the displaced? It depends on whose side you are looking from.',     dur:'~80 sec' },
  { id:11, ch:'tv', block:'manip', theme:'narrative', fairy:'Three Little Pigs',      title:'A lesson for the future: build well',         desc:'The authority inspected the ruins and is issuing new regulations.',           dur:'~75 sec' },
  { id:12, ch:'gl', block:'manip', theme:'narrative', fairy:'Three Little Pigs',      title:'Why were two of three unprepared?',           desc:'Not laziness — Practical Pig had a quarry nearby. His brothers did not.',      dur:'~80 sec' },
  { id:13, ch:'tv', block:'manip', theme:'emotion',   fairy:'Father Frost',           title:'Hard work rewarded',                         desc:'Natasha\'s story as a reminder: notice those who quietly do their work.',      dur:'~80 sec' },
  { id:14, ch:'gl', block:'manip', theme:'emotion',   fairy:'Father Frost',           title:'They left the girl alone in the forest',     desc:'Behind the beautiful story — a child with no protector and twenty below.',     dur:'~80 sec' },
  { id:15, ch:'tv', block:'manip', theme:'emotion',   fairy:'Father Frost',           title:'Everyone gets what they deserve',             desc:'Both girls met the same character. The only difference was how they behaved.', dur:'~75 sec' },
  { id:16, ch:'gl', block:'manip', theme:'emotion',   fairy:'Father Frost',           title:'Who sent Marfa into the forest?',             desc:'Marfa was a child too. The decision to send her into the cold was not hers.',  dur:'~80 sec' },
  { id:17, ch:'tv', block:'manip', theme:'source',    fairy:'Ivan Tsarevich',         title:'The tsar decreed: the youngest son is worthy', desc:'The decree is signed. The brothers\' position is not in the protocol.',     dur:'~80 sec' },
  { id:18, ch:'gl', block:'manip', theme:'source',    fairy:'Ivan Tsarevich',         title:'The eldest heir also had a claim',           desc:'Many at court disagree with the decree. They just don\'t say it aloud.',      dur:'~80 sec' },
  { id:19, ch:'tv', block:'manip', theme:'source',    fairy:'Ivan Tsarevich',         title:'The court sage explained the omen',          desc:'Prokhor — the only recognised expert. No others were consulted.',             dur:'~80 sec' },
  { id:20, ch:'gl', block:'manip', theme:'source',    fairy:'Ivan Tsarevich',         title:'But Baba Yaga had warned him',               desc:'Rumours at court: Ivan did not win alone. We found someone who was there.',   dur:'~80 sec' },
  { id:21, ch:'gl', block:'fake',  theme:'whatfake',  fairy:'The Round Bun',          title:'The Bun has gone missing',                   desc:'The Crier publishes urgent news: one source, the fox unquestioned, 47 min.',  dur:'~80 sec' },
  { id:22, ch:'tv', block:'fake',  theme:'whatfake',  fairy:'The Round Bun',          title:'The Bun is found. Here is what that means',  desc:'The Herald finds the Bun and breaks down what the Crier got wrong.',         dur:'~80 sec' },
  { id:23, ch:'gl', block:'fake',  theme:'whatfake',  fairy:'The Round Bun',          title:'New information on the Bun case',            desc:'The Crier adds a second witness and an anonymous letter. The fake grows.',    dur:'~80 sec' },
  { id:24, ch:'tv', block:'fake',  theme:'whatfake',  fairy:'The Round Bun',          title:'Why the Bun story is still alive',           desc:'The correction never catches the headline. The anchoring effect in action.', dur:'~80 sec' },
  { id:25, ch:'tv', block:'fake',  theme:'sindbad',   fairy:'Sinbad',                 title:'Sinbad warns: the eastern route is closed',  desc:'One witness, a legendary sailor. Merchants are already changing routes.',     dur:'~80 sec' },
  { id:26, ch:'gl', block:'fake',  theme:'sindbad',   fairy:'Sinbad',                 title:'Sinbad saw the serpent. We asked questions', desc:'Three captains sailed the same route without incident. What does that mean?',  dur:'~80 sec' },
  { id:27, ch:'tv', block:'fake',  theme:'sindbad',   fairy:'Sinbad',                 title:'Witnesses confirm: something is in the strait', desc:'Sounds, torn nets, a father\'s tale. None of them saw the creature.',     dur:'~80 sec' },
  { id:28, ch:'gl', block:'fake',  theme:'sindbad',   fairy:'Sinbad',                 title:'Merchant Omar just returned from the strait', desc:'Same route. No serpent. The trade routes have already changed.',            dur:'~85 sec' },
];

const THEMES = {
  agenda:    { title:'Agenda Setting',          icon:'📋', fairy:'Little Red Riding Hood', url:'theory-agenda.html',    block:'Block 1 · Manipulation' },
  framing:   { title:'Framing',                 icon:'🖼️', fairy:'Cinderella',             url:'theory-framing.html',   block:'Block 1 · Manipulation' },
  narrative: { title:'Narrative: hero & villain',icon:'🦸', fairy:'Three Little Pigs',     url:'theory-narrative.html', block:'Block 1 · Manipulation' },
  emotion:   { title:'Emotional Impact',        icon:'❤️', fairy:'Father Frost',            url:'theory-emotion.html',   block:'Block 1 · Manipulation' },
  source:    { title:'Source and Authority',    icon:'🎙️', fairy:'Ivan Tsarevich',         url:'theory-source.html',    block:'Block 1 · Manipulation' },
};

const SOURCES = [
  { author:'Ilchenko S.N.', work:'Fake news in electronic media practice (2018)', desc:'Main typology of fakes, credibility criteria, visual and textual fakes. Mediascope.', tag:'fake' },
  { author:'Ilchenko S.N.', work:'Fake news as a social phenomenon (2019)', desc:'Social mechanisms of disinformation spread. Bulletin of SPbSU.', tag:'fake' },
  { author:'Ilchenko S.N.', work:'Criteria for media message credibility (2020)', desc:'Five criteria for verifying media messages. SPbSU.', tag:'fake' },
  { author:'Wardle C.', work:'Fake News. It\'s Complicated (2017)', desc:'Seven types of information disorder. First Draft — international classification standard.', tag:'fake' },
  { author:'Wardle C. + Derakhshan H.', work:'Information Disorder (2017)', desc:'Council of Europe report. Disinformation as an ecosystem, not an isolated phenomenon.', tag:'fake' },
  { author:'Vosoughi, Roy, Aral', work:'The Spread of True and False News Online (2018)', desc:'False news spreads 6x faster than true news. Science, Vol. 359.', tag:'fake' },
  { author:'Nickerson R.S.', work:'Confirmation Bias: A Ubiquitous Phenomenon (1998)', desc:'Confirmation bias as a universal cognitive phenomenon. Review of General Psychology.', tag:'fake' },
  { author:'Sunstein C.', work:'#Republic: Divided Democracy (2017)', desc:'Echo chambers and information bubbles in the digital environment. Princeton UP.', tag:'fake' },
  { author:'Tandoc et al.', work:'Defining "Fake News" (2018)', desc:'Academic definition of fake news through six content types. Digital Journalism, Vol. 6.', tag:'fake' },
  { author:'Fedorov A.V.', work:'Media Education: History, Theory and Methodology (2007)', desc:'Media literacy as an educational discipline. Rostov-on-Don.', tag:'both' },
  { author:'McCombs & Shaw', work:'The Agenda-Setting Function of Mass Media (1972)', desc:'Foundational work on agenda-setting theory. Public Opinion Quarterly.', tag:'manip' },
  { author:'Entman R.', work:'Framing: Toward Clarification (1993)', desc:'Classic definition of framing and its four functions. Journal of Communication.', tag:'manip' },
  { author:'Hall S.', work:'Encoding/Decoding (1973)', desc:'Media message encoding as always a positioned act. CCCS Birmingham.', tag:'manip' },
  { author:'Lazarsfeld P.', work:'The People\'s Choice (1944)', desc:'Two-step flow model and the role of opinion leaders. Columbia UP.', tag:'manip' },
  { author:'Propp V.', work:'Morphology of the Folktale (1928)', desc:'Structural analysis of fairy tale narrative — foundation for understanding media narrative.', tag:'manip' },
  { author:'Barthes R.', work:'Introduction to the Structural Analysis of Narratives (1966)', desc:'Applying narrative analysis to media texts. Communications.', tag:'manip' },
  { author:'Bourdieu P.', work:'On Television (1996)', desc:'Mechanisms of information selection, emotional impact and agenda closure.', tag:'both' },
  { author:'Voitasik L.', work:'Psychology of Political Propaganda (1981)', desc:'Emotional mechanisms of persuasive communication. Progress Publishers.', tag:'manip' },
  { author:'Goffman I.', work:'Frame Analysis (1974)', desc:'Frame as a basic cognitive mechanism for interpreting reality.', tag:'manip' },
  { author:'Baudrillard J.', work:'Simulacra and Simulation (1981)', desc:'Media reality as a system of signs detached from referents.', tag:'manip' },
];

/* ── COMPONENTS ─────────────────────────────────────────────────────────── */

function renderNav(active) {
  const links = [
    { href:'index.html',       label:'Home' },
    { href:'archive.html',     label:'Episodes' },
    { href:'index.html#study', label:'Study' },
    { href:'sources.html',     label:'Sources' },
    { href:'channels.html',    label:'Outlets' },
    { href:'teachers.html',    label:'Educators' },
    { href:'next.html',        label:'Coming up' },
  ];
  return `
  <nav class="nav">
    <a href="index.html" class="nav-logo"><img src="logo.png" alt="Точно не новости" style="height:36px;width:auto;display:block;" /></a>
    <ul class="nav-links">
      ${links.map(l=>`<li><a href="${l.href}"${active===l.label?' class="active"':''}>${l.label}</a></li>`).join('')}
    </ul>
    <div class="nav-right">
      <div class="lang-sw">
        <button class="lang-btn" onclick="window.location.href='../index.html'">РУС</button>
        <button class="lang-btn active">ENG</button>
        <button class="lang-btn" onclick="window.location.href='../kz/index.html'">ҚАЗ</button>
      </div>
    </div>
  </nav>`;
}

function renderFooter() {
  return `
  <footer class="footer">
    <div class="footer-inner">
      <div>
        <div class="footer-logo"><img src="logo.png" alt="Точно не новости" style="height:36px;width:auto;display:block;" /></div>
        <div class="footer-tagline">Educational media project on media literacy.<br>Fairy tales don't lie — they just leave things out.</div>
      </div>
      <div class="footer-col">
        <h4>Sections</h4>
        <a href="index.html">Home</a>
        <a href="archive.html">Episode archive</a>
        <a href="index.html#study">Study</a>
        <a href="sources.html">Sources</a>
        <a href="channels.html">About the outlets</a>
        <a href="teachers.html">Educators</a>
        <a href="next.html">Coming up</a>
      </div>
      <div class="footer-col">
        <h4>Author</h4>
        <a href="https://t.me/Satamirika" target="_blank">Polina · @Satamirika</a>
        <a href="https://t.me/Satamirika" target="_blank">Message on Telegram</a>
        <a href="https://t.me/Satamirika" target="_blank">Suggest a topic or fairy tale</a>
        <br>
        <h4 style="margin-top:16px;">Languages</h4>
        <a href="../index.html">Русская версия</a>
        <a href="../kz/index.html">Қазақша нұсқасы</a>
      </div>
    </div>

    <div class="footer-socials">
      <a href="https://t.me/tochnonenovosty" target="_blank" class="soc-btn tg">Telegram</a>
      <a href="https://vk.ru/club239595977" target="_blank" class="soc-btn vk">VKontakte</a>
      <a href="https://youtube.com/channel/UCzxYMKF2J5LMS5PSxNXQ5iw" target="_blank" class="soc-btn yt">YouTube</a>
      <a href="https://www.tiktok.com/@definitelynotnewsru" target="_blank" class="soc-btn tt">TikTok</a>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2025 Definitely Not News · Polina · @Satamirika</span>
      <span class="footer-copy">Created as part of the HSE St. Petersburg educational programme</span>
    </div>
  </footer>`;
}

function renderEpCard(ep) {
  const ch = ep.ch === 'tv' ? 'The Royal Herald' : 'The First Crier';
  return `
  <div class="card ep-card">
    <div class="ep-head ${ep.ch}">
      <span class="ep-ch ${ep.ch}">${ch}</span>
      <span class="ep-num">Ep. ${ep.id}</span>
    </div>
    <div class="ep-body">
      <div class="ep-title">${ep.title}</div>
      <div class="ep-desc">${ep.desc}</div>
      <div class="ep-dur">⏱ ${ep.dur} · 📖 ${ep.fairy}</div>
    </div>
  </div>`;
}

function renderBackBtn(label, href) {
  return `<a href="${href||'index.html#study'}" class="back-btn">← ${label||'Study'}</a>`;
}
