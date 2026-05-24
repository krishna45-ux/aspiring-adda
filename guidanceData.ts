// ============================================================
// Student Career Guidance Data
// ============================================================

export interface Class10Stream {
    id: string;
    name: string;
    description: string;
    subjects: string[];
    careers: string[];
    pros: string[];
    cons: string[];
    futureScope: string;
    quickTips: string[];
}

export interface Class12Path {
    id: string;
    name: string;
    degree: string;
    roles: string[];
    pros: string[];
    cons: string[];
}

export interface CollegeDomain {
    id: string;
    name: string;
    icon: string;
    color: string;
    tagline: string;
    skills: string[];
    roles: string[];
    pros: string[];
    cons: string[];
}

// ─── CLASS 10 DATA ───────────────────────────────────────────

export const CLASS10_STREAMS: Class10Stream[] = [
    {
        id: 'science',
        name: 'Science',
        description:
            'The most widely chosen stream, Science opens doors to engineering, medicine, research, and technology. It demands analytical thinking and a love for problem-solving.',
        subjects: ['Physics', 'Chemistry', 'Maths / Biology', 'Computer Science', 'English'],
        careers: ['Engineer', 'Doctor', 'Data Scientist', 'Architect', 'Pilot', 'Research Scientist'],
        pros: [
            'Opens all doors — you can switch to Commerce or Arts later, but not vice versa easily',
            'Highest earning potential across most roles',
            'Builds strong analytical and logical thinking skills',
            'Huge variety of specializations after 12th',
        ],
        cons: [
            'High academic pressure and workload',
            'Extremely competitive entrance exams (JEE, NEET)',
            'Education can be expensive (coaching, colleges)',
            'Not ideal if you dislike Maths or memorization',
        ],
        futureScope:
            `With AI, biotech, and clean energy shaping the 21st century, a Science background is the launchpad for the most in-demand careers globally. Whether it's building AI systems or engineering sustainable infrastructure, Science graduates are at the forefront.`,
        quickTips: [
            `Don't choose Science just because your friends are — assess your own strengths first`,
            'Your interest matters more than your grades — love for the subject drives success',
            'Maths vs. Biology: Choose Maths if you lean towards engineering, Biology if towards medicine',
            'Start exploring JEE/NEET patterns early — awareness reduces last-minute panic',
        ],
    },
    {
        id: 'commerce',
        name: 'Commerce',
        description:
            'Commerce equips students with the language of business — accounting, economics, and strategy. It is the gateway to finance, entrepreneurship, and management careers.',
        subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics (optional)', 'English'],
        careers: ['Chartered Accountant (CA)', 'Investment Banker', 'Entrepreneur', 'Economist', 'Financial Analyst', 'Marketing Manager'],
        pros: [
            'Real-world knowledge that applies from day one',
            'Earlier career entry compared to pure academic routes',
            'Entrepreneurship-friendly — great for those who want to start businesses',
            'CA and finance roles are among the most respected and well-paid',
        ],
        cons: [
            'Requires strong numerical aptitude and attention to detail',
            'CA exams are notoriously tough with a low pass rate',
            'Some roles can feel repetitive without career development',
            'Perceived as "second choice" in some social circles (ignore this!)',
        ],
        futureScope:
            'In a world of startups, fintech, and global trade, Commerce graduates are more relevant than ever. Roles in investment banking, consulting, and digital marketing are booming, and entrepreneurship has never been more accessible.',
        quickTips: [
            'Opt for Maths in Commerce if you want to keep engineering/data science options open',
            `Research the CA journey early — it's a multi-year commitment`,
            'Commerce + coding (basics) = extremely powerful combination for fintech roles',
            'Shadow a CA or banker for a day to see if it suits you',
        ],
    },
    {
        id: 'arts',
        name: 'Arts / Humanities',
        description:
            'Arts and Humanities nurture creativity, critical thinking, and social awareness. Often underestimated, this stream produces some of the most influential leaders, artists, and thinkers.',
        subjects: ['History', 'Political Science', 'Psychology', 'Literature / English', 'Sociology / Philosophy'],
        careers: ['Lawyer', 'Journalist', 'IAS / Civil Servant', 'Psychologist', 'Filmmaker', 'Social Entrepreneur', 'UX Writer'],
        pros: [
            'Highly creative and intellectually diverse',
            'Civil Services (IAS/IPS) — the most prestigious careers — are Arts-friendly',
            'Psychology, law, and media are rapidly growing fields',
            'Lower academic pressure allows more time for skill building',
        ],
        cons: [
            'Lower starting salaries in some traditional roles',
            'Career path can feel less structured or defined',
            'Requires self-motivation to build a portfolio and skills',
            `Social perception can be discouraging (though it's changing fast)`,
        ],
        futureScope:
            'As technology advances, human skills like empathy, communication, and ethics are more valuable than ever. Psychologists, legal professionals, policy makers, and storytellers are in high demand. The world needs as many great thinkers as it does great coders.',
        quickTips: [
            'Arts does NOT mean low career ceiling — countless Arts graduates are top leaders',
            'Build skills outside school: write, debate, create, volunteer',
            'Start reading newspapers daily — it sharpens thinking and helps in competitive exams',
            'Explore psychology, law, and media early — they have clear, lucrative career tracks',
        ],
    },
];

