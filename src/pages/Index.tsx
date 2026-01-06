import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { ShopByCategory } from '@/components/sections/ShopByCategory';
import { LivingRoom } from '@/components/sections/LivingRoom';
import { Dining } from '@/components/sections/Dining';
import { SoftFurnishings } from '@/components/sections/SoftFurnishings';
import { Decor } from '@/components/sections/Decor';
import { LatestCollection } from '@/components/sections/LatestCollection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Hero />
        <ShopByCategory />
        <LivingRoom />
        <Dining />
        <SoftFurnishings />
        <Decor />
        <LatestCollection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
