export interface ContactInfo {
  name: string;
  shortName: string;
  slogan: string;
  heroHeadline: string;
  heroSubtitle: string;
  instagram: string;
  instagramUrl: string;
  whatsappRaw: string;
  whatsappFormatted: string;
  whatsappLink: string;
  phoneRaw: string;
  phoneFormatted: string;
  phoneLink: string;
  email: string;
  addressStreet: string;
  addressNumber: string;
  addressComplement: string;
  addressNeighborhood: string;
  addressCity: string;
  addressState: string;
  addressFull: string;
  openingHours: string;
  googleMapsUrl: string;
  googleRating: number;
  googleReviewCount: number;
}

export const VETPET_INFO: ContactInfo = {
  name: "VetPet Clínica Veterinária & Pet Shop",
  shortName: "VetPet",
  slogan: "Cuidado completo para o seu pet.",
  heroHeadline: "Cuidado completo para o seu pet.",
  heroSubtitle:
    "Na VetPet, seu pet recebe atendimento veterinário completo e todo o carinho que ele merece. Aqui, saúde, bem-estar e qualidade de vida caminham juntos.",
  instagram: "@vetpetclinica_",
  instagramUrl: "https://www.instagram.com/vetpetclinica_/",
  whatsappRaw: "5575998452544",
  whatsappFormatted: "(75) 99845-2544",
  whatsappLink:
    "https://wa.me/5575998452544?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20atendimento%20na%20VetPet%20Cl%C3%ADnica%20Veterin%C3%A1ria!",
  phoneRaw: "5574999154388",
  phoneFormatted: "(74) 99915-4388",
  phoneLink: "tel:+5574999154388",
  email: "vetpetclinica2026@gmail.com",
  addressStreet: "Rua Ângelo França Dourado",
  addressNumber: "94",
  addressComplement: "Loja",
  addressNeighborhood: "Centro",
  addressCity: "Irecê",
  addressState: "BA",
  addressFull: "Rua Ângelo França Dourado, 94 - Loja - Centro - Irecê/BA",
  openingHours: "Seg a Sáb - 08h às 18h",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua+%C3%82ngelo+Fran%C3%A7a+Dourado%2C+94+-+Centro%2C+Irec%C3%AA+-+BA",
  googleRating: 5.0,
  googleReviewCount: 11,
};

export interface DifferentialItem {
  id: string;
  title: string;
  iconName: 'stethoscope' | 'paw-heart' | 'cat-dog' | 'petshop';
}

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: 'atendimento',
    title: 'Atendimento veterinário completo',
    iconName: 'stethoscope',
  },
  {
    id: 'cuidado',
    title: 'Cuidado individualizado para cada pet',
    iconName: 'paw-heart',
  },
  {
    id: 'animais',
    title: 'Cães e gatos são bem-vindos',
    iconName: 'cat-dog',
  },
  {
    id: 'produtos',
    title: 'Petshop com produtos de qualidade',
    iconName: 'petshop',
  },
];

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  details?: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'consultas',
    title: 'Consultas veterinárias',
    description: 'Avaliação e acompanhamento de saúde do seu pet.',
    image:
      'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=800&q=80',
    icon: 'Stethoscope',
    details: [
      'Exame físico detalhado e preventivo',
      'Acompanhamento do desenvolvimento do filhote ao sênior',
      'Orientações nutricionais e comportamentais personalizadas',
    ],
  },
  {
    id: 'preventivos',
    title: 'Cuidados preventivos',
    description: 'Prevenção e acompanhamento para manter seu animal sempre saudável.',
    image:
      'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
    icon: 'ShieldCheck',
    details: [
      'Controle rigoroso de vacinas e vermifugação',
      'Prevenção contra parasitas, pulgas e carrapatos',
      'Check-ups periódicos para longevidade e bem-estar',
    ],
  },
  {
    id: 'clinico',
    title: 'Atendimento clínico',
    description: 'Avaliação de sinais, sintomas e necessidades do animal.',
    image:
      'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80',
    icon: 'Cross',
    details: [
      'Diagnóstico ágil com foco na recuperação segura',
      'Manejo gentil minimizando o estresse do animal',
      'Suporte contínuo aos tutores durante o tratamento',
    ],
  },
  {
    id: 'petshop-servico',
    title: 'Petshop',
    description: 'Produtos para alimentação, higiene e cuidados.',
    image:
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
    icon: 'ShoppingBag',
    details: [
      'Rações premium e super premium selecionadas',
      'Linha completa de higiene, shampoos e banho',
      'Acessórios, brinquedos e petiscos nutritivos',
    ],
  },
];

