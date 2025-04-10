import { ReactNode } from 'react';

export interface LayoutData {
  header: HeaderData;
  footer: FooterData;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface HeaderData {
  logo: string;
  companyName: string;
  userName?: string;
  isLoggedIn: boolean;
  cartItemCount: number;
  productCategories: CategoryItem[];
  blogCategories: CategoryItem[];
  aboutCategories?: CategoryItem[];
}

export interface CategoryItem {
  id: string;
  label: string;
  path: string;
  children?: CategoryItem[];
}

export interface FooterData {
  companyTitle: string;
  companyDescription: string;
  contactInfo: ContactInfo;
  productCategories: ProductCategories;
  workingHours: string;
  policies: Policy[];
}

export interface ContactInfo {
  companyName: string;
  address: string;
  website: string;
  email: string;
  phone: string[];
  manufacturer?: {
    name: string;
    address: string;
  };
  origin?: string;
}

export interface QuickLinkSection {
  title: string;
  links: Link[];
}

export interface Link {
  name: string;
  url: string;
}

export interface ProductCategories {
  categories: Link[];
}

export interface Policy {
  name: string;
  url: string;
}