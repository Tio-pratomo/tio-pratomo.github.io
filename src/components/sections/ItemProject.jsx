export default function ItemProject({ title, desc, tech, link, buttonText }) {
  return (
    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{desc}</p>
      <div className="flex gap-4 flex-wrap sm:flex-none">
        {tech.map((item, i) => (
          <span
            key={i}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 mx-2 inline-block rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
          >
            {item}
          </span>
        ))}
      </div>
      <div>
        <div className="flex justify-between items-center">
          <a
            href={link}
            className="mt-4 inline-block text-blue-400 hover:text-blue-300 transition-colors"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