export interface PetShopCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const PETSHOP_CATEGORIES: PetShopCategory[] = [
  {
    id: 'alimentacao',
    name: 'Alimentação',
    icon: 'Utensils',
    description: 'Rações de qualidade, fórmulas especiais e nutrição balanceada.',
  },
  {
    id: 'higiene',
    name: 'Higiene',
    icon: 'Sparkles',
    description: 'Shampoos específicos, toalhas, perfumes e higiene preventiva.',
  },
  {
    id: 'petiscos',
    name: 'Petiscos',
    icon: 'Cookie',
    description: 'Snacks saudáveis, ossinhos funcionais e agrados que eles amam.',
  },
  {
    id: 'brinquedos',
    name: 'Brinquedos',
    icon: 'Gamepad2',
    description: 'Estímulo físico e mental para cães e gatos de todas as idades.',
  },
  {
    id: 'cuidados',
    name: 'Cuidados',
    icon: 'HeartPulse',
    description: 'Produtos de apoio à saúde, higiene bucal e bem-estar diário.',
  },
  {
    id: 'acessorios',
    name: 'Acessórios',
    icon: 'Package',
    description: 'Coleiras, guias confortáveis, caminhas, comedouros e caixas de transporte.',
  },
];

export interface ReviewItem {
  id: string;
  name: string;
  origin: string;
  rating: number;
  text: string;
  avatar: string;
}

export const REVIEWS: ReviewItem[] = [
  {
    id: 'juliana',
    name: 'Juliana Souza',
    origin: 'Avaliação no Google',
    rating: 5,
    text: 'Atendimento excelente! Equipe muito atenciosa e carinhosa com os animais. Super recomendo!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'marcos',
    name: 'Marcos Lima',
    origin: 'Avaliação no Google',
    rating: 5,
    text: 'Clínica completa, ambiente limpo e organizado. Meu pet sempre é bem cuidado aqui!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'fernanda',
    name: 'Fernanda Oliveira',
    origin: 'Avaliação no Google',
    rating: 5,
    text: 'Profissionais competentes e um atendimento de excelência. Meu pet ama!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
  },
];

export interface InstagramPost {
  id: string;
  image: string;
  alt: string;
  caption?: string;
  link: string;
}

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80',
    alt: 'Golden Retriever feliz na clínica VetPet',
    caption: 'Dia de cuidado e muito amor com nossos amigos de quatro patas! 🐾💚',
    link: 'https://www.instagram.com/vetpetclinica_/',
  },
  {
    id: 'post-2',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
    alt: 'Gato ronronando em atendimento na VetPet',
    caption: 'Cuidado especializado e ambiente calmo para os felinos.',
    link: 'https://www.instagram.com/vetpetclinica_/',
  },
  {
    id: 'post-3',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=600&q=80',
    alt: 'Espaço e recepção acolhedora VetPet',
    caption: 'Nossa estrutura em Irecê planejada com carinho para receber você e seu pet.',
    link: 'https://www.instagram.com/vetpetclinica_/',
  },
  {
    id: 'post-4',
    image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=600&q=80',
    alt: 'Veterinário com filhote canino',
    caption: 'Acompanhamento preventivo desde os primeiros meses de vida.',
    link: 'https://www.instagram.com/vetpetclinica_/',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Como funciona o agendamento de consultas na VetPet?",
    answer: "Você pode agendar diretamente pelo nosso WhatsApp (+55 75 99845-2544) ou pelo telefone (+55 74 99915-4388). Nossa equipe responderá prontamente para encontrar o melhor horário para você e seu pet.",
  },
  {
    question: "Vocês atendem cães e gatos?",
    answer: "Sim! A VetPet foi estruturada para acolher com carinho, paciência e segurança tanto cães quanto gatos, respeitando o ritmo e as particularidades de cada espécie.",
  },
  {
    question: "O pet shop possui rações e medicamentos veterinários?",
    answer: "Possuímos uma seleção criteriosa de produtos de nutrição, higiene, brinquedos, petiscos e cuidados diários das melhores marcas do mercado pet.",
  },
  {
    question: "Onde a VetPet está localizada em Irecê?",
    answer: "Estamos no Centro de Irecê/BA, na Rua Ângelo França Dourado, 94 - Loja. Fácil acesso e ambiente climatizado e preparado para o conforto dos animais.",
  },
  {
    question: "Qual o horário de funcionamento?",
    answer: "Nosso horário de atendimento é de Segunda a Sábado, das 08h às 18h.",
  },
];
