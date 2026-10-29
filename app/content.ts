// All page copy for both languages. The markup in PageView.tsx is shared, so a
// change made here lands on both the English and the Russian page.

/** A run of text, or a [label, href] pair rendered as a link. */
export type Seg = string | readonly [label: string, href: string];
export type Para = readonly Seg[];

export type CaseStudy = {
  label: string;
  title: string;
  body: readonly Para[];
};

export type Project = {
  n: string;
  title: string;
  subtitle: string;
  role: string;
  platforms: string;
  desc: string;
  contribution: string;
  tech: readonly string[];
  tone: string;
  link: string;
  store: string;
  image: string;
  imageAlt: string;
  note: string;
  caseStudy?: CaseStudy;
};

export type Job = {
  company: string;
  date: string;
  role: string;
  // One entry per paragraph: a job covering several projects gets one per project.
  text: readonly string[];
};

export type Lang = 'en' | 'ru';

export type Content = {
  lang: Lang;
  altLang: Lang;
  altHref: string;
  altLabel: string;
  altTitle: string;
  meta: { title: string; description: string; ogDescription: string };
  nav: { about: string; work: string; experience: string; cta: string; ctaAria: string };
  hero: { eyebrow: string; first: string; last: string; copy: string; link: string };
  about: { label: string; heading: readonly string[]; copy: string; note: string };
  work: {
    label: string;
    heading: string;
    sub: string;
    contribution: string;
    view: string;
  };
  experience: {
    label: string;
    heading: readonly string[];
    languages: readonly string[];
    educationLabel: string;
    education: readonly { school: string; degree: string }[];
  };
  contact: {
    label: string;
    lead: string;
    headingTop: string;
    headingEm: string;
    links: readonly { label: string; href: string }[];
    role: string;
    backToTop: string;
  };
  skills: readonly string[];
  projects: readonly Project[];
  jobs: readonly Job[];
};

const SEVEN_SINS = 'https://store.steampowered.com/app/5125700/Seven_Sins_Poker/';
const CARDSHARP = 'https://store.steampowered.com/app/5240920/Cardsharp_Cats_Magic_Card_Game/';

const CONTACT_LINKS = [
  { label: 'Telegram ↗', href: 'https://t.me/AlexPyriel' },
  { label: 'Email ↗', href: 'mailto:alex.boyarintsev@icloud.com' },
  { label: 'WhatsApp ↗', href: 'https://wa.me/995511132796' },
  { label: 'GitHub ↗', href: 'https://github.com/AlexPyriel' },
  { label: 'Gists ↗', href: 'https://gist.github.com/AlexPyriel' },
] as const;

