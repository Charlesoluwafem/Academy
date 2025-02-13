import '../styles/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { useState } from 'react';
import { useRouter } from 'next/router';
import RequestDemo from '../components/requestdemo';

// _app.js (if using a global CSS file)
import 'react-phone-input-2/lib/style.css';

function MyApp({ Component, pageProps }) {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const router = useRouter(); // Import useRouter to use pathname

  // Function to open the demo request modal
  const openDemoModal = () => setIsDemoOpen(true);

  // Function to close the demo request modal
  const closeDemoModal = () => setIsDemoOpen(false);

  return (
    <>
      <Header onRequestDemo={openDemoModal} />

      <main>
        <Component {...pageProps} />
      </main>

      {/* Only render Footer if not in /admin */}
      {!router.pathname.startsWith("/admin") && <Footer />}

      {/* Only show the modal if isDemoOpen is true */}
      {isDemoOpen && <RequestDemo onClose={closeDemoModal} />}
    </>
  );
}

export default MyApp;
