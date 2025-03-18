
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TempleCard from '@/components/TempleCard';
import BlessingProcess from '@/components/BlessingProcess';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';

const Culture = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="h-4 w-4" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/culture">文化</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">文化传承</h1>
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          探索传统道教手串开光仪式的神秘过程，了解各地著名道观的历史文化底蕴
        </p>
        
        <Tabs defaultValue="blessing" className="mb-12">
          <TabsList className="grid w-full md:w-[400px] mx-auto grid-cols-2">
            <TabsTrigger value="blessing">开光过程</TabsTrigger>
            <TabsTrigger value="temples">名门道观</TabsTrigger>
          </TabsList>
          
          <TabsContent value="blessing" className="mt-8">
            <BlessingProcess />
          </TabsContent>
          
          <TabsContent value="temples" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <TempleCard 
                name="青城山道观" 
                image="/temple1.jpg"
                description="青城山道观是中国道教发源地之一，历史悠久，环境清幽，是中国著名的道教圣地。"
                location="四川省成都市都江堰市青城山"
              />
              <TempleCard 
                name="武当山道观" 
                image="/temple2.jpg"
                description="武当山是道教名山，被誉为"亘古无双胜境，天下第一仙山"，是道教太和、玄岳两宗的发源地。"
                location="湖北省十堰市丹江口市武当山特区"
              />
              <TempleCard 
                name="白云观" 
                image="/temple3.jpg"
                description="北京白云观是道教全真龙门派的祖庭，也是北京规模最大、规格最高的道教宫观。"
                location="北京市西城区白云路白云观街9号"
              />
              <TempleCard 
                name="茅山道观" 
                image="/temple4.jpg"
                description="茅山道观是道教上清派的发源地，自古以来被誉为"第一福地，第八洞天"。"
                location="江苏省句容市茅山风景区"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Culture;
