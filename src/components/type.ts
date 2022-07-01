interface ItemProps {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  comment?: string;
  imgUrl?: string;
  onClick?: () => void;
};

export type { ItemProps };