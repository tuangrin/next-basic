import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
          {children} {/*ตัวแทนของเนื้อหาในแต่ละ page ที่แตกต่างกัน */}
          {/* ซึ่งก็คือตัว<Component {...pageProps} /> ใน _app.js */}
      <Footer />
    </div>
  );
}
