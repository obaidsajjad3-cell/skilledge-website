document.addEventListener('DOMContentLoaded', () => {
      // 1. DATA REPOSITORY FOR MODAL DIALOGS
      const programDetails = {
        'trade': {
          title: 'Trade Finance & Trade Compliance',
          category: 'Trade & Compliance',
          desc: 'End-to-end masterclass exploring transactional trade operations, letter of credit scrutiny, and detecting Trade-Based Money Laundering (TBML) schemes.',
          modules: [
            'TBML Mechanics: Over/under invoicing, phantom shipments, carousel transactions',
            'Letters of Credit & Guarantees under UCP 600 & ISBP 745',
            'Incoterms 2020: Transfer of risk and documentation consistency',
            'Trade Sanctions, dual-use goods verification, and vessel tracking protocols',
            'State Bank of Pakistan (SBP) Foreign Exchange Regulations compliance'
          ],
          audience: 'Trade Finance Officers, Trade Compliance Specialists, Relationship Managers, Branch Managers.',
          regs: 'SBP FE Manual, FATF TBML Best Practices, ICC UCP 600.'
        },
        'aml': {
          title: 'AML / CFT / Sanctions Compliance',
          category: 'Financial Crime Risk',
          desc: 'Advanced operational compliance program covering enhanced due diligence, transaction monitoring analytics, and regulatory escalation pathways.',
          modules: [
            'Customer Due Diligence (CDD) & Ultimate Beneficial Ownership (UBO) unravelling',
            'Red Flags & Typology Detection in Suspicious Transaction Reporting (STR)',
            'Real-Time Sanctions Screening, PEP Filtering, and False Positive Optimization',
            'Risk-Based Approach (RBA) implementation and institutional risk assessment',
            'Interfacing with Financial Monitoring Unit (FMU) and regulatory bodies'
          ],
          audience: 'Compliance Analysts, AML Investigators, Internal Audit, Operations Supervisors.',
          regs: 'SBP AML/CFT/CPF Regulations, FATF 40 Recommendations.'
        },
        'risk': {
          title: 'Risk Management & Internal Controls',
          category: 'Governance & Controls',
          desc: 'Comprehensive framework for mitigating operational, credit, liquidity, and systemic risks within complex banking institutions.',
          modules: [
            'Operational Risk Management Framework (ORMF) & Key Risk Indicators (KRIs)',
            'Credit Risk Underwriting, Covenant Monitoring & Stressed Asset Resolution',
            'Liquidity Risk & Basel III Capital Adequacy Benchmarking',
            'Operational Resilience & Business Continuity Management (BCM)',
            'Three Lines of Defense Model & Internal Control Evaluation'
          ],
          audience: 'Risk Officers, Credit Underwriters, Internal Auditors, Portfolio Managers.',
          regs: 'SBP Enterprise Risk Management Guidelines, Basel Committee Framework.'
        },
        'operations': {
          title: 'Banking Operations & Audit Excellence',
          category: 'Core Operations',
          desc: 'Refining branch operational efficiency, tightening maker-checker controls, and ensuring continuous audit readiness.',
          modules: [
            'Branch Control Environment: Cash management, clearing, and vault security',
            'Audit Readiness: Identifying recurring audit exceptions before inspection',
            'Process Automation & Lean Re-Engineering for Back-Office Operations',
            'Incident Reporting, Operational Loss Management, and Fraud Prevention',
            'Customer Experience & Complaint Escalation Compliance'
          ],
          audience: 'Branch Managers, Operations Managers, Cash Officers, Internal Auditors.',
          regs: 'SBP Branch Banking Regulations, Operational SOP Benchmarks.'
        },
        'digital': {
          title: 'Digital Banking, RPA & Generative AI',
          category: 'FinTech & Innovation',
          desc: 'Practical, hands-on masterclass examining the deployment of AI, RPA bots, and RegTech solutions across core banking workflows.',
          modules: [
            'Generative AI for Banking: Document summarization, policy Q&A, and credit memo drafting',
            'Robotic Process Automation (RPA) in Account Opening, KYC & Reconciliation',
            'RegTech for Automated Regulatory Reporting and Transaction Monitoring',
            'Digital Payment Systems, Raast Integration, and Cyber Risk Controls',
            'Ethical AI Governance, Data Privacy, and Algorithmic Bias Mitigation'
          ],
          audience: 'Digital Banking Teams, IT Leaders, Innovation Officers, Operations Heads.',
          regs: 'SBP Digital Banking Framework, National Cybersecurity Policy.'
        },
        'leadership': {
          title: 'Banking Leadership & Professional Development',
          category: 'People & Strategy',
          desc: 'Executive capability-building focusing on high-stakes communication, decision making, negotiation, and strategic influence in financial services.',
          modules: [
            'Strategic Decision Making under Regulatory & Market Uncertainty',
            'Executive Communication & Boardroom Presentation Mastery',
            'Cross-Departmental Negotiation & Stakeholder Alignment',
            'High-Performance Coaching & Mentoring in Banking Operations',
            'Crisis Leadership & Change Management in Modern Financial Institutions'
          ],
          audience: 'Branch Managers, Department Heads, Regional Managers, Senior Executives.',
          regs: 'Executive Talent Development Benchmarks.'
        },
        'future-trade': {
          title: 'The Future of Trade Compliance',
          category: 'Featured Masterclass',
          desc: 'Connecting automated intelligence and predictive analytics with trade compliance controls to counter complex TBML networks.',
          modules: [
            'AI-Powered Automated Document Checking against LC & Invoices',
            'Vessel AIS Spoofing and Dual-Use Goods Screening Automations',
            'Integrating SBP FE Guidelines with Automated Compliance Systems',
            'Predictive Analytics for Anomaly Detection in International Trade'
          ],
          audience: 'Head of Trade Finance, Trade Compliance Leads, Risk Directors.',
          regs: 'SBP FE Manual, FATF TBML Guidance.'
        },
        'trade-risk': {
          title: 'Advanced TBML & Trade Finance Risk',
          category: 'Specialist Workshop',
          desc: 'In-depth forensic study of modern trade finance fraud, maritime evasion schemes, and document forgery typologies.',
          modules: [
            'Forensic Examination of Bills of Lading, Consignment Notes & Invoices',
            'Complex Corporate Shell Structures & Free Zone Trade Fraud',
            'Over/Under Invoicing Case Studies across Regional Trade Routes',
            'Practical Red Flag Checklists for Front-Line Trade Processing'
          ],
          audience: 'Trade Scrutiny Officers, Trade Fraud Investigators, Senior Managers.',
          regs: 'FATF TBML Red Flags, SBP Guidelines.'
        },
        'ai-banking': {
          title: 'AI & Generative AI for Banking',
          category: 'Executive Workshop',
          desc: 'A practical, non-technical executive guide to responsibly leveraging Generative AI across front, middle, and back-office banking.',
          modules: [
            'Enterprise GenAI Architecture: Local LLMs vs Cloud Security',
            'High-ROI Use Cases: Credit analysis, AML alerts, customer support',
            'Regulatory Stance on AI: Model governance, explainability, compliance',
            'Step-by-Step Implementation Roadmap for Financial Institutions'
          ],
          audience: 'CIOs, CTOs, Heads of Strategy, Compliance & Operations Leads.',
          regs: 'Responsible AI Guidelines, Banking Data Protection Standards.'
        },
        'aml-crime': {
          title: 'AML/CFT & Financial Crime Risk',
          category: 'Compliance Masterclass',
          desc: 'Rigorous deep dive into high-risk customer profiling, cross-border remittance risks, and actionable STR filing.',
          modules: [
            'Profiling High-Risk Customers: Politically Exposed Persons (PEPs) & NGOs',
            'Transaction Monitoring Rule Tuning to Minimize False Positives',
            'Drafting High-Quality STRs that Stand Up to Regulatory Scrutiny',
            'Recent FMU Typologies and Regional Laundering Patterns'
          ],
          audience: 'MLROs, Compliance Officers, KYC Analysts, Branch Managers.',
          regs: 'SBP AML/CFT Regulations, FATF Typologies.'
        },
        'sanctions': {
          title: 'Sanctions & Transaction Screening',
          category: 'Specialist Program',
          desc: 'Practical operational training on real-time payment screening, list management, and fuzzy logic alert resolution.',
          modules: [
            'Understanding OFAC, UN, EU, and National Sanctions Regimes',
            'SWIFT ISO 20022 Screening Nuances and Hidden Beneficiary Risks',
            'Alert Investigation & True Match Escalation Workflows',
            'Secondary Sanctions & Maritime Deceptive Practices'
          ],
          audience: 'Sanctions Screening Analysts, Payment Operations Officers, MLROs.',
          regs: 'UN Security Council Resolutions, SBP Sanctions Directives.'
        },
        'rpa-ops': {
          title: 'Digital Transformation & RPA',
          category: 'Operations Masterclass',
          desc: 'Identifying high-volume operational bottlenecks and implementing software bots to achieve zero-defect processing.',
          modules: [
            'Process Assessment: Identifying High-Impact RPA Opportunities',
            'Bot Orchestration across Legacy Core Banking Systems',
            'Automated Financial Reconciliation & Exception Routing',
            'Managing Human-Bot Hybrid Workflows and Change Resistance'
          ],
          audience: 'Operations Directors, Process Improvement Leads, Digital Transformation Teams.',
          regs: 'Operational Risk Standards, IT Governance Directives.'
        }
      };

      // 2. THEME SWITCHER (DARK / LIGHT)
      const themeToggle = document.getElementById('themeToggle');
      const root = document.documentElement;

      function setTheme(theme) {
        root.setAttribute('data-theme', theme);
        localStorage.setItem('skilledge-theme', theme);
        updateThemeIcon(theme);
      }

      function updateThemeIcon(theme) {
        if (theme === 'dark') {
          themeToggle.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>`;
          themeToggle.setAttribute('aria-label', 'Switch to light mode');
        } else {
          themeToggle.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>`;
          themeToggle.setAttribute('aria-label', 'Switch to dark mode');
        }
      }

      const savedTheme = localStorage.getItem('skilledge-theme');
      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        updateThemeIcon(prefersDark ? 'dark' : 'light');
      }

      themeToggle.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
      });

      // 3. MOBILE MENU & DRAWER NAVIGATION
      const hamburgerBtn = document.getElementById('hamburgerBtn');
      const mobileDrawer = document.getElementById('mobileDrawer');
      const mobileOverlay = document.getElementById('mobileOverlay');

      function openMobileMenu() {
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        mobileDrawer.classList.add('active');
        mobileOverlay.classList.add('active');
        document.body.classList.add('menu-open');
      }

      function closeMobileMenu() {
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        mobileDrawer.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
      }

      hamburgerBtn.addEventListener('click', () => {
        const isOpen = hamburgerBtn.getAttribute('aria-expanded') === 'true';
        isOpen ? closeMobileMenu() : openMobileMenu();
      });

      mobileOverlay.addEventListener('click', closeMobileMenu);

      document.querySelectorAll('.mobile-navlinks a, .mobile-drawer .navcta').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeMobileMenu();
          closeModal();
        }
      });

      // 4. NAVBAR SCROLL EFFECT & SCROLLSPY
      const navbar = document.getElementById('navbar');
      const backToTop = document.getElementById('backToTop');
      const navLinks = document.querySelectorAll('.navlinks a');
      const sections = document.querySelectorAll('section[id], header[id]');

      window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }

        if (window.scrollY > 450) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }

        // Active link scrollspy
        let currentSectionId = '';
        sections.forEach(sec => {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSectionId = sec.getAttribute('id');
          }
        });

        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
          }
        });
      }, { passive: true });

      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      // 5. PORTFOLIO FILTER & REAL-TIME SEARCH
      const filterBtns = document.querySelectorAll('.filter-btn');
      const searchInput = document.getElementById('portfolioSearch');
      const cards = document.querySelectorAll('.portfolio-card');
      const resultsCount = document.getElementById('resultsCount');
      const noResults = document.getElementById('noResults');

      let currentCategory = 'all';
      let currentQuery = '';

      function filterPortfolio() {
        let visibleCount = 0;

        cards.forEach(card => {
          const category = card.getAttribute('data-category');
          const keywords = card.getAttribute('data-keywords').toLowerCase();
          const title = card.querySelector('h3').textContent.toLowerCase();
          const desc = card.querySelector('p').textContent.toLowerCase();

          const matchesCategory = (currentCategory === 'all' || category === currentCategory);
          const matchesQuery = (currentQuery === '' || keywords.includes(currentQuery) || title.includes(currentQuery) || desc.includes(currentQuery));

          if (matchesCategory && matchesQuery) {
            card.style.display = 'flex';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        resultsCount.textContent = `Showing ${visibleCount} domain${visibleCount === 1 ? '' : 's'}`;
        noResults.style.display = (visibleCount === 0) ? 'block' : 'none';
      }

      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
          });
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');
          currentCategory = btn.getAttribute('data-category');
          filterPortfolio();
        });
      });

      searchInput.addEventListener('input', (e) => {
        currentQuery = e.target.value.trim().toLowerCase();
        filterPortfolio();
      });

      // 6. PROGRAM DETAILS MODAL
      const modalBackdrop = document.getElementById('programModal');
      const modalCloseBtn = document.getElementById('modalCloseBtn');
      const modalCancelBtn = document.getElementById('modalCancelBtn');
      const modalInquireBtn = document.getElementById('modalInquireBtn');

      let activeProgramTitle = '';

      function openModal(progId) {
        const data = programDetails[progId];
        if (!data) return;

        activeProgramTitle = data.title;
        document.getElementById('modalTitle').textContent = data.title;
        document.getElementById('modalCategory').textContent = data.category;
        document.getElementById('modalDesc').textContent = data.desc;
        document.getElementById('modalAudience').textContent = data.audience;
        document.getElementById('modalRegs').textContent = data.regs;

        const modulesList = document.getElementById('modalModules');
        modulesList.innerHTML = '';
        data.modules.forEach(m => {
          const li = document.createElement('li');
          li.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B08D3F" stroke-width="2.5" style="flex-shrink:0;">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span>${m}</span>`;
          modulesList.appendChild(li);
        });

        modalBackdrop.classList.add('active');
        modalBackdrop.setAttribute('aria-hidden', 'false');
        document.body.classList.add('menu-open');
      }

      function closeModal() {
        modalBackdrop.classList.remove('active');
        modalBackdrop.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('menu-open');
      }

      document.querySelectorAll('.btn-detail').forEach(btn => {
        btn.addEventListener('click', () => {
          const progId = btn.getAttribute('data-program-id');
          openModal(progId);
        });
      });

      modalCloseBtn.addEventListener('click', closeModal);
      modalCancelBtn.addEventListener('click', closeModal);
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeModal();
      });

      modalInquireBtn.addEventListener('click', () => {
        closeModal();
        prefillProgram(activeProgramTitle);
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      });

      // 7. FAQ ACCORDION
      const faqItems = document.querySelectorAll('.faq-item');
      faqItems.forEach(item => {
        const trigger = item.querySelector('.faq-trigger');
        trigger.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          faqItems.forEach(i => {
            i.classList.remove('active');
            i.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
          });
          if (!isActive) {
            item.classList.add('active');
            trigger.setAttribute('aria-expanded', 'true');
          }
        });
      });

      // 8. INTERACTIVE INQUIRY FORM VALIDATION & SUBMISSION
      const inquiryForm = document.getElementById('inquiryForm');
      const formStatus = document.getElementById('formStatus');

      window.prefillProgram = function(topicName) {
        const select = document.getElementById('programTopic');
        let matched = false;
        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].value.toLowerCase().includes(topicName.toLowerCase()) || topicName.toLowerCase().includes(select.options[i].value.toLowerCase())) {
            select.selectedIndex = i;
            matched = true;
            break;
          }
        }
        if (!matched) {
          select.value = 'Custom Capability Building';
        }
      };

      inquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const institution = document.getElementById('institution').value.trim();
        const contactName = document.getElementById('contactName').value.trim();
        const email = document.getElementById('email').value.trim();
        const department = document.getElementById('department').value;
        const programTopic = document.getElementById('programTopic').value;
        const notes = document.getElementById('notes').value.trim();

        if (!institution || !contactName || !email || !department || !programTopic) {
          formStatus.className = 'form-status error';
          formStatus.textContent = 'Please fill out all required fields marked with an asterisk (*).';
          return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          formStatus.className = 'form-status error';
          formStatus.textContent = 'Please provide a valid corporate email address.';
          return;
        }

        formStatus.className = 'form-status success';
        formStatus.innerHTML = `
          <strong>Thank you, ${contactName}!</strong> Your training proposal request for <strong>${institution}</strong> regarding <em>"${programTopic}"</em> has been received. Our corporate learning director will review your parameters and respond to <strong>${email}</strong> within 1 business day.
        `;

        // Direct email fallback trigger
        const mailtoSubject = encodeURIComponent(`Training Proposal Request: ${programTopic} - ${institution}`);
        const mailtoBody = encodeURIComponent(
          `Bank/Institution: ${institution}\n` +
          `Contact: ${contactName}\n` +
          `Official Email: ${email}\n` +
          `Department: ${department}\n` +
          `Topic: ${programTopic}\n` +
          `Notes: ${notes}\n`
        );
        
        // Reset form fields
        inquiryForm.reset();
      });
    });