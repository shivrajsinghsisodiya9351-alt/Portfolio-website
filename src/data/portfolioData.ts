import shivrajProfileImg from '../assets/images/shivraj_hero_suit_hd_1787506313025.jpg';
import apolloDashboardImg from '../assets/images/apollo_dashboard_preview_1786521077202.jpg';
import hospitalDashboardImg from '../assets/images/hospital_dashboard_exact_1786548893850.jpg';
import pharmaDashboardImg from '../assets/images/pharma_dashboard_exact_1786549060184.jpg';
import pharmaEndToEndDashboardImg from '../assets/images/pharma_end_to_end_dashboard.png';
import metaAdDashboardImg from '../assets/images/meta_ad_dashboard_exact_1786549264864.jpg';
import ecommerceSalesDashboardImg from '../assets/images/ecommerce_sales_exact_1786549552773.jpg';
import spotifyDashboardImg from '../assets/images/spotify_dashboard_exact_1786549807982.jpg';
import swiggyDashboardImg from '../assets/images/swiggy_dashboard_exact_1786550820578.jpg';
import samsungSupplyChainImg from '../assets/images/samsung_supply_chain_1786550915364.jpg';
import flipkartSalesDashboardImg from '../assets/images/flipkart_sales_analysis_exact_1786551063763.jpg';
import supermarketDashboardImg from '../assets/images/supermarket_data_analysis_1786551195676.jpg';
import carSalesDashboardImg from '../assets/images/car_sales_analysis_1786551299536.jpg';
import indianSuperstoreImg from '../assets/images/indian_superstore_analysis_1786551595575.jpg';

export interface SqlQueryItem {
  queryTitle: string;
  description: string;
  code: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category?: string;
  projectType: 'powerbi' | 'sql';
  businessProblem?: string[];
  tools?: string[];
  imageUrl: string;
  dashboardUrl?: string;
  queryUrl?: string;
  githubUrl?: string;
  databaseEngine?: string;
  sqlQueries?: SqlQueryItem[];
  schemaDetails?: string;
  keyInsights?: string[];
  featured?: boolean;
  isPlaceholder?: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: 'CORE' | 'PIPELINES' | 'VISUALIZATION' | 'DATABASES' | 'MODELING';
  subtitle: string;
  iconName: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  university: string;
  duration: string;
  cgpa: string;
  details?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  provider: string;
  date: string;
  skillsValidated: string[];
}

export const PERSONAL_INFO = {
  fullName: 'Shivraj Singh Sisodiya',
  title: 'Data Analyst | BI Developer',
  badge: 'DATA ANALYST & POWER BI DEVELOPER',
  tagline: 'Turning messy data into decisions — SQL, Power BI & analytics with a healthcare edge.',
  location: 'Jaipur, India',
  email: 'shivrajsinghsisodiya9351@gmail.com',
  bio: 'Data Analyst transitioning from a B.Pharm background, with practical experience in SQL, Power BI, Excel, Python, and statistical analysis. Skilled in data visualization, dashboard development, and translating business questions into actionable insights through industry-relevant projects.',
  
  // Exact URLs mandated by prompt
  linkedinUrl: 'https://www.linkedin.com/in/shivraj-singh-sisodiya/',
  githubUrl: 'https://github.com/shivrajsinghsisodiya9351-alt',
  emailUrl: 'mailto:shivrajsinghsisodiya9351@gmail.com',
  resumeUrl: 'https://docs.google.com/document/d/1gqyRp7aqf_xDU7kT_zDUz0h4gHw2bwPp/edit?usp=drive_link&ouid=104450003315982535950&rtpof=true&sd=true',
  
  // Custom profile photo / avatar representation
  profilePhoto: '/hero_photo.png',
  fallbackPhoto: shivrajProfileImg
};

