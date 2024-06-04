import { Link } from "@nextui-org/react";
import { Head } from "./head";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
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
        <div style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px', color: '#e75480' }}>
          {siteConfig.nav_logo_name}
        </div>
        <nav style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginBottom: '20px', padding: '0 20px', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: '#333', textDecoration: 'none' }}>Home</Link>
          <Link href="/learn_and_care" style={{ color: '#333', textDecoration: 'none' }}>Learn and Care</Link>
          <Link href="/doctor" style={{ color: '#333', textDecoration: 'none' }}>Doctor</Link>
          <Link href="/blog" style={{ color: '#333', textDecoration: 'none' }}>Blog</Link>
          <Link href="/about" style={{ color: '#333', textDecoration: 'none' }}>About</Link>
          <Link href="/contact" style={{ color: '#333', textDecoration: 'none' }}>Contact</Link>
        </nav>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
          <Link href={siteConfig.links.whatsapp} style={{ color: '#333' }}><FaWhatsapp /></Link>
          <Link href={siteConfig.links.email} style={{ color: '#333' }}><FaEnvelope /></Link>
          <Link href={siteConfig.links.mobile} style={{ color: '#333' }}><FaPhone /></Link>
        </div>
        <div style={{ fontSize: '14px', color: '#333' }}>
          &copy; {new Date().getFullYear()} {siteConfig.nav_logo_name_small_devices}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
