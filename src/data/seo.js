import { business } from './business'

export const SEO = {
  siteName: business.name,
  siteUrl: business.website,
  targetKeyword: 'Electrical Spare Parts Wholesaler Mumbai',
  locale: 'en_IN',
  language: 'en',
  region: 'IN-MH',
  twitterCard: 'summary_large_image',
  twitterSite: '@prakashnelectricals',
  defaultImage: `${business.website}/images/logo.svg`,
  defaultImageAlt: `${business.name} — ${'Electrical Spare Parts Wholesaler Mumbai'}`,
  geo: {
    region: 'IN-MH',
    placename: 'Mumbai',
    position: '19.2081;72.8337',
  },
}

export const pageSeo = {
  home: {
    path: '/',
    title: 'Electrical Spare Parts Wholesaler Mumbai',
    description:
      'Prakash N Electricals is a trusted electrical spare parts wholesaler in Mumbai. Wholesale wires, cables, MCB, MCCB, switches, contactors & industrial components in Kandivali West.',
    keywords:
      'electrical spare parts wholesaler mumbai, electrical wholesaler kandivali, wires cables mumbai, MCB MCCB supplier mumbai, electrical components wholesale',
  },
  products: {
    path: '/products',
    title: 'Electrical Products Wholesale Mumbai',
    description:
      'Browse electrical spare parts wholesale in Mumbai — wires, cables, MCB, MCCB, switches, sockets, contactors, relays, LED drivers & cable glands. B2B pricing at Prakash N Electricals.',
    keywords:
      'electrical products wholesale mumbai, MCB supplier mumbai, wires cables wholesale, contactors relays mumbai, electrical spare parts',
  },
  brands: {
    path: '/brands',
    title: 'Electrical Brands Supplier Mumbai',
    description:
      'Authorised electrical spare parts wholesaler in Mumbai stocking Schneider, Siemens, ABB, Havells, Finolex, Polycab, Anchor & L&T. Genuine B2B supply from Prakash N Electricals.',
    keywords:
      'Schneider Siemens ABB supplier mumbai, Havells Polycab wholesaler mumbai, electrical brands mumbai, authorised electrical dealer kandivali',
  },
  about: {
    path: '/about',
    title: 'About Us — Electrical Wholesaler Mumbai',
    description:
      'Prakash N Electricals — established electrical spare parts wholesaler in Kandivali West, Mumbai. Led by Nilanchala Panigrahi. GST registered B2B supplier for contractors & industries.',
    keywords:
      'electrical wholesaler mumbai about, prakash n electricals kandivali, electrical spare parts dealer mumbai, B2B electrical supplier',
  },
  contact: {
    path: '/contact',
    title: 'Contact — Electrical Spare Parts Wholesaler Mumbai',
    description:
      'Contact Prakash N Electricals, electrical spare parts wholesaler in Mumbai. Call 7666147345, WhatsApp for quotations. Visit Charkop Sector 9, Kandivali West.',
    keywords:
      'electrical wholesaler mumbai contact, electrical spare parts kandivali phone, prakash n electricals address, wholesale electrical inquiry mumbai',
  },
}

export const getPageSeo = (pageKey) => {
  const page = pageSeo[pageKey]
  if (!page) return pageSeo.home

  return {
    ...page,
    canonical: `${SEO.siteUrl}${page.path}`,
    ogUrl: `${SEO.siteUrl}${page.path}`,
    fullTitle: `${page.title} | ${SEO.siteName}`,
  }
}

export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ElectricalSupplyStore',
  name: business.name,
  image: SEO.defaultImage,
  url: SEO.siteUrl,
  telephone: `+91-${business.phones[0]}`,
  email: business.email,
  description: pageSeo.home.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.address.full,
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400067',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 19.2081,
    longitude: 72.8337,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:00',
  },
  priceRange: '₹₹',
  areaServed: {
    '@type': 'City',
    name: 'Mumbai',
  },
})

export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: business.name,
  url: SEO.siteUrl,
  logo: SEO.defaultImage,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: `+91-${business.phones[0]}`,
    contactType: 'sales',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi', 'Marathi'],
  },
})

export const getWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: business.name,
  url: SEO.siteUrl,
  description: pageSeo.home.description,
  inLanguage: SEO.language,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SEO.siteUrl}/products?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
})