export const en: Content = {
  lang: 'en',
  altLang: 'ru',
  altHref: '/ru/',
  altLabel: 'RU',
  altTitle: 'Читать по-русски',
  meta: {
    title: 'Aleksandr Boiarintsev — Senior Unity Developer',
    description:
      'Portfolio of Aleksandr Boiarintsev — Senior Unity Developer with 5+ years of commercial Unity game development and 14+ years in IT.',
    ogDescription:
      'Mobile and PC gameplay engineering, optimization, AI systems, and production delivery.',
  },
  nav: {
    about: 'About',
    work: 'Games',
    experience: 'Experience',
    cta: 'Let’s talk',
    ctaAria: 'Message Aleksandr on Telegram',
  },
  hero: {
    eyebrow: 'Senior Unity Developer · Mobile & PC Games',
    first: 'Aleksandr',
    last: 'Boiarintsev',
    copy: '14+ years in IT, 5+ of them building commercial Unity games for mobile and PC — from gameplay architecture to shipped, optimized builds.',
    link: '↓   Games & projects',
  },
  about: {
    label: '01 / About',
    heading: ['FROM PROTOTYPE', 'TO', 'PRODUCTION.'],
    copy: 'Senior Unity Developer building mobile and PC games — gameplay and AI systems, meta and progression, client-server features, and performance optimization.',
    note: 'Profiles CPU, GPU, memory and rendering, and takes features from technical planning through implementation, optimization and release.',
  },
  work: {
    label: '02 / Games & projects',
    heading: 'Games & projects',
    sub: 'Shipped mobile titles and a PC game in Steam Playtest.',
    contribution: 'Contribution',
    view: 'View project',
  },
  experience: {
    label: '03 / Experience',
    heading: ['Built for the', 'full production cycle.'],
    languages: [
      'English — C1 / Advanced',
      'German — B2 / Upper-Intermediate',
      'Russian — Native',
    ],
    educationLabel: 'Education',
    education: [
      { school: 'Taurida National University', degree: 'Bachelor, 2007–2011' },
      { school: 'National Technical University', degree: 'Bachelor, 2003–2007' },
    ],
  },
  contact: {
    label: '04 / Contact',
    lead: 'Have a game to build?',
    headingTop: 'Let’s make it',
    headingEm: 'play great.',
    links: CONTACT_LINKS,
    role: 'Senior Unity Developer',
    backToTop: 'Back to top ↑',
  },
  skills: [
    'Unity', 'C#', 'Android', 'iOS', 'PC', 'WebGL', 'IL2CPP', 'Gameplay Systems', 'uGUI',
    'Adaptive UI', 'OOP', 'SOLID', 'GoF', 'MVC / MVVM', 'Dependency Injection', 'Zenject',
    'VContainer', 'UniRx', 'UniTask', 'Progression', 'LiveOps', 'Meta-game Systems',
    'AI Behavior', 'Prototyping', 'Legacy Refactoring', 'Addressables', 'ScriptableObjects',
    'DOTween', 'URP', 'Unity Profiler', 'Memory Profiler', 'Frame Debugger',
    'CPU / GPU Optimization', 'Firebase', 'Ads / IAP', 'TeamCity', 'Mirror', 'Git', 'GitHub',
    'GitLab', 'Bitbucket',
  ],
  projects: [
    {
      n: '01',
      title: 'The Demon Wants to Marry the Princess or Lose Her at Poker',
      subtitle: 'Narrative Poker & Castle Meta',
      role: 'Sole Unity Developer',
      platforms: 'PC · Steam',
      desc: 'PC game that combines poker with narrative gameplay, on top of a castle-management meta layer with idle progression.',
      contribution:
        'Sole Unity developer across the entire project: Unity/C# architecture, poker and character/card systems, castle meta with idle progression and resource generation, responsive PC UI flows, debugging, refactoring, optimization, the Steam Playtest build, and codebase handover.',
      tech: ['Unity', 'C#', 'PC', 'Steam', 'Architecture', 'Idle Meta'],
      tone: 'crimson',
      link: 'https://store.steampowered.com/app/5240940/',
      store: 'Steam',
      image: '/demon-poker-showcase.jpg',
      imageAlt: 'The Demon Wants to Marry the Princess or Lose Her at Poker — gameplay',
      note: 'From scratch to Steam Playtest in six months part-time · 1,000+ wishlists in the first week',
      caseStudy: {
        label: 'Case study',
        title: 'Three concepts, one chosen for production',
        body: [
          ['One of my most recent projects was a narrative PC game with poker mechanics: The Demon Wants to Marry the Princess or Lose Her at Poker.'],
          ['The investor funded three independent teams, each developing its own poker-based concept.'],
          [
            'One team built a poker roguelike, ',
            ['Seven Sins Poker', SEVEN_SINS],
            '; another developed ',
            ['Cardsharp Cats: Magic Card Game', CARDSHARP],
            '; our team focused on a narrative poker game that combined card gameplay with storytelling, characters and additional game systems.',
          ],
          ['I was the only Unity developer on the team, so the entire technical implementation was mine: architecture, core gameplay mechanics, system integration, UI and preparing a playable build.'],
          ['During development I focused not only on the technical side, but on how all the systems worked together to create a complete and engaging player experience.'],
          ['Since we were building a prototype to validate the concept, setting the right priorities mattered — the mechanics with the greatest impact on gameplay came first.'],
          ['After public playtesting of all three concepts, our project received the most positive feedback from players. The investor decided to continue developing our game and shut down the other two projects.'],
          ['That mattered to me because we had not just built a technically functional prototype. We had made a product that demonstrated its appeal to players and was selected for further development.'],
          ['After successful playtesting and validation of the concept, I completed my part of the development and handed the project over for the next stage of production.'],
          ['I also passed on the technical information needed about the architecture and the implemented systems, so that another developer could continue work on the project.'],
          ['So I was involved across the whole process — from initial development and public playtesting to concept validation and handover for further production.'],
          ['The main achievement for me was that, out of three competing concepts, ours was the one selected for further development.'],
          ['This experience reinforced my belief that successful game development is not just about technically solid solutions. It is also about understanding the product as a whole, setting the right priorities, and focusing on what actually creates value for players.'],
        ],
      },
    },
    {
      n: '02',
      title: 'Gladiator School',
      subtitle: 'PvP Battles & Tactics',
      role: 'Senior Unity Developer',
      platforms: 'Android',
      desc: 'Mobile RPG / Strategy focused on long-term engagement, progression, and tactical battles.',
      contribution:
        'Gameplay and meta-game mechanics, retention systems, player progression loops, UI flows, gameplay iteration, bug fixing, polishing, and release preparation.',
      tech: ['Unity', 'C#', 'Android', 'uGUI', 'Meta-game'],
      tone: 'violet',
      link: 'https://www.rustore.ru/catalog/app/com.gladiators.school',
      store: 'RuStore',
      image: '/gladiator-school-showcase.png',
      imageAlt: 'Gladiator School — gameplay',
      note: 'Major update coming soon. App Store release to follow.',
    },
    {
      n: '03',
      title: 'Imperial Arx',
      subtitle: 'Naval Combat & Strategy',
      role: 'Senior / Lead Unity Developer',
      platforms: 'Android · iOS',
      desc: 'Mobile strategy / RTS built around naval combat: ship AI, targeting and shooting, city health, and enemy behavior at production scale.',
      contribution:
        'Led two Unity developers and built the ship AI — movement, routes, collision avoidance, formations, damage-based behavior and line-of-fire checks — alongside core combat, shop, UI, localization and Mirror client-server features. Improved performance from ~20 to 55 FPS and cut build size from ~300 MB to 100 MB.',
      tech: ['Unity', 'C#', 'Ship AI', 'URP', 'Addressables', 'Mirror'],
      tone: 'blue',
      link: 'https://play.google.com/store/apps/details?id=com.warvargames.imperialarx',
      store: 'Google Play',
      image: '/imperial-arx-showcase.png',
      imageAlt: 'Imperial Arx — gameplay',
      note: 'Currently available in the Philippines only.',
      caseStudy: {
        label: 'Case study',
        title: 'Balancing technical complexity and gameplay',
        body: [
          ['One of the most valuable experiences in my career was working on Imperial Arx, a naval combat game developed for Warvar Games.'],
          ['The client funded two teams working on the same concept in parallel: our team at APPFOX and an independent indie studio.'],
          ['The other team focused heavily on achieving realistic physics, including complex ballistic calculations, projectile trajectories and ship movement simulations.'],
          ['My approach was different. I believed our primary goal was not to build a highly accurate physics simulator, but to deliver a fully functional game with engaging combat mechanics.'],
          ['I started by identifying the core systems required to create a complete gameplay experience: ship controls, movement and navigation, combat mechanics, AI, user interfaces and performance optimization.'],
          ['My priority was to establish a complete and playable core gameplay loop, introducing additional technical complexity only where it genuinely improved the player experience.'],
          ['This approach helped us avoid spending excessive development time on unnecessary technical details and allowed us to make consistent progress across the entire game rather than focusing too heavily on individual mechanics.'],
          ['This experience reinforced one of my core development principles: solve the gameplay problem first, then choose the simplest technical solution that effectively supports it.'],
        ],
      },
    },
    {
      n: '04',
      title: 'Alien Apocalypse',
      subtitle: 'Survival',
      role: 'Senior Unity Developer',
      platforms: 'iOS',
      desc: 'Mobile survival title in live operation, with player-facing gameplay systems and ongoing production support.',
      contribution:
        'Gameplay features, UI, performance optimization, legacy refactoring, bug fixing, release stability, and production support.',
      tech: ['Unity', 'C#', 'iOS', 'LiveOps', 'Optimization'],
      tone: 'amber',
      link: 'https://apps.apple.com/us/app/alien-apocalypse-survival/id6739420672',
      store: 'App Store',
      image: '/alien-apocalypse-showcase.png',
      imageAlt: 'Alien Apocalypse — gameplay',
      note: '',
    },
  ],
  jobs: [
    {
      company: 'SKYSCOREGAMES',
      date: '05/2026 — 10/2026',
      role: 'Senior Unity Developer · Part-time / Project-based',
      text: [
        'Sole Unity developer of The Demon Wants to Marry the Princess or Lose Her at Poker, taking the PC game from scratch to Steam Playtest in six months of part-time development. Designed the Unity/C# architecture and implemented core gameplay — poker mechanics, narrative and character/card systems — alongside a castle-management meta-game with idle progression and resource generation. Owned technical planning, debugging, refactoring, optimization, preparation of the Playtest build, and handover of the codebase to another developer.',
      ],
    },
    {
      company: 'APPFOX',
      date: '07/2025 — Present',
      role: 'Senior Unity Developer · Project technical lead',
      text: [
        'Technical lead on Imperial Arx / Coastal Defense, a mobile strategy / RTS: led two Unity developers, reviewed and corrected code, clarified specifications, estimated work and coordinated with 3D artists, game design, QA and production. Implemented core gameplay, shop, targeting and shooting, city health, enemy behavior, UI, localization and Mirror client-server features, and built ship AI for movement, routes, collision avoidance, formations, damage-based behavior and line-of-fire checks. Improved performance from ~20 to 55 FPS and cut build size from ~300 to 100 MB through Addressables restructuring, compression and content cleanup, then handed code and technical documentation to Warvar Games and provided three months of consultation to onboard its team.',
        'On Gladiator School, one of two Senior Unity Developers shipping new mechanics and UI alongside meta, retention and progression features, gameplay iteration, polish, release preparation and cross-project Unity code reviews.',
      ],
    },
    {
      company: 'NDA · Idle Clicker',
      date: '01/2025 — 07/2025',
      role: 'Senior Unity Developer',
      text: [
        'Integrated Addressables and built data-driven RPG meta systems: gacha, progression, rewards, onboarding, mailbox, adaptive mobile UI, and production-ready features.',
      ],
    },
    {
      company: 'SOFTINTERMOB LLC',
      date: '09/2024 — 12/2024',
      role: 'Senior Unity Developer',
      text: [
        'Gameplay and production functionality, legacy refactoring, LiveOps, Battle Pass, daily rewards, promo codes, in-game offers, monetization, bug fixing, and release stability.',
      ],
    },
    {
      company: 'FREELANCE',
      date: '01/2021 — 09/2024',
      role: 'Unity Developer · Project-based',
      text: [
        'Gameplay features, UI, client-side functionality, prototyping, bug fixing, and delivery support.',
      ],
    },
    {
      company: 'INTEGRO LLC / BIZAPPS',
      date: '05/2012 — 09/2024',
      role: 'Business Analyst / Frontend Web Developer',
      text: [
        '12+ years in software development, B2B integrations, analytics, frontend development, and collaboration with international distributed teams.',
      ],
    },
  ],
};

