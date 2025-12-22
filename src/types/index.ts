export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
}

export interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  class?: string;
}

export interface ProjectData {
  title: string;
  location: string;
  country: string;
  slug: string;
  featured: boolean;
  order: number;
  heroImage: ImageMetadata;
  gallery: ImageMetadata[];
  description?: string;
}

export interface LocationData {
  name: string;
  address: string[];
  note?: string;
  comingSoon?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}
