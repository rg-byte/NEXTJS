export default function Contact() {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border px-3 py-2 rounded"
        />

        <textarea
          placeholder="Message"
          className="w-full border px-3 py-2 rounded"
          rows="4"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
}