export const ru: Content = {
  lang: 'ru',
  altLang: 'en',
  altHref: '/',
  altLabel: 'EN',
  altTitle: 'Read in English',
  meta: {
    title: 'Александр Бояринцев — Senior Unity Developer',
    description:
      'Портфолио Александра Бояринцева — Senior Unity Developer: 5+ лет коммерческой разработки игр на Unity и 14+ лет в IT.',
    ogDescription:
      'Геймплей для мобильных платформ и PC, оптимизация, AI-системы и доведение проектов до релиза.',
  },
  nav: {
    about: 'Обо мне',
    work: 'Игры',
    experience: 'Опыт',
    cta: 'Обсудить проект',
    ctaAria: 'Написать Александру в Telegram',
  },
  hero: {
    eyebrow: 'Senior Unity Developer · Мобильные и PC-игры',
    first: 'Александр',
    last: 'Бояринцев',
    copy: '14+ лет в IT, 5+ из них — коммерческая разработка игр на Unity для мобильных платформ и PC: от архитектуры геймплея до оптимизированных релизных сборок.',
    link: '↓   Игры и проекты',
  },
  about: {
    label: '01 / Обо мне',
    heading: ['ОТ ПРОТОТИПА', 'ДО', 'ПРОДАКШЕНА.'],
    copy: 'Senior Unity Developer, делаю игры для мобильных платформ и PC — геймплейные и AI-системы, мета и прогрессия, клиент-серверные механики, оптимизация производительности.',
    note: 'Профилирую CPU, GPU, память и рендеринг; веду фичи от технического планирования через реализацию и оптимизацию до релиза.',
  },
  work: {
    label: '02 / Игры и проекты',
    heading: 'Игры и проекты',
    sub: 'Вышедшие мобильные проекты и PC-игра в Steam Playtest.',
    contribution: 'Мой вклад',
    view: 'Открыть проект',
  },
  experience: {
    label: '03 / Опыт',
    heading: ['Готов к полному', 'циклу производства.'],
    languages: [
      'Английский — C1 / Advanced',
      'Немецкий — B2 / Upper-Intermediate',
      'Русский — родной',
    ],
    educationLabel: 'Образование',
    education: [
      { school: 'Таврический национальный университет', degree: 'Бакалавр, 2007–2011' },
      { school: 'Национальный технический университет', degree: 'Бакалавр, 2003–2007' },
    ],
  },
  contact: {
    label: '04 / Контакты',
    lead: 'Нужно сделать игру?',
    headingTop: 'Сделаем так,',
    headingEm: 'чтобы в неё играли.',
    links: CONTACT_LINKS,
    role: 'Senior Unity Developer',
    backToTop: 'Наверх ↑',
  },
  skills: [
    'Unity', 'C#', 'Android', 'iOS', 'PC', 'WebGL', 'IL2CPP', 'Геймплейные системы', 'uGUI',
    'Адаптивный UI', 'ООП', 'SOLID', 'GoF', 'MVC / MVVM', 'Dependency Injection', 'Zenject',
    'VContainer', 'UniRx', 'UniTask', 'Прогрессия', 'LiveOps', 'Мета-системы',
    'Поведение AI', 'Прототипирование', 'Рефакторинг легаси', 'Addressables',
    'ScriptableObjects', 'DOTween', 'URP', 'Unity Profiler', 'Memory Profiler',
    'Frame Debugger', 'Оптимизация CPU / GPU', 'Firebase', 'Реклама / IAP', 'TeamCity',
    'Mirror', 'Git', 'GitHub', 'GitLab', 'Bitbucket',
  ],
  projects: [
    {
      n: '01',
      title: 'The Demon Wants to Marry the Princess or Lose Her at Poker',
      subtitle: 'Нарративный покер и мета-слой замка',
      role: 'Единственный Unity-разработчик',
      platforms: 'PC · Steam',
      desc: 'PC-игра, в которой покер соединён с нарративным геймплеем поверх мета-слоя управления замком с idle-прогрессией.',
      contribution:
        'Единственный Unity-разработчик на всём проекте: архитектура на Unity/C#, покерные и карточно-персонажные системы, мета замка с idle-прогрессией и генерацией ресурсов, отзывчивый UI под PC, отладка, рефакторинг, оптимизация, сборка для Steam Playtest и передача кодовой базы.',
      tech: ['Unity', 'C#', 'PC', 'Steam', 'Архитектура', 'Idle-мета'],
      tone: 'crimson',
      link: 'https://store.steampowered.com/app/5240940/',
      store: 'Steam',
      image: '/demon-poker-showcase.jpg',
      imageAlt: 'The Demon Wants to Marry the Princess or Lose Her at Poker — геймплей',
      note: 'С нуля до Steam Playtest за шесть месяцев part-time · 1000+ вишлистов за первую неделю',
      caseStudy: {
        label: 'Разбор',
        title: 'Три концепта, в продакшен ушёл один',
        body: [
          ['Один из моих последних проектов — нарративная PC-игра с покерными механиками The Demon Wants to Marry the Princess or Lose Her at Poker.'],
          ['Инвестор профинансировал три независимые команды, каждая разрабатывала свой концепт на основе покера.'],
          [
            'Одна команда делала покерный рогалик ',
            ['Seven Sins Poker', SEVEN_SINS],
            ', другая — ',
            ['Cardsharp Cats: Magic Card Game', CARDSHARP],
            ', а наша работала над нарративным покером, где карточный геймплей соединялся с историей, персонажами и дополнительными игровыми системами.',
          ],
          ['Я был единственным Unity-разработчиком в команде, поэтому вся техническая реализация проекта была на мне: архитектура, основные геймплейные механики, интеграция систем, UI и подготовка играбельной сборки.'],
          ['В ходе разработки я занимался не только технической стороной, но и тем, как все системы работают вместе, создавая цельный и вовлекающий игровой опыт.'],
          ['Мы делали прототип для проверки концепта, поэтому было важно правильно расставить приоритеты и в первую очередь взяться за механики, сильнее всего влияющие на геймплей и впечатления игрока.'],
          ['После публичного плейтеста всех трёх концептов наш проект получил больше всего положительных отзывов от игроков. Инвестор решил продолжить разработку нашей игры и закрыть два других проекта.'],
          ['Для меня это было важным результатом, потому что мы сделали не просто технически работающий прототип. Мы сделали продукт, который доказал свою привлекательность для игроков и был выбран для дальнейшей разработки.'],
          ['После успешного тестирования и подтверждения концепции я завершил свою часть разработки и передал проект для следующего этапа производства.'],
          ['Я также передал необходимую техническую информацию об архитектуре и реализованных системах, чтобы другой разработчик мог продолжить работу над проектом.'],
          ['Таким образом, я прошёл с проектом весь путь — от первоначальной разработки и публичного плейтеста до валидации концепта и передачи в дальнейшее производство.'],
          ['Главным достижением для меня стало то, что из трёх конкурирующих концептов именно наша игра была выбрана для дальнейшей разработки.'],
          ['Этот опыт укрепил мою убеждённость: успешная разработка игр — это не только технически крепкие решения. Это ещё и понимание продукта целиком, правильная расстановка приоритетов и фокус на том, что реально создаёт ценность для игроков.'],
        ],
      },
    },
    {
      n: '02',
      title: 'Gladiator School',
      subtitle: 'PvP-бои и тактика',
      role: 'Senior Unity Developer',
      platforms: 'Android',
      desc: 'Мобильная RPG / стратегия, построенная вокруг долгосрочного вовлечения, прогрессии и тактических боёв.',
      contribution:
        'Геймплейные и мета-механики, системы удержания, циклы прогрессии игрока, UI-флоу, итерации геймплея, исправление багов, полировка и подготовка релиза.',
      tech: ['Unity', 'C#', 'Android', 'uGUI', 'Мета-геймплей'],
      tone: 'violet',
      link: 'https://www.rustore.ru/catalog/app/com.gladiators.school',
      store: 'RuStore',
      image: '/gladiator-school-showcase.png',
      imageAlt: 'Gladiator School — геймплей',
      note: 'Скоро крупное обновление. Затем релиз в App Store.',
    },
    {
      n: '03',
      title: 'Imperial Arx',
      subtitle: 'Морские бои и стратегия',
      role: 'Senior / Lead Unity Developer',
      platforms: 'Android · iOS',
      desc: 'Мобильная стратегия / RTS вокруг морских боёв: AI кораблей, таргетинг и стрельба, здоровье города и поведение противника в продакшен-масштабе.',
      contribution:
        'Руководил двумя Unity-разработчиками и построил AI кораблей — движение, маршруты, уклонение от столкновений, построения, поведение в зависимости от урона и проверки линии огня — вместе с основным боем, магазином, UI, локализацией и клиент-серверными механиками на Mirror. Поднял производительность с ~20 до 55 FPS и сократил размер сборки с ~300 МБ до 100 МБ.',
      tech: ['Unity', 'C#', 'AI кораблей', 'URP', 'Addressables', 'Mirror'],
      tone: 'blue',
      link: 'https://play.google.com/store/apps/details?id=com.warvargames.imperialarx',
      store: 'Google Play',
      image: '/imperial-arx-showcase.png',
      imageAlt: 'Imperial Arx — геймплей',
      note: 'Сейчас доступна только на Филиппинах.',
      caseStudy: {
        label: 'Разбор',
        title: 'Баланс технической сложности и геймплея',
        body: [
          ['Один из самых ценных опытов в моей карьере — работа над Imperial Arx, игрой про морские бои, которую мы делали для Warvar Games.'],
          ['Заказчик профинансировал две команды, работавшие над одним концептом параллельно: нашу команду в APPFOX и независимую инди-студию.'],
          ['Другая команда сделала серьёзную ставку на реалистичную физику — сложные баллистические расчёты, траектории снарядов и симуляцию движения кораблей.'],
          ['Мой подход был другим. Я считал, что наша основная цель — не построить точный физический симулятор, а выпустить полноценно работающую игру с интересными боевыми механиками.'],
          ['Я начал с того, что определил ключевые системы, без которых не получится цельного игрового опыта: управление кораблём, движение и навигация, боевые механики, AI, интерфейсы и оптимизация производительности.'],
          ['Приоритетом было собрать полный и играбельный основной геймплейный цикл, добавляя техническую сложность только там, где она действительно улучшает опыт игрока.'],
          ['Такой подход помог не потратить лишнее время разработки на ненужные технические детали и позволил равномерно продвигаться по всей игре, а не закапываться в отдельные механики.'],
          ['Этот опыт закрепил один из моих основных принципов в разработке: сначала решить геймплейную задачу, а затем выбрать самое простое техническое решение, которое её эффективно поддерживает.'],
        ],
      },
    },
    {
      n: '04',
      title: 'Alien Apocalypse',
      subtitle: 'Выживание',
      role: 'Senior Unity Developer',
      platforms: 'iOS',
      desc: 'Мобильная игра про выживание на живой эксплуатации: пользовательские геймплейные системы и постоянная продакшен-поддержка.',
      contribution:
        'Геймплейные фичи, UI, оптимизация производительности, рефакторинг легаси, исправление багов, стабильность релизов и продакшен-поддержка.',
      tech: ['Unity', 'C#', 'iOS', 'LiveOps', 'Оптимизация'],
      tone: 'amber',
      link: 'https://apps.apple.com/us/app/alien-apocalypse-survival/id6739420672',
      store: 'App Store',
      image: '/alien-apocalypse-showcase.png',
      imageAlt: 'Alien Apocalypse — геймплей',
      note: '',
    },
  ],
  jobs: [
    {
      company: 'SKYSCOREGAMES',
      date: '05/2026 — 10/2026',
      role: 'Senior Unity Developer · Part-time / проектная занятость',
      text: [
        'Единственный Unity-разработчик игры The Demon Wants to Marry the Princess or Lose Her at Poker: довёл PC-проект с нуля до Steam Playtest за шесть месяцев part-time. Спроектировал архитектуру на Unity/C# и реализовал основной геймплей — покерные механики, нарративные и карточно-персонажные системы — вместе с мета-игрой управления замком, idle-прогрессией и генерацией ресурсов. Вёл техническое планирование, отладку, рефакторинг, оптимизацию, подготовку сборки для плейтеста и передачу кодовой базы другому разработчику.',
      ],
    },
    {
      company: 'APPFOX',
      date: '07/2025 — настоящее время',
      role: 'Senior Unity Developer · Технический лид проекта',
      text: [
        'Технический лид на Imperial Arx / Coastal Defense, мобильной стратегии / RTS: руководил двумя Unity-разработчиками, проводил ревью и правку кода, уточнял спецификации, оценивал задачи и координировался с 3D-артистами, геймдизайном, QA и продакшеном. Реализовал основной геймплей, магазин, таргетинг и стрельбу, здоровье города, поведение противника, UI, локализацию и клиент-серверные механики на Mirror, а также построил AI кораблей: движение, маршруты, уклонение от столкновений, построения, поведение в зависимости от урона и проверки линии огня. Поднял производительность с ~20 до 55 FPS и сократил размер сборки с ~300 до 100 МБ за счёт реструктуризации Addressables, сжатия и чистки контента, после чего передал код и техническую документацию Warvar Games и три месяца консультировал их новую команду.',
        'На Gladiator School — один из двух Senior Unity Developer: новые механики и UI, мета, удержание и прогрессия, итерации геймплея, полировка, подготовка релиза и кросс-проектные ревью Unity-кода.',
      ],
    },
    {
      company: 'NDA · Idle Clicker',
      date: '01/2025 — 07/2025',
      role: 'Senior Unity Developer',
      text: [
        'Внедрил Addressables и построил data-driven мета-системы для RPG: гача, прогрессия, награды, онбординг, почта, адаптивный мобильный UI и готовые к продакшену фичи.',
      ],
    },
    {
      company: 'SOFTINTERMOB LLC',
      date: '09/2024 — 12/2024',
      role: 'Senior Unity Developer',
      text: [
        'Геймплейная и продакшен-функциональность, рефакторинг легаси, LiveOps, Battle Pass, ежедневные награды, промокоды, внутриигровые офферы, монетизация, исправление багов и стабильность релизов.',
      ],
    },
    {
      company: 'FREELANCE',
      date: '01/2021 — 09/2024',
      role: 'Unity Developer · Проектная занятость',
      text: [
        'Геймплейные фичи, UI, клиентская функциональность, прототипирование, исправление багов и поддержка поставки.',
      ],
    },
    {
      company: 'INTEGRO LLC / BIZAPPS',
      date: '05/2012 — 09/2024',
      role: 'Бизнес-аналитик / Frontend-разработчик',
      text: [
        '12+ лет в разработке ПО, B2B-интеграциях, аналитике и фронтенд-разработке, в сотрудничестве с международными распределёнными командами.',
      ],
    },
  ],
};
