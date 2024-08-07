import { Link } from "@nextui-org/react";
import { Head } from "./head";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import { Image } from "@nextui-org/react";
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-8">
        {children}
      </main>
      <footer style={{ backgroundColor: '#ffe4e1', color: '#333', textAlign: 'center', padding: '20px 0' }}>
        
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', color: '#e75480' }}>
          <Image src="/favicon.ico" width={150} height={150} className="rounded-full" />
          <span style={{ fontSize: '22px', fontWeight: 'bold', marginTop: '10px' }}>
            {siteConfig.nav_logo_name}
          </span>
        </div>
        <nav style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginBottom: '20px', padding: '0 20px', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: '#333', textDecoration: 'none' }}>Home</Link>
          <Link href="/learn_and_care" style={{ color: '#333', textDecoration: 'none' }}>Learn and Care</Link>
          <Link href="/doctor-gershia-borges" style={{ color: '#333', textDecoration: 'none' }}>Doctor</Link>
          <Link href="/blog" style={{ color: '#333', textDecoration: 'none' }}>Blog</Link>
          <Link href="/about" style={{ color: '#333', textDecoration: 'none' }}>About</Link>
          <Link href="/faqs" style={{ color: '#333', textDecoration: 'none' }}>FAQs</Link>
        </nav>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
          <Link href={siteConfig.links.whatsapp} style={{ color: '#333' }}><FaWhatsapp /></Link>
          <Link href="mailto:drgershiaborges@gmail.com" style={{ color: '#333' }}><FaEnvelope /></Link>
          <Link href="tel:+919535035487" style={{ color: '#333' }}><FaPhone /></Link>
        </div>
        <div style={{ fontSize: '14px', color: '#333' }}>
          &copy; {new Date().getFullYear()} {siteConfig.nav_logo_name_small_devices}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
