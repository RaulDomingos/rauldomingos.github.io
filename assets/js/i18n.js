const translations = {
  pt: {
    nav: { about:"Sobre", skills:"Skills", experience:"Experiência", projects:"Projetos", contact:"Contato" },
    hero: {
      role:"Engenheiro de Software",
      tagline:"5+ anos construindo produtos web escaláveis com React, Next.js & TypeScript — hoje, potencializado por IA.",
      cta:"Vamos conversar →",
      scroll:"role para baixo"
    },
    about: {
      title:"Sobre mim",
      body:"Engenheiro de software com mais de 5 anos de experiência no desenvolvimento de aplicações web utilizando React, Next.js, TypeScript, JavaScript, PHP, Laravel e Node.js. Experiência na criação de interfaces responsivas, integração de APIs RESTful e entrega de soluções escaláveis para clientes internacionais. Defensor de código limpo, colaboração, aprendizado contínuo e da criação de experiências de usuário intuitivas.",
      languagesLabel:"Idiomas",
      portuguese:"Português",
      native:"Nativo",
      aiLabel:"Dev assistido por IA",
      aiBody:"Uso ChatGPT, Claude e GitHub Copilot para acelerar entregas, revisar código e automatizar tarefas repetitivas — sem abrir mão de boas práticas de engenharia."
    },
    skills: {
      title:"Competências técnicas",
      languages:"Linguagens", frontend:"Frontend", backend:"Backend", databases:"Databases",
      cloud:"Cloud & Deploy", testing:"Testes & Versionamento", tools:"Ferramentas & Design",
      ai:"Desenvolvimento com AI",
      ai1:"Prompt Engineering", ai2:"Depuração assistida por IA", ai3:"Geração de código com IA", ai4:"Revisão de código com IA",
      methodologies:"Metodologias",
      m1:"Design Responsivo", m2:"Integração de APIs", m3:"Metodologias Ágeis", m4:"Código Limpo"
    },
    experience: { title:"Experiência profissional" },
    exp: {
      wsd: { role:"Desenvolvedor de Template",
        b1:"Desenvolvi e mantive templates para geração de documentos de produtos financeiros estruturados utilizados por bancos e instituições financeiras internacionais.",
        b2:"Trabalhei diretamente com clientes globais para entender requisitos de negócio e implementar regras complexas de produtos estruturados (Autocallables, Memory Autocalls, Snowballs, Digital Plus, Range Accrual, entre outros).",
        b3:"Implementei novas funcionalidades, corrigi problemas em produção e aperfeiçoei a arquitetura dos templates existentes utilizando PHP e JavaScript.",
        b4:"Utilizei ChatGPT, Claude e GitHub Copilot para acelerar implementação, depuração, documentação e refatoração, mantendo alto padrão de qualidade."
      },
      loumar2: { role:"Desenvolvedor Fullstack",
        b1:"Desenvolvi aplicações web modernas utilizando React, Next.js, JavaScript e TailwindCSS, com interfaces responsivas baseadas em designs de UI.",
        b2:"Integrei aplicações frontend com APIs REST e colaborei com desenvolvedores backend para entregar funcionalidades de ponta a ponta.",
        b3:"Melhorei a experiência do usuário com componentes reutilizáveis e layouts responsivos.",
        b4:"Utilizei ferramentas de IA (ChatGPT, Claude, GitHub Copilot) para acelerar entregas mantendo qualidade de código."
      },
      braza: { role:"Desenvolvedor Frontend",
        b1:"Desenvolvi uma aplicação web financeira utilizada por milhares de usuários.",
        b2:"Criei componentes reutilizáveis em React, aumentando a consistência entre múltiplos projetos.",
        b3:"Integrei aplicações frontend com APIs REST e desenvolvi interfaces responsivas para um sistema de Back-office com PHP, HTML e CSS."
      },
      loumar1: { role:"Desenvolvedor Frontend",
        b1:"Desenvolvi aplicações web modernas com React, JavaScript, TailwindCSS e PHP.",
        b2:"Realizei manutenção e evolução de aplicações existentes: novas funcionalidades, correção de bugs, otimização de performance e integração de APIs REST."
      }
    },
    projects: {
      title:"Projetos pessoais",
      connecttop: {
        status:"Em desenvolvimento",
        body:"Aplicativo de gerenciamento de condomínios. A estrutura do condomínio (torres, andares, elementos) é mapeada em banco de dados, permitindo que moradores abram chamados de manutenção para itens específicos — por exemplo, a lâmpada do 2º andar da Torre X. Síndicos e porteiros podem registrar a manutenção, empresa responsável, valor e observações.",
        note:"Em fase de testes reais — demo em vídeo em breve."
      },
      sforzi: { status:"No ar",
        body:"Landing page desenvolvida para uma escola particular. Um site simples e objetivo, criado como vitrine institucional, com formulário de contato direto para o e-mail da escola.",
        link:"Ver site ↗"
      },
      mystudio: { status:"Em desenvolvimento",
        body:"Marketplace de agendamento de estúdios de música — um \"iFood de estúdios\". Donos cadastram seus espaços com fotos, localização e equipamentos; músicos buscam estúdios, consultam disponibilidade no calendário e solicitam agendamento, confirmado pelo dono. Pagamento tratado separadamente."
      }
    },
    education: {
      title:"Educação",
      eng:"Engenharia de Software",
      ads:"Análise e Desenvolvimento de Sistemas"
    },
    contact: { title:"Vamos construir algo juntos?" },
    footer: { built:"Feito com HTML, CSS e JavaScript." }
  },

  en: {
    nav: { about:"About", skills:"Skills", experience:"Experience", projects:"Projects", contact:"Contact" },
    hero: {
      role:"Software Engineer",
      tagline:"5+ years building scalable web products with React, Next.js & TypeScript — now supercharged by AI.",
      cta:"Let's talk →",
      scroll:"scroll down"
    },
    about: {
      title:"About me",
      body:"Software engineer with 5+ years of experience building web applications with React, Next.js, TypeScript, JavaScript, PHP, Laravel and Node.js. Experienced in building responsive interfaces, integrating RESTful APIs and delivering scalable solutions for international clients. Advocate for clean code, collaboration, continuous learning and intuitive user experiences.",
      languagesLabel:"Languages",
      portuguese:"Portuguese",
      native:"Native",
      aiLabel:"AI-assisted development",
      aiBody:"I use ChatGPT, Claude and GitHub Copilot to speed up delivery, review code and automate repetitive tasks — without giving up solid engineering practices."
    },
    skills: {
      title:"Technical skills",
      languages:"Languages", frontend:"Frontend", backend:"Backend", databases:"Databases",
      cloud:"Cloud & Deploy", testing:"Testing & Version Control", tools:"Tools & Design",
      ai:"AI-Powered Development",
      ai1:"Prompt Engineering", ai2:"AI-Assisted Debugging", ai3:"AI-Assisted Code Generation", ai4:"AI Code Review",
      methodologies:"Methodologies",
      m1:"Responsive Web Design", m2:"API Integration", m3:"Agile Methodologies", m4:"Clean Code"
    },
    experience: { title:"Professional experience" },
    exp: {
      wsd: { role:"Template Developer",
        b1:"Built and maintained document-generation templates for structured financial products used by banks and international financial institutions.",
        b2:"Worked directly with global clients to understand business requirements and implement complex rules for structured products (Autocallables, Memory Autocalls, Snowballs, Digital Plus, Range Accrual, and others).",
        b3:"Shipped new features, fixed production issues and improved the architecture of existing templates using PHP and JavaScript.",
        b4:"Used ChatGPT, Claude and GitHub Copilot to speed up implementation, debugging, documentation and refactoring while maintaining a high quality bar."
      },
      loumar2: { role:"Fullstack Developer",
        b1:"Built modern web applications using React, Next.js, JavaScript and TailwindCSS, with responsive interfaces based on UI designs.",
        b2:"Integrated frontend applications with REST APIs and worked closely with backend developers to ship end-to-end features.",
        b3:"Improved user experience by implementing reusable components and responsive layouts.",
        b4:"Used AI-assisted tools (ChatGPT, Claude, GitHub Copilot) to speed up delivery while maintaining code quality."
      },
      braza: { role:"Frontend Developer",
        b1:"Built a financial web application used by thousands of users.",
        b2:"Created reusable React components, increasing consistency across multiple projects.",
        b3:"Integrated frontend applications with REST APIs and built responsive interfaces for a back-office system using PHP, HTML and CSS."
      },
      loumar1: { role:"Frontend Developer",
        b1:"Built modern web applications with React, JavaScript, TailwindCSS and PHP.",
        b2:"Maintained and evolved existing applications: new features, bug fixes, performance optimization and REST API integration."
      }
    },
    projects: {
      title:"Personal projects",
      connecttop: {
        status:"In development",
        body:"A condominium management app. The building's structure (towers, floors, elements) is mapped into a database, letting residents open maintenance tickets for specific items — e.g. the hallway light on the 2nd floor of Tower X. Building managers and staff can log the maintenance, the company hired, cost and notes.",
        note:"Currently in real-world testing — demo video coming soon."
      },
      sforzi: { status:"Live",
        body:"A landing page built for a private school. A simple, focused site created as an institutional showcase, with a contact form that emails the school directly.",
        link:"View site ↗"
      },
      mystudio: { status:"In development",
        body:"A booking marketplace for music studios — a \"DoorDash for studios\". Owners list their spaces with photos, location and equipment; musicians search for studios, check calendar availability and request a booking, confirmed by the owner. Payment is handled separately."
      }
    },
    education: {
      title:"Education",
      eng:"Software Engineering",
      ads:"Systems Analysis and Development"
    },
    contact: { title:"Let's build something together?" },
    footer: { built:"Built with HTML, CSS and JavaScript." }
  }
};

function getNested(obj, path){
  return path.split('.').reduce((o,k)=> (o && o[k] !== undefined) ? o[k] : null, obj);
}

function applyLanguage(lang){
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const value = getNested(translations[lang], key);
    if(value !== null) el.innerHTML = value;
  });
  document.querySelectorAll('.lang-pt').forEach(el=>el.classList.toggle('active', lang==='pt'));
  document.querySelectorAll('.lang-en').forEach(el=>el.classList.toggle('active', lang==='en'));
  localStorage.setItem('portfolio-lang', lang);
}
