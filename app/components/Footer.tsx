export default function Footer() {
  return (
    <footer className="py-6 text-center bg-blue-100 dark:bg-gray-950 text-gray-700 dark:text-gray-400">
      <p>© {new Date().getFullYear()} My Blog — All rights reserved.</p>
    </footer>
  );
}
