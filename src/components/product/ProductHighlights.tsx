
interface ProductHighlightsProps {
  highlights?: string[];
}

const ProductHighlights = ({ highlights }: ProductHighlightsProps) => {
  if (!highlights || highlights.length === 0) return null;
  
  return (
    <div className="mt-6 border-t border-gray-800 pt-6">
      <ul className="space-y-2 text-sm">
        {highlights.map((highlight, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductHighlights;
