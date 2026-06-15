/* ── SHARED DATA (KZ) ───────────────────────────────────────────────────── */

const EPISODES = [
  { id:1,  ch:'tv', block:'manip', theme:'agenda',    fairy:'Қызыл қалпақша',   title:'Орманда тағы да тыныштық жоқ',               desc:'Хабаршы басты жаңалықты жариялайды: қасқыр ұсталды, бәрі аман.',              dur:'~80 сек' },
  { id:2,  ch:'gl', block:'manip', theme:'agenda',    fairy:'Қызыл қалпақша',   title:'Қызды жалғыз жіберген',                       desc:'Жариялаушы ешкім қоймаған сұрақты қояды: неге бала жалғыз жүрді?',            dur:'~80 сек' },
  { id:3,  ch:'tv', block:'manip', theme:'agenda',    fairy:'Қызыл қалпақша',   title:'Ормандағы тәртіп қалпына келтірілді',         desc:'Хабаршы тақырыпты жабады: іс жабылды, жүйе жұмыс істеді.',                   dur:'~75 сек' },
  { id:4,  ch:'gl', block:'manip', theme:'agenda',    fairy:'Қызыл қалпақша',   title:'Қасқырларды ешкім санамайды',                 desc:'Жариялаушы тақырыпты ашық қалдырады: бір қасқыр — бұл соңы емес.',            dur:'~80 сек' },
  { id:5,  ch:'tv', block:'manip', theme:'framing',   fairy:'Күлқайда',          title:'Патша ұлы өзінің адамын тапты',              desc:'Бал монархияның жеңісі: патша ұлы ерекше зеректілік танытты.',               dur:'~80 сек' },
  { id:6,  ch:'gl', block:'manip', theme:'framing',   fairy:'Күлқайда',          title:'Қыз патша балынан қашып кетті',              desc:'Сол бал — жұмбақ пен протоколды бұзу туралы детектив хикаясы.',              dur:'~80 сек' },
  { id:7,  ch:'tv', block:'manip', theme:'framing',   fairy:'Күлқайда',          title:'Кебіс иесін тапты',                          desc:'Іздеу аяқталды, тәртіп орнады. Қалған жағдайлар маңызды емес.',              dur:'~75 сек' },
  { id:8,  ch:'gl', block:'manip', theme:'framing',   fairy:'Күлқайда',          title:'Өгей шеше кім және неге көршілер үндемеді?', desc:'Бақытты соңға дейін жылдар өтті. Неге ешкім ертерек араласпады?',           dur:'~80 сек' },
  { id:9,  ch:'tv', block:'manip', theme:'narrative', fairy:'Үш торайша',        title:'Құрылысшылар қауіпке қарсы тұрды',           desc:'Еңбек жеңді: Нафнаф қауіпті алдын ала болжап, үшеуін де құтқарды.',        dur:'~80 сек' },
  { id:10, ch:'gl', block:'manip', theme:'narrative', fairy:'Үш торайша',        title:'Қасқыр тек тамақ іздеді',                    desc:'Зұлым ба, əлде ығыстырылған ба? Бұл кімнің жағынан қарайтыныңызға байланысты.', dur:'~80 сек' },
  { id:11, ch:'tv', block:'manip', theme:'narrative', fairy:'Үш торайша',        title:'Болашаққа сабақ: берік сал',                 desc:'Басқарма қаланған жерді тексеріп, жаңа нормативтер шығаруда.',              dur:'~75 сек' },
  { id:12, ch:'gl', block:'manip', theme:'narrative', fairy:'Үш торайша',        title:'Неге үштің екеуі дайын болмады?',            desc:'Жалқаулық емес: Нафнафтың учаскесінің жанында карьер болды, ал ағаларынікінде — жоқ.', dur:'~80 сек' },
  { id:13, ch:'tv', block:'manip', theme:'emotion',   fairy:'Аяз ата',           title:'Еңбек марапатталды',                         desc:'Настеньканың хикаясы еске салады: өз ісін үнсіз атқаратындарды байқаңыз.',  dur:'~80 сек' },
  { id:14, ch:'gl', block:'manip', theme:'emotion',   fairy:'Аяз ата',           title:'Қызды орманда жалғыз қалдырды',              desc:'Сұлу хикаяның артында — жиырма градус аяз бен қорғаушысы жоқ бала.',        dur:'~80 сек' },
  { id:15, ch:'tv', block:'manip', theme:'emotion',   fairy:'Аяз ата',           title:'Әркім лайықтысын алады',                     desc:'Екі қыз да бір кейіпкермен кездесті. Олардың арасындағы айырмашылық — мінез-құлық.', dur:'~75 сек' },
  { id:16, ch:'gl', block:'manip', theme:'emotion',   fairy:'Аяз ата',           title:'Марфушаньканы орманға кім жіберді?',          desc:'Марфушанька да бала. Оны аязға жіберу шешімін ол қабылдамады.',             dur:'~80 сек' },
  { id:17, ch:'tv', block:'manip', theme:'source',    fairy:'Иван патша ұлы',    title:'Патша жарлады: кіші ұл лайықты',             desc:'Жарлыққа қол қойылды. Ағалардың ұстанымы ресми хаттамада жоқ.',            dur:'~80 сек' },
  { id:18, ch:'gl', block:'manip', theme:'source',    fairy:'Иван патша ұлы',    title:'Үлкен мұрагер де үміт артты',               desc:'Сарайда жарлықпен келіспейтіндер көп. Тек дауыстап айтпайды.',             dur:'~80 сек' },
  { id:19, ch:'tv', block:'manip', theme:'source',    fairy:'Иван патша ұлы',    title:'Сарай данышпаны болжамды түсіндірді',        desc:'Прохор — жалғыз мойындалған сарапшы. Басқаларды шақырмаған.',              dur:'~80 сек' },
  { id:20, ch:'gl', block:'manip', theme:'source',    fairy:'Иван патша ұлы',    title:'Ал Баба Яга ескерткен болатын',             desc:'Сарайда қауесет бар: Иван жалғыз жеңген жоқ. Біз жанында болғанды таптық.', dur:'~80 сек' },
  { id:21, ch:'gl', block:'fake',  theme:'whatfake',  fairy:'Домалақ нан',        title:'Домалақ нан жоғалып кетті',                  desc:'Жариялаушы шұғыл жаңалық жариялайды: бір дерек, түлкі сұралмаған, 47 минут.', dur:'~80 сек' },
  { id:22, ch:'tv', block:'fake',  theme:'whatfake',  fairy:'Домалақ нан',        title:'Домалақ нан табылды. Мұның мәні не',         desc:'Хабаршы нанды тауып, Жариялаушының нені қате жасағанын талдайды.',          dur:'~80 сек' },
  { id:23, ch:'gl', block:'fake',  theme:'whatfake',  fairy:'Домалақ нан',        title:'Домалақ нан ісі бойынша жаңа мәліметтер',   desc:'Жариялаушы екінші куәгер мен анонимді хат қосады. Фейк өседі.',            dur:'~80 сек' },
  { id:24, ch:'tv', block:'fake',  theme:'whatfake',  fairy:'Домалақ нан',        title:'Домалақ нан туралы хикая неге тіршілік етеді', desc:'Түзету жаңалықты қуып жете алмайды. Якорь эффектісі іс жүзінде.',       dur:'~80 сек' },
  { id:25, ch:'tv', block:'fake',  theme:'sindbad',   fairy:'Синдбад',            title:'Синдбад ескертеді: шығыс жолы жабық',        desc:'Жалғыз куәгер, аты шыққан теңізші. Саудагерлер маршрутты ауыстыруда.',    dur:'~80 сек' },
  { id:26, ch:'gl', block:'fake',  theme:'sindbad',   fairy:'Синдбад',            title:'Синдбад жыланды көрді. Біз бірнеше сұрақ қойдық', desc:'Үш капитан сол жолмен өтті, ешбір оқиғасыз. Бұл не білдіреді?',    dur:'~80 сек' },
  { id:27, ch:'tv', block:'fake',  theme:'sindbad',   fairy:'Синдбад',            title:'Куәгерлер растайды: бұғазда бірдеңе бар',    desc:'Дыбыстар, жыртылған аулалар, әкенің хикаясы. Ешкім тіршілікті өз көзімен көрмеген.', dur:'~80 сек' },
  { id:28, ch:'gl', block:'fake',  theme:'sindbad',   fairy:'Синдбад',            title:'Саудагер Омар Янтарь бұғазынан жаңа ғана оралды', desc:'Сол маршрутпен өтті. Жылан жоқ. Маршруттар ауыстырылып қойды.',     dur:'~85 сек' },
];

