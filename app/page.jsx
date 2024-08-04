import Header from './components/header';
import TeeTimesButton from './components/button';
import Footer from './components/footer';
import Image from 'next/image';
import HeroImage from './assets/wayland-hero-image.jpeg';

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center py-10">
        <Image
          alt="Wayland Country Club Photo"
          src={HeroImage}
          className="h-100 w-auto"
          priority
          style={{
            objectFit: 'cover',
          }}
        />
        <h1 className="text-3xl text-center">18 Holes - Public Welcome</h1>
        <TeeTimesButton />
        <p className="text-2xl text-center">or call 508-358-4775 ext. 5</p>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