export const PROJECTS: Project[] = [
  // ================= POWER BI PROJECTS =================
  {
    id: 'apollo-ecommerce',
    title: 'Executive Sales Customer Analytics Dashboard',
    subtitle: 'Business Intelligence Dashboards',
    category: 'E-commerce BI',
    projectType: 'powerbi',
    imageUrl: apolloDashboardImg,
    dashboardUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYWU3OTFkYjgtNmYyNi00ZWI2LWFkMTEtNTY0OThiYmY1ZGUyIiwidCI6IjRiY2I5OGM0LThiMTctNDk5NS1iNDIwLTY2MTdiYjAyMTRmMyJ9',
    githubUrl: 'https://github.com/shivrajsinghsisodiya9351-alt/Executive-Sales-Customer-Analytics-Dashboard',
    featured: true
  },
  {
    id: 'hospital-management',
    title: 'Hospital Management Analysis',
    subtitle: 'Healthcare Patient & Hospital Analytics',
    category: 'Healthcare BI',
    projectType: 'powerbi',
    imageUrl: hospitalDashboardImg,
    dashboardUrl: 'https://app.powerbi.com/groups/me/reports/a97064c1-593a-4ccc-b0ed-52cb46b04837/188e6c99fcbbceb0c2bd?experience=power-bi',
    githubUrl: 'https://github.com/shivrajsinghsisodiya9351-alt',
    featured: true
  },
  {
    id: 'pharma-end-to-end-analysis',
    title: 'PHARMA END TO END ANALYSIS PROJECT',
    subtitle: 'End-to-End Pharmaceutical Sales, Inventory & Patient Analytics BI',
    category: 'Pharma & Healthcare BI',
    projectType: 'powerbi',
    imageUrl: pharmaEndToEndDashboardImg,
    dashboardUrl: 'https://app.powerbi.com/groups/me/reports/0090f8df-7390-4156-8ced-e52b97f6b9e4/2775ab139032433b8807?experience=power-bi',
    githubUrl: 'https://github.com/shivrajsinghsisodiya9351-alt/Pharma-end-to-end-analysis-project/blob/main/README.md',
    featured: true
  },
  {
    id: 'pharmacy-tracking-management',
    title: 'PHARMACY SYSTEM TRACKING AND MANAGEMENT',
    subtitle: 'Pharma Performance, Product & Customer Analytics',
    category: 'Pharma & Supply Chain BI',
    projectType: 'powerbi',
    imageUrl: pharmaDashboardImg,
    dashboardUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYjczOTVlMjQtOWM4ZC00NDA0LWI2Y2EtMjJkZGE3OTMxN2ZiIiwidCI6IjRiY2I5OGM0LThiMTctNDk5NS1iNDIwLTY2MTdiYjAyMTRmMyJ9',
    githubUrl: 'https://github.com/shivrajsinghsisodiya9351-alt/Pharma-Data-Analysis',
    featured: true
  },
  {
    id: 'meta-ad-performance-analysis',
    title: 'META AD PERFORMANCE ANALYSIS',
    subtitle: 'Digital Marketing & Campaign ROI Analytics',
    category: 'Social Media & Marketing BI',
    projectType: 'powerbi',
    imageUrl: metaAdDashboardImg,
    dashboardUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYmEwMWU0OGItYjUxNS00MTQ0LTgxYzQtZWVkNGVmOGIxOTdmIiwidCI6IjRiY2I5OGM0LThiMTctNDk5NS1iNDIwLTY2MTdiYjAyMTRmMyJ9',
    githubUrl: 'https://github.com/shivrajsinghsisodiya9351-alt/Meta-Ad-Performance-Analysis',
    featured: true
  },
  {
    id: 'ecommerce-sales-analysis',
    title: 'E-commerce Sales Analysis',
    subtitle: 'Track Sales Performance & Business Growth',
    category: 'E-commerce & Retail BI',
    projectType: 'powerbi',
    imageUrl: ecommerceSalesDashboardImg,
    dashboardUrl: 'https://app.powerbi.com/groups/me/reports/ce0c7f18-0df8-4c93-9af9-8bce2fe0baa4/ae0e93500d00c2a828c6?experience=power-bi',
    githubUrl: 'https://github.com/shivrajsinghsisodiya9351-alt',
    featured: true
  },
  {
    id: 'spotify-data-analytics',
    title: 'Spotify Data Analytics & Streaming Insights',
    subtitle: 'Music Streaming, Artist Performance & Track Popularity BI',
    category: 'Media & Entertainment BI',
    projectType: 'powerbi',
    imageUrl: spotifyDashboardImg,
    dashboardUrl: 'https://app.powerbi.com/groups/me/reports/21f3fe86-15ca-43fd-899d-37153535bd9d/2e9a551b8ba01a495146?experience=power-bi',
    githubUrl: 'https://github.com/shivrajsinghsisodiya9351-alt/Spotify-Music-Analytics-Dashboard',
    featured: true
  },
  {
    id: 'swiggy-food-delivery-analysis',
    title: 'SWIGGY FOOD DELIVERY ANALYSIS',
    subtitle: 'Food Delivery, Sales & Demographics BI',
    category: 'Food & Quick Commerce BI',
    projectType: 'powerbi',
    imageUrl: swiggyDashboardImg,
    dashboardUrl: 'https://app.powerbi.com/groups/me/reports/ba195b88-6037-4ed4-a92b-f16a80b29335/b1d1fddf8880db870e52?experience=power-bi',
    githubUrl: 'https://github.com/shivrajsinghsisodiya9351-alt',
    featured: true
  },
  {
    id: 'samsung-supply-chain-logistics',
    title: 'SAMSUNG SUPPLY CHAIN AND LOGISTICS MANAGEMENT SYSTEM',
    subtitle: 'Global Freight, Logistics Costs & Inventory Operations BI',
    category: 'Supply Chain & Logistics BI',
    projectType: 'powerbi',
    imageUrl: samsungSupplyChainImg,
    dashboardUrl: 'https://app.powerbi.com/groups/me/reports/5e5b828a-0f15-4301-a9f5-b0a05a488216/972ed47c28ddf2bc4c84?experience=power-bi',
    githubUrl: 'https://github.com/shivrajsinghsisodiya9351-alt',
    featured: true
  },
  {
    id: 'flipkart-sales-analysis',
    title: 'FLIPKART SALES ANALYSIS',
    subtitle: 'Customer Summary, Product Performance & Sales Overview BI',
    category: 'E-commerce Analytics BI',
    projectType: 'powerbi',
    imageUrl: flipkartSalesDashboardImg,
    dashboardUrl: 'https://app.powerbi.com/groups/me/reports/431dc5b6-beca-43de-b8ec-1b0ef3f8ecb6/d92b94029fda2ca77cb0?experience=power-bi',
    githubUrl: 'https://github.com/shivrajsinghsisodiya9351-alt',
    featured: true
  },
  {
    id: 'supermarket-data-analysis',
    title: 'SUPERMARKET DATA ANALYSIS',
    subtitle: 'Superstore Sales, Profit by Category & Geographic Performance BI',
    category: 'Retail & Superstore Analytics BI',
    projectType: 'powerbi',
    imageUrl: supermarketDashboardImg,
    dashboardUrl: 'https://app.powerbi.com/groups/me/reports/6dd0d511-a26e-458d-9d7b-78390d83cf22/cc2efa4b222cd090022a?experience=power-bi',
    githubUrl: 'https://github.com/shivrajsinghsisodiya9351-alt',
    featured: true
  },
  {
    id: 'car-sales-analysis',
    title: 'CAR SALES ANALYSIS',
    subtitle: 'CYTD Sales Overview, Body Style Trends & Dealer Performance BI',
    category: 'Automotive Sales & Dealership BI',
    projectType: 'powerbi',
    imageUrl: carSalesDashboardImg,
    dashboardUrl: 'https://app.powerbi.com/groups/me/reports/d101dc0a-fa19-46af-8cdf-d9b0d49b236c/6eb99410f9aeba8b73c9?experience=power-bi',
    githubUrl: 'https://github.com/shivrajsinghsisodiya9351-alt',
    featured: true
  },
  {
    id: 'indian-superstore-market-analysis',
    title: 'INDIAN SUPERSTORE MARKET ANALYSIS',
    subtitle: 'Country & Region Summary, Category Performance & Revenue BI',
    category: 'Retail & Quick Commerce BI',
    projectType: 'powerbi',
    imageUrl: indianSuperstoreImg,
    dashboardUrl: 'https://app.powerbi.com/groups/me/reports/c911d773-78b2-4e32-8c28-d93e609d3cca/870150290380d0eb25cc?experience=power-bi',
    githubUrl: 'https://github.com/shivrajsinghsisodiya9351-alt',
    featured: true
  },

  // ================= SQL ANALYTICS PROJECTS =================
  {
    id: 'sale-and-command-center-analysis-sql',
    title: 'SALE AND COMMAND CENTER ANALYSIS',
    subtitle: 'Apollo E-Commerce Sales & Analytics SQL Queries',
    category: 'E-commerce SQL Analytics',
    projectType: 'sql',
    databaseEngine: 'SQL / PostgreSQL',
    imageUrl: apolloDashboardImg,
    queryUrl: 'https://github.com/shivrajsinghsisodiya9351-alt/Executive-Sales-Customer-Analytics-Dashboard/blob/main/SQL%20Project.sql',
    dashboardUrl: 'https://github.com/shivrajsinghsisodiya9351-alt/Executive-Sales-Customer-Analytics-Dashboard/blob/main/SQL%20Project.sql',
    githubUrl: 'https://github.com/shivrajsinghsisodiya9351-alt/Executive-Sales-Customer-Analytics-Dashboard/blob/main/SQL%20Project.sql',
    tools: ['SQL', 'Joins & Aggregations', 'CTEs', 'Data Cleaning', 'Revenue & Sales Metrics'],
    businessProblem: [
      'Analyze Apollo E-Commerce sales data across products, customer orders, and revenue channels.',
      'Track sales revenue, order fulfillment, discount performance, and product categorization.',
      'Provide structured SQL queries for comprehensive reporting and executive analytics.'
    ],
    keyInsights: [
      'Executed complex SQL queries to identify top-performing product categories and sales distribution.',
      'Structured clean database scripts for order summary, sales trend, and customer purchasing metrics.',
      'Optimized aggregation queries for rapid data extraction and BI dashboard integration.'
    ],
    featured: true
  },
  {
    id: 'hospital-management-and-patient-analysis-sql',
    title: 'HOSPITAL MANAGEMENT AND PATIENT ANALYSIS',
    subtitle: 'Healthcare Database Analytics, Revenue, Doctor Ranking & Patient Metrics',
    category: 'Healthcare SQL Analytics',
    projectType: 'sql',
    databaseEngine: 'PostgreSQL / SQL',
    imageUrl: hospitalDashboardImg,
    queryUrl: 'https://github.com/shivrajsinghsisodiya9351-alt/Hospital-Management-Analytics-Dashboard/blob/main/Hospital_sql%20_project.sql',
    dashboardUrl: 'https://github.com/shivrajsinghsisodiya9351-alt/Hospital-Management-Analytics-Dashboard/blob/main/Hospital_sql%20_project.sql',
    githubUrl: 'https://github.com/shivrajsinghsisodiya9351-alt/Hospital-Management-Analytics-Dashboard/blob/main/Hospital_sql%20_project.sql',
    tools: ['PostgreSQL', 'Multi-table Joins', 'Window Functions', 'DENSE_RANK()', 'Time Series Analytics', 'CASE Expressions'],
    businessProblem: [
      'Analyze 9 relational tables including appointments, billing, doctors, medicines, and patient demographic records.',
      'Evaluate doctor-wise revenue generation, appointment volume distribution, and departmental stay durations.',
      'Monitor pharmacy medicine dispensing, low-stock threshold risks, and multi-stream hospital billing breakdowns.'
    ],
    keyInsights: [
      'Evaluated top 10 revenue-driving physicians and ranked doctor consultation volumes using DENSE_RANK() window logic.',
      'Automated inventory status triggers (Critical Low < 100 units, Low 101-200) to prevent pharmaceutical stockouts.',
      'Segmented admission volume across demographic age brackets (0-18, 19-35, 36-50, 50+) and identified high-frequency repeat visitors.'
    ],
    schemaDetails: 'Core Tables: appointments, bills, doctors, medicine_dispensing, medicines, patients, staff, stock_management, tests',
    sqlQueries: [
      {
        queryTitle: 'Top 10 Revenue Generating Doctors',
        description: 'Aggregates billings across multi-table joins between bills, appointments, and doctors.',
        code: `SELECT d.doctor_name,
  SUM(b.total_amount) AS Fess
FROM bills b 
JOIN appointments a ON b.appointment_id = a.appointment_id
JOIN doctors d ON a.doctor_id = d.doctor_id
GROUP BY doctor_name
ORDER BY SUM(consultation_fee) DESC
LIMIT 10;`
      },
      {
        queryTitle: 'Doctor-Wise Appointment Count & Ranking',
        description: 'Applies DENSE_RANK() window function to rank doctors by total patient appointment volume.',
        code: `SELECT 
  d.doctor_name,
  COUNT(a.appointment_id) AS Total_appointments,
  DENSE_RANK() OVER (ORDER BY COUNT(a.appointment_id) DESC) AS Doctor_rnk
FROM doctors d 
JOIN appointments a ON d.doctor_id = a.doctor_id
GROUP BY d.doctor_name;`
      },
      {
        queryTitle: 'Medicine Low Stock & Expiry Urgency Alert',
        description: 'Categorizes pharmaceutical inventory stock levels with CASE WHEN conditional expressions.',
        code: `SELECT 
  medicine_name,
  stock_quantity,
  CASE
    WHEN stock_quantity < 100 THEN 'Critical Low Stock'
    WHEN stock_quantity BETWEEN 101 AND 200 THEN 'Low Stock'
    ELSE 'Sufficient Stock'
  END AS stock_status
FROM medicines;`
      },
      {
        queryTitle: 'Patient Age Demographic Visit Distribution',
        description: 'Calculates patient ages dynamically from admission date and birth date into demographic buckets.',
        code: `SELECT 
  CASE
    WHEN EXTRACT(YEAR FROM AGE(admission_date, date_of_birth)) BETWEEN 0 AND 18 THEN '0-18'
    WHEN EXTRACT(YEAR FROM AGE(admission_date, date_of_birth)) BETWEEN 19 AND 35 THEN '19-35'
    WHEN EXTRACT(YEAR FROM AGE(admission_date, date_of_birth)) BETWEEN 36 AND 50 THEN '36-50'
    ELSE '50+'
  END AS Age_GROUP,
  COUNT(patient_id) AS Total_patients
FROM patients 
GROUP BY Age_group
ORDER BY Total_patients DESC;`
      }
    ],
    featured: true
  },
  {
    id: 'pharma-end-to-end-analysis-sql',
    title: 'PHARMA END TO END ANALYSIS (SQL)',
    subtitle: 'Pharmaceutical Revenue, Inventory Turnover, Profit Waterfall & Supply Chain SQL Queries',
    category: 'Pharma & Healthcare SQL Analytics',
    projectType: 'sql',
    databaseEngine: 'PostgreSQL / SQL',
    imageUrl: pharmaEndToEndDashboardImg,
    queryUrl: 'https://github.com/shivrajsinghsisodiya9351-alt/Pharma-end-to-end-analysis-project/blob/main/Pharma%20SQL%20Projects.sql',
    dashboardUrl: 'https://github.com/shivrajsinghsisodiya9351-alt/Pharma-end-to-end-analysis-project/blob/main/Pharma%20SQL%20Projects.sql',
    githubUrl: 'https://github.com/shivrajsinghsisodiya9351-alt/Pharma-end-to-end-analysis-project/blob/main/README.md',
    tools: ['PostgreSQL / SQL', 'CTEs', 'Window Functions', 'Revenue Waterfall', 'Inventory Aging', 'Therapeutic Margin Analysis'],
    businessProblem: [
      'Consolidate end-to-end pharmaceutical data across orders, products, customers, and supply chain logistics.',
      'Analyze gross-to-net revenue waterfall, discount leakage, and therapeutic category profit margins.',
      'Monitor inventory velocity, lead times, safety stocks, and branch-level fulfillment rates.'
    ],
    keyInsights: [
      'Engineered SQL aggregation pipelines tracking 54.65bn net revenue and 96K total orders across categories.',
      'Analyzed profit bridge mechanics identifying discount leakage and cost-of-goods-sold optimization levers.',
      'Calculated stock availability by pack size, lead times (avg 21.4 days), and high-margin product distributions.'
    ],
    schemaDetails: 'Core Tables: orders, order_details, products, categories, customers, inventory, logistics, sales_team',
    sqlQueries: [
      {
        queryTitle: 'Net Revenue Waterfall & Profit Margin Calculation',
        description: 'Computes gross revenue, discount leakage, COGS, and profit margin percentage by therapeutic drug category.',
        code: `SELECT 
  category_name,
  SUM(gross_sales) AS total_gross_sales,
  SUM(discount_amount) AS total_discounts,
  SUM(cogs) AS total_cogs,
  (SUM(gross_sales) - SUM(discount_amount)) AS net_revenue,
  (SUM(gross_sales) - SUM(discount_amount) - SUM(cogs)) AS net_profit,
  ROUND(((SUM(gross_sales) - SUM(discount_amount) - SUM(cogs)) / NULLIF(SUM(gross_sales) - SUM(discount_amount), 0)) * 100, 2) AS profit_margin_pct
FROM pharma_sales_transactions
GROUP BY category_name
ORDER BY net_revenue DESC;`
      },
      {
        queryTitle: 'Pharmaceutical Inventory Lead Time & Stock Urgency',
        description: 'Identifies stock status levels across pack sizes and correlates lead time against critical reorder thresholds.',
        code: `SELECT 
  p.product_name,
  p.pack_size,
  i.stock_available,
  i.reorder_level,
  AVG(l.lead_time_days) AS avg_lead_time,
  CASE
    WHEN i.stock_available <= (i.reorder_level * 0.5) THEN 'Critical Stockout Risk'
    WHEN i.stock_available <= i.reorder_level THEN 'Reorder Required'
    ELSE 'Optimal Stock'
  END AS stock_status
FROM inventory i
JOIN products p ON i.product_id = p.product_id
JOIN logistics l ON p.product_id = l.product_id
GROUP BY p.product_name, p.pack_size, i.stock_available, i.reorder_level
ORDER BY i.stock_available ASC;`
      },
      {
        queryTitle: 'Monthly Sales & Profit Trend with Window Growth Rate',
        description: 'Applies LAG() window function to calculate month-over-month revenue growth trajectory and order volumes.',
        code: `SELECT 
  month_name,
  total_orders,
  net_revenue,
  net_profit,
  LAG(net_revenue) OVER (ORDER BY month_index) AS prev_month_revenue,
  ROUND(((net_revenue - LAG(net_revenue) OVER (ORDER BY month_index)) / NULLIF(LAG(net_revenue) OVER (ORDER BY month_index), 0)) * 100, 2) AS mom_growth_pct
FROM monthly_sales_summary
ORDER BY month_index;`
      }
    ],
    featured: true
  }
];

