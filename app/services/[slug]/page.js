import Link from 'next/link';
import {
  FiShoppingCart, FiSearch, FiGlobe, FiLayout, FiFileText, FiSettings,
  FiSmartphone, FiZap, FiMapPin, FiMessageSquare, FiDollarSign, FiMail,
  FiTrendingUp, FiMonitor, FiBriefcase, FiPenTool, FiTag, FiVideo
} from 'react-icons/fi';
import { FaApple, FaAndroid } from 'react-icons/fa';

// Dynamic service page for all other service sub-pages
const serviceData = {
  'ecommerce-development': {
    title: 'eCommerce Development',
    meta: 'Professional eCommerce development with Shopify, WooCommerce & Magento. Build a high-converting online store. Get a free quote today.',
    hero: 'eCommerce Development That Turns Your Store Into a <span>Revenue Machine</span>',
    heroSub: 'We build high-converting eCommerce stores on Shopify, WooCommerce, BigCommerce, and custom platforms that are fast, beautiful, and optimized to sell.',
    icon: FiShoppingCart,
    stats: [['200+','Stores Built'],['35%','Avg Conversion Lift'],['Shopify','WooCommerce'],['$2M+','Revenue Generated']],
    features: ['Product catalog setup & optimization','Payment gateway integration','Mobile-first responsive design','SEO-optimized product pages','Inventory management system','Customer account portals','Abandoned cart recovery','Analytics & conversion tracking'],
    price: 'From $5,000',
    related: [{ title: 'eCommerce SEO', href: '/services/ecommerce-seo', icon: FiSearch }, { title: 'Web Development', href: '/services/web-development', icon: FiGlobe }, { title: 'UI/UX Design', href: '/services/ui-ux-design', icon: FiLayout }],
  },
  'wordpress-development': {
    title: 'WordPress Development',
    meta: 'Professional WordPress website development. Custom themes, plugins, WooCommerce, and headless WordPress. Fast, secure, and SEO-ready.',
    hero: 'WordPress Development — Powerful Sites That Are <span>Easy to Manage</span>',
    heroSub: 'Custom WordPress websites built with clean code, optimized performance, and intuitive content management. Perfect for businesses that want control over their content.',
    icon: FiFileText,
    stats: [['150+','WordPress Sites Built'],['99.9%','Uptime Guaranteed'],['Mobile-First','Design'],['SEO-Ready','Out of the Box']],
    features: ['Custom theme development','Plugin development & integration','WooCommerce setup','Performance optimization','Security hardening','Multi-site network setup','Headless WordPress','Ongoing maintenance'],
    price: 'From $1,500',
    related: [{ title: 'Web Development', href: '/services/web-development', icon: FiGlobe }, { title: 'SEO Services', href: '/services/seo', icon: FiSearch }, { title: 'Web Hosting & Maintenance', href: '/services/hosting-maintenance', icon: FiMonitor }],
  },
  'custom-web-applications': {
    title: 'Custom Web Applications',
    meta: 'Custom web application development: SaaS platforms, portals, dashboards, and booking systems. Scalable, secure, and built for growth.',
    hero: 'Custom Web Applications Built for <span>Scale and Performance</span>',
    heroSub: 'From SaaS platforms to enterprise dashboards and booking systems — we build complex web applications with clean architecture, robust APIs, and intuitive interfaces.',
    icon: FiSettings,
    stats: [['50+','Apps Launched'],['99.9%','Uptime SLA'],['Agile','Development'],['AWS & GCP','Cloud Hosting']],
    features: ['Custom business logic','User authentication & roles','Third-party API integrations','Real-time data features','Admin dashboards','Payment processing','Scalable cloud architecture','Comprehensive documentation'],
    price: 'From $8,000',
    related: [{ title: 'Web Development', href: '/services/web-development', icon: FiGlobe }, { title: 'Mobile App Development', href: '/services/mobile-app-development', icon: FiSmartphone }, { title: 'UI/UX Design', href: '/services/ui-ux-design', icon: FiLayout }],
  },
  'ios-app-development': {
    title: 'iOS App Development',
    meta: 'Native iOS app development in Swift. iPhone & iPad apps for the App Store. 150+ apps delivered. Expert Apple ecosystem integration.',
    hero: 'Native iOS App Development — <span>Built for the Apple Ecosystem</span>',
    heroSub: 'We build native iOS apps in Swift that leverage the full power of the Apple ecosystem. From App Store submission to ongoing updates — we handle everything.',
    icon: FaApple,
    stats: [['100+','iOS Apps Shipped'],['4.8★','Avg App Store Rating'],['Swift','Native Development'],['6 Months','Post-Launch Support']],
    features: ['Native Swift development','SwiftUI & UIKit interfaces','Apple ecosystem integration','App Store submission','Push notifications','Apple Pay integration','iCloud & HealthKit','Performance optimization'],
    price: 'From $15,000',
    related: [{ title: 'Android App Development', href: '/services/android-app-development', icon: FaAndroid }, { title: 'Cross-Platform Apps', href: '/services/cross-platform-apps', icon: FiZap }, { title: 'UI/UX Design', href: '/services/ui-ux-design', icon: FiLayout }],
  },
  'android-app-development': {
    title: 'Android App Development',
    meta: 'Native Android app development in Kotlin. Google Play-ready apps with Material Design. 150+ apps delivered. Free quote available.',
    hero: 'Native Android App Development — <span>Google Play Ready</span>',
    heroSub: 'We build high-performance native Android apps in Kotlin with Material Design 3. From concept to Google Play — we deliver apps users love.',
    icon: FaAndroid,
    stats: [['80+','Android Apps Shipped'],['4.7★','Avg Play Store Rating'],['Kotlin','Native Development'],['Material Design 3','Modern UI']],
    features: ['Native Kotlin development','Material Design 3 UI','Google Play submission','Firebase integration','Google Pay support','Push notifications','Offline-first architecture','Tablet optimization'],
    price: 'From $12,000',
    related: [{ title: 'iOS App Development', href: '/services/ios-app-development', icon: FaApple }, { title: 'Cross-Platform Apps', href: '/services/cross-platform-apps', icon: FiZap }, { title: 'Mobile App Development', href: '/services/mobile-app-development', icon: FiSmartphone }],
  },
  'cross-platform-apps': {
    title: 'Cross-Platform App Development',
    meta: 'Cross-platform mobile app development with React Native and Flutter. iOS + Android from one codebase. Save 40-60% vs native development.',
    hero: 'Cross-Platform Apps — <span>One Codebase, Two Stores</span>',
    heroSub: 'Build iOS and Android apps simultaneously with React Native and Flutter. Deliver native performance at a fraction of the cost — with both apps shipped together.',
    icon: FiZap,
    stats: [['React Native','& Flutter'],['40-60%','Cost Savings vs Native'],['Both Stores','iOS + Android'],['99.9%','Crash-Free Sessions']],
    features: ['React Native & Flutter options','Shared codebase for iOS + Android','Native performance & UI','Both App Stores submission','Third-party integrations','Push notifications','Offline support','Code reuse up to 90%'],
    price: 'From $18,000',
    related: [{ title: 'iOS App Development', href: '/services/ios-app-development', icon: FaApple }, { title: 'Android App Development', href: '/services/android-app-development', icon: FaAndroid }, { title: 'UI/UX Design', href: '/services/ui-ux-design', icon: FiLayout }],
  },
  'local-seo': {
    title: 'Local SEO',
    meta: 'Local SEO services to dominate Google Maps and local search results. Google Business Profile optimization, citation building, and local keyword targeting.',
    hero: 'Local SEO — Dominate Google Maps and <span>Own Your Local Market</span>',
    heroSub: 'Rank #1 in your city for the keywords that bring customers through your door. Our Local SEO strategy puts your business at the top of Google Maps and local search results.',
    icon: FiMapPin,
    stats: [['92%','Clients Rank Page 1'],['3.5x','Avg Lead Increase'],['Google Maps','Domination'],['NAP','Consistency']],
    features: ['Google Business Profile optimization','Local keyword research & targeting','Citation building & cleanup','NAP consistency audit','Review generation strategy','Local content creation','Local link building','Monthly ranking reports'],
    price: 'From $599/month',
    related: [{ title: 'SEO Services', href: '/services/seo', icon: FiSearch }, { title: 'Technical SEO', href: '/services/technical-seo', icon: FiSettings }, { title: 'Content Marketing', href: '/services/content-marketing', icon: FiFileText }],
  },
  'technical-seo': {
    title: 'Technical SEO',
    meta: 'Technical SEO services: Core Web Vitals, site speed, crawlability, indexation, and schema markup. Fix the technical issues holding your rankings back.',
    hero: 'Technical SEO — Fix the Foundation That <span>Google Rewards</span>',
    heroSub: "If your site has technical issues, no amount of content or links will move the needle. We identify and fix every technical SEO problem that's preventing you from ranking.",
    icon: FiSettings,
    stats: [['Core Web Vitals','Optimization'],['100+','Technical Audits'],['Site Speed','Under 2 Seconds'],['Mobile-First','Indexing']],
    features: ['Comprehensive technical audit','Core Web Vitals optimization','Crawl error fixing','XML sitemap & robots.txt','Canonical tag implementation','Schema markup (JSON-LD)','HTTPS & security headers','International SEO (hreflang)'],
    price: 'From $799/month',
    related: [{ title: 'SEO Services', href: '/services/seo', icon: FiSearch }, { title: 'Local SEO', href: '/services/local-seo', icon: FiMapPin }, { title: 'Web Development', href: '/services/web-development', icon: FiGlobe }],
  },
  'ecommerce-seo': {
    title: 'eCommerce SEO',
    meta: 'eCommerce SEO services to grow organic revenue. Product page optimization, category SEO, schema markup, and 1,200+ product keywords ranking.',
    hero: 'eCommerce SEO — Grow Organic Revenue with <span>Product-First SEO</span>',
    heroSub: 'We optimize every layer of your eCommerce store — from product pages to category structure — to rank for high-intent keywords that drive purchases.',
    icon: FiShoppingCart,
    stats: [['428%','Avg Revenue Increase'],['1,200+','Product Keywords'],['Shopify & WooCommerce','Experts'],['Google Shopping','Optimization']],
    features: ['Product page SEO optimization','Category page architecture','Schema markup for products','Google Shopping optimization','Internal linking structure','Faceted navigation handling','Duplicate content resolution','Seasonal content strategy'],
    price: 'From $999/month',
    related: [{ title: 'eCommerce Development', href: '/services/ecommerce-development', icon: FiShoppingCart }, { title: 'SEO Services', href: '/services/seo', icon: FiSearch }, { title: 'Content Marketing', href: '/services/content-marketing', icon: FiFileText }],
  },
  'social-media-marketing': {
    title: 'Social Media Marketing',
    meta: 'Social media marketing services for Facebook, Instagram, LinkedIn, and TikTok. Engaging content, community management, and growth strategy.',
    hero: 'Social Media Marketing That Builds <span>Brand and Drives Sales</span>',
    heroSub: 'We create and manage engaging social media content that builds your brand, grows your audience, and converts followers into customers.',
    icon: FiMessageSquare,
    stats: [['2+ Platforms','Per Package'],['12+ Posts','Per Month'],['Community','Management'],['Monthly','Analytics Reports']],
    features: ['Content strategy & calendar','Custom graphic design','Caption & hashtag research','Community management','Story & Reel creation','Influencer outreach','Monthly performance reports','Competitor benchmarking'],
    price: 'From $499/month',
    related: [{ title: 'PPC & Paid Advertising', href: '/services/ppc-advertising', icon: FiDollarSign }, { title: 'Content Marketing', href: '/services/content-marketing', icon: FiFileText }, { title: 'Graphic Design', href: '/services/graphic-design', icon: FiPenTool }],
  },
  'ppc-advertising': {
    title: 'PPC & Paid Advertising',
    meta: 'PPC and paid advertising management: Google Ads, Facebook Ads, and paid campaigns. A/B testing, optimization, and ROI-focused reporting.',
    hero: 'PPC & Paid Advertising — Every Dollar <span>Working Hard for Your ROI</span>',
    heroSub: 'We manage Google Ads, Facebook Ads, and paid campaigns that generate immediate leads and revenue. Data-driven optimization ensures maximum ROI on every dollar spent.',
    icon: FiDollarSign,
    stats: [['3.5x','Average ROAS'],['Google Ads','Certified'],['A/B Testing','Every Campaign'],['Weekly','Optimization']],
    features: ['Google Ads management','Facebook & Instagram Ads','LinkedIn B2B campaigns','Landing page optimization','A/B ad testing','Bid strategy optimization','Conversion tracking setup','Weekly performance reports'],
    price: 'From $399/month + ad spend',
    related: [{ title: 'Social Media Marketing', href: '/services/social-media-marketing', icon: FiMessageSquare }, { title: 'CRO', href: '/services/cro', icon: FiTrendingUp }, { title: 'Content Marketing', href: '/services/content-marketing', icon: FiFileText }],
  },
  'content-marketing': {
    title: 'Content Marketing',
    meta: 'Content marketing services: SEO blog posts, pillar pages, topic clusters, and content strategy that builds authority and drives organic traffic.',
    hero: 'Content Marketing That Builds Authority and <span>Drives Organic Traffic</span>',
    heroSub: 'Strategic content creation that ranks, educates, and converts. We build comprehensive content programs that make your brand the definitive resource in your industry.',
    icon: FiFileText,
    stats: [['4+','Blog Posts/Month'],['Keyword-Driven','Content'],['Pillar Page','Strategy'],['Topic Clusters','Built']],
    features: ['Keyword research & mapping','Content calendar planning','Long-form blog posts','Pillar page creation','Topic cluster strategy','Content briefs & outlines','Internal linking optimization','Content performance tracking'],
    price: 'From $799/month',
    related: [{ title: 'SEO Services', href: '/services/seo', icon: FiSearch }, { title: 'Social Media Marketing', href: '/services/social-media-marketing', icon: FiMessageSquare }, { title: 'Email Marketing', href: '/services/email-marketing', icon: FiMail }],
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    meta: 'Professional UI/UX design services: user research, wireframes, prototypes, and high-fidelity design. Create digital experiences users love.',
    hero: 'UI/UX Design That Creates Experiences <span>Users Love and Convert</span>',
    heroSub: 'We design intuitive, beautiful digital experiences grounded in user research and conversion principles. From wireframes to pixel-perfect prototypes — every decision serves your users.',
    icon: FiLayout,
    stats: [['200+','Interfaces Designed'],['User Testing','Every Project'],['Figma','Prototyping'],['Handoff-Ready','for Dev']],
    features: ['User research & personas','Information architecture','Wireframe creation','Interactive prototyping','High-fidelity UI design','Design system creation','Usability testing','Developer handoff'],
    price: 'From $2,000',
    related: [{ title: 'Web Development', href: '/services/web-development', icon: FiGlobe }, { title: 'Mobile App Development', href: '/services/mobile-app-development', icon: FiSmartphone }, { title: 'Graphic Design', href: '/services/graphic-design', icon: FiPenTool }],
  },
  'graphic-design': {
    title: 'Graphic Design',
    meta: 'Professional graphic design services: 15+ custom graphics per month for social media, ads, presentations, and marketing materials.',
    hero: 'Graphic Design That Makes Your Brand <span>Impossible to Ignore</span>',
    heroSub: 'Consistent, high-quality visual content for every platform. From social media graphics to marketing materials — our designers create visuals that stop the scroll and reinforce your brand.',
    icon: FiPenTool,
    stats: [['15+','Graphics Per Month'],['All Formats','Social, Ads, Print'],['Brand-Consistent','Design'],['48-Hour','Turnaround']],
    features: ['Social media graphics','Ad creative design','Presentation design','Infographic creation','Email template design','Banner & display ads','Marketing collateral','Brand consistency audit'],
    price: 'From $599/month',
    related: [{ title: 'Logo & Branding', href: '/services/logo-branding', icon: FiTag }, { title: 'Social Media Marketing', href: '/services/social-media-marketing', icon: FiMessageSquare }, { title: 'Video & Animation', href: '/services/video-animation', icon: FiVideo }],
  },
  'logo-branding': {
    title: 'Logo & Branding',
    meta: 'Professional logo design and brand identity services. Logo, color palette, typography, and brand guide. Build a brand that stands out and is remembered.',
    hero: 'Logo & Branding — Build a Brand That <span>People Remember</span>',
    heroSub: "Your brand is more than a logo — it's the feeling people have when they interact with your business. We create comprehensive brand identities that communicate your values and attract your ideal customers.",
    icon: FiTag,
    stats: [['300+','Brands Created'],['3 Concepts','Per Round'],['Full Brand Guide','Included'],['Vector Files','All Formats']],
    features: ['Logo design (3 concepts)','Color palette development','Typography selection','Brand voice & messaging','Brand style guide','Business card design','Letterhead & stationery','Social media profile kit'],
    price: 'From $800',
    related: [{ title: 'Graphic Design', href: '/services/graphic-design', icon: FiPenTool }, { title: 'UI/UX Design', href: '/services/ui-ux-design', icon: FiLayout }, { title: 'Web Development', href: '/services/web-development', icon: FiGlobe }],
  },
  'video-animation': {
    title: 'Video Editing & Animation',
    meta: 'Professional video editing and animation services: explainer videos, motion graphics, product demos, and social media videos. Engage and convert.',
    hero: 'Video & Animation That Explains, Engages, <span>and Converts</span>',
    heroSub: "Video is the highest-converting content format. We produce professional explainer videos, motion graphics, and product demos that communicate your value in under 60 seconds.",
    icon: FiVideo,
    stats: [['60-Second','Explainers'],['Motion Graphics','& Animation'],['Script to Delivery','Full Production'],['Social-Ready','All Formats']],
    features: ['Explainer video production','Motion graphics & animation','Script writing','Professional voiceover','Product demo videos','Social media video content','Video editing & post-production','YouTube optimization'],
    price: 'From $1,200',
    related: [{ title: 'Graphic Design', href: '/services/graphic-design', icon: FiPenTool }, { title: 'Social Media Marketing', href: '/services/social-media-marketing', icon: FiMessageSquare }, { title: 'Content Marketing', href: '/services/content-marketing', icon: FiFileText }],
  },
  'email-marketing': {
    title: 'Email Marketing',
    meta: 'Email marketing services: campaign design, automation, list management, and A/B testing. Average 42x ROI on email marketing investment.',
    hero: 'Email Marketing That Nurtures Leads and <span>Drives Repeat Revenue</span>',
    heroSub: 'Email delivers 42x ROI — the highest of any marketing channel. We design, build, and optimize email campaigns that move subscribers through your funnel and drive consistent revenue.',
    icon: FiMail,
    stats: [['42x','Average Email ROI'],['Automation','Sequences'],['A/B Testing','Every Send'],['List Segmentation','& Hygiene']],
    features: ['Email strategy & planning','Template design','Automation sequences','List segmentation','A/B subject line testing','Deliverability optimization','Performance analytics','CRM integration'],
    price: 'From $399/month',
    related: [{ title: 'Content Marketing', href: '/services/content-marketing', icon: FiFileText }, { title: 'CRO', href: '/services/cro', icon: FiTrendingUp }, { title: 'Social Media Marketing', href: '/services/social-media-marketing', icon: FiMessageSquare }],
  },
  'cro': {
    title: 'Conversion Rate Optimization',
    meta: 'Conversion Rate Optimization (CRO) services: A/B testing, UX improvements, heatmap analysis, and funnel optimization to increase conversions.',
    hero: 'CRO — Get More From the Traffic <span>You Already Have</span>',
    heroSub: "More traffic isn't always the answer. CRO identifies and eliminates the friction points preventing visitors from converting — turning your existing traffic into more leads and sales.",
    icon: FiTrendingUp,
    stats: [['35%','Avg Conversion Lift'],['A/B Testing','Methodology'],['Heatmap','Analysis'],['Funnel','Optimization']],
    features: ['CRO audit & analysis','User behavior analysis (heatmaps)','A/B testing program','Landing page optimization','Form optimization','Checkout optimization','Copy & CTA improvements','Monthly CRO reporting'],
    price: 'From $799/month',
    related: [{ title: 'Web Development', href: '/services/web-development', icon: FiGlobe }, { title: 'UI/UX Design', href: '/services/ui-ux-design', icon: FiLayout }, { title: 'SEO Services', href: '/services/seo', icon: FiSearch }],
  },
  'hosting-maintenance': {
    title: 'Web Hosting & Maintenance',
    meta: 'Professional web hosting and maintenance services: security updates, backups, uptime monitoring, content edits, and performance optimization from $199/month.',
    hero: 'Web Hosting & Maintenance — Keep Your Site <span>Fast, Secure, and Updated</span>',
    heroSub: "Your website is a business asset that needs ongoing care. Our maintenance packages keep your site secure, fast, and updated — so you never have to worry about downtime or vulnerabilities.",
    icon: FiMonitor,
    stats: [['99.9%','Uptime Guarantee'],['Daily','Backups'],['Security','Monitoring 24/7'],['Monthly','Updates']],
    features: ['Managed WordPress/site hosting','Daily automated backups','Security monitoring & patches','Monthly plugin/CMS updates','Uptime monitoring (24/7)','Performance optimization','Monthly content edits (up to 2hrs)','Priority support response'],
    price: '$199/month',
    related: [{ title: 'Web Development', href: '/services/web-development', icon: FiGlobe }, { title: 'Technical SEO', href: '/services/technical-seo', icon: FiSettings }, { title: 'CRO', href: '/services/cro', icon: FiTrendingUp }],
  },
  'consulting': {
    title: 'Digital Marketing Consulting',
    meta: 'Digital marketing consulting with senior experts. Strategy sessions, audits, and digital roadmap planning. Hourly or retainer engagements available.',
    hero: 'Digital Marketing Consulting — Senior Strategy <span>When You Need It Most</span>',
    heroSub: 'Access senior digital marketing expertise without the full-time hire. Our consultants work with you to audit your current efforts, identify opportunities, and build a clear roadmap to growth.',
    icon: FiBriefcase,
    stats: [['Senior','Consultants'],['10+ Years','Avg Experience'],['Audit Included','Every Engagement'],['Actionable','Roadmap']],
    features: ['Digital strategy audit','Growth opportunity analysis','Marketing roadmap creation','Team training & workshops','Technology stack review','Vendor assessment','KPI & metric setup','Ongoing advisory support'],
    price: 'From $200/hour',
    related: [{ title: 'SEO Services', href: '/services/seo', icon: FiSearch }, { title: 'PPC & Paid Advertising', href: '/services/ppc-advertising', icon: FiDollarSign }, { title: 'CRO', href: '/services/cro', icon: FiTrendingUp }],
  },
};

