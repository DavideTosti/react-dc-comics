export default function ComicModal({ comic, onClose }) {
  if (!comic) return null;

  const {
    title,
    description,
    thumb,
    price,
    series,
    sale_date,
    type,
    artists,
    writers,
  } = comic;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-zinc-900 border border-sky-500/30 rounded-2xl shadow-2xl p-6 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bottone di chiusura */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 w-10 h-10 flex items-center justify-center rounded-full font-bold text-xl cursor-pointer transition-colors"
          aria-label="Chiudi modal"
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row gap-6 mt-2">
          {/* Colonna Sinistra: Immagine e Prezzo */}
          <div className="flex flex-col items-center shrink-0">
            <img
              src={thumb}
              alt={title}
              className="w-48 aspect-[2/3] object-cover rounded-lg shadow-lg border border-zinc-700"
            />
            <div className="bg-sky-500 text-white font-bold text-center py-2 px-6 rounded-lg mt-4 text-lg w-full">
              {price}
            </div>
          </div>

          {/* Colonna Destra: Dettagli */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                  {series}
                </span>
                <span className="bg-zinc-800 text-zinc-400 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                  {type}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>

              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                {description}
              </p>
            </div>

            {/* Scheda Tecnica */}
            <div className="bg-zinc-950/60 p-4 rounded-xl border border-zinc-800/80 text-xs space-y-2">
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="text-zinc-400 font-semibold min-w-[110px]">
                  Data Uscita:
                </span>
                <span className="text-zinc-200">{sale_date}</span>
              </div>

              {artists && artists.length > 0 && (
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <span className="text-zinc-400 font-semibold min-w-[110px]">
                    Artisti:
                  </span>
                  <span className="text-zinc-200">{artists.join(", ")}</span>
                </div>
              )}

              {writers && writers.length > 0 && (
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <span className="text-zinc-400 font-semibold min-w-[110px]">
                    Scrittori:
                  </span>
                  <span className="text-zinc-200">{writers.join(", ")}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