export const SKILLS: Skill[] = [
  {
    id: 'sql',
    name: 'SQL',
    category: 'CORE',
    subtitle: 'Complex queries, Joins & Subqueries',
    iconName: 'Database'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'DATABASES',
    subtitle: 'Relational schema design & indexing',
    iconName: 'Server'
  },
  {
    id: 'powerbi',
    name: 'Power BI',
    category: 'VISUALIZATION',
    subtitle: 'Interactive dashboards & report creation',
    iconName: 'BarChart3'
  },
  {
    id: 'dax',
    name: 'DAX',
    category: 'MODELING',
    subtitle: 'Calculated measures & time intelligence',
    iconName: 'Cpu'
  },
  {
    id: 'powerquery',
    name: 'Power Query',
    category: 'PIPELINES',
    subtitle: 'ETL data transformation & cleansing',
    iconName: 'Filter'
  },
  {
    id: 'datamodeling',
    name: 'Data Modeling',
    category: 'MODELING',
    subtitle: 'Star schema & snowflake modeling',
    iconName: 'Network'
  },
  {
    id: 'excel',
    name: 'Excel',
    category: 'CORE',
    subtitle: 'Data manipulation & reporting',
    iconName: 'FileSpreadsheet'
  },
  {
    id: 'pivottables',
    name: 'Pivot Tables',
    category: 'CORE',
    subtitle: 'Aggregation & rapid summarization',
    iconName: 'Grid'
  },
  {
    id: 'advancedformulas',
    name: 'Advanced Formulas',
    category: 'CORE',
    subtitle: 'XLOOKUP, INDEX/MATCH & nested logic',
    iconName: 'Code'
  },
  {
    id: 'eda',
    name: 'EDA',
    category: 'PIPELINES',
    subtitle: 'Exploratory data analysis & pattern discovery',
    iconName: 'Search'
  },
  {
    id: 'datacleaning',
    name: 'Data Cleaning',
    category: 'PIPELINES',
    subtitle: 'Handling nulls, duplicates & anomaly detection',
    iconName: 'Sparkles'
  },
  {
    id: 'etlbasics',
    name: 'ETL Basics',
    category: 'PIPELINES',
    subtitle: 'Extract, transform & load pipelines',
    iconName: 'GitMerge'
  },
  {
    id: 'jira',
    name: 'Jira',
    category: 'CORE',
    subtitle: 'Agile task tracking & project management',
    iconName: 'Kanban'
  },
  {
    id: 'powerpoint',
    name: 'PowerPoint',
    category: 'VISUALIZATION',
    subtitle: 'Executive deck design & storyboarding',
    iconName: 'Presentation'
  },
  {
    id: 'stakeholdercomm',
    name: 'Stakeholder Communication',
    category: 'CORE',
    subtitle: 'Translating business logic into technical insights',
    iconName: 'MessageSquare'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'bpharm',
    degree: 'Bachelor of Pharmacy (B.Pharm)',
    institution: 'Jaipur College of Pharmacy',
    university: 'Rajasthan University of Health Sciences (RUHS)',
    duration: '2023–2027',
    cgpa: '8.00/10',
    details: 'Leveraging healthcare domain analytical rigor, clinical trial structure familiarity, and data precision into Business Intelligence and Data Analytics.'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-1',
    name: 'Data Visualisation: Empowering Business with Effective Insights',
    provider: 'Tata / Forage',
    date: 'June 2026',
    skillsValidated: ['Business Insight Delivery', 'Executive Visual Storytelling', 'Dashboard Communication', 'Chart Selection Strategy']
  },
  {
    id: 'cert-2',
    name: 'Business Analytics with Excel',
    provider: 'Microsoft / Simplilearn SkillUP',
    date: 'September 2025',
    skillsValidated: ['Advanced Excel Analytics', 'Statistical Summarization', 'Pivot Table Modeling', 'Data Cleansing']
  }
];