export function generateStaticParams() {
  return Object.keys(serviceData).map(slug => ({ slug }));
}

export function generateMetadata({ params }) {
  const data = serviceData[params.slug];
  if (!data) return { title: 'Service | InterNative Labs' };
  return {
    title: `${data.title} | InterNative Labs`,
    description: data.meta,
    alternates: { canonical: `https://www.internativelabs.com/services/${params.slug}` },
  };
}

export default function ServicePage({ params }) {
  const data = serviceData[params.slug];

  if (!data) {
    return (
      <section className="page-hero">
        <div className="container page-hero-content">
          <h1>Service Not Found</h1>
          <Link href="/services" className="btn btn-primary btn-lg" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>View All Services →</Link>
        </div>
      </section>
    );
  }

  const HeroIcon = data.icon;

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <Link href="/services">Services</Link><span className="breadcrumb-sep">›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>{data.title}</span>
          </div>
          <span className="section-label" style={{ color: '#7ec8e3', borderColor: 'rgba(125,200,227,0.3)', background: 'rgba(125,200,227,0.1)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <HeroIcon size={14} /> {data.title}
          </span>
          <h1 dangerouslySetInnerHTML={{ __html: data.hero.replace('<span>', '<span class="gradient-text">') }} />
          <p>{data.heroSub}</p>
          <div className="hero-actions">
            <Link href="/free-consultation" className="btn btn-primary btn-lg" id={`${params.slug}-hero-cta`}>Get a Free Quote →</Link>
            <Link href="/portfolio" className="btn btn-secondary btn-lg">View Portfolio</Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ background: 'var(--brand-dark)', padding: '30px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
            {data.stats.map(([n, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: '#7ec8e3', lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">What's Included</span>
              <h2 style={{ color: 'var(--brand)', marginBottom: '1.5rem' }}>
                Everything You Get with Our <span className="gradient-text">{data.title}</span> Service
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.8 }}>
                A comprehensive service designed to deliver measurable results for your business — not just activity.
              </p>
              <div className="responsive-grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                {data.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', background: 'var(--bg-gray)', borderRadius: 8, border: '1px solid var(--border)' }}>
                    <span style={{ color: 'var(--success)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '0.87rem', color: 'var(--text-secondary)' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'linear-gradient(135deg, var(--dark-2) 0%, var(--brand-dark) 100%)', border: '1.5px solid rgba(114,193,146,0.18)', borderRadius: 24, padding: '3rem', textAlign: 'center', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 90, height: 90, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(114,193,146,0.25)', marginBottom: '1.5rem', color: 'var(--brand)' }}>
                <HeroIcon size={44} />
              </div>
              <h3 style={{ color: '#fff', marginBottom: '0.8rem' }}>{data.title}</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#7ec8e3', marginBottom: '0.5rem' }}>{data.price}</div>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', marginBottom: '2rem' }}>Custom quotes available based on your specific needs</p>
              <Link href="/free-consultation" className="btn" id={`${params.slug}-card-cta`}
                style={{ background: '#fff', color: 'var(--dark)', display: 'inline-flex', fontWeight: 700 }}>
                Get a Free Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section" style={{ background: 'var(--bg-gray)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Related Services</span>
            <h2>Pair With These <span className="gradient-text">Complementary Services</span></h2>
          </div>
          <div className="grid-3">
            {data.related.map(r => {
              const RelatedIcon = r.icon;
              return (
                <Link key={r.href} href={r.href} className="card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 64, height: 64, borderRadius: 16, background: 'rgba(114,193,146,0.1)', color: 'var(--brand)', marginBottom: '1rem' }}>
                    <RelatedIcon size={24} />
                  </div>
                  <h3 style={{ fontSize: '1rem', color: 'var(--brand)', marginBottom: 0 }}>{r.title}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2>Ready to Get Started with {data.title}?</h2>
            <p>Get a free consultation and custom quote tailored to your specific business goals.</p>
            <div className="cta-buttons">
              <Link href="/free-consultation" className="btn btn-primary btn-lg" id={`${params.slug}-final-cta`}>Get a Free Consultation →</Link>
              <Link href="/pricing" className="btn btn-secondary btn-lg">View Full Pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
