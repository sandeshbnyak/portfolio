/**
 * Sandesh B Nayak — AI/ML Engineering Portfolio
 * Interactive Functionality & Data Layer
 */

// ==========================================================================
// 1. DATA REPOSITORIES: STACK SKILLS & CASE STUDIES
// ==========================================================================

const STACK_DATA = {
  genai: {
    title: "Generative AI & Agents",
    count: "27+ SKILLS",
    skills: [
      { name: "LLMs" },
      { name: "Prompt Engineering" },
      { name: "AI Agents" },
      { name: "Multi-Agent Systems" },
      { name: "Agentic Workflows" },
      { name: "RAG" },
      { name: "Evidence-Grounded Generation" },
      { name: "Citation-Aware AI" },
      { name: "Claim Validation" },
      { name: "Hallucination Detection" },
      { name: "Embeddings" },
      { name: "Semantic Search" },
      { name: "Vector Search" },
      { name: "LLM Evaluation" },
      { name: "AI Decision Support" },
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "LlamaIndex" },
      { name: "Hugging Face" },
      { name: "Sentence Transformers" },
      { name: "Transformers" },
      { name: "FAISS" },
      { name: "OpenAI" },
      { name: "Gemini" },
      { name: "Claude" },
      { name: "Groq" },
      { name: "Ollama" }
    ],
    note: null
  },
  data: {
    title: "Data & Machine Learning",
    count: "27+ SKILLS",
    skills: [
      { name: "Python" },
      { name: "SQL" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Scikit-learn" },
      { name: "EDA" },
      { name: "Data Cleaning" },
      { name: "Feature Engineering" },
      { name: "Statistical Analysis" },
      { name: "Model Evaluation" },
      { name: "Predictive Analytics" },
      { name: "Excel" },
      { name: "Google Sheets" },
      { name: "Web Scraping" },
      { name: "Supervised Learning" },
      { name: "Classification" },
      { name: "Regression" },
      { name: "Clustering" },
      { name: "Dimensionality Reduction" },
      { name: "Anomaly Detection" },
      { name: "Isolation Forest" },
      { name: "Data Pipelines" },
      { name: "CSV Processing" },
      { name: "SQLite" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Business Intelligence" }
    ],
    note: null
  },
  nlp: {
    title: "Deep Learning & NLP",
    count: "18+ SKILLS",
    skills: [
      { name: "PyTorch" },
      { name: "TensorFlow" },
      { name: "Keras" },
      { name: "CNN" },
      { name: "RNN" },
      { name: "LSTM" },
      { name: "GRU" },
      { name: "Model Training" },
      { name: "Model Validation" },
      { name: "Transfer Learning" },
      { name: "NLTK" },
      { name: "Text Preprocessing" },
      { name: "Tokenization" },
      { name: "TF-IDF" },
      { name: "Bag of Words" },
      { name: "Sentiment Analysis" },
      { name: "Text Classification" },
      { name: "Semantic Similarity" }
    ],
    note: null
  },
  vision: {
    title: "Computer Vision",
    count: "13+ SKILLS",
    skills: [
      { name: "OpenCV" },
      { name: "YOLO" },
      { name: "YOLOv8" },
      { name: "YOLOv11" },
      { name: "Object Detection" },
      { name: "Image Classification" },
      { name: "Depth Estimation" },
      { name: "MiDaS" },
      { name: "Feature Extraction" },
      { name: "Image Preprocessing" },
      { name: "Bounding Box Detection" },
      { name: "Webcam Inference" },
      { name: "Roboflow" }
    ],
    note: null
  },
  docai: {
    title: "Document & Medical AI",
    count: "26+ SKILLS",
    skills: [
      { name: "PDF Processing" },
      { name: "Scientific Literature Analysis" },
      { name: "Invoice Processing" },
      { name: "OCR" },
      { name: "Tesseract" },
      { name: "PyMuPDF" },
      { name: "Document Parsing" },
      { name: "Section-Aware Retrieval" },
      { name: "Line-Item Extraction" },
      { name: "Document Classification" },
      { name: "Data Validation" },
      { name: "PubMed Integration" },
      { name: "Medical Literature Retrieval" },
      { name: "Multi-Paper Comparison" },
      { name: "Citation Support" },
      { name: "Evidence Validation" },
      { name: "Retrieval Evaluation" },
      { name: "Generation Evaluation" },
      { name: "Local AI" },
      { name: "Privacy-Friendly AI" },
      { name: "Expense Intelligence" },
      { name: "Vendor Analytics" },
      { name: "Duplicate Invoice Scoring" },
      { name: "Unusual Amount Detection" },
      { name: "Fixed ORM Query Mapping" },
      { name: "Read-Only AI Operations" }
    ],
    note: null
  },
  backend: {
    title: "Backend & Visualization",
    count: "21+ SKILLS",
    skills: [
      { name: "Django" },
      { name: "Django REST Framework" },
      { name: "FastAPI" },
      { name: "Flask" },
      { name: "REST APIs" },
      { name: "API Design" },
      { name: "ORM" },
      { name: "Session Authentication" },
      { name: "User-Scoped Data" },
      { name: "Power BI" },
      { name: "Tableau" },
      { name: "Matplotlib" },
      { name: "Plotly" },
      { name: "Chart.js" },
      { name: "Streamlit" },
      { name: "Interactive Dashboards" },
      { name: "KPI Analytics" },
      { name: "Java" },
      { name: "C" },
      { name: "JavaScript" },
      { name: "C#" }
    ],
    note: null
  },
  automation: {
    title: "Automation & Development",
    count: "19+ SKILLS",
    skills: [
      { name: "n8n" },
      { name: "Make.com" },
      { name: "Webhooks" },
      { name: "API Orchestration" },
      { name: "Workflow Automation" },
      { name: "Scheduled Workflows" },
      { name: "Email Automation" },
      { name: "SMTP" },
      { name: "SerpAPI" },
      { name: "LLM Automation" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Jupyter" },
      { name: "Google Colab" },
      { name: "Replit" },
      { name: "Lovable" },
      { name: "Testing" },
      { name: "Debugging" },
      { name: "Technical Documentation" }
    ],
    note: null
  },
  robotics: {
    title: "Robotics & IoT",
    count: "17+ SKILLS",
    skills: [
      { name: "Arduino" },
      { name: "Arduino Uno" },
      { name: "Raspberry Pi" },
      { name: "Sensors" },
      { name: "Ultrasonic Sensors" },
      { name: "IR Sensors" },
      { name: "Moisture Sensors" },
      { name: "Metal Detection" },
      { name: "Servo Motors" },
      { name: "LEDs" },
      { name: "Buzzers" },
      { name: "GPIO" },
      { name: "Serial Communication" },
      { name: "IoT" },
      { name: "Embedded Systems" },
      { name: "Hardware-Software Integration" },
      { name: "Robotics Prototyping" },
      { name: "ROS", theoretical: true },
      { name: "ROS2", theoretical: true },
      { name: "Gazebo", theoretical: true },
      { name: "Perception", theoretical: true },
      { name: "Sensing", theoretical: true },
      { name: "Processing", theoretical: true },
      { name: "Decision Making", theoretical: true },
      { name: "Control", theoretical: true },
      { name: "Actuation", theoretical: true }
    ],
    note: "DASHED — CONCEPTUAL / THEORETICAL KNOWLEDGE (ROS · ROS2 · GAZEBO), NOT PRODUCTION EXPERIENCE."
  }
};

const CASE_STUDIES = {
  invoiceiq: {
    num: "01",
    category: "DOCUMENT AI",
    title: "INVOICEIQ",
    subtitle: "AI-Powered Invoice & Expense Intelligence Platform",
    githubUrl: "https://github.com/sandeshbnyak/InvoiceIQ-AI-Powered-Invoice-Expense-Intelligence-Platform",
    problem: "Financial departments and businesses face manual data entry bottlenecks, errors, and fraudulent invoice duplication when processing heterogeneous invoice formats and expense receipts.",
    solution: "Built a full-stack, enterprise-grade invoice intelligence pipeline using Django and DRF. Combines digital text extraction via PyMuPDF with fallback OCR through Tesseract, structured field regex mapping, deterministic validation engines, and automated anomaly detection (such as duplicate scoring and unusual amount alerts).",
    architecture: [
      "Stage 01: Multi-Format Ingestion (PDF, PNG, JPG)",
      "Stage 02: Hybrid Extraction (Digital PyMuPDF + Tesseract OCR Fallback)",
      "Stage 03: Field Normalization (Vendor, Invoice #, Date, Taxes, Line Items)",
      "Stage 04: Validation & Integrity Engine (Mathematical reconciliation, Duplicate checks)",
      "Stage 05: User-Scoped REST API & Analytics Dashboard"
    ],
    capabilities: [
      "High-accuracy line item and totals extraction",
      "Algorithmic duplicate invoice scoring and anomaly alerts",
      "Read-only AI operations ensuring database integrity",
      "Interactive expense and vendor spend analytics"
    ],
    stack: ["Python", "Django", "Django REST Framework", "PyMuPDF", "Tesseract OCR", "SQLite/PostgreSQL", "Chart.js"],
    impact: "Over 85% reduction in manual data entry time with robust fallback coverage for degraded scans."
  },
  medlit: {
    num: "02",
    category: "RAG / MEDICAL AI",
    title: "MEDICAL LITERATURE RESEARCH ASSISTANT",
    subtitle: "Evidence-Grounded Scientific Research & Q&A",
    githubUrl: "https://github.com/sandeshbnyak/medical-analysis",
    problem: "Researchers and clinicians struggle to parse hundreds of dense scientific publications to verify medical claims, synthesize evidence, and find relevant biomedical citations accurately without hallucinated facts.",
    solution: "Designed an evidence-grounded RAG assistant that indexes PubMed abstracts and clinical trial PDFs into high-dimensional vector space using sentence transformers. Implemented citation verification and claim-grounding pipelines so every generated statement links to specific source paragraphs.",
    architecture: [
      "Stage 01: Document Parsing & Section-Aware Chunking (PyMuPDF)",
      "Stage 02: Dense Vector Embedding (Sentence Transformers / Hugging Face)",
      "Stage 03: Semantic Indexing & Fast Retrieval (FAISS)",
      "Stage 04: Evidence Grounding & Citation Validation Engine",
      "Stage 05: Streamlit Interactive Interface for Cross-Paper Querying"
    ],
    capabilities: [
      "Strict citation-anchored answering to eliminate hallucinations",
      "Multi-document comparative analysis across studies",
      "Section-targeted retrieval focusing on Methods, Results, and Conclusions",
      "Local/privacy-preserving execution options"
    ],
    stack: ["Python", "Streamlit", "Sentence Transformers", "Hugging Face Transformers", "PyMuPDF", "FAISS"],
    impact: "Synthesizes multi-paper clinical inquiries in seconds while offering 100% auditable evidence citations."
  },
  researchmind: {
    num: "03",
    category: "AI AGENTS",
    title: "RESEARCHMIND",
    subtitle: "Multi-Agent AI Research System",
    githubUrl: "https://github.com/sandeshbnyak/business-research",
    problem: "Complex research topics require deep synthesis across disparate domains: discovering sources, validating factual claims, summarizing findings, and critiquing logic — a workflow too multifaceted for single-prompt LLMs.",
    solution: "Developed an autonomous multi-agent research framework using LangChain and LangGraph. Agents assume specialized roles (Search Agent, Extraction Agent, Fact-Checker, Synthesis Agent, and Critic Agent) in an iterative verification loop to produce comprehensive research dossiers.",
    architecture: [
      "Stage 01: User Prompt & Goal Decomposer",
      "Stage 02: Autonomous Information Retrieval (SerpAPI & Vector Stores)",
      "Stage 03: Extraction & Fact Validation Sub-Agent Loop",
      "Stage 04: Structured Synthesis & Cross-Reference Formulation",
      "Stage 05: Critic Agent Review & Final Dossier Compilation"
    ],
    capabilities: [
      "Autonomous tool-calling and web query generation",
      "Reflexive agent verification loop to prevent false claims",
      "Structured output with comprehensive references and summaries",
      "Configurable LLM backends (OpenAI, Anthropic Claude, Ollama)"
    ],
    stack: ["Python", "LangChain", "LangGraph", "Streamlit", "LLMs", "RAG", "SerpAPI"],
    impact: "Generates deep, factual research briefs with minimal human supervision and verified provenance."
  },
  bi_copilot: {
    num: "05",
    category: "GENAI / ANALYTICS",
    title: "AI BUSINESS INTELLIGENCE COPILOT",
    subtitle: "Conversational Analytics & KPI Discovery Platform",
    githubUrl: "https://github.com/sandeshbnyak/AI-Business-Intelligence-Copilot",
    problem: "Non-technical stakeholders struggle to extract real-time insights from complex enterprise databases without waiting for data engineering teams.",
    solution: "Built an intelligent conversational copilot translating natural language queries into verified SQL, computing KPIs, and dynamically rendering interactive visualization charts.",
    architecture: [
      "Stage 01: Natural language query parsing & schema mapping",
      "Stage 02: Safe read-only SQL generation with guardrails",
      "Stage 03: Execution & KPI aggregation",
      "Stage 04: Dynamic chart rendering & analytical narrative generation"
    ],
    capabilities: ["Natural language to SQL", "Zero data modification guardrails", "Auto-chart recommendation", "Executive narrative synthesis"],
    stack: ["Python", "OpenAI / Claude", "FastAPI", "PostgreSQL", "Plotly", "Streamlit"],
    impact: "Democratized ad-hoc data inquiries across business teams with sub-second response times."
  },
  sql_agent: {
    num: "06",
    category: "GENAI / DATA",
    title: "AI SQL DATA ANALYST AGENT",
    subtitle: "Autonomous Query Generation & Schema Intelligence",
    githubUrl: "https://github.com/sandeshbnyak/sql_ai_agent",
    problem: "Manual query writing across multi-table transactional databases is error-prone and slow for ad-hoc business requests.",
    solution: "Engineered an autonomous agent equipped with database catalog inspection, iterative query self-correction, and syntax validation against production schemas.",
    architecture: [
      "Stage 01: Schema introspection & relationship graph analysis",
      "Stage 02: Prompt decomposition & query synthesis",
      "Stage 03: Sandboxed execution & error feedback loop",
      "Stage 04: Result tabularization & explanation"
    ],
    capabilities: ["Self-correcting SQL execution loop", "Schema-aware join inference", "Aggressive security and permission controls"],
    stack: ["Python", "LangChain", "SQLAlchemy", "PostgreSQL", "Streamlit"],
    impact: "Achieved 94% first-pass execution accuracy on complex multi-join analytical queries."
  },
  campaign_tracker: {
    num: "07",
    category: "DATA / AUTOMATION",
    title: "CAMPAIGN TRACKER",
    subtitle: "Marketing Campaign Analytics & Performance Tracking Pipeline",
    githubUrl: "https://github.com/sandeshbnyak/CAMPAIGN_TRACKER",
    problem: "Tracking multi-channel marketing campaigns, attribution metrics, and ROI across disparate sources requires continuous consolidation and performance reporting.",
    solution: "Built a Python-based campaign tracking and analytics system that ingests campaign performance metrics, computes CTR, conversion rates, and CPA, and generates structured reporting pipelines.",
    architecture: [
      "Stage 01: Multi-Channel Campaign Data Intake & Standardization",
      "Stage 02: Metric Normalization & Conversion Attribution",
      "Stage 03: ROI & Anomaly Performance Scoring Engine",
      "Stage 04: Automated Reporting & Analytical Telemetry Export"
    ],
    capabilities: [
      "Automated multi-channel campaign attribution",
      "Real-time CTR, conversion rate, and CPA tracking",
      "Budget allocation and ROI anomaly alerts"
    ],
    stack: ["Python", "Pandas", "Analytics APIs", "SQL", "Data Pipelines"],
    impact: "Consolidated scattered campaign metrics into unified real-time analytics with verified attribution."
  },
  enterprise_chatbot: {
    num: "08",
    category: "GENAI / DJANGO",
    title: "ENTERPRISE KNOWLEDGE CHATBOT",
    subtitle: "Secure Enterprise Knowledge Assistant Built with Django",
    githubUrl: "https://github.com/sandeshbnyak/enterprise-chatbot",
    problem: "Enterprise documentation and internal knowledge silos prevent team members from quickly finding authoritative compliance, policy, and technical answers.",
    solution: "Engineered a secure enterprise knowledge assistant with Django and LLM retrieval. Features role-based access control, session isolation, document indexing, and contextual Q&A.",
    architecture: [
      "Stage 01: Secure Document Ingestion & Access Control Mapping",
      "Stage 02: Semantic Chunking & Vector Search Indexing",
      "Stage 03: Django ORM Authentication & Audit Trail Logging",
      "Stage 04: Context-Constrained LLM Response Generation"
    ],
    capabilities: [
      "Role-based document access control",
      "Django enterprise security & session isolation",
      "Verifiable cited internal knowledge retrieval"
    ],
    stack: ["Python", "Django", "Django REST Framework", "LLMs", "Vector Store", "PostgreSQL"],
    impact: "Provides safe, auditable internal knowledge assistance with zero data leakage across organizational roles."
  },
  smart_attend: {
    num: "09",
    category: "COMPUTER VISION",
    title: "SMART ATTEND",
    subtitle: "Automated Computer Vision Attendance & Identity Verification",
    githubUrl: "https://github.com/sandeshbnyak/smart-attend",
    problem: "Manual attendance registers and physical biometric scanners cause entry queues and hygiene issues in institutional environments.",
    solution: "Developed a computer vision attendance system performing real-time face detection, recognition, and automated database logging with anti-spoofing checks.",
    architecture: [
      "Stage 01: Real-Time Video Stream Ingestion (OpenCV)",
      "Stage 02: Face Detection & Landmark Alignment",
      "Stage 03: Deep Feature Encoding & Identity Matching",
      "Stage 04: Automated Attendance Timestamp Logging & Analytics"
    ],
    capabilities: [
      "High-speed multi-face identification",
      "Anti-spoofing & liveness verification",
      "Automated spreadsheet and database sync"
    ],
    stack: ["Python", "OpenCV", "Deep Learning", "Face Recognition", "SQLite/CSV"],
    impact: "Automated daily attendance logging in sub-second inference time without physical touchpoints."
  },
  queenbee: {
    num: "10",
    category: "COMPUTER VISION",
    title: "QUEEN HONEY BEE DETECTION",
    subtitle: "Micro-Target Detection in High-Density Swarms",
    githubUrl: "https://github.com/sandeshbnyak/queen-honey-bee-detection",
    problem: "Locating the single queen honey bee among thousands of worker bees on a moving hive frame is slow and stressful for apiarists.",
    solution: "Formulated a specialized computer vision pipeline with custom focal loss and high-resolution patch inference, achieving 0.949 mAP@50 on micro-scale queen identification.",
    architecture: [
      "Stage 01: High-resolution comb photography extraction",
      "Stage 02: Patch tiling and negative sample mining",
      "Stage 03: YOLO deep detector fine-tuning",
      "Stage 04: Video tracking and live hive overlay"
    ],
    capabilities: ["Micro-object detection in extreme clutter", "0.949 mAP@50 benchmark", "Live video feed bounding box tracking"],
    stack: ["Python", "YOLOv11", "OpenCV", "PyTorch", "Roboflow"],
    impact: "Saves beekeepers critical time during hive health inspections with near-perfect reliability."
  },
  news_blogger: {
    num: "11",
    category: "AUTOMATION",
    title: "AI NEWS AUTO-BLOGGER",
    subtitle: "End-to-End Autonomous Content Aggregator & Publisher",
    githubUrl: "https://github.com/sandeshbnyak/emailblog",
    problem: "Curating daily technical news from multiple sources and authoring cohesive digests requires hours of manual research every day.",
    solution: "Orchestrated an automated pipeline with n8n and SerpAPI. Pulls breaking AI announcements, summarizes key trends via LLMs, formats markdown with citations, and delivers digest emails via SMTP.",
    architecture: [
      "Stage 01: Cron trigger & SerpAPI Google News extraction",
      "Stage 02: De-duplication and relevance filtering",
      "Stage 03: LLM analytical summarization & headline generation",
      "Stage 04: HTML template compilation & SMTP email dispatch"
    ],
    capabilities: ["100% hands-off scheduled pipeline", "Intelligent duplicate detection", "Clean responsive HTML email rendering"],
    stack: ["n8n", "Python", "SerpAPI", "OpenAI API", "SMTP"],
    impact: "Runs daily without intervention, publishing formatted intelligence digests to subscribers."
  },
  pepper: {
    num: "04",
    category: "COMPUTER VISION / AGRI-AI",
    title: "PEPPER MATURITY DETECTION",
    subtitle: "Visual Maturity Estimation & Agricultural Intelligence Platform",
    githubUrl: "https://github.com/sandeshbnyak",
    problem: "Traditional pepper farming relies heavily on manual observation for determining berry maturity, deciding the appropriate harvest time, identifying crop diseases (Pollu Disease, Foot Rot, Slow Decline), and understanding volatile market price trends. These manual processes are subjective, labor-intensive, and inconsistent, leading to suboptimal harvest yields, disease outbreaks, and unpredictable market returns.",
    solution: "The proposed AI-based Black Pepper Analysis System is an integrated precision-agriculture platform that combines computer vision, deep learning, and time-series forecasting to support black pepper cultivation. The maturity module uses YOLOv8 to detect individual peppercorns and MiDaS to estimate relative depth, allowing green peppercorns to be classified into P1–P4 based on experimentally determined depth ranges. Over-mature P5 pepper is handled separately using HSV-based color analysis and a convolutional autoencoder based on reconstruction error. A CNN-based disease detection module analyzes pepper leaf images to identify diseases such as Pollu Disease, Foot Rot, and Slow Decline. In parallel, an LSTM model processes historical market data from the Indian Spices Board using 30-day sequences to forecast short-term pepper prices. These modules are integrated through a Flask backend and Angular frontend, producing maturity results, harvest guidance, disease predictions, and market forecasts within a unified system.",
    architecture: [
      "Stage 01: P1–P4 Maturity Estimation (YOLOv8 + MiDaS) — Peppercorn bounding-box detection via YOLOv8 and monocular depth estimation via MiDaS. Extracts regional median depth mapped to experimental thresholds (P1: 529–569 µm, P2: 648–680 µm, P3: 686–720 µm, P4: ≥722 µm) with harvest recommendations (P1–P3: Continue growing, P4: Ready for harvest).",
      "Stage 02: P5 Over-Maturity Early Exit (HSV + Autoencoder) — Early classification branch combining HSV color space masking (red & dark pixel clusters) with a Convolutional Autoencoder. Evaluates Mean Squared Error (MSE) reconstruction loss; samples with reconstruction error > 0.01 are immediately confirmed as P5 Over-Mature (ready for harvest), bypassing the depth pipeline to conserve compute.",
      "Stage 03: Leaf Disease Diagnostics (Foliar CNN) — Convolutional neural network (Conv2D 32/64/128, BatchNorm, Dropout) trained on 900+ samples per class classifying Pollu Disease (99.85%), Foot Rot (98.39%), Slow Decline (97.82%), and Healthy foliage, achieving 90.22% validation accuracy.",
      "Stage 04: Market Price Forecasting (Time-Series LSTM) — Sequential time-series forecasting model utilizing a 2-layer LSTM (64 and 32 units, Dropout 0.2) operating on 30-day sliding windows of historical market data from the Indian Spices Board. Predicts short-term price trajectories and produces automated Sell / Hold / Postpone harvest guidance (RMSE: 17.04, 96% confidence).",
      "Stage 05: Full-Stack Platform Integration — Unified Flask REST API backend orchestrating multi-model inference pipelines connected to a responsive Angular frontend delivering real-time annotated visual overlays, depth heatmaps, crop health diagnostics, and market decision analytics."
    ],
    capabilities: [
      "Multi-Stage Maturity Classification: P1 to P4 relative depth estimation via MiDaS + P5 over-maturity detection via Autoencoder (Error > 0.01)",
      "Early Computational Bypass for P5 over-ripe berries using HSV masks and Autoencoder reconstruction error > 0.01",
      "Automated Harvest Recommendation Engine (P1–P3: Continue growing, P4–P5: Ready for harvest)",
      "High-Confidence Foliar Disease Diagnostics (Pollu 99.85%, Foot Rot 98.39%, Slow Decline 97.82%, 90.22% Val Acc)",
      "Sequential LSTM Spices Market Forecasting with automated Sell / Hold advisory (96% confidence, 17.04 RMSE)",
      "Integrated Precision Agriculture Platform with Flask REST API backend and responsive Angular frontend",
      "Awarded 1st Place for Poster Presentation at Jnanasangama 2025"
    ],
    stack: ["Python", "PyTorch", "TensorFlow / Keras", "YOLOv8", "MiDaS Depth", "OpenCV", "Convolutional Autoencoder", "CNN", "LSTM", "Flask", "Angular", "NumPy"],
    impact: "Awarded 1st Place at Jnanasangama 2025. Unified four distinct AI disciplines (object detection, depth estimation, disease classification, and price forecasting) into a production-ready precision agriculture platform supporting farmers from harvest timing to spice market sales."
  },
  solstice: {
    num: "12",
    category: "ROBOTICS / IOT",
    title: "SOLSTICE-SILO",
    subtitle: "Smart Automated Agriculture & Storage Monitoring System",
    githubUrl: "https://github.com/sandeshbnyak",
    problem: "Grain silos suffer from unmonitored moisture build-up and pest ingress leading to substantial agricultural spoilage.",
    solution: "Engineered an IoT monitoring hardware prototype using Arduino, sensor arrays (temperature, humidity, moisture), servo ventilation valves, and alerting logic.",
    architecture: [
      "Stage 01: Multi-point sensor polling (temperature, humidity, moisture)",
      "Stage 02: Threshold analysis & automated servo ventilation control",
      "Stage 03: Serial data telemetry & status display",
      "Stage 04: Emergency audio-visual alarm triggering"
    ],
    capabilities: ["Autonomous climate adjustment", "Real-time LCD/serial telemetry", "Low-power microcontroller firmware"],
    stack: ["Arduino", "C++", "Sensors", "Servos", "Embedded Systems"],
    impact: "Eliminates hot-spot moisture rot through automated closed-loop servo ventilation."
  },
  waste_segregator: {
    num: "13",
    category: "ROBOTICS",
    title: "AUTOMATIC WASTE SEGREGATOR",
    subtitle: "Hardware-Integrated Sorting of Wet, Dry & Metallic Waste",
    githubUrl: "https://github.com/sandeshbnyak",
    problem: "Municipal waste separation at source is rarely followed, requiring dangerous manual sorting at disposal sites.",
    solution: "Designed and built an automated physical waste sorting station using inductive proximity sensors, moisture detectors, and servo-actuated divert chutes.",
    architecture: [
      "Stage 01: Conveyor intake & presence detection (IR sensor)",
      "Stage 02: Metal detection stage (inductive sensor)",
      "Stage 03: Moisture assessment stage (conductive probe)",
      "Stage 04: Servo chute positioning to appropriate category bin"
    ],
    capabilities: ["Three-stream automated sorting", "Immediate hardware feedback loop", "Durable educational & makerspace demonstrator"],
    stack: ["Arduino Uno", "C++", "Inductive Sensors", "Moisture Probes", "Servo Motors"],
    impact: "Demonstrated accurate 3-way segregation with rapid turnaround in makerspace workshops."
  },
  arduino_robotics: {
    num: "14",
    category: "ROBOTICS / IOT",
    title: "ARDUINO AUTOMATION & ROBOTICS",
    subtitle: "STEM Makerspace & Prototyping Systems",
    githubUrl: "https://github.com/sandeshbnyak",
    problem: "Teaching robotics and physical computing requires structured, failure-tolerant curriculum and robust hardware prototypes.",
    solution: "Developed an extensive repository of 10+ hardware systems including automatic railway gates, smart streetlights, obstacle avoiders, and IoT stations for student training at Dream Kit.",
    architecture: [
      "Stage 01: Schematic design & breadboard wire routing",
      "Stage 02: Microcontroller firmware development (Arduino IDE / C++)",
      "Stage 03: Sensor calibration & actuator tuning",
      "Stage 04: Interactive pedagogical delivery & debugging"
    ],
    capabilities: ["Hands-on hardware teaching", "Modular sensor/actuator integration", "Fail-safe debugging curriculum"],
    stack: ["Arduino", "micro:bit", "C++", "Sensors", "Actuators", "Blockly"],
    impact: "Mentored hundreds of students in physical computing, robotics, and design thinking."
  },
  churn: {
    num: "15",
    category: "MACHINE LEARNING",
    title: "CUSTOMER CHURN PREDICTION",
    subtitle: "Predictive Telecommunications Churn Classifier",
    githubUrl: "https://github.com/sandeshbnyak",
    problem: "Subscription businesses face high customer acquisition costs when existing accounts cancel service without early warning.",
    solution: "Trained and benchmarked multiple supervised learning algorithms (Random Forest, XGBoost, Logistic Regression) with feature engineering to detect churn risks weeks in advance.",
    architecture: [
      "Stage 01: Data wrangling, null handling, and categorical encoding",
      "Stage 02: SMOTE class imbalance compensation",
      "Stage 03: Cross-validated hyperparameter optimization",
      "Stage 04: SHAP value feature importance analysis"
    ],
    capabilities: ["88% ROC-AUC score", "Identified top 5 drivers of customer dissatisfaction", "Actionable retention risk scores"],
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    impact: "Provided interpretable retention intervention triggers based on tenure and contract type."
  },
  imdb: {
    num: "16",
    category: "NLP / DEEP LEARNING",
    title: "IMDB SENTIMENT ANALYSIS",
    subtitle: "Deep Recurrent Network for Long-Form Sentiment Classification",
    githubUrl: "https://github.com/sandeshbnyak",
    problem: "Nuanced, long-form film reviews contain subtle shifts in tone and sarcasm that trip up shallow n-gram classifiers.",
    solution: "Engineered LSTM and GRU deep recurrent architectures with custom embedding layers and dropout regularization to classify 50,000 film reviews.",
    architecture: [
      "Stage 01: Tokenization, stopword pruning, and sequence padding",
      "Stage 02: Word embedding projection",
      "Stage 03: Bidirectional LSTM layers with dropout",
      "Stage 04: Sigmoid classification output"
    ],
    capabilities: ["Sequence-aware sentiment tracking", "Over 90% validation accuracy", "Interactive sentence inference widget"],
    stack: ["Python", "TensorFlow / Keras", "NLTK", "NumPy", "Matplotlib"],
    impact: "Demonstrated superiority of recurrent sequence modeling over bag-of-words baselines."
  },
  hr_attrition: {
    num: "17",
    category: "DATA ANALYTICS",
    title: "HR ATTRITION ANALYSIS",
    subtitle: "Workforce Retention Analytics & Executive Dashboard",
    githubUrl: "https://github.com/sandeshbnyak",
    problem: "Enterprise HR leadership lacked visibility into department-level turnover rates and work-life balance correlations.",
    solution: "Conducted exhaustive exploratory data analysis and built interactive KPI dashboards highlighting key attrition risk factors.",
    architecture: [
      "Stage 01: Workforce census data cleaning and normalization",
      "Stage 02: Correlation matrix and statistical significance testing",
      "Stage 03: Interactive dashboard design with KPI filters",
      "Stage 04: Executive summary report delivery"
    ],
    capabilities: ["Multivariate attrition analysis", "Overtime vs retention impact graphs", "Departmental risk scorecards"],
    stack: ["Python", "Pandas", "Power BI", "Excel", "Seaborn"],
    impact: "Pinpointed overtime burnout as the primary attrition driver, driving revised scheduling policies."
  }
};

// ==========================================================================
// 2. THEME CONTROLLER (LIGHT / DARK)
// ==========================================================================

function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const storedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = storedTheme || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const active = document.documentElement.getAttribute('data-theme');
      const nextTheme = active === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('portfolio-theme', nextTheme);
      updateThemeIcon(nextTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (!themeToggleBtn) return;
  
  if (theme === 'dark') {
    // Sun icon for light mode switch
    themeToggleBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
    themeToggleBtn.setAttribute('title', 'Switch to light theme');
  } else {
    // Moon icon for dark mode switch
    themeToggleBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    themeToggleBtn.setAttribute('title', 'Switch to dark theme');
  }
}

// ==========================================================================
// 3. INTERACTIVE HERO PARTICLE & CONSTELLATION CANVAS
// ==========================================================================

function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  let particles = [];
  const particleCount = 65;
  const maxDistance = 150;
  let mouse = { x: null, y: null, radius: 180 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  const DARK_PARTICLE_COLORS = [
    'rgba(217, 40, 32, 0.75)',    // Crimson Red (#D92820)
    'rgba(255, 99, 63, 0.75)',    // Coral Orange (#FF633F)
    'rgba(255, 241, 220, 0.72)',  // Soft Ivory / Champagne (#FFF1DC)
    'rgba(200, 185, 216, 0.70)'   // Lavender (#C8B9D8)
  ];

  const LIGHT_PARTICLE_COLORS = [
    'rgba(253, 224, 71, 0.75)',   // Pastel Lemon / Buttercup (#FDE047)
    'rgba(244, 114, 182, 0.70)',  // Soft Rose / Lilac (#F472B6)
    'rgba(251, 146, 60, 0.65)',   // Warm Apricot Peach (#FB923C)
    'rgba(192, 132, 252, 0.65)'   // Ethereal Lavender (#C084FC)
  ];

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2 + 1.2;
      this.colorIndex = Math.floor(Math.random() * DARK_PARTICLE_COLORS.length);
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse repel interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const dirX = dx / distance;
          const dirY = dy / distance;
          this.x -= dirX * force * 2.5;
          this.y -= dirY * force * 2.5;
        }
      }
    }

    draw(theme) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = theme === 'dark' ? DARK_PARTICLE_COLORS[this.colorIndex] : LIGHT_PARTICLE_COLORS[this.colorIndex];
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Subtle ambient mouse light response for dark and light modes
  const darkAmbientLayer = document.querySelector('.dark-ambient-layer');
  const lightAmbientLayer = document.querySelector('.light-ambient-layer');
  if (darkAmbientLayer || lightAmbientLayer) {
    window.addEventListener('mousemove', (e) => {
      const theme = document.documentElement.getAttribute('data-theme');
      const pctX = ((e.clientX / window.innerWidth) * 100).toFixed(1);
      const pctY = ((e.clientY / window.innerHeight) * 100).toFixed(1);
      if (theme === 'dark' && darkAmbientLayer) {
        darkAmbientLayer.style.setProperty('--mouse-glow-x', `${pctX}%`);
        darkAmbientLayer.style.setProperty('--mouse-glow-y', `${pctY}%`);
      } else if (lightAmbientLayer) {
        lightAmbientLayer.style.setProperty('--mouse-glow-x', `${pctX}%`);
        lightAmbientLayer.style.setProperty('--mouse-glow-y', `${pctY}%`);
      }
    }, { passive: true });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    const theme = document.documentElement.getAttribute('data-theme') || 'light';

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw(theme);

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * (theme === 'dark' ? 0.22 : 0.20);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = theme === 'dark' ? `rgba(255, 99, 63, ${alpha})` : `rgba(244, 114, 182, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}

// ==========================================================================
// 3.5. MULTI-LAYER HERO MOUSE PARALLAX
// ==========================================================================

function initHeroParallax() {
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;

  const parallaxElements = heroSection.querySelectorAll('[data-parallax]');
  const solidLine = heroSection.querySelector('.hero-line-solid');
  const outlineLine = heroSection.querySelector('.hero-line-outline');
  const portraitCutout = heroSection.querySelector('.hero-portrait-cutout');

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  let scrollProgress = 0;
  let rafId = null;

  window.addEventListener('mousemove', (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    // Normalized coordinates from center (-1 to 1)
    mouseX = (e.clientX - centerX) / centerX;
    mouseY = (e.clientY - centerY) / centerY;

    if (!rafId) {
      rafId = requestAnimationFrame(updateTransforms);
    }
  }, { passive: true });

  window.addEventListener('scroll', () => {
    const heroHeight = heroSection.offsetHeight || window.innerHeight;
    scrollProgress = Math.min(Math.max(window.scrollY / heroHeight, 0), 1);

    if (!rafId) {
      rafId = requestAnimationFrame(updateTransforms);
    }
  }, { passive: true });

  function updateTransforms() {
    currentX += (mouseX - currentX) * 0.06;
    currentY += (mouseY - currentY) * 0.06;

    const typographyScale = 1 - (scrollProgress * 0.12);
    const typographyShiftY = scrollProgress * 22;
    const portraitShiftY = scrollProgress * 42;

    parallaxElements.forEach(el => {
      const depth = parseFloat(el.getAttribute('data-parallax')) || 0.02;
      const moveX = currentX * depth * 38;
      const moveY = currentY * depth * 38;

      if (el === solidLine || el === outlineLine) {
        el.style.transform = `translate3d(${moveX.toFixed(2)}px, ${(moveY + typographyShiftY).toFixed(2)}px, 0) scale(${typographyScale.toFixed(4)})`;
      } else if (el === portraitCutout) {
        el.style.transform = `translate3d(${moveX.toFixed(2)}px, ${(moveY + portraitShiftY).toFixed(2)}px, 0)`;
      } else {
        el.style.transform = `translate3d(${moveX.toFixed(2)}px, ${moveY.toFixed(2)}px, 0)`;
      }
    });

    const isMouseMoving = Math.abs(mouseX - currentX) > 0.001 || Math.abs(mouseY - currentY) > 0.001;
    if (isMouseMoving) {
      rafId = requestAnimationFrame(updateTransforms);
    } else {
      rafId = null;
    }
  }
}

// ==========================================================================
// 4. ANIMATED NUMBERS COUNTER WITH INTERSECTION OBSERVER
// ==========================================================================

function initStatsCounter() {
  const statElements = document.querySelectorAll('.stat-number');
  if (!statElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumbers();
        obs.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-counter-grid');
  if (statsSection) observer.observe(statsSection);

  function animateNumbers() {
    // 15+
    animateValue(document.getElementById('statProjects'), 0, 15, 1200, '', '+');
    // 8.72/10
    animateFloatValue(document.getElementById('statCgpa'), 0, 8.72, 1400, '/10');
    // 5,000+
    animateFormattedValue(document.getElementById('statImages'), 0, 5000, 1500, '+');
    // 0.949
    animateFloatValue(document.getElementById('statMap'), 0, 0.949, 1400, '', 3);
  }

  function animateValue(elem, start, end, duration, prefix = '', suffix = '') {
    if (!elem) return;
    const startTime = performance.now();
    function step(currentTime) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * (end - start) + start);
      elem.innerHTML = `${prefix}${current}<span class="stat-accent">${suffix}</span>`;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function animateFloatValue(elem, start, end, duration, suffix = '', decimals = 2) {
    if (!elem) return;
    const startTime = performance.now();
    function step(currentTime) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = (easeProgress * (end - start) + start).toFixed(decimals);
      if (suffix) {
        elem.innerHTML = `${current}<span class="stat-accent">${suffix}</span>`;
      } else {
        elem.innerHTML = `${current}`;
      }
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function animateFormattedValue(elem, start, end, duration, suffix = '') {
    if (!elem) return;
    const startTime = performance.now();
    function step(currentTime) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * (end - start) + start);
      const formatted = current.toLocaleString('en-US');
      elem.innerHTML = `${formatted}<span class="stat-accent">${suffix}</span>`;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
}

// ==========================================================================
// 5. HUB-AND-SPOKE RADIAL STACK GRAPH INTERACTION
// ==========================================================================

function initRadialStack() {
  const nodes = document.querySelectorAll('.radial-node');
  const lines = document.querySelectorAll('.radial-line');
  const categoryTitle = document.getElementById('stackCategoryTitle');
  const skillCount = document.getElementById('stackSkillCount');
  const badgesContainer = document.getElementById('stackBadgesContainer');
  const noteCaption = document.getElementById('stackNoteCaption');

  if (!nodes.length) return;

  function setCategory(key) {
    const data = STACK_DATA[key];
    if (!data) return;

    // Update active node & line in SVG
    nodes.forEach(n => {
      if (n.dataset.category === key) {
        n.classList.add('active');
      } else {
        n.classList.remove('active');
      }
    });

    lines.forEach(l => {
      if (l.dataset.lineFor === key) {
        l.classList.add('active');
      } else {
        l.classList.remove('active');
      }
    });

    // Update Text info
    if (categoryTitle) categoryTitle.textContent = data.title;
    if (skillCount) skillCount.textContent = data.count;

    // Render Badges
    if (badgesContainer) {
      badgesContainer.innerHTML = '';
      data.skills.forEach(s => {
        const tag = document.createElement('span');
        tag.className = `skill-tag ${s.theoretical ? 'theoretical' : ''}`;
        tag.textContent = s.name;
        badgesContainer.appendChild(tag);
      });
    }

    // Caption for theoretical note
    if (noteCaption) {
      if (data.note) {
        noteCaption.textContent = data.note;
        noteCaption.style.display = 'block';
      } else {
        noteCaption.style.display = 'none';
      }
    }
  }

  nodes.forEach(n => {
    n.addEventListener('click', () => {
      const cat = n.dataset.category;
      setCategory(cat);
    });
  });

  // Default active is GENAI
  setCategory('genai');
}

// ==========================================================================
// 6. CASE STUDY MODAL MANAGER
// ==========================================================================

function initCaseStudyModals() {
  const modalBackdrop = document.getElementById('caseStudyModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const modalBox = modalBackdrop ? modalBackdrop.querySelector('.modal-box') : null;

  if (!modalBackdrop) return;

  function openCaseStudy(key) {
    const study = CASE_STUDIES[key];
    if (!study) return;

    document.getElementById('modalCaseHeader').textContent = `CASE STUDY / ${study.num}`;
    document.getElementById('modalCaseCategory').textContent = study.category;
    document.getElementById('modalCaseTitle').textContent = study.title;
    document.getElementById('modalCaseSubtitle').textContent = study.subtitle;
    document.getElementById('modalProblem').textContent = study.problem;
    document.getElementById('modalSolution').textContent = study.solution;

    // Render Architecture Workflow
    const archContainer = document.getElementById('modalWorkflowList');
    archContainer.innerHTML = '';
    study.architecture.forEach(step => {
      const li = document.createElement('li');
      li.textContent = step;
      archContainer.appendChild(li);
    });

    // Render Capabilities
    const capContainer = document.getElementById('modalCapList');
    capContainer.innerHTML = '';
    study.capabilities.forEach(cap => {
      const li = document.createElement('li');
      li.textContent = cap;
      capContainer.appendChild(li);
    });

    // Render Tech Stack Badges
    const stackContainer = document.getElementById('modalStackBadges');
    stackContainer.innerHTML = '';
    study.stack.forEach(tech => {
      const tag = document.createElement('span');
      tag.className = 'skill-tag';
      tag.textContent = tech;
      stackContainer.appendChild(tag);
    });

    // Render Impact
    document.getElementById('modalImpact').textContent = study.impact;

    // Render GitHub Repository CTA
    const modalGithubBtn = document.getElementById('modalGithubBtn');
    if (modalGithubBtn) {
      modalGithubBtn.href = study.githubUrl || 'https://github.com/sandeshbnyak';
      const label = modalGithubBtn.querySelector('span');
      if (label) {
        label.textContent = (study.githubUrl && !study.githubUrl.endsWith('/sandeshbnyak')) 
          ? 'EXPLORE REPOSITORY ON GITHUB ↗' 
          : 'VIEW PROFILE ON GITHUB ↗';
      }
    }

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });

  // Attach to all Open Case Study buttons
  document.querySelectorAll('[data-case-study]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.dataset.caseStudy;
      openCaseStudy(key);
    });
  });
}

// ==========================================================================
// 7. CONTACT FORM MODAL & ACTIONS
// ==========================================================================

function initContactModal() {
  const contactModal = document.getElementById('contactModal');
  const contactCloseBtn = document.getElementById('contactModalCloseBtn');
  const openFormBtns = document.querySelectorAll('[data-open-contact]');
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('contactFormSuccess');

  if (!contactModal) return;

  function openContact() {
    contactModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (formSuccess) formSuccess.style.display = 'none';
    if (contactForm) contactForm.style.display = 'grid';
  }

  function closeContact() {
    contactModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openFormBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openContact();
    });
  });

  if (contactCloseBtn) contactCloseBtn.addEventListener('click', closeContact);

  contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) closeContact();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactModal.classList.contains('open')) {
      closeContact();
    }
  });

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'TRANSMITTING SYSTEM MESSAGE...';
      }

      setTimeout(() => {
        contactForm.style.display = 'none';
        if (formSuccess) formSuccess.style.display = 'block';
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'SEND MESSAGE';
        }
      }, 700);
    });
  }
}

// ==========================================================================
// 8. SCROLLSPY & NAVIGATION HIGHLIGHT
// ==========================================================================

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// ==========================================================================
// 8.5. SCROLL REVEAL OBSERVER FOR DYNAMIC ENTRANCE ANIMATIONS
// ==========================================================================

function initScrollReveal() {
  const selectors = [
    '.section-title',
    '.eyebrow',
    '.about-content-left',
    '.profile-card',
    '.experience-block',
    '.schematic-box',
    '.duty-item',
    '.philosophy-banner',
    '.stat-item',
    '.system-featured-card',
    '.archive-item',
    '.domain-row',
    '.stack-interactive-layout',
    '.edu-item',
    '.achievement-card',
    '.cert-card',
    '.why-card',
    '.resume-interactive-stage',
    '.resume-content-stage',
    '.contact-header-block',
    '.contact-action-row',
    '.footer-statement'
  ];

  const targets = document.querySelectorAll(selectors.join(', '));
  if (!targets.length) return;

  targets.forEach((el) => {
    el.classList.add('scroll-reveal-item');
  });

  // Stagger grid cards
  document.querySelectorAll('.why-matrix-grid .why-card').forEach((card, idx) => {
    card.classList.add(`scroll-stagger-${(idx % 6) + 1}`);
  });
  document.querySelectorAll('.certifications-grid .cert-card').forEach((card, idx) => {
    card.classList.add(`scroll-stagger-${(idx % 2) + 1}`);
  });
  document.querySelectorAll('.duty-list .duty-item').forEach((item, idx) => {
    item.classList.add(`scroll-stagger-${(idx % 3) + 1}`);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  targets.forEach(el => observer.observe(el));
}

// ==========================================================================
// 8.6. RESUME SECTION INTERACTION & 3D TILT
// ==========================================================================

function initResumeInteractions() {
  const docSheet = document.querySelector('.resume-doc-sheet');
  const glassCard = document.querySelector('.resume-glass-card');

  if (glassCard && docSheet) {
    let rafId = null;

    glassCard.addEventListener('mousemove', (e) => {
      const rect = docSheet.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = (e.clientX - centerX) / (rect.width / 2);
      const mouseY = (e.clientY - centerY) / (rect.height / 2);

      // Subtle tilt
      const tiltX = Math.max(Math.min(-mouseY * 7, 9), -9);
      const tiltY = Math.max(Math.min(mouseX * 7, 9), -9);

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          docSheet.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-5px) scale(1.02)`;
          rafId = null;
        });
      }
    });

    glassCard.addEventListener('mouseleave', () => {
      if (rafId) cancelAnimationFrame(rafId);
      docSheet.style.transform = '';
    });
  }

  // Active state handling for timeline items
  const timelineItems = document.querySelectorAll('.resume-timeline-item');
  timelineItems.forEach(item => {
    item.addEventListener('click', () => {
      timelineItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

// ==========================================================================
// INITIALIZE APPLICATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHeroCanvas();
  initHeroParallax();
  initStatsCounter();
  initRadialStack();
  initCaseStudyModals();
  initContactModal();
  initScrollSpy();
  initScrollReveal();
  initResumeInteractions();
});
