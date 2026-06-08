const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  HeadingLevel, AlignmentType, BorderStyle, WidthType, ShadingType,
  LevelFormat, PageBreak, TabStopType, TabStopPosition
} = require('docx');
const fs = require('fs');

const BRAND = '#1A3C6E';
const ACCENT = '#2E86C1';
const LIGHT_BLUE = '#D6EAF8';
const LIGHT_GRAY = '#F2F3F4';
const WHITE = 'FFFFFF';

const border = { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' };
const borders = { top: border, bottom: border, left: border, right: border };
const noBorder = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 400, after: 200 },
    children: [new TextRun({ text, bold: true, size: 36, color: BRAND, font: 'Arial' })]
  });
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 300, after: 160 },
    children: [new TextRun({ text, bold: true, size: 28, color: ACCENT, font: 'Arial' })]
  });
}

function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 120 },
    children: [new TextRun({ text, bold: true, size: 24, color: '1A1A1A', font: 'Arial' })]
  });
}

function body(text, bold = false, color = '333333') {
  return new Paragraph({
    spacing: { before: 80, after: 80 },
    children: [new TextRun({ text, bold, size: 22, color, font: 'Arial' })]
  });
}

function bullet(text, level = 0) {
  return new Paragraph({
    numbering: { reference: 'bullets', level },
    spacing: { before: 60, after: 60 },
    children: [new TextRun({ text, size: 22, color: '333333', font: 'Arial' })]
  });
}

function divider() {
  return new Paragraph({
    spacing: { before: 200, after: 200 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: 'CCCCCC', space: 1 } },
    children: []
  });
}

function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

function metaBox(title, metaDesc, keywords) {
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [1800, 7560],
    rows: [
      new TableRow({
        children: [
          new TableCell({
            borders, width: { size: 9360, type: WidthType.DXA }, columnSpan: 2,
            shading: { fill: BRAND, type: ShadingType.CLEAR },
            margins: { top: 100, bottom: 100, left: 150, right: 150 },
            children: [new Paragraph({ children: [new TextRun({ text: '[SEO] SEO METADATA', bold: true, size: 22, color: WHITE, font: 'Arial' })] })]
          })
        ]
      }),
      metaRow('Page Title (60 chars):', title),
      metaRow('Meta Description (155 chars):', metaDesc),
      metaRow('Target Keywords:', keywords),
    ]
  });
}

function metaRow(label, value) {
  return new TableRow({
    children: [
      new TableCell({
        borders, width: { size: 1800, type: WidthType.DXA },
        shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 120, right: 120 },
        children: [new Paragraph({ children: [new TextRun({ text: label, bold: true, size: 20, color: '1A1A1A', font: 'Arial' })] })]
      }),
      new TableCell({
        borders, width: { size: 7560, type: WidthType.DXA },
        margins: { top: 80, bottom: 80, left: 120, right: 120 },
        children: [new Paragraph({ children: [new TextRun({ text: value, size: 20, color: '333333', font: 'Arial' })] })]
      })
    ]
  });
}

function twoColTable(rows) {
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [4680, 4680],
    rows: rows.map(([col1, col2]) => new TableRow({
      children: [
        new TableCell({
          borders,
          width: { size: 4680, type: WidthType.DXA },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun({ text: col1, size: 21, color: '1A1A1A', font: 'Arial' })] })]
        }),
        new TableCell({
          borders,
          width: { size: 4680, type: WidthType.DXA },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun({ text: col2, size: 21, color: '333333', font: 'Arial' })] })]
        })
      ]
    }))
  });
}

function headerTable(label) {
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [9360],
    rows: [
      new TableRow({
        children: [
          new TableCell({
            borders: noBorders,
            width: { size: 9360, type: WidthType.DXA },
            shading: { fill: BRAND, type: ShadingType.CLEAR },
            margins: { top: 120, bottom: 120, left: 200, right: 200 },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: label, bold: true, size: 30, color: WHITE, font: 'Arial' })]
              })
            ]
          })
        ]
      })
    ]
  });
}

function signalCardTable(rows) {
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [9360],
    rows: rows.map(row => new TableRow({
      children: [
        new TableCell({
          borders,
          width: { size: 9360, type: WidthType.DXA },
          margins: { top: 80, bottom: 80, left: 150, right: 150 },
          children: [new Paragraph({ children: [new TextRun({ text: row, size: 21, color: '1A1A1A', font: 'Arial' })] })]
        })
      ]
    }))
  });
}

function internalLinksTable(links) {
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [9360],
    rows: [
      new TableRow({
        children: [
          new TableCell({
            borders, width: { size: 9360, type: WidthType.DXA },
            shading: { fill: ACCENT, type: ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 150, right: 150 },
            children: [new Paragraph({ children: [new TextRun({ text: '[LINK] INTERNAL LINKING OPPORTUNITIES', bold: true, size: 22, color: WHITE, font: 'Arial' })] })]
          })
        ]
      }),
      ...links.map(l => new TableRow({
        children: [
          new TableCell({
            borders, width: { size: 9360, type: WidthType.DXA },
            margins: { top: 60, bottom: 60, left: 150, right: 150 },
            children: [new Paragraph({ children: [new TextRun({ text: l, size: 20, color: '333333', font: 'Arial' })] })]
          })
        ]
      }))
    ]
  });
}

