import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function Contact() {
    return (
      <div className="min-h-screen bg-gradient-to-r from-black via-gray-800 to-black">
          <Header />
          <main className="container mx-auto py-8">
            <h1 className="text-4xl font-semibold text-white mb-8">Contact</h1>
<div className="w-full md:w-2/3 mx-auto">
<ContactForm />
</div>
</main>
<Footer />
</div>
);
}