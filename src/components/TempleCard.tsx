
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MapPin } from 'lucide-react';

interface TempleCardProps {
  name: string;
  image: string;
  description: string;
  location: string;
}

const TempleCard = ({ name, image, description, location }: TempleCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="overflow-hidden bg-black/50 border-gray-800 hover:border-gray-600 transition-all cursor-pointer group">
          <div className="h-48 overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-white">{name}</CardTitle>
            <CardDescription className="text-gray-400 flex items-center gap-1">
              <MapPin size={14} /> {location.split('市')[0]}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 line-clamp-3">{description}</p>
          </CardContent>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="bg-gray-900 text-white border-gray-800 max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{name}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-md">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">道观介绍</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            
            <h3 className="text-lg font-medium mb-2">地址</h3>
            <p className="text-gray-300 flex items-center gap-2">
              <MapPin size={18} className="text-gray-400" /> 
              {location}
            </p>
            
            <h3 className="text-lg font-medium mt-4 mb-2">祈福服务</h3>
            <p className="text-gray-300">
              该道观提供传统手串祈福服务，由资深道长亲自主持，遵循古法仪式，为信众祈福纳祥。
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TempleCard;
