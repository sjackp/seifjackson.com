export default function Footer() {
  return (
    <footer className="bg-transparent text-white py-6">
      <div className="container mx-auto text-center">
        <p className="font-semibold text-lg">
          &copy; {new Date().getFullYear()} Seif Jackson. All rights reserved.
        </p>
      </div>
    </footer>
  );
}