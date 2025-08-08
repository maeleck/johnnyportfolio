
export interface Link {
  label: string;
  url: string;
}

export interface PortfolioSection {
  id: string;
  title: string;
  summary: string;
  icon: React.ReactNode;
  position: {
    top: string;
    left: string;
  };
  details: {
    title: string;
    description: string;
    items?: string[];
  };
  links: Link[];
  imageUrl: string;
}
