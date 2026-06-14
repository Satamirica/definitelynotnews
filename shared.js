/* ── SHARED DATA ─────────────────────────────────────────────────────────── */

const EPISODES = [
  { id:1,  ch:'tv', block:'manip', theme:'agenda',    fairy:'Красная Шапочка', title:'В лесу снова неспокойно',                      desc:'Вестник освещает главное событие дня — волк задержан, все в безопасности.',                   dur:'~80 сек' },
  { id:2,  ch:'gl', block:'manip', theme:'agenda',    fairy:'Красная Шапочка', title:'Девочку отправили одну',                       desc:'Глашатай задаёт вопрос, который никто не задал: почему ребёнок шёл один.',                  dur:'~80 сек' },
  { id:3,  ch:'tv', block:'manip', theme:'agenda',    fairy:'Красная Шапочка', title:'Порядок в лесу восстановлен',                  desc:'Вестник закрывает повестку: дело закрыто, система сработала.',                              dur:'~75 сек' },
  { id:4,  ch:'gl', block:'manip', theme:'agenda',    fairy:'Красная Шапочка', title:'Волков в лесу больше не считают',              desc:'Глашатай держит тему открытой: один волк — это ещё не конец истории.',                      dur:'~80 сек' },
  { id:5,  ch:'tv', block:'manip', theme:'framing',   fairy:'Золушка',         title:'Принц нашёл своего человека',                  desc:'Бал как триумф монархии: принц проявил исключительную проницательность.',                   dur:'~80 сек' },
  { id:6,  ch:'gl', block:'manip', theme:'framing',   fairy:'Золушка',         title:'Девушка сбежала с королевского бала',          desc:'Тот же бал — детективная история с загадкой и нарушением протокола.',                      dur:'~80 сек' },
  { id:7,  ch:'tv', block:'manip', theme:'framing',   fairy:'Золушка',         title:'Туфелька нашла хозяйку',                      desc:'Поиск завершён, порядок восстановлен. Прочие обстоятельства несущественны.',                dur:'~75 сек' },
  { id:8,  ch:'gl', block:'manip', theme:'framing',   fairy:'Золушка',         title:'Кто такая мачеха и почему молчали соседи?',    desc:'До счастливого конца были годы. Почему никто не вмешался раньше?',                         dur:'~80 сек' },
  { id:9,  ch:'tv', block:'manip', theme:'narrative', fairy:'Три поросёнка',   title:'Строители устояли перед угрозой',              desc:'Трудолюбие победило: Наф-Наф предвидел угрозу и спас всех троих.',                         dur:'~80 сек' },
  { id:10, ch:'gl', block:'manip', theme:'narrative', fairy:'Три поросёнка',   title:'Волк просто искал еду',                       desc:'Злодей или вытесненный? Это зависит от того, с чьей стороны смотреть.',                    dur:'~80 сек' },
  { id:11, ch:'tv', block:'manip', theme:'narrative', fairy:'Три поросёнка',   title:'Урок на будущее: стройте надёжно',            desc:'Управа провела осмотр и выпускает новые нормативы. Репортаж с места.',                     dur:'~75 сек' },
  { id:12, ch:'gl', block:'manip', theme:'narrative', fairy:'Три поросёнка',   title:'Почему двое из троих оказались не готовы?',   desc:'Дело не в лени: у Наф-Нафа был карьер рядом с участком, а у братьев — нет.',             dur:'~80 сек' },
  { id:13, ch:'tv', block:'manip', theme:'emotion',   fairy:'Морозко',         title:'Трудолюбие вознаграждено',                    desc:'История Настеньки как напоминание: замечайте тех, кто тихо делает своё дело.',             dur:'~80 сек' },
  { id:14, ch:'gl', block:'manip', theme:'emotion',   fairy:'Морозко',         title:'Девочку оставили в лесу одну',                desc:'За красивой историей — ребёнок без защитника в доме и мороз двадцать градусов.',           dur:'~80 сек' },
  { id:15, ch:'tv', block:'manip', theme:'emotion',   fairy:'Морозко',         title:'Каждый получает по заслугам',                 desc:'Обе девушки встретили одного персонажа. Всё, что между ними разного — поведение.',          dur:'~75 сек' },
  { id:16, ch:'gl', block:'manip', theme:'emotion',   fairy:'Морозко',         title:'Кто отправил Марфушеньку в лес?',             desc:'Марфушенька тоже ребёнок. Решение отправить её в мороз принял не она.',                   dur:'~80 сек' },
  { id:17, ch:'tv', block:'manip', theme:'source',    fairy:'Иван-царевич',    title:'Царь повелел: младший сын достоин',           desc:'Указ подписан. Позиция братьев в официальном протоколе не отражена.',                      dur:'~80 сек' },
  { id:18, ch:'gl', block:'manip', theme:'source',    fairy:'Иван-царевич',    title:'Старший наследник тоже претендовал',          desc:'Многие при дворе с указом не согласны. Просто вслух об этом не говорят.',                  dur:'~80 сек' },
  { id:19, ch:'tv', block:'manip', theme:'source',    fairy:'Иван-царевич',    title:'Мудрец при дворе объяснил знамение',          desc:'Прохор Артемьевич — единственный признанный эксперт. Других не привлекали.',              dur:'~80 сек' },
  { id:20, ch:'gl', block:'manip', theme:'source',    fairy:'Иван-царевич',    title:'А Баба-Яга предупреждала',                    desc:'При дворе ходят слухи: Иван выиграл не без помощи. Мы нашли того, кто был рядом.',        dur:'~80 сек' },
  { id:21, ch:'gl', block:'fake',  theme:'whatfake',  fairy:'Колобок',         title:'Колобок пропал',                              desc:'Глашатай публикует срочную новость: один источник, лиса не опрошена, 47 минут.',           dur:'~80 сек' },
  { id:22, ch:'tv', block:'fake',  theme:'whatfake',  fairy:'Колобок',         title:'Колобок нашёлся. И вот что это значит',       desc:'Вестник нашёл Колобка и разбирает: что именно не проверил Глашатай.',                      dur:'~80 сек' },
  { id:23, ch:'gl', block:'fake',  theme:'whatfake',  fairy:'Колобок',         title:'Новые сведения по делу Колобка',              desc:'Глашатай добавляет второго свидетеля и анонимное письмо. Фейк обрастает.',                  dur:'~80 сек' },
  { id:24, ch:'tv', block:'fake',  theme:'whatfake',  fairy:'Колобок',         title:'Почему история о Колобке всё ещё живёт',      desc:'Поправка не догоняет новость. Якорный эффект в действии.',                                 dur:'~80 сек' },
  { id:25, ch:'tv', block:'fake',  theme:'sindbad',   fairy:'Синдбад',         title:'Синдбад предупреждает: восточный путь закрыт', desc:'Единственный очевидец, авторитетный мореход. Купцы уже меняют маршруты.',                 dur:'~80 сек' },
  { id:26, ch:'gl', block:'fake',  theme:'sindbad',   fairy:'Синдбад',         title:'Синдбад видел змея. Мы задали несколько вопросов', desc:'Три капитана прошли тем же путём без происшествий. Что это значит?',                 dur:'~80 сек' },
  { id:27, ch:'tv', block:'fake',  theme:'sindbad',   fairy:'Синдбад',         title:'Свидетели подтверждают: в проливе что-то есть', desc:'Звуки, порванные сети, рассказы отца. Ни один не видел существо лично.',                dur:'~80 сек' },
  { id:28, ch:'gl', block:'fake',  theme:'sindbad',   fairy:'Синдбад',         title:'Купец Омар только что вернулся из Янтарного пролива', desc:'Прошёл тем же маршрутом. Никакого змея. Маршруты уже изменены.',               dur:'~85 сек' },
];