// ─── CLASS 12 DATA ───────────────────────────────────────────

export const CLASS12_PATHS: Record<string, Class12Path[]> = {
    science: [
        {
            id: 'engineering',
            name: 'Engineering',
            degree: 'B.Tech / B.E. (4 years)',
            roles: ['Software Engineer', 'Civil Engineer', 'Mechanical Engineer', 'Electronics Engineer', 'Product Manager'],
            pros: [
                'Wide range of specializations (CS, Mechanical, Electronics)',
                'High campus placement rates at top colleges',
                'Versatile degree accepted globally',
            ],
            cons: [
                'Highly competitive JEE entrance exam',
                'Requires 4 years and significant investment',
                'Core engineering (non-CS) jobs have declining demand in some sectors',
            ],
        },
        {
            id: 'medical',
            name: 'Medical / Healthcare',
            degree: 'MBBS (5.5 years) / B.Pharm / B.Sc Nursing',
            roles: ['Doctor / Surgeon', 'Pharmacist', 'Nurse Practitioner', 'Medical Researcher', 'Public Health Officer'],
            pros: [
                'One of the most respected and stable professions',
                'High earning potential (especially post-specialization)',
                'Clear, structured career pathway',
            ],
            cons: [
                'Very long education path (MBBS + specialization = 9-11 years)',
                'Extremely competitive NEET exam',
                'High emotional and physical demands of the profession',
            ],
        },
        {
            id: 'pure-sciences',
            name: 'Pure Sciences',
            degree: 'B.Sc (3 years) → M.Sc / PhD',
            roles: ['Research Scientist', 'Data Scientist', 'Academic / Professor', 'Environmental Analyst', 'Biotech Specialist'],
            pros: [
                'Deep intellectual expertise in your field',
                'Growing demand in AI, biotech, and climate research',
                'Multiple scholarship and fellowship opportunities',
            ],
            cons: [
                'Low starting salaries without post-graduation',
                'Academic/research path requires 6-8+ years',
                'Fewer private-sector opportunities compared to engineering',
            ],
        },
    ],
    commerce: [
        {
            id: 'finance-accounting',
            name: 'Finance & Accounting',
            degree: 'B.Com / CA / CFA / MBA Finance',
            roles: ['Chartered Accountant (CA)', 'Auditor', 'CFO', 'Investment Analyst', 'Tax Consultant'],
            pros: [
                'CA is among the most respected professional qualifications in India',
                'High earning potential at senior levels',
                'Always in demand — every business needs finance professionals',
            ],
            cons: [
                'CA exams have a very low pass rate and span 3-4+ years',
                'Highly detail-oriented and can be repetitive',
                'Work-life balance can be poor during audit seasons',
            ],
        },
        {
            id: 'management',
            name: 'Business & Management',
            degree: 'BBA (3 years) → MBA (2 years)',
            roles: ['HR Manager', 'Marketing Manager', 'Operations Manager', 'Business Consultant', 'Entrepreneur'],
            pros: [
                'Broad skillset applicable across every industry',
                'MBA from a top institute is a career accelerator',
                'Great for aspiring entrepreneurs',
            ],
            cons: [
                'MBA requires a good entrance exam score (CAT/XAT) and work experience',
                'ROI depends heavily on the college attended',
                'Generalist degree may require additional specialization',
            ],
        },
    ],
    arts: [
        {
            id: 'law-governance',
            name: 'Law & Governance',
            degree: 'BA LLB (5 years) / UPSC / State PSC',
            roles: ['Lawyer', 'Judge', 'Diplomat', 'IAS / IPS Officer', 'Legal Advisor', 'Human Rights Activist'],
            pros: [
                'Civil Services offer the most prestigious careers in India',
                'Law provides strong critical thinking and argumentation skills',
                'Diverse career settings: courts, corporates, government, NGOs',
            ],
            cons: [
                'UPSC exam is one of the hardest competitive exams in the world',
                'Law career takes time to build (junior-level income is low initially)',
                'Long study hours and high dedication required',
            ],
        },
        {
            id: 'design-media',
            name: 'Design & Media',
            degree: 'B.Des / B.Sc Animation / Mass Communication',
            roles: ['UX/UI Designer', 'Animator', 'Journalist', 'Content Creator', 'Film Director', 'Art Director'],
            pros: [
                'Highly creative and passion-driven careers',
                'Growing demand for UX designers and content creators',
                'Portfolio-based — skill matters more than pedigree',
            ],
            cons: [
                'Income can be inconsistent, especially as a freelancer',
                'Highly competitive creative industries',
                'Requires continuous self-improvement and trend-tracking',
            ],
        },
        {
            id: 'humanities',
            name: 'Psychology & Social Sciences',
            degree: 'B.A. Psychology / Sociology / BA + MA / MSW',
            roles: ['Psychologist', 'Counselor', 'Social Worker', 'HR Professional', 'Researcher', 'NGO Leader'],
            pros: [
                'Growing demand for mental health professionals in India',
                'Highly meaningful and impactful work',
                'Strong overlap with HR, coaching, and education sectors',
            ],
            cons: [
                'Requires a Masters degree to practice as a clinical psychologist',
                'Income levels vary widely by role and setting',
                'Emotionally demanding profession',
            ],
        },
    ],
};