function renderNav(active) {
  const links = [
    { href:'index.html',       label:'Басты' },
    { href:'archive.html',     label:'Эпизодтар' },
    { href:'index.html#study', label:'Оқу үшін' },
    { href:'sources.html',     label:'Дереккөздер' },
    { href:'channels.html',    label:'Басылымдар' },
    { href:'teachers.html',    label:'Педагогтарға' },
    { href:'next.html',        label:'Жоспар' },
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
        <button class="lang-btn" onclick="window.location.href='../en/index.html'">ENG</button>
        <button class="lang-btn active">ҚАЗ</button>
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
        <div class="footer-tagline">Медиасауаттылық туралы ағартушылық медиа жобасы.<br>Ертегілер өтірік айтпайды — тек барлығын айтпайды.</div>
      </div>
      <div class="footer-col">
        <h4>Бөлімдер</h4>
        <a href="index.html">Басты бет</a>
        <a href="archive.html">Эпизодтар мұрағаты</a>
        <a href="index.html#study">Оқу үшін</a>
        <a href="sources.html">Дереккөздер</a>
        <a href="channels.html">Басылымдар туралы</a>
        <a href="teachers.html">Педагогтарға</a>
        <a href="next.html">Жоспар</a>
      </div>
      <div class="footer-col">
        <h4>Жоба авторы</h4>
        <a href="https://t.me/Satamirika" target="_blank">Полина · @Satamirika</a>
        <a href="https://t.me/Satamirika" target="_blank">Telegram-да жазу</a>
        <a href="https://t.me/Satamirika" target="_blank">Тақырып немесе ертегі ұсыну</a>
        <br><h4 style="margin-top:16px;">Тілдер</h4>
        <a href="../index.html">Русская версия</a>
        <a href="../en/index.html">English version</a>
      </div>
    </div>

    <div class="footer-socials">
      <a href="https://t.me/tochnonenovosty" target="_blank" class="soc-btn tg">Telegram</a>
      <a href="https://vk.ru/club239595977" target="_blank" class="soc-btn vk">ВКонтакте</a>
      <a href="https://youtube.com/channel/UCzxYMKF2J5LMS5PSxNXQ5iw" target="_blank" class="soc-btn yt">YouTube</a>
      <a href="https://www.tiktok.com/@definitelynotnewsru" target="_blank" class="soc-btn tt">TikTok</a>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2025 Дәлемес жоқ жаңалықтар · Полина · @Satamirika</span>
      <span class="footer-copy">ВШЭ Санкт-Петербург білім бағдарламасы аясында жасалды</span>
    </div>
  </footer>`;
}

function renderEpCard(ep) {
  const ch = ep.ch === 'tv' ? 'Патша хабаршысы' : 'Бірінші жариялаушы';
  return `<div class="card ep-card"><div class="ep-head ${ep.ch}"><span class="ep-ch ${ep.ch}">${ch}</span><span class="ep-num">Эп. ${ep.id}</span></div><div class="ep-body"><div class="ep-title">${ep.title}</div><div class="ep-desc">${ep.desc}</div><div class="ep-dur">⏱ ${ep.dur} · 📖 ${ep.fairy}</div></div></div>`;
}

function renderBackBtn(label, href) {
  return `<a href="${href||'index.html#study'}" class="back-btn">← ${label||'Оқу үшін'}</a>`;
}

const SOURCES = [
  { author:'Ильченко С.Н.', work:'Фейк электронды БАҚ тәжірибесінде (2018)', desc:'Фейктердің негізгі типологиясы, сенімділік критерийлері.', tag:'fake' },
  { author:'Wardle C.', work:'Fake News. It\'s Complicated (2017)', desc:'Ақпараттық бұзушылықтың жеті түрі. First Draft.', tag:'fake' },
  { author:'Vosoughi, Roy, Aral', work:'The Spread of True and False News Online (2018)', desc:'Жалған жаңалықтар шынайыларға қарағанда 6 есе жылдам таралады.', tag:'fake' },
  { author:'McCombs & Shaw', work:'The Agenda-Setting Function of Mass Media (1972)', desc:'Күн тәртібі теориясының негізін қалаушы еңбек.', tag:'manip' },
  { author:'Entman R.', work:'Framing: Toward Clarification (1993)', desc:'Фреймингтің классикалық анықтамасы және оның төрт функциясы.', tag:'manip' },
  { author:'Hall S.', work:'Encoding/Decoding (1973)', desc:'Медиа хабарламаны кодтау позициялық акт ретінде.', tag:'manip' },
  { author:'Lazarsfeld P.', work:'The People\'s Choice (1944)', desc:'Коммуникацияның екі деңгейлі моделі.', tag:'manip' },
  { author:'Propp V.', work:'Ертегінің морфологиясы (1928)', desc:'Ертегі нарративінің құрылымдық талдауы.', tag:'manip' },
  { author:'Бурдье П.', work:'Телевидение туралы (1996)', desc:'Ақпаратты іріктеу механизмдері және эмоциялық әсер.', tag:'both' },
  { author:'Войтасик Л.', work:'Саяси насихат психологиясы (1981)', desc:'Сендіру коммуникациясындағы эмоциялық механизмдер.', tag:'manip' },
];
