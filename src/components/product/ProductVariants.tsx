
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface ProductVariantsProps {
  colors?: string[];
  sizes?: string[];
  selectedColor: string;
  selectedSize: string;
  quantity: number;
  setSelectedColor: (color: string) => void;
  setSelectedSize: (size: string) => void;
  setQuantity: (quantity: number) => void;
}

const ProductVariants = ({ 
  colors, 
  sizes, 
  selectedColor,
  selectedSize,
  quantity,
  setSelectedColor,
  setSelectedSize,
  setQuantity
}: ProductVariantsProps) => {
  return (
    <div className="space-y-6">
      {/* Color Selection */}
      {colors && colors.length > 0 && (
        <div className="space-y-2">
          <h3 className="font-medium">颜色</h3>
          <RadioGroup
            value={selectedColor}
            onValueChange={setSelectedColor}
            className="flex gap-3"
          >
            {colors.map((color) => (
              <div key={color} className="flex items-center gap-2">
                <RadioGroupItem value={color} id={`color-${color}`} />
                <Label htmlFor={`color-${color}`}>{color}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      )}

      {/* Size Selection */}
      {sizes && sizes.length > 0 && (
        <div className="space-y-2">
          <h3 className="font-medium">规格</h3>
          <RadioGroup
            value={selectedSize}
            onValueChange={setSelectedSize}
            className="flex gap-3"
          >
            {sizes.map((size) => (
              <div key={size} className="flex items-center gap-2">
                <RadioGroupItem value={size} id={`size-${size}`} />
                <Label htmlFor={`size-${size}`}>{size}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      )}

      {/* Quantity Selector */}
      <div className="space-y-2">
        <h3 className="font-medium">数量</h3>
        <div className="flex items-center w-32">
          <Select
            value={quantity.toString()}
            onValueChange={(val) => setQuantity(parseInt(val))}
          >
            <SelectTrigger>
              <SelectValue placeholder="选择数量" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ProductVariants;
