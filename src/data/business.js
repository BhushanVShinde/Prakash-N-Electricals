export const business = {
  name: 'Prakash N Electricals',
  owner: 'Nilanchala Panigrahi',
  phones: ['7666147345', '9776943442'],
  email: 'prakashnelectricals@gmail.com',
  address: {
    line1: 'D-05, Tapodhan CHS LTD,',
    line2: 'Plot No. 906,',
    line3: 'Charkop Sector 9,',
    line4: 'Near Swami Samarth Mandir,',
    line5: 'Kandivali West,',
    line6: 'Mumbai',
    full: 'D-05, Tapodhan CHS LTD, Plot No. 906, Charkop Sector 9, Near Swami Samarth Mandir, Kandivali West, Mumbai',
  },
  gstin: '27CYZPP5865M1ZO',
  whatsapp: '917666147345',
  whatsappUrl: 'https://wa.me/917666147345',
  website: 'https://prakashnelectricals.com',
  images: {
    logo: '/images/logo.svg',
    products: '/images/products',
    brands: '/images/brands',
  },
}

export const getWhatsAppLink = (message = '') => {
  const encoded = encodeURIComponent(message)
  return encoded
    ? `${business.whatsappUrl}?text=${encoded}`
    : business.whatsappUrl
}

export const getPhoneLink = (phone) => `tel:+91${phone}`
