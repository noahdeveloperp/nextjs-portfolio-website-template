import { memo, useState } from "react";
import { Mail, Loader } from "lucide-react";

/**
 * Newsletter Component
 * Email subscription form
 */
function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Validación de email en cliente
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok && response.status !== 200) {
        console.error('Error response:', data);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
        return;
      }

      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error('Error:', error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="bg-black text-white px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-light mb-4">
          Stay Updated
        </h2>
        <p className="text-gray-300 mb-8">
          Get insights on backend systems, architecture, and technical deep-dives delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex gap-3">
          <div className="flex-1 relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg 
                        text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition disabled:opacity-50"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-200 transition 
                      disabled:opacity-50 flex items-center gap-2 whitespace-nowrap"
          >
            {status === "loading" && <Loader className="w-4 h-4 animate-spin" />}
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {/* Status Messages */}
        {status === "success" && (
          <p className="text-green-400 mt-4">✓ Subscribed! Check your email.</p>
        )}
        {status === "error" && (
          <p className="text-red-400 mt-4">✗ Please enter a valid email.</p>
        )}
      </div>
    </section>
  );
}

export default memo(Newsletter);