const THEMES = {
  agenda:    { title:'Повестка дня',              icon:'📋', fairy:'Красная Шапочка', url:'theory-agenda.html',    block:'Блок 1 · Манипуляции' },
  framing:   { title:'Фрейминг',                 icon:'🖼️', fairy:'Золушка',          url:'theory-framing.html',   block:'Блок 1 · Манипуляции' },
  narrative: { title:'Нарратив: герой и злодей', icon:'🦸', fairy:'Три поросёнка',    url:'theory-narrative.html', block:'Блок 1 · Манипуляции' },
  emotion:   { title:'Эмоциональное воздействие',icon:'❤️', fairy:'Морозко',          url:'theory-emotion.html',   block:'Блок 1 · Манипуляции' },
  source:    { title:'Источник и авторитет',     icon:'🎙️', fairy:'Иван-царевич',     url:'theory-source.html',    block:'Блок 1 · Манипуляции' },
};

const SOURCES = [
  { author:'Ильченко С.Н.', work:'Фейк в практике электронных СМИ (2018)', desc:'Основная типология фейков, критерии достоверности, визуальные и текстовые фейки. Медиаскоп.', tag:'fake' },
  { author:'Ильченко С.Н.', work:'Фейк как социальный феномен (2019)', desc:'Социальные механизмы распространения дезинформации. Вестник СПбГУ.', tag:'fake' },
  { author:'Ильченко С.Н.', work:'Критерии достоверности медиасообщений (2020)', desc:'Пять критериев проверки медиасообщения. СПбГУ.', tag:'fake' },
  { author:'Wardle C.', work:'Fake News. It\'s Complicated (2017)', desc:'Семь типов информационного расстройства. First Draft — международный стандарт классификации.', tag:'fake' },
  { author:'Wardle C. + Derakhshan H.', work:'Information Disorder (2017)', desc:'Доклад Совета Европы. Дезинформация как экосистема, а не отдельное явление.', tag:'fake' },
  { author:'Vosoughi, Roy, Aral', work:'The Spread of True and False News Online (2018)', desc:'Ложные новости распространяются в 6 раз быстрее правдивых. Science, Vol. 359.', tag:'fake' },
  { author:'Nickerson R.S.', work:'Confirmation Bias: A Ubiquitous Phenomenon (1998)', desc:'Предвзятость подтверждения как универсальный когнитивный феномен. Review of General Psychology.', tag:'fake' },
  { author:'Sunstein C.', work:'#Republic: Divided Democracy (2017)', desc:'Эхо-камеры и информационные пузыри в цифровой среде. Princeton UP.', tag:'fake' },
  { author:'Tandoc et al.', work:'Defining "Fake News" (2018)', desc:'Академическое определение фейка через шесть типов контента. Digital Journalism, Vol. 6.', tag:'fake' },
  { author:'Фёдоров А.В.', work:'Медиаобразование: история, теория и методика (2007)', desc:'Медиаграмотность как образовательная дисциплина. Ростов-на-Дону.', tag:'both' },
  { author:'McCombs & Shaw', work:'The Agenda-Setting Function of Mass Media (1972)', desc:'Основополагающая работа по теории повестки дня. Public Opinion Quarterly.', tag:'manip' },
  { author:'Entman R.', work:'Framing: Toward Clarification of a Fractured Paradigm (1993)', desc:'Классическое определение фрейминга и его четыре функции. Journal of Communication.', tag:'manip' },
  { author:'Hall S.', work:'Encoding/Decoding (1973)', desc:'Кодирование медиасообщений как всегда позиционированный акт. CCCS Birmingham.', tag:'manip' },
  { author:'Lazarsfeld P.', work:'The People\'s Choice (1944)', desc:'Двухуровневая модель коммуникации и роль лидеров мнений. Columbia UP.', tag:'manip' },
  { author:'Propp V.', work:'Морфология сказки (1928)', desc:'Структурный анализ сказочного нарратива — основа для понимания медийного нарратива.', tag:'manip' },
  { author:'Barthes R.', work:'Introduction to the Structural Analysis of Narratives (1966)', desc:'Перенос нарративного анализа на медиатексты. Communications.', tag:'manip' },
  { author:'Бурдьё П.', work:'О телевидении (1996)', desc:'Механизмы отбора информации, эмоционального воздействия и закрытия повестки. Рус. пер. 2002.', tag:'both' },
  { author:'Войтасик Л.', work:'Психология политической пропаганды (1981)', desc:'Эмоциональные механизмы воздействия убеждающей коммуникации. Прогресс.', tag:'manip' },
  { author:'Гофман И.', work:'Анализ фреймов (1974)', desc:'Фрейм как базовый когнитивный механизм интерпретации реальности. Рус. пер. 2004.', tag:'manip' },
  { author:'Бодрийяр Ж.', work:'Симулякры и симуляция (1981)', desc:'Медиареальность как система знаков, оторванных от референтов. Рус. пер. 2015.', tag:'manip' },
];

/* ── SHARED COMPONENTS ───────────────────────────────────────────────────── */

function renderNav(activePage) {
  const links = [
    { href:'index.html',    label:'Главная' },
    { href:'archive.html',  label:'Эпизоды' },
    { href:'index.html#study', label:'Для изучения' },
    { href:'sources.html',  label:'Источники' },
    { href:'channels.html', label:'Издания' },
    { href:'teachers.html', label:'Педагогам' },
    { href:'next.html',     label:'Далее' },
  ];
  return `
  <nav class="nav">
    <a href="index.html" class="nav-logo">ТОЧНО <span class="ne">&nbsp;НЕ&nbsp;</span> НОВОСТИ</a>
    <ul class="nav-links">
      ${links.map(l=>`<li><a href="${l.href}"${activePage===l.label?' class="active"':''}>${l.label}</a></li>`).join('')}
    </ul>
    <div class="nav-right">
      <div class="lang-sw">
        <button class="lang-btn active" onclick="switchLang('ru')">РУС</button>
        <button class="lang-btn" onclick="switchLang('en')">ENG</button>
        <button class="lang-btn" onclick="switchLang('kz')">ҚАЗ</button>
      </div>
    </div>
  </nav>`;
}

function renderFooter() {
  return `
  <footer class="footer">
    <div class="footer-inner">
      <div>
        <div class="footer-logo">ТОЧНО <span class="ne">&nbsp;НЕ&nbsp;</span> НОВОСТИ</div>
        <div class="footer-tagline">Просветительский медиапроект о медиаграмотности.<br>Сказки не врут — просто не договаривают.</div>
      </div>
      <div class="footer-col">
        <h4>Разделы</h4>
        <a href="index.html">Главная</a>
        <a href="archive.html">Архив эпизодов</a>
        <a href="index.html#study">Для изучения</a>
        <a href="sources.html">Источники</a>
        <a href="channels.html">Об изданиях</a>
        <a href="teachers.html">Педагогам</a>
        <a href="next.html">Что будет далее</a>
      </div>
      <div class="footer-col">
        <h4>Автор проекта</h4>
        <a href="https://t.me/Satamirika" target="_blank">Полина · @Satamirika</a>
        <a href="https://t.me/Satamirika" target="_blank">Написать в Telegram</a>
        <a href="https://t.me/Satamirika" target="_blank">Предложить тему или сказку</a>
        <br>
        <h4 style="margin-top:16px;">Языки</h4>
        <a href="en/index.html">English version</a>
        <a href="kz/index.html">Қазақша нұсқасы</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2025 Точно не новости · Полина · @Satamirika</span>
      <span class="footer-copy">Проект создан в рамках образовательной программы ВШЭ Санкт-Петербург</span>
    </div>
  </footer>`;
}