const doc = new Document({
  numbering: {
    config: [
      {
        reference: 'bullets',
        levels: [
          { level: 0, format: LevelFormat.BULLET, text: '●', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
          { level: 1, format: LevelFormat.BULLET, text: '○', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1080, hanging: 360 } } } },
        ]
      }
    ]
  },
  styles: {
    default: { document: { run: { font: 'Arial', size: 22 } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 36, bold: true, font: 'Arial' }, paragraph: { spacing: { before: 400, after: 200 }, outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 28, bold: true, font: 'Arial' }, paragraph: { spacing: { before: 300, after: 160 }, outlineLevel: 1 } },
      { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 24, bold: true, font: 'Arial' }, paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 2 } },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children: [

      // ==============================
      // COVER PAGE
      // ==============================
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 1440, after: 200 },
        children: [new TextRun({ text: 'INTERNATIVE LABS', bold: true, size: 56, color: BRAND, font: 'Arial' })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 100, after: 200 },
        children: [new TextRun({ text: 'Complete SEO Sitemap & Content Structure', bold: true, size: 34, color: ACCENT, font: 'Arial' })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 80, after: 100 },
        children: [new TextRun({ text: '50 Pages | Full SEO Optimization | Conversion-Focused', size: 24, color: '555555', font: 'Arial' })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 80, after: 1440 },
        children: [new TextRun({ text: 'Digital Agency | Web Dev | Mobile Apps | SEO | Marketing', size: 22, color: '777777', font: 'Arial', italics: true })]
      }),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [2340, 2340, 2340, 2340],
        rows: [
          new TableRow({
            children: [
              ['50 Pages', 'Full SEO Meta', 'Internal Links', 'CTA Strategy'].map(label =>
                new TableCell({
                  borders,
                  width: { size: 2340, type: WidthType.DXA },
                  shading: { fill: BRAND, type: ShadingType.CLEAR },
                  margins: { top: 120, bottom: 120, left: 80, right: 80 },
                  children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: label, bold: true, size: 22, color: WHITE, font: 'Arial' })] })]
                })
              )
            ]
          })
        ]
      }),

      pageBreak(),

      // ==============================
      // SITEMAP OVERVIEW
      // ==============================
      headerTable('SITEMAP STRUCTURE — 50 PAGES'),
      new Paragraph({ spacing: { before: 200 } }),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [200, 2800, 3200, 3160],
        rows: [
          new TableRow({
            children: [
              new TableCell({ borders, width: { size: 200, type: WidthType.DXA }, shading: { fill: BRAND, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 80, right: 80 }, children: [new Paragraph({ children: [new TextRun({ text: '#', bold: true, size: 20, color: WHITE, font: 'Arial' })] })] }),
              new TableCell({ borders, width: { size: 2800, type: WidthType.DXA }, shading: { fill: BRAND, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'Page', bold: true, size: 20, color: WHITE, font: 'Arial' })] })] }),
              new TableCell({ borders, width: { size: 3200, type: WidthType.DXA }, shading: { fill: BRAND, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'URL Slug', bold: true, size: 20, color: WHITE, font: 'Arial' })] })] }),
              new TableCell({ borders, width: { size: 3160, type: WidthType.DXA }, shading: { fill: BRAND, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'Category', bold: true, size: 20, color: WHITE, font: 'Arial' })] })] }),
            ]
          }),
          ...[
            ['1', 'Homepage', '/', 'Core'],
            ['2', 'About Us', '/about', 'Core'],
            ['3', 'Services Overview', '/services', 'Core'],
            ['4', 'Portfolio', '/portfolio', 'Core'],
            ['5', 'Case Studies', '/case-studies', 'Core'],
            ['6', 'Blog', '/blog', 'Content'],
            ['7', 'Contact Us', '/contact', 'Core'],
            ['8', 'Web Development', '/services/web-development', 'Service'],
            ['9', 'eCommerce Development', '/services/ecommerce-development', 'Service'],
            ['10', 'WordPress Development', '/services/wordpress-development', 'Service'],
            ['11', 'Custom Web Applications', '/services/custom-web-applications', 'Service'],
            ['12', 'Mobile App Development', '/services/mobile-app-development', 'Service'],
            ['13', 'iOS App Development', '/services/ios-app-development', 'Service'],
            ['14', 'Android App Development', '/services/android-app-development', 'Service'],
            ['15', 'Cross-Platform Apps', '/services/cross-platform-apps', 'Service'],
            ['16', 'SEO Services', '/services/seo', 'Service'],
            ['17', 'Local SEO', '/services/local-seo', 'Service'],
            ['18', 'Technical SEO', '/services/technical-seo', 'Service'],
            ['19', 'eCommerce SEO', '/services/ecommerce-seo', 'Service'],
            ['20', 'Social Media Marketing', '/services/social-media-marketing', 'Service'],
            ['21', 'PPC & Paid Advertising', '/services/ppc-advertising', 'Service'],
            ['22', 'Content Marketing', '/services/content-marketing', 'Service'],
            ['23', 'Graphic Design', '/services/graphic-design', 'Service'],
            ['24', 'UI/UX Design', '/services/ui-ux-design', 'Service'],
            ['25', 'Logo & Branding', '/services/logo-branding', 'Service'],
            ['26', 'Video Editing & Animation', '/services/video-animation', 'Service'],
            ['27', 'Email Marketing', '/services/email-marketing', 'Service'],
            ['28', 'Conversion Rate Optimization', '/services/cro', 'Service'],
            ['29', 'Web Hosting & Maintenance', '/services/hosting-maintenance', 'Service'],
            ['30', 'Digital Marketing Consulting', '/services/consulting', 'Service'],
            ['31', 'Industries — Healthcare', '/industries/healthcare', 'Industries'],
            ['32', 'Industries — Real Estate', '/industries/real-estate', 'Industries'],
            ['33', 'Industries — eCommerce/Retail', '/industries/ecommerce-retail', 'Industries'],
            ['34', 'Industries — Restaurants', '/industries/restaurants', 'Industries'],
            ['35', 'Industries — Legal', '/industries/legal', 'Industries'],
            ['36', 'Industries — SaaS & Tech', '/industries/saas-tech', 'Industries'],
            ['37', 'Pricing', '/pricing', 'Core'],
            ['38', 'Free Website Audit', '/free-website-audit', 'Lead Gen'],
            ['39', 'Get a Free Consultation', '/free-consultation', 'Lead Gen'],
            ['40', 'FAQ', '/faq', 'Support'],
            ['41', 'Client Testimonials', '/testimonials', 'Trust'],
            ['42', 'Awards & Recognition', '/awards', 'Trust'],
            ['43', 'Our Team', '/team', 'Core'],
            ['44', 'Careers', '/careers', 'Core'],
            ['45', 'Press & Media', '/press', 'Core'],
            ['46', 'Partnership Program', '/partners', 'Core'],
            ['47', 'Privacy Policy', '/privacy-policy', 'Legal'],
            ['48', 'Terms & Conditions', '/terms', 'Legal'],
            ['49', 'Cookie Policy', '/cookie-policy', 'Legal'],
            ['50', 'Site Map (HTML)', '/sitemap', 'Technical'],
          ].map(([num, page, url, cat]) =>
            new TableRow({
              children: [
                new TableCell({ borders, width: { size: 200, type: WidthType.DXA }, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 60, bottom: 60, left: 80, right: 80 }, children: [new Paragraph({ children: [new TextRun({ text: num, size: 18, font: 'Arial', color: '555555' })] })] }),
                new TableCell({ borders, width: { size: 2800, type: WidthType.DXA }, margins: { top: 60, bottom: 60, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: page, size: 20, bold: true, font: 'Arial', color: '1A1A1A' })] })] }),
                new TableCell({ borders, width: { size: 3200, type: WidthType.DXA }, margins: { top: 60, bottom: 60, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: url, size: 19, font: 'Arial', color: '555555', italics: true })] })] }),
                new TableCell({ borders, width: { size: 3160, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR }, margins: { top: 60, bottom: 60, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: cat, size: 19, font: 'Arial', color: BRAND })] })] }),
              ]
            })
          )
        ]
      }),

      pageBreak(),

      // ==============================
      // PAGE 1 — HOMEPAGE
      // ==============================
      headerTable('PAGE 1 — HOMEPAGE'),
      new Paragraph({ spacing: { before: 160 } }),
      body('URL: /', true),
      new Paragraph({ spacing: { before: 120 } }),

      h2('HERO SECTION'),
      body('Main Headline (H1):', true),
      body('Build, Grow & Scale Your Business with a Full-Service Digital Agency'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Subheadline:', true),
      body('InterNative Labs delivers custom web development, mobile apps, SEO, and digital marketing solutions that drive traffic, generate qualified leads, and grow your revenue. From startups to enterprises—we build digital experiences that convert.'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Key Stats Banner:', true),
      bullet('[CHECK] 500+ Projects Delivered Across 20+ Industries'),
      bullet('[CHECK] 97% Client Retention Rate'),
      bullet('[CHECK] 10x Average ROI for Our Clients'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Primary CTA:', true),
      body('[Get a Free Consultation — No Obligation]'),
      body('Secondary CTA:', true),
      body('[View Our Portfolio]'),

      new Paragraph({ spacing: { before: 160 } }),
      h2('WHY CHOOSE INTERNATIVE LABS'),
      body('Headline (H2):', true),
      body('Strategy + Creativity + Technology = Measurable Results'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Four-Column Differentiators:', true),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [2340, 2340, 2340, 2340],
        rows: [
          new TableRow({
            children: [
              ['[TARGET] Results-Driven', '[FAST] Fast Turnaround', '[LOCK] Transparent Pricing', '[PARTNER] Long-Term Partner'].map(label =>
                new TableCell({
                  borders, width: { size: 2340, type: WidthType.DXA },
                  shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
                  margins: { top: 120, bottom: 120, left: 100, right: 100 },
                  children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: label, bold: true, size: 20, color: BRAND, font: 'Arial' })] })]
                })
              )
            ]
          }),
          new TableRow({
            children: [
              ['We measure every campaign against real business metrics — traffic, leads, revenue.', 'On-time delivery with agile processes and weekly progress updates.', 'No hidden fees. Fixed-price quotes upfront with milestone-based billing.', 'We become embedded in your team for ongoing growth, not one-off projects.'].map(desc =>
                new TableCell({
                  borders, width: { size: 2340, type: WidthType.DXA },
                  margins: { top: 80, bottom: 80, left: 100, right: 100 },
                  children: [new Paragraph({ children: [new TextRun({ text: desc, size: 19, color: '444444', font: 'Arial' })] })]
                })
              )
            ]
          })
        ]
      }),

      new Paragraph({ spacing: { before: 160 } }),
      h2('SERVICES OVERVIEW SECTION'),
      body('Headline (H2):', true),
      body('Everything You Need to Win Online — Under One Roof'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Six Service Cards (Grid Layout):', true),

      signalCardTable([
        '[WEB] Web Development — Custom websites, eCommerce stores, and web apps built for performance and conversions.',
        '[MOBILE] Mobile App Development — iOS, Android, and cross-platform apps that deliver exceptional user experiences.',
        '[SEO] SEO Services — On-page, off-page, technical, and local SEO strategies that dominate search rankings.',
        '[MARKETING] Digital Marketing — PPC, social media, email marketing, and content strategies that generate qualified leads.',
        '[DESIGN] Design & Branding — Logo design, UI/UX, brand identity, and creative services that make you stand out.',
        '[VIDEO] Video & Animation — Explainer videos, motion graphics, and product demos that engage and convert.',
      ]),

      new Paragraph({ spacing: { before: 160 } }),
      h2('SOCIAL PROOF SECTION'),
      body('Testimonials (3 Cards):', true),
      bullet('[5 STARS] "InterNative Labs rebuilt our e-commerce store from scratch. Within 3 months, organic traffic increased by 180% and our conversion rate doubled." — James T., CEO, RetailEdge USA'),
      bullet('[5 STARS] "They delivered our healthcare app ahead of schedule and the code quality is outstanding. Best tech partner we\'ve worked with." — Dr. Sarah M., MedConnect'),
      bullet('[5 STARS] "Our Google rankings went from page 5 to position #2 for our most competitive keyword in 6 months. Incredible ROI." — Mark D., LawFirm Pro'),

      new Paragraph({ spacing: { before: 160 } }),
      h2('FINAL CTA SECTION'),
      body('Headline (H2):', true),
      body('Ready to Grow Your Business Online? Let\'s Build Something Great.'),
      body('Primary CTA:', true),
      body('[Get a Free Consultation — Speak with an Expert Today]'),
      body('Secondary Text:', true),
      body('No contracts, no commitments. Just an honest conversation about your business goals.'),

      new Paragraph({ spacing: { before: 160 } }),
      metaBox(
        'Digital Agency | Web Dev, Mobile Apps & SEO — InterNative Labs',
        'InterNative Labs is a full-service digital agency offering web development, mobile app development, SEO, and digital marketing to help businesses grow online.',
        'web development company, mobile app development, SEO services, digital marketing agency, custom website development, InterNative Labs'
      ),

      new Paragraph({ spacing: { before: 160 } }),
      internalLinksTable([
        '→ /services (All Services)',
        '→ /services/web-development',
        '→ /services/mobile-app-development',
        '→ /services/seo',
        '→ /portfolio (Case Studies & Work)',
        '→ /free-consultation (Primary CTA)',
        '→ /testimonials (Social Proof)',
        '→ /pricing',
      ]),

      pageBreak(),

      // ==============================
      // PAGE 2 — WEB DEVELOPMENT
      // ==============================
      headerTable('PAGE 8 — WEB DEVELOPMENT SERVICE'),
      new Paragraph({ spacing: { before: 160 } }),
      body('URL: /services/web-development', true),
      new Paragraph({ spacing: { before: 120 } }),

      h2('HERO SECTION'),
      body('Main Headline (H1):', true),
      body('Custom Web Development That Turns Visitors Into Customers'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Subheadline:', true),
      body('We build fast, secure, and beautifully designed websites that perform in search engines and convert visitors into paying customers. From landing pages to enterprise-grade web applications — every line of code is written with business results in mind.'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Key Stats Banner:', true),
      bullet('[CHECK] 300+ Websites Built Across All Industries'),
      bullet('[CHECK] Average Page Load Time: Under 2 Seconds'),
      bullet('[CHECK] 98% Client Satisfaction Rate'),
      bullet('[CHECK] Mobile-First, SEO-Ready by Default'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Primary CTA:', true),
      body('[Get a Free Website Proposal]'),
      body('Secondary CTA:', true),
      body('[View Web Development Portfolio]'),

      new Paragraph({ spacing: { before: 160 } }),
      h2('WHAT WE BUILD'),
      body('Headline (H2):', true),
      body('Web Solutions for Every Business Need'),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [4680, 4680],
        rows: [
          new TableRow({
            children: [
              new TableCell({ borders, width: { size: 4680, type: WidthType.DXA }, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: 'Solution Type', bold: true, size: 21, color: BRAND, font: 'Arial' })] })] }),
              new TableCell({ borders, width: { size: 4680, type: WidthType.DXA }, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: 'Best For', bold: true, size: 21, color: BRAND, font: 'Arial' })] })] }),
            ]
          }),
          ...([
            ['Corporate Websites', 'Businesses needing a professional, credibility-building online presence'],
            ['eCommerce Stores', 'Brands selling products online — Shopify, WooCommerce, Magento'],
            ['Landing Pages', 'Marketing campaigns, lead generation, product launches'],
            ['Web Applications', 'SaaS platforms, portals, dashboards, booking systems'],
            ['WordPress Sites', 'Content-heavy sites needing easy CMS management'],
            ['Headless CMS', 'High-performance frontends with flexible content management'],
          ]).map(([sol, best]) => new TableRow({
            children: [
              new TableCell({ borders, width: { size: 4680, type: WidthType.DXA }, margins: { top: 60, bottom: 60, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: sol, bold: true, size: 20, font: 'Arial', color: '1A1A1A' })] })] }),
              new TableCell({ borders, width: { size: 4680, type: WidthType.DXA }, margins: { top: 60, bottom: 60, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: best, size: 20, font: 'Arial', color: '444444' })] })] }),
            ]
          }))
        ]
      }),

      new Paragraph({ spacing: { before: 160 } }),
      h2('OUR TECHNOLOGY STACK'),
      body('Headline (H2):', true),
      body('Modern Technologies, Proven Results'),
      new Paragraph({ spacing: { before: 80 } }),

      twoColTable([
        ['Frontend', 'React, Next.js, Vue.js, HTML5/CSS3, Tailwind CSS'],
        ['Backend', 'Node.js, Laravel, Python/Django, Express.js'],
        ['CMS Platforms', 'WordPress, Shopify, Webflow, Contentful, Sanity'],
        ['eCommerce', 'Shopify, WooCommerce, BigCommerce, Magento'],
        ['Databases', 'MySQL, PostgreSQL, MongoDB, Firebase'],
        ['Cloud & Hosting', 'AWS, Google Cloud, Vercel, Netlify, Cloudflare'],
      ]),

      new Paragraph({ spacing: { before: 160 } }),
      h2('OUR PROCESS'),
      body('Headline (H2):', true),
      body('From Discovery to Launch — A Proven 5-Step Process'),
      new Paragraph({ spacing: { before: 80 } }),
      bullet('STEP 1: Discovery & Strategy — We analyze your business, competition, and target audience to define project goals, user flows, and technical requirements.'),
      bullet('STEP 2: UI/UX Design — We create wireframes and high-fidelity mockups for your approval before writing a single line of code.'),
      bullet('STEP 3: Development — Agile sprints with weekly demos. Clean, documented code that scales with your business.'),
      bullet('STEP 4: Testing & QA — Cross-browser, cross-device testing. Performance audits, security checks, and accessibility compliance.'),
      bullet('STEP 5: Launch & Support — Smooth deployment with post-launch monitoring, ongoing maintenance, and continuous optimization.'),

      new Paragraph({ spacing: { before: 160 } }),
      h2('BENEFITS SECTION'),
      body('Headline (H2):', true),
      body('Why Our Websites Outperform Generic Templates'),
      new Paragraph({ spacing: { before: 80 } }),
      bullet('[CHECK] SEO-Optimized From Day One — Clean code, fast load times, proper schema markup, and mobile-first indexing built into every project'),
      bullet('[CHECK] Conversion-Focused Design — Every element is strategically placed to guide visitors toward your primary conversion goal'),
      bullet('[CHECK] Scalable Architecture — Built to grow with your business without costly rewrites or performance degradation'),
      bullet('[CHECK] Security-First Approach — SSL, GDPR compliance, regular security audits, and vulnerability monitoring included'),
      bullet('[CHECK] Ongoing Partnership — We don\'t disappear after launch. Monthly maintenance packages keep your site fast, secure, and updated'),

      new Paragraph({ spacing: { before: 160 } }),
      h2('PRICING OVERVIEW'),
      body('Headline (H2):', true),
      body('Transparent Pricing — No Hidden Fees'),
      new Paragraph({ spacing: { before: 80 } }),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [3120, 3120, 3120],
        rows: [
          new TableRow({
            children: [
              ['STARTER WEBSITE', 'BUSINESS WEBSITE', 'CUSTOM WEB APP'].map((tier, i) => new TableCell({
                borders, width: { size: 3120, type: WidthType.DXA },
                shading: { fill: i === 1 ? BRAND : LIGHT_BLUE, type: ShadingType.CLEAR },
                margins: { top: 120, bottom: 120, left: 120, right: 120 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: tier, bold: true, size: 22, color: i === 1 ? WHITE : BRAND, font: 'Arial' })] })]
              }))
            ]
          }),
          new TableRow({
            children: [
              ['From $1,500', 'From $3,500', 'From $8,000'].map((price, i) => new TableCell({
                borders, width: { size: 3120, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: price, bold: true, size: 28, color: ACCENT, font: 'Arial' })] })]
              }))
            ]
          }),
          new TableRow({
            children: [
              [
                'Landing page, 3-5 pages, mobile-responsive, contact form, basic SEO setup',
                'Full corporate site, 10-20 pages, CMS integration, advanced SEO, analytics setup',
                'Custom functionality, API integrations, user portals, scalable architecture'
              ].map(desc => new TableCell({
                borders, width: { size: 3120, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun({ text: desc, size: 19, color: '444444', font: 'Arial' })] })]
              }))
            ]
          }),
          new TableRow({
            children: ['[Get Starter Quote]', '[Get Business Quote]', '[Request Custom Quote]'].map(cta => new TableCell({
              borders, width: { size: 3120, type: WidthType.DXA },
              margins: { top: 80, bottom: 80, left: 120, right: 120 },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: cta, bold: true, size: 20, color: ACCENT, font: 'Arial' })] })]
            }))
          })
        ]
      }),

      new Paragraph({ spacing: { before: 160 } }),
      h2('FAQ — WEB DEVELOPMENT'),
      body('Q: How long does it take to build a website? A: Starter websites typically take 2-4 weeks. Business websites take 4-8 weeks. Custom web applications range from 8-20 weeks depending on complexity. We provide detailed timelines during the discovery call.'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Q: Do you offer post-launch website maintenance? A: Yes. Our maintenance packages include monthly security updates, performance monitoring, content updates, uptime monitoring, and priority bug fixes starting from $199/month.'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Q: Will my website rank on Google? A: Every website we build follows SEO best practices including page speed optimization, clean URL structures, meta tags, schema markup, and mobile-first design. We can also pair web development with our full SEO service for maximum ranking impact.'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Q: Can you redesign my existing website? A: Absolutely. We offer full redesigns that preserve your existing SEO equity while modernizing design and improving performance. We\'ll audit your current site before making recommendations.'),

      new Paragraph({ spacing: { before: 160 } }),
      metaBox(
        'Custom Web Development Services | InterNative Labs',
        'Professional web development services including corporate websites, eCommerce stores, and custom web applications. Fast, SEO-ready, and conversion-optimized. Get a free quote.',
        'web development services, custom website development, ecommerce development, wordpress development, web application development, InterNative Labs'
      ),

      new Paragraph({ spacing: { before: 160 } }),
      internalLinksTable([
        '→ /services/ecommerce-development (For online stores)',
        '→ /services/wordpress-development (CMS sites)',
        '→ /services/ui-ux-design (Design services)',
        '→ /services/seo (Rank the new site)',
        '→ /services/hosting-maintenance (Post-launch support)',
        '→ /portfolio (See our web projects)',
        '→ /free-consultation (Primary CTA)',
        '→ /pricing (Full pricing breakdown)',
      ]),

      pageBreak(),

      // ==============================
      // PAGE 12 — MOBILE APP DEVELOPMENT
      // ==============================
      headerTable('PAGE 12 — MOBILE APP DEVELOPMENT'),
      new Paragraph({ spacing: { before: 160 } }),
      body('URL: /services/mobile-app-development', true),
      new Paragraph({ spacing: { before: 120 } }),

      h2('HERO SECTION'),
      body('Main Headline (H1):', true),
      body('Mobile App Development That Transforms Ideas Into Revenue-Generating Apps'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Subheadline:', true),
      body('We build native iOS, native Android, and cross-platform mobile apps that deliver exceptional user experiences. From MVP to full-scale enterprise solutions — our apps are designed for performance, security, and user adoption.'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Key Stats Banner:', true),
      bullet('[CHECK] 150+ Mobile Apps Shipped to App Store & Google Play'),
      bullet('[CHECK] 4.8 Average App Store Rating Across All Published Apps'),
      bullet('[CHECK] 99.9% Crash-Free Sessions'),
      bullet('[CHECK] iOS, Android, React Native, Flutter'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Primary CTA:', true),
      body('[Get Your Free App Development Quote]'),
      body('Secondary CTA:', true),
      body('[View App Portfolio]'),

      new Paragraph({ spacing: { before: 160 } }),
      h2('APP TYPES WE BUILD'),
      body('Headline (H2):', true),
      body('Mobile Solutions Across Every Industry and Use Case'),
      new Paragraph({ spacing: { before: 80 } }),

      signalCardTable([
        '[MOBILE] Consumer Apps — B2C apps for iOS & Android including on-demand services, marketplaces, and lifestyle apps',
        '[ENTERPRISE] Enterprise Mobile Apps — Internal tools, field management, employee apps, and workflow automation',
        '[CART] mCommerce Apps — Mobile shopping experiences integrated with existing eCommerce platforms',
        '[HEALTH] Healthcare Apps — HIPAA-compliant telemedicine, patient portals, and health tracking apps',
        '[DELIVERY] On-Demand Service Apps — Delivery, booking, and service marketplace apps with real-time tracking',
        '[EDUCATION] EdTech Apps — E-learning platforms, course delivery, quizzes, and progress tracking',
      ]),

      new Paragraph({ spacing: { before: 160 } }),
      h2('TECHNOLOGY OPTIONS'),
      body('Native vs. Cross-Platform — We Help You Choose the Right Approach:', true),
      new Paragraph({ spacing: { before: 80 } }),

      twoColTable([
        ['Native iOS (Swift)', 'Best performance, full Apple feature access, App Store-ready'],
        ['Native Android (Kotlin)', 'Maximum Android performance, Google Play-ready'],
        ['React Native', 'One codebase, iOS + Android, 90% cost savings vs native'],
        ['Flutter', 'Google\'s framework for beautiful cross-platform UI'],
        ['Backend/API', 'Node.js, Firebase, AWS, custom REST & GraphQL APIs'],
        ['Integrations', 'Stripe, Twilio, Google Maps, Push Notifications, Analytics'],
      ]),

      new Paragraph({ spacing: { before: 160 } }),
      h2('OUR MOBILE APP PROCESS'),
      body('Headline (H2):', true),
      body('Idea to App Store in 6 Phases:'),
      new Paragraph({ spacing: { before: 80 } }),
      bullet('Phase 1: Discovery & Scoping — Define user personas, core features, monetization strategy, and technical architecture'),
      bullet('Phase 2: UI/UX Design — Wireframes, interactive prototypes, and polished UI design with user testing'),
      bullet('Phase 3: Development Sprints — Agile 2-week sprints with demos after each sprint. Backend + frontend developed simultaneously'),
      bullet('Phase 4: QA Testing — Device testing across 20+ iOS and Android devices. Performance, security, and UX testing'),
      bullet('Phase 5: App Store Submission — We handle App Store and Google Play submission including metadata, screenshots, and compliance review'),
      bullet('Phase 6: Post-Launch & Scaling — Crash monitoring, user feedback loops, feature iterations, and scaling infrastructure'),

      new Paragraph({ spacing: { before: 160 } }),
      metaBox(
        'Mobile App Development Company | iOS & Android | InterNative Labs',
        'Custom iOS and Android app development. We build native and cross-platform mobile apps for startups and enterprises. 150+ apps delivered. Get a free app quote today.',
        'mobile app development company, iOS app development, android app development, cross-platform app development, react native development, flutter development'
      ),

      new Paragraph({ spacing: { before: 160 } }),
      internalLinksTable([
        '→ /services/ios-app-development',
        '→ /services/android-app-development',
        '→ /services/cross-platform-apps',
        '→ /services/ui-ux-design (App design)',
        '→ /services/web-development (Companion web apps)',
        '→ /portfolio (App portfolio)',
        '→ /free-consultation',
      ]),

      pageBreak(),

      // ==============================
      // PAGE 16 — SEO SERVICES
      // ==============================
      headerTable('PAGE 16 — SEO SERVICES'),
      new Paragraph({ spacing: { before: 160 } }),
      body('URL: /services/seo', true),
      new Paragraph({ spacing: { before: 120 } }),

      h2('HERO SECTION'),
      body('Main Headline (H1):', true),
      body('SEO Services That Put Your Business on Page 1 and Keep It There'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Subheadline:', true),
      body('Our data-driven SEO strategies combine technical excellence, strategic content, and authoritative link building to drive qualified organic traffic that converts. We don\'t chase algorithms — we build sustainable rankings that generate leads for years.'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Key Stats Banner:', true),
      bullet('[CHECK] 92% of Clients Achieve Page 1 Rankings Within 6 Months'),
      bullet('[CHECK] Average 187% Increase in Organic Traffic'),
      bullet('[CHECK] 300+ Successful SEO Campaigns'),
      bullet('[CHECK] White-Hat Only — Fully Google-Compliant Methods'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Primary CTA:', true),
      body('[Get Your Free SEO Audit — $0 No Obligation]'),
      body('Secondary CTA:', true),
      body('[View SEO Case Studies]'),

      new Paragraph({ spacing: { before: 160 } }),
      h2('SEO SERVICES BREAKDOWN'),
      body('Headline (H2):', true),
      body('A Complete SEO Solution — Not Just Keywords'),
      new Paragraph({ spacing: { before: 80 } }),

      signalCardTable([
        '[ON-PAGE] On-Page SEO — Title tags, meta descriptions, header optimization, keyword mapping, internal linking structure, image alt text, schema markup',
        '[TECHNICAL] Technical SEO — Site speed optimization, Core Web Vitals, crawlability, indexation, XML sitemaps, canonical tags, HTTPS, mobile-first optimization',
        '[CONTENT] Content Strategy — Keyword research, content gap analysis, blog content creation, pillar pages, topic clusters, FAQ content',
        '[LINKS] Link Building — White-hat backlink acquisition, digital PR, guest posting, HARO outreach, local citations, competitor analysis',
        '[LOCAL] Local SEO — Google Business Profile optimization, local citations, NAP consistency, local keyword targeting, review generation',
        '[ANALYTICS] SEO Analytics & Reporting — Monthly rank tracking, traffic analysis, conversion attribution, competitor monitoring, ROI reporting',
      ]),

      new Paragraph({ spacing: { before: 160 } }),
      h2('RESULTS SECTION'),
      body('Headline (H2):', true),
      body('Real Results from Real Clients'),
      new Paragraph({ spacing: { before: 80 } }),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [3120, 3120, 3120],
        rows: [
          new TableRow({
            children: [
              ['HEALTHCARE CLIENT', 'LAW FIRM CLIENT', 'eCommerce CLIENT'].map((name, i) => new TableCell({
                borders, width: { size: 3120, type: WidthType.DXA },
                shading: { fill: BRAND, type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: name, bold: true, size: 20, color: WHITE, font: 'Arial' })] })]
              }))
            ]
          }),
          new TableRow({
            children: [
              ['+312% Organic Traffic in 8 Months', '#1 Ranking for "Personal Injury Lawyer [City]" in 5 Months', '+428% Revenue from Organic Search in 12 Months'].map(result => new TableCell({
                borders, width: { size: 3120, type: WidthType.DXA },
                shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: result, bold: true, size: 20, color: BRAND, font: 'Arial' })] })]
              }))
            ]
          }),
          new TableRow({
            children: [
              ['From 200 to 4,200 monthly organic visits. 47 new patient inquiries per month.', 'Dominated 23 high-value keywords. 340% increase in consultation requests.', 'From $8K to $42K monthly organic revenue. 1,200+ product keywords ranking.'].map(desc => new TableCell({
                borders, width: { size: 3120, type: WidthType.DXA },
                margins: { top: 60, bottom: 60, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun({ text: desc, size: 19, color: '444444', font: 'Arial' })] })]
              }))
            ]
          })
        ]
      }),

      new Paragraph({ spacing: { before: 160 } }),
      h2('SEO PRICING'),
      body('Headline (H2):', true),
      body('Transparent Monthly SEO Plans'),
      new Paragraph({ spacing: { before: 80 } }),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [3120, 3120, 3120],
        rows: [
          new TableRow({
            children: [
              ['LOCAL SEO', 'GROWTH SEO', 'ENTERPRISE SEO'].map((tier, i) => new TableCell({
                borders, width: { size: 3120, type: WidthType.DXA },
                shading: { fill: i === 1 ? BRAND : LIGHT_BLUE, type: ShadingType.CLEAR },
                margins: { top: 100, bottom: 100, left: 120, right: 120 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: tier, bold: true, size: 22, color: i === 1 ? WHITE : BRAND, font: 'Arial' })] })]
              }))
            ]
          }),
          new TableRow({
            children: [
              ['$599/month', '$1,299/month', '$2,999/month'].map(price => new TableCell({
                borders, width: { size: 3120, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: price, bold: true, size: 28, color: ACCENT, font: 'Arial' })] })]
              }))
            ]
          }),
          new TableRow({
            children: [
              ['Local keyword targeting, Google Business Profile, citation building, monthly reporting', 'On-page + technical SEO, content creation (4 blogs/month), link building, rank tracking', 'Full SEO program, 8+ blog posts/month, aggressive link building, dedicated SEO manager'].map(desc => new TableCell({
                borders, width: { size: 3120, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [new Paragraph({ children: [new TextRun({ text: desc, size: 19, color: '444444', font: 'Arial' })] })]
              }))
            ]
          }),
          new TableRow({
            children: ['[Get Started]', '[Get Started — Most Popular]', '[Contact Sales]'].map(cta => new TableCell({
              borders, width: { size: 3120, type: WidthType.DXA },
              margins: { top: 80, bottom: 80, left: 120, right: 120 },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: cta, bold: true, size: 20, color: ACCENT, font: 'Arial' })] })]
            }))
          })
        ]
      }),

      new Paragraph({ spacing: { before: 160 } }),
      h2('FAQ — SEO SERVICES'),
      body('Q: How long before I see SEO results? A: Most clients see meaningful ranking improvements within 3-4 months. Significant traffic and lead increases typically appear by month 5-6. SEO is a long-term investment — the results compound over time and become a self-sustaining lead generation machine.'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Q: Do you guarantee first-page rankings? A: No ethical SEO company can guarantee specific rankings — Google\'s algorithm controls that. What we guarantee is executing proven strategies, transparent reporting, and relentless optimization. Our 92% page-1 success rate speaks for itself.'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Q: Is SEO worth it for small businesses? A: Absolutely. Local SEO is one of the highest-ROI marketing channels for small businesses. Ranking locally for service keywords puts you in front of customers actively searching for what you offer — with zero cost-per-click.'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Q: What\'s included in your monthly SEO reports? A: Keyword ranking changes, organic traffic trends, backlinks earned, technical issues fixed, content published, competitor movements, and a plain-English summary of what we did and what\'s next.'),

      new Paragraph({ spacing: { before: 160 } }),
      metaBox(
        'SEO Services Company | Page 1 Rankings | InterNative Labs',
        'Data-driven SEO services that grow organic traffic and generate leads. On-page, technical, local, and eCommerce SEO. 92% of clients reach Page 1 in 6 months. Free audit.',
        'SEO services, search engine optimization, local SEO, technical SEO, ecommerce SEO, SEO agency, SEO company, organic traffic growth, InterNative Labs'
      ),

      new Paragraph({ spacing: { before: 160 } }),
      internalLinksTable([
        '→ /services/local-seo',
        '→ /services/technical-seo',
        '→ /services/ecommerce-seo',
        '→ /services/content-marketing (Content for SEO)',
        '→ /services/web-development (SEO-ready websites)',
        '→ /free-website-audit (Free audit CTA)',
        '→ /blog (SEO educational content)',
        '→ /case-studies (Proof of results)',
      ]),

      pageBreak(),

      // ==============================
      // PAGE 37 — PRICING
      // ==============================
      headerTable('PAGE 37 — PRICING PAGE'),
      new Paragraph({ spacing: { before: 160 } }),
      body('URL: /pricing', true),
      new Paragraph({ spacing: { before: 120 } }),

      h2('HERO SECTION'),
      body('Main Headline (H1):', true),
      body('Transparent Pricing — Know Exactly What You\'re Getting and What It Costs'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Subheadline:', true),
      body('No hidden fees, no vague retainers. Every service is priced clearly with defined deliverables. Choose a plan or contact us for a custom proposal tailored to your exact needs and budget.'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Primary CTA:', true),
      body('[Get a Custom Quote — Free Consultation]'),
      body('Secondary Text:', true),
      body('Not sure which plan fits? Talk to our team and we\'ll match you with the right solution.'),

      new Paragraph({ spacing: { before: 160 } }),
      h2('COMPLETE PRICING TABLE'),
      body('Headline (H2):', true),
      body('All Services — Starting Prices'),
      new Paragraph({ spacing: { before: 80 } }),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [3500, 2000, 3860],
        rows: [
          new TableRow({
            children: [
              new TableCell({ borders, width: { size: 3500, type: WidthType.DXA }, shading: { fill: BRAND, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: 'Service', bold: true, size: 21, color: WHITE, font: 'Arial' })] })] }),
              new TableCell({ borders, width: { size: 2000, type: WidthType.DXA }, shading: { fill: BRAND, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 150, right: 150 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Starting Price', bold: true, size: 21, color: WHITE, font: 'Arial' })] })] }),
              new TableCell({ borders, width: { size: 3860, type: WidthType.DXA }, shading: { fill: BRAND, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: 'What\'s Included', bold: true, size: 21, color: WHITE, font: 'Arial' })] })] }),
            ]
          }),
          ...([
            ['Starter Website (5 pages)', '$1,500', 'Design, development, mobile-responsive, contact form, basic SEO'],
            ['Business Website (10-20 pages)', '$3,500', 'Custom design, CMS, advanced SEO setup, analytics, 3 months support'],
            ['eCommerce Website', '$5,000', 'Shopify/WooCommerce, payment gateway, product catalog, SEO'],
            ['Custom Web Application', '$8,000+', 'Custom development, database design, user authentication, APIs'],
            ['iOS App Development', '$15,000+', 'Native Swift, App Store submission, 6 months bug-fix support'],
            ['Android App Development', '$12,000+', 'Native Kotlin, Google Play submission, 6 months support'],
            ['Cross-Platform App (React Native)', '$18,000+', 'iOS + Android from one codebase, both stores submission'],
            ['Local SEO', '$599/month', '10 keywords, Google Business, citations, monthly reports'],
            ['Growth SEO', '$1,299/month', '30 keywords, on-page + technical, content, link building'],
            ['Enterprise SEO', '$2,999/month', 'Unlimited keywords, dedicated manager, full SEO program'],
            ['Social Media Marketing', '$499/month', '2 platforms, 12 posts/month, community management'],
            ['PPC / Google Ads Management', '$399/month + ad spend', 'Campaign setup, A/B testing, optimization, reporting'],
            ['Content Marketing', '$799/month', '4 blog posts, keyword research, internal linking, optimization'],
            ['UI/UX Design Package', '$2,000+', 'User research, wireframes, prototype, high-fidelity design'],
            ['Logo & Brand Identity', '$800+', 'Logo, color palette, typography, brand guide'],
            ['Graphic Design (Monthly)', '$599/month', '15 graphics/month for social, ads, presentations'],
            ['Video Editing & Animation', '$1,200+', 'Explainer video (60 sec), script, voiceover, motion graphics'],
            ['Email Marketing', '$399/month', 'Campaign design, list management, automation, A/B testing'],
            ['Website Maintenance', '$199/month', 'Security updates, backups, uptime monitoring, content edits'],
          ]).map(([service, price, includes]) => new TableRow({
            children: [
              new TableCell({ borders, width: { size: 3500, type: WidthType.DXA }, margins: { top: 60, bottom: 60, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: service, bold: true, size: 20, font: 'Arial', color: '1A1A1A' })] })] }),
              new TableCell({ borders, width: { size: 2000, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR }, margins: { top: 60, bottom: 60, left: 150, right: 150 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: price, bold: true, size: 20, font: 'Arial', color: BRAND })] })] }),
              new TableCell({ borders, width: { size: 3860, type: WidthType.DXA }, margins: { top: 60, bottom: 60, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: includes, size: 19, font: 'Arial', color: '555555' })] })] }),
            ]
          }))
        ]
      }),

      new Paragraph({ spacing: { before: 160 } }),
      body('Money-Back Guarantee:', true),
      body('[GUARANTEE] 30-Day Satisfaction Guarantee — If you\'re not fully satisfied with our work in the first 30 days, we\'ll make it right or refund your investment.'),

      new Paragraph({ spacing: { before: 160 } }),
      metaBox(
        'Digital Agency Pricing | Web, App & SEO Costs | InterNative Labs',
        'Transparent pricing for web development, mobile apps, SEO, and digital marketing. No hidden fees. See exact costs and deliverables for every service. Get a free quote.',
        'web development pricing, SEO service cost, mobile app development cost, digital agency pricing, how much does a website cost'
      ),

      pageBreak(),

      // ==============================
      // PAGE 38 — FREE WEBSITE AUDIT
      // ==============================
      headerTable('PAGE 38 — FREE WEBSITE AUDIT (LEAD GEN)'),
      new Paragraph({ spacing: { before: 160 } }),
      body('URL: /free-website-audit', true),
      new Paragraph({ spacing: { before: 120 } }),

      h2('HERO SECTION'),
      body('Main Headline (H1):', true),
      body('Get Your Free Website Audit — Discover What\'s Holding Your Business Back Online'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Subheadline:', true),
      body('Our team performs a comprehensive 25-point audit of your website covering SEO health, page speed, mobile experience, conversion optimization, and security vulnerabilities. You\'ll receive a detailed report with prioritized action items — completely free, no strings attached.'),
      new Paragraph({ spacing: { before: 80 } }),
      body('What We Audit (25-Point Checklist):', true),
      bullet('[CHECK] Technical SEO — Crawlability, indexation, sitemaps, robots.txt, canonical tags'),
      bullet('[CHECK] Page Speed — Core Web Vitals scores, server response time, image optimization'),
      bullet('[CHECK] Mobile Experience — Mobile-friendliness, tap targets, viewport configuration'),
      bullet('[CHECK] On-Page SEO — Title tags, meta descriptions, header structure, keyword usage'),
      bullet('[CHECK] Content Quality — Thin content, duplicate content, content gaps vs. competitors'),
      bullet('[CHECK] Link Profile — Backlink quality, toxic links, internal linking structure'),
      bullet('[CHECK] Conversion Elements — CTAs, forms, trust signals, friction points'),
      bullet('[CHECK] Security — SSL certificate, HTTPS, security headers, vulnerability exposure'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Primary CTA:', true),
      body('[Get My Free Website Audit — Takes 24 Hours]'),
      body('Trust Signals:', true),
      bullet('[CHECK] No credit card required'),
      bullet('[CHECK] Delivered within 24 business hours'),
      bullet('[CHECK] Reviewed by a human expert (not just a tool report)'),
      bullet('[CHECK] No obligation to purchase anything'),

      new Paragraph({ spacing: { before: 160 } }),
      metaBox(
        'Free Website Audit | SEO & Performance Analysis | InterNative Labs',
        'Get a free 25-point website audit covering SEO, page speed, mobile, and conversions. Receive expert recommendations in 24 hours. No obligation — completely free.',
        'free website audit, free SEO audit, website analysis, website performance audit, SEO health check'
      ),

      pageBreak(),

      // ==============================
      // PAGE 2 — ABOUT US
      // ==============================
      headerTable('PAGE 2 — ABOUT US'),
      new Paragraph({ spacing: { before: 160 } }),
      body('URL: /about', true),
      new Paragraph({ spacing: { before: 120 } }),

      h2('HERO SECTION'),
      body('Main Headline (H1):', true),
      body('About InterNative Labs — A Team of Builders, Strategists, and Digital Growth Experts'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Subheadline:', true),
      body('Founded in Lawrenceville, GA, InterNative Labs is a results-driven digital agency that combines deep technical expertise with growth-focused marketing strategies. We\'ve helped 500+ businesses across 20+ industries build, launch, and scale their digital presence.'),

      new Paragraph({ spacing: { before: 160 } }),
      h2('OUR STORY'),
      body('From a small team with big ambitions, we\'ve grown into a trusted digital partner for businesses ranging from funded startups to Fortune 500 companies. We started InterNative Labs because we believed businesses deserved a technology partner that actually cares about results — not just deliverables.'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Every website we build, every app we deploy, every SEO campaign we run is measured against one benchmark: did it grow your business? That accountability drives everything we do.'),

      new Paragraph({ spacing: { before: 160 } }),
      h2('OUR VALUES'),
      new Paragraph({ spacing: { before: 80 } }),
      bullet('[TARGET] Results Over Deliverables — We measure success in traffic, leads, and revenue. Not just lines of code or pages published.'),
      bullet('[LOCK] Radical Transparency — You\'ll always know what we\'re doing, why, and what results to expect. No black boxes, no fluff reports.'),
      bullet('[FAST] Relentless Improvement — Markets change. We stay ahead of algorithm updates, emerging platforms, and new technologies so you don\'t have to.'),
      bullet('[PARTNER] Partnership Mentality — We think of ourselves as your in-house digital team. Your success is our success.'),

      new Paragraph({ spacing: { before: 160 } }),
      h2('OUR TEAM STATS'),
      new Paragraph({ spacing: { before: 80 } }),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [2340, 2340, 2340, 2340],
        rows: [
          new TableRow({
            children: [
              ['35+ Team Members', '500+ Projects Delivered', '20+ Industries Served', '15+ Countries Reached'].map(stat => new TableCell({
                borders, width: { size: 2340, type: WidthType.DXA },
                shading: { fill: BRAND, type: ShadingType.CLEAR },
                margins: { top: 120, bottom: 120, left: 80, right: 80 },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: stat, bold: true, size: 20, color: WHITE, font: 'Arial' })] })]
              }))
            ]
          })
        ]
      }),

      new Paragraph({ spacing: { before: 160 } }),
      metaBox(
        'About InterNative Labs | Full-Service Digital Agency | Lawrenceville GA',
        'InterNative Labs is a full-service digital agency in Lawrenceville, GA. We deliver custom web development, mobile apps, SEO & digital marketing for businesses of all sizes.',
        'about InterNative Labs, digital agency Lawrenceville GA, web development company Georgia, InterNative Labs team'
      ),

      pageBreak(),

      // ==============================
      // PAGE 7 — CONTACT US
      // ==============================
      headerTable('PAGE 7 — CONTACT US'),
      new Paragraph({ spacing: { before: 160 } }),
      body('URL: /contact', true),
      new Paragraph({ spacing: { before: 120 } }),

      h2('HERO SECTION'),
      body('Main Headline (H1):', true),
      body('Let\'s Talk — Tell Us About Your Project and We\'ll Tell You How We Can Help'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Subheadline:', true),
      body('Ready to grow your business online? Our team of experts is standing by to discuss your project, answer your questions, and provide a no-obligation quote. Most inquiries receive a response within 2 business hours.'),

      new Paragraph({ spacing: { before: 160 } }),
      h2('CONTACT INFORMATION'),
      new Paragraph({ spacing: { before: 80 } }),
      body('[EMAIL] Email: info@internativelabs.com'),
      body('[PHONE] Phone: +1 (888) 908-5040'),
      body('[ADDRESS] Address: 811 Mason Grove Pkwy, Lawrenceville, GA 30043, USA'),
      body('[HOURS] Business Hours: Monday - Friday, 9:00 AM - 6:00 PM EST'),
      new Paragraph({ spacing: { before: 80 } }),
      body('Consultation CTA:', true),
      body('[Schedule a Free 30-Min Consultation Call]'),

      new Paragraph({ spacing: { before: 160 } }),
      h2('CONTACT FORM FIELDS'),
      bullet('Full Name (required)'),
      bullet('Email Address (required)'),
      bullet('Phone Number'),
      bullet('Company Name'),
      bullet('Service Interested In (dropdown)'),
      bullet('Project Budget Range (dropdown)'),
      bullet('Tell Us About Your Project (textarea)'),
      bullet('[Submit — Get Free Consultation]'),

      new Paragraph({ spacing: { before: 160 } }),
      metaBox(
        'Contact InterNative Labs | Digital Agency | Get a Free Quote',
        'Contact InterNative Labs for web development, mobile apps, SEO, and digital marketing. Lawrenceville, GA. Response within 2 hours. Get a free project consultation.',
        'contact InterNative Labs, hire digital agency, web development quote, digital marketing agency contact'
      ),

      pageBreak(),

      // ==============================
      // FOOTER CONTENT
      // ==============================
      headerTable('FOOTER — SITE-WIDE CONTENT'),
      new Paragraph({ spacing: { before: 160 } }),

      h2('Company Info'),
      body('InterNative Labs — Your trusted digital partner for web development, mobile apps, SEO, and digital marketing.'),
      body('811 Mason Grove Pkwy, Lawrenceville, GA 30043 | +1 (888) 908-5040 | info@internativelabs.com'),

      new Paragraph({ spacing: { before: 120 } }),
      h2('Footer Navigation'),

      twoColTable([
        ['Services', 'Web Development | Mobile Apps | SEO | Social Media | PPC | Graphic Design | Video Editing'],
        ['Company', 'About Us | Our Team | Portfolio | Case Studies | Blog | Careers | Press'],
        ['Support', 'Contact Us | Free Consultation | Free Website Audit | FAQ | Pricing'],
        ['Legal', 'Privacy Policy | Terms & Conditions | Cookie Policy | Site Map'],
      ]),

      new Paragraph({ spacing: { before: 120 } }),
      body('Social Media:', true),
      body('[LinkedIn] [Facebook] [Instagram] [Twitter/X] [YouTube]'),

      new Paragraph({ spacing: { before: 120 } }),
      body('Footer CTA:', true),
      body('Ready to grow your business online? Contact our experts today for a free consultation.'),
      body('[Get a Free Consultation →]'),

      new Paragraph({ spacing: { before: 120 } }),
      body('Copyright Notice:', true),
      body('© 2026 InterNative Labs LLC. All rights reserved. Lawrenceville, Georgia, USA.'),

      pageBreak(),

      // ==============================
      // CONVERSION OPTIMIZATION
      // ==============================
      headerTable('CONVERSION OPTIMIZATION — SITE-WIDE ELEMENTS'),
      new Paragraph({ spacing: { before: 160 } }),

      h2('Trust Signals — Used Throughout Site'),
      bullet('Client logo wall (recognizable brands worked with)'),
      bullet('Live project counter: "Currently working on 14 active projects"'),
      bullet('Real testimonials with photos and LinkedIn profiles'),
      bullet('Google Reviews widget (4.9 stars)'),
      bullet('Inc. / Clutch / DesignRush awards and recognition'),
      bullet('"As featured in" press logos'),

      new Paragraph({ spacing: { before: 160 } }),
      h2('Lead Generation Elements'),
      bullet('Exit-intent popup: "Before You Go — Get a Free Website Audit ($500 value)" with email capture'),
      bullet('Sticky CTA bar: "Ready to grow? Chat with an Expert → [Free Consultation]"'),
      bullet('Blog lead magnets: Downloadable guides, checklists, templates'),
      bullet('Chatbot: Qualification questions → calendar booking integration'),
      bullet('Free tool: Website Speed Checker / SEO Score Calculator'),

      new Paragraph({ spacing: { before: 160 } }),
      h2('CONTENT MARKETING — BLOG PILLAR TOPICS'),
      body('High-Traffic SEO Blog Topics (Build Topical Authority):'),
      new Paragraph({ spacing: { before: 80 } }),
      bullet('How Much Does a Website Cost in 2026? (Complete Pricing Guide)'),
      bullet('10 Signs Your Website Is Losing You Customers'),
      bullet('React Native vs Flutter: Which Is Right for Your App in 2026?'),
      bullet('Local SEO Guide for Small Businesses: Rank #1 in Your City'),
      bullet('How Long Does SEO Take? (Honest Answer with Data)'),
      bullet('Shopify vs WooCommerce: Which Platform for Your Store?'),
      bullet('The Complete Guide to Core Web Vitals for Business Owners'),
      bullet('How to Choose a Digital Marketing Agency (Without Getting Burned)'),
      bullet('WordPress Security Checklist: 25 Steps to Protect Your Site'),
      bullet('What Is Technical SEO? Everything You Need to Know'),

    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync('/mnt/user-data/outputs/internative_labs_sitemap_seo.docx', buffer);
  console.log('Done!');
});