// ─── COLLEGE DOMAIN DATA ─────────────────────────────────────

export const COLLEGE_DOMAINS: CollegeDomain[] = [
    {
        id: 'tech',
        name: 'Tech & Innovation',
        icon: '💻',
        color: 'blue',
        tagline: 'Build the systems that run the world.',
        skills: ['Full Stack Development', 'AI / Machine Learning', 'Cloud Computing', 'Cybersecurity', 'DevOps', 'System Design'],
        roles: ['Software Development Engineer (SDE)', 'Product Manager', 'Data Scientist', 'ML Engineer', 'Cloud Architect', 'Security Analyst'],
        pros: [
            'Highest average salaries across all domains',
            'Remote work and global opportunities are the norm',
            'Constant innovation keeps the work intellectually stimulating',
            'Massive job market with openings at all levels',
        ],
        cons: [
            'Rapid skill obsolescence — must keep learning constantly',
            'Burnout is common due to high-pressure environments',
            'Very competitive at top companies (FAANG-level interviews)',
            'Work can involve long screen hours and sedentary lifestyle',
        ],
    },
    {
        id: 'business',
        name: 'Business & Management',
        icon: '📊',
        color: 'amber',
        tagline: 'Lead organizations, drive strategy, create value.',
        skills: ['MBA / Post-Graduation', 'Finance & Accounting', 'Marketing & Sales', 'HR Management', 'Business Strategy', 'Consulting'],
        roles: ['CEO / COO', 'Management Consultant', 'Investment Banker', 'Marketing Director', 'Venture Capitalist', 'Startup Founder'],
        pros: [
            'Strong networking and leadership development',
            'Top MBA programs dramatically accelerate careers',
            'Opportunities span every industry globally',
            'Entrepreneurial path is well-supported',
        ],
        cons: [
            'High stress and long working hours, especially in consulting/banking',
            'ROI on MBA is highly college-dependent',
            'Entry-level salaries lag behind tech, catching up at senior levels',
            'Success is heavily network-dependent',
        ],
    },
    {
        id: 'research',
        name: 'Research & Academia',
        icon: '🔬',
        color: 'emerald',
        tagline: 'Expand the boundaries of human knowledge.',
        skills: ['PhD / Doctoral Research', 'R&D Methodologies', 'Academic Publishing', 'Grant Writing', 'Quantitative Analysis', 'Laboratory Science'],
        roles: ['University Professor', 'Research Scientist', 'Principal Investigator', 'Policy Researcher', 'Think Tank Analyst', 'R&D Engineer'],
        pros: [
            'Unmatched intellectual freedom and depth of exploration',
            'Job stability in academia (tenure system)',
            'Contributions have long-lasting societal impact',
            'Flexible work schedules in many research settings',
        ],
        cons: [
            'Lower compensation compared to industry peers',
            'Very long timeline to career establishment (PhD = 4-6 years)',
            'Academic job market is highly competitive',
            'Publish-or-perish culture can be stressful',
        ],
    },
    {
        id: 'creative',
        name: 'Creative Industries',
        icon: '🎨',
        color: 'rose',
        tagline: 'Shape culture, aesthetics, and human experience.',
        skills: ['UX / UI Design', 'Game Design', 'Filmmaking & Video Production', 'Content Strategy', 'Brand Identity', 'Motion Graphics'],
        roles: ['Creative Director', 'Game Designer', 'Filmmaker / Director', 'UX Researcher', 'Content Strategist', 'Brand Manager'],
        pros: [
            'Passion-driven work that feels meaningful',
            'Remote and freelance opportunities are abundant',
            'Portfolio-based hiring: skill beats degrees',
            'Growing demand for digital content creators',
        ],
        cons: [
            'Income can be unstable, especially early in career',
            'Subjective feedback can be difficult to navigate',
            'Requires constant self-promotion and personal branding',
            'Competitive industries with many aspirants',
        ],
    },
];
