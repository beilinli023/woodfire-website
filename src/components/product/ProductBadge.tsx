
import { Badge } from "@/components/ui/badge";

interface ProductBadgeProps {
  category: string;
}

const ProductBadge = ({ category }: ProductBadgeProps) => {
  return (
    <Badge variant="outline" className="text-xs uppercase tracking-wider">
      {category}
    </Badge>
  );
};

export default ProductBadge;
