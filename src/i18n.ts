export type Lang = 'es' | 'en';

const translations = {
  es: {
    nav: {
      experience: 'La Experiencia',
      specialties: 'Especialidades',
      menu: 'Carta',
      reviews: 'Opiniones',
      gallery: 'Galería',
      contact: 'Contacto',
      reserve: 'Reservar',
    },
    hero: {
      title: 'Raciones generosas y cocina casera en el corazón de Madrid',
      subtitle: 'Una taberna castiza donde se come como antes y se vive el Madrid auténtico',
      cta1: 'Reservar mesa',
      cta2: 'Ver carta',
    },
    experience: {
      ornament: '— EST. MDCXXVI —',
      title: 'La Experiencia',
      p1: 'En Venta El Buscón recuperamos el espíritu de las grandes tabernas madrileñas. Aquí cada plato se elabora con recetas transmitidas de generación en generación, con producto fresco de mercado y el mimo de la cocina de toda la vida.',
      p2: 'Inspirados en la obra maestra de Quevedo, nuestro rincón es un homenaje al Siglo de Oro: un lugar donde la buena mesa, la conversación animada y el vino honesto se encuentran en cada rincón.',
      quote: '"Un rincón inspirado en Quevedo donde cada plato cuenta una historia"',
    },
    specialties: {
      ornament: '— DEL FOGÓN A LA MESA —',
      title: 'Nuestras Especialidades',
      items: [
        { name: 'Arroz con Bogavante', desc: 'Arroz meloso con bogavante fresco, fumé de marisco y un toque de azafrán' },
        { name: 'Rabo de Toro', desc: 'Guiso lento y tradicional, tierno y lleno de sabor, con su jugo reducido' },
        { name: 'Paella Marinera', desc: 'Arroz seco con gambas, mejillones, almejas y caldo de roca concentrado' },
        { name: 'Gambones al Ajillo', desc: 'Gambones salvajes en aceite de oliva con ajo confitado y guindilla' },
        { name: 'Pulpo a la Parrilla', desc: 'Pulpo gallego a la brasa, crujiente por fuera y tierno por dentro' },
        { name: 'Chuletón T-Bone', desc: 'Un kilo de vacuno mayor madurado, a la parrilla de carbón' },
        { name: 'Croquetas de Jamón', desc: 'Crujientes y cremosas, elaboradas con jamón ibérico de bellota' },
        { name: 'Tarta de Queso', desc: 'Al estilo vasco, cremosa por dentro con exterior dorado y caramelizado' },
      ],
    },
    menuSection: {
      ornament: '— NUESTRA CARTA —',
      title: 'La Carta',
      menuDay: 'Menú del Día — 14,90€',
      menuDayDesc: 'Primer plato + segundo + postre + bebida. De lunes a viernes.',
      glutenFree: '🌾 Opciones sin gluten disponibles',
      categories: {
        tapas: { title: 'Tapas y Raciones', items: ['Patatas bravas — 5,50€','Jamón ibérico — 18€','Pimientos de padrón — 6€','Ensaladilla rusa — 6,50€','Tortilla española — 7€','Tabla de quesos — 14€'] },
        arroces: { title: 'Arroces', items: ['Paella marinera — 16€','Arroz con bogavante — 22€','Arroz negro — 15€','Arroz a banda — 14€'] },
        carnes: { title: 'Carnes', items: ['Chuletón T-Bone 1kg — 28€','Rabo de toro — 16€','Secreto ibérico — 14€','Solomillo al whisky — 18€'] },
        pescados: { title: 'Pescados', items: ['Gambones al ajillo — 16€','Pulpo a la parrilla — 17€','Merluza a la romana — 13€','Calamares a la andaluza — 12€'] },
        postres: { title: 'Postres', items: ['Tarta de queso — 6€','Torrijas — 5,50€','Flan casero — 5€','Coulant de chocolate — 6,50€'] },
        bebidas: { title: 'Bebidas', items: ['Vino tinto (Ribera) — copa 4€','Sangría — jarra 12€','Cerveza artesana — 3,50€','Vermú de grifo — 3€'] },
      },
    },
    reviews: {
      ornament: '— LO QUE DICEN DE NOSOTROS —',
      title: 'Opiniones',
      items: [
        { text: 'Comida como en casa, trato increíble y raciones enormes. Volveremos seguro.', author: 'María G.', source: 'Google' },
        { text: 'Un must en Madrid, repetiría sin duda. El rabo de toro es espectacular.', author: 'James T.', source: 'TripAdvisor' },
        { text: 'Ambiente auténtico y precios muy razonables para la calidad. Las croquetas son adictivas.', author: 'Carlos R.', source: 'Google' },
        { text: 'The best traditional food we had in Madrid. Generous portions and lovely staff!', author: 'Sarah L.', source: 'TripAdvisor' },
      ],
    },
    gallery: {
      ornament: '— MOMENTOS —',
      title: 'Galería',
    },
    info: {
      ornament: '— ENCUÉNTRANOS —',
      title: 'Información',
      address: 'Calle de la Victoria, 7 — 28012 Madrid',
      phone: '+34 910 123 456',
      hours: 'Lun–Dom: 12:00 – 00:00',
      directions: 'Cómo llegar',
      call: 'Llamar ahora',
    },
    cta: {
      title: 'Reserva tu mesa y vive la auténtica taberna madrileña',
      button: 'Reservar ahora',
    },
    footer: {
      rights: '© 2025 Venta El Buscón. Todos los derechos reservados.',
    },
  },
  en: {
    nav: {
      experience: 'The Experience',
      specialties: 'Specialties',
      menu: 'Menu',
      reviews: 'Reviews',
      gallery: 'Gallery',
      contact: 'Contact',
      reserve: 'Reserve',
    },
    hero: {
      title: 'Generous portions & homemade cuisine in the heart of Madrid',
      subtitle: 'A traditional tavern where you eat like the locals and live the authentic Madrid',
      cta1: 'Reserve a table',
      cta2: 'See menu',
    },
    experience: {
      ornament: '— EST. MDCXXVI —',
      title: 'The Experience',
      p1: 'At Venta El Buscón we revive the spirit of Madrid\'s legendary taverns. Every dish is crafted with recipes passed down through generations, using fresh market produce and the care of traditional home cooking.',
      p2: 'Inspired by Quevedo\'s literary masterpiece, our corner is a tribute to Spain\'s Golden Age: a place where great food, lively conversation, and honest wine come together.',
      quote: '"A corner inspired by Quevedo where every dish tells a story"',
    },
    specialties: {
      ornament: '— FROM THE KITCHEN —',
      title: 'Our Specialties',
      items: [
        { name: 'Lobster Rice', desc: 'Creamy rice with fresh lobster, seafood bisque and a touch of saffron' },
        { name: 'Oxtail Stew', desc: 'Slow-cooked traditional stew, tender and full of flavor' },
        { name: 'Seafood Paella', desc: 'Dry rice with prawns, mussels, clams and concentrated rock broth' },
        { name: 'Garlic Prawns', desc: 'Wild prawns in olive oil with confit garlic and chili' },
        { name: 'Grilled Octopus', desc: 'Galician octopus grilled, crispy outside and tender inside' },
        { name: 'T-Bone Steak', desc: 'One kilo of aged beef, charcoal grilled to perfection' },
        { name: 'Ham Croquettes', desc: 'Crispy and creamy, made with acorn-fed Iberian ham' },
        { name: 'Cheesecake', desc: 'Basque-style, creamy inside with golden caramelized exterior' },
      ],
    },
    menuSection: {
      ornament: '— OUR MENU —',
      title: 'The Menu',
      menuDay: 'Daily Menu — €14.90',
      menuDayDesc: 'First course + main + dessert + drink. Monday to Friday.',
      glutenFree: '🌾 Gluten-free options available',
      categories: {
        tapas: { title: 'Tapas & Sharing', items: ['Patatas bravas — €5.50','Iberian ham — €18','Padrón peppers — €6','Russian salad — €6.50','Spanish omelette — €7','Cheese board — €14'] },
        arroces: { title: 'Rice Dishes', items: ['Seafood paella — €16','Lobster rice — €22','Black rice — €15','Rice a banda — €14'] },
        carnes: { title: 'Meats', items: ['T-Bone steak 1kg — €28','Oxtail stew — €16','Iberian pork — €14','Whisky sirloin — €18'] },
        pescados: { title: 'Seafood', items: ['Garlic prawns — €16','Grilled octopus — €17','Roman-style hake — €13','Andalusian squid — €12'] },
        postres: { title: 'Desserts', items: ['Cheesecake — €6','Torrijas — €5.50','Homemade flan — €5','Chocolate fondant — €6.50'] },
        bebidas: { title: 'Drinks', items: ['Red wine (Ribera) — glass €4','Sangría — pitcher €12','Craft beer — €3.50','Vermouth on tap — €3'] },
      },
    },
    reviews: {
      ornament: '— WHAT THEY SAY —',
      title: 'Reviews',
      items: [
        { text: 'Food like at home, incredible service and huge portions. We\'ll be back for sure.', author: 'María G.', source: 'Google' },
        { text: 'A must in Madrid, would repeat without a doubt. The oxtail is spectacular.', author: 'James T.', source: 'TripAdvisor' },
        { text: 'Authentic atmosphere and very reasonable prices for the quality. The croquettes are addictive.', author: 'Carlos R.', source: 'Google' },
        { text: 'The best traditional food we had in Madrid. Generous portions and lovely staff!', author: 'Sarah L.', source: 'TripAdvisor' },
      ],
    },
    gallery: {
      ornament: '— MOMENTS —',
      title: 'Gallery',
    },
    info: {
      ornament: '— FIND US —',
      title: 'Information',
      address: 'Calle de la Victoria, 7 — 28012 Madrid',
      phone: '+34 910 123 456',
      hours: 'Mon–Sun: 12:00 – 00:00',
      directions: 'Get directions',
      call: 'Call now',
    },
    cta: {
      title: 'Reserve your table and experience the authentic Madrid tavern',
      button: 'Reserve now',
    },
    footer: {
      rights: '© 2025 Venta El Buscón. All rights reserved.',
    },
  },
} as const;

export function t(lang: Lang) {
  return translations[lang];
}