function renderEpCard(ep) {
  const chName = ep.ch==='tv' ? 'Тридевятый вестник' : 'Первый глашатай';
  return `
  <div class="card ep-card">
    <div class="ep-head ${ep.ch}">
      <span class="ep-ch ${ep.ch}">${chName}</span>
      <span class="ep-num">Эп. ${ep.id}</span>
    </div>
    <div class="ep-body">
      <div class="ep-title">${ep.title}</div>
      <div class="ep-desc">${ep.desc}</div>
      <div class="ep-dur">⏱ ${ep.dur} · 📖 ${ep.fairy}</div>
    </div>
  </div>`;
}

/* Back button for theory pages */
function renderBackBtn(label, href) {
  return `<a href="${href||'index.html#study'}" class="back-btn">← ${label||'Для изучения'}</a>`;
}

/* Language switcher */
function switchLang(lang) {
  const cur = (window.location.pathname.split('/').pop() || 'index.html').replace(/^$/, 'index.html');
  const path = window.location.pathname;
  const inEn = path.indexOf('/en/') > -1;
  const inKz = path.indexOf('/kz/') > -1;

  if (lang === 'ru') {
    if (inEn || inKz) window.location.href = '../../' + cur;
    return;
  }
  if (lang === 'en') {
    if (inKz) window.location.href = '../en/' + cur;
    else if (!inEn) window.location.href = 'en/' + cur;
    return;
  }
  if (lang === 'kz') {
    if (inEn) window.location.href = '../kz/' + cur;
    else if (!inKz) window.location.href = 'kz/' + cur;
    return;
  }
}
  if (lang === 'en') {
    if (isInSubfolder && window.location.pathname.includes('/kz/')) {
      window.location.href = '../en/' + cur;
    } else if (!isInSubfolder) {
      window.location.href = 'en/' + cur;
    }
    return;
  }
  if (lang === 'kz') {
    if (isInSubfolder && window.location.pathname.includes('/en/')) {
      window.location.href = '../kz/' + cur;
    } else if (!isInSubfolder) {
      window.location.href = 'kz/' + cur;
    }
    return;
  }
}
