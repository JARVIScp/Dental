export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    description: 'Professional-grade whitening for a brilliant, natural-looking smile.',
    fullDescription: 'Our advanced whitening systems use light-activated technology to remove deep stains and discoloration, giving you a smile that is several shades brighter in just one visit.',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Permanent, natural-feeling solutions for missing teeth.',
    fullDescription: 'Restore your smile and confidence with precision-placed dental implants. We use high-grade titanium and custom-crafted crowns that look and function exactly like natural teeth.',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment',
    description: 'Pain-free endodontic care to save your natural teeth.',
    fullDescription: 'Modern root canal therapy is a comfortable procedure designed to eliminate infection and preserve your natural tooth structure using advanced microscopic technology.',
    icon: 'Stethoscope',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'braces',
    title: 'Braces & Aligners',
    description: 'Clear and traditional options for perfectly aligned teeth.',
    fullDescription: 'From discreet clear aligners like Invisalign to modern ceramic braces, we offer personalized orthodontic solutions for both adults and teenagers.',
    icon: 'Smile',
    image: 'https://images.unsplash.com/photo-1597764690523-15bea4c581c9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'smile-makeover',
    title: 'Smile Makeover',
    description: 'Comprehensive aesthetic transformations tailored to you.',
    fullDescription: 'A complete redesign of your smile combining multiple cosmetic procedures like veneers, contouring, and whitening to achieve your aesthetic goals.',
    icon: 'Star',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description: 'Artistic enhancements for a flawless dental appearance.',
    fullDescription: 'Our cosmetic treatments focus on the harmony of your smile, utilizing porcelain veneers and bonding to correct chips, gaps, and minor misalignments.',
    icon: 'Heart',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Executive',
    content: 'The level of care and professionalism at Lumina is unmatched. My smile makeover has completely changed my confidence.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    content: 'I was always nervous about dental visits, but the pain-free approach here made all the difference. Highly recommended!',
    rating: 5
  },
  {
    name: 'Emma Williams',
    role: 'Interior Designer',
    content: 'A truly premium experience. The clinic is beautiful, and the technology they use is clearly state-of-the-art.',
    rating: 5
  }
];
