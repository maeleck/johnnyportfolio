
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
  imageKey: string;
}

export interface PhotoDecoration {
  imageKey: string;
  position: { top: string; left: string };
  rotation: number;
  size: { width: string; height: string };
  alt: string;
}
