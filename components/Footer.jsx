import { memo } from "react";

/**
 * Footer Component
 * Displays contact information.
 *
 * @component
 * @returns {JSX.Element} Footer UI
 */
function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black text-white py-20 px-6"
      role="contentinfo"
      aria-label="Contact"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-light mb-8">
          Let's Connect
        </h2>

        <p className="text-lg text-gray-300 mb-8">
          Interested in collaborating on backend projects or systems architecture?
        </p>

        <a
          href="mailto:noe@dev"
          className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition inline-block"
        >
          noe@dev
        </a>

        <p className="text-sm text-gray-500 mt-8">
          © 2025 Noe
        </p>
      </div>
    </footer>
  );
}

export default memo(Footer);
