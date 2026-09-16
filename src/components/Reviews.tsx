import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageSquare, ExternalLink } from 'lucide-react';
import { REVIEWS, VETPET_INFO } from '../data/vetpetData';

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="avaliacoes" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-init">
        
        {/* Top Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full">
              O que nossos clientes dizem
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] text-[#0f3d26] tracking-tight">
              Quem cuida do seu pet, precisa confiar.
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Nossa maior satisfação é ver seu pet bem e seus tutores tranquilos. Confira algumas avaliações reais de quem já passou por aqui.
            </p>
          </div>

          {/* Google Review Badge */}
          <div className="flex-shrink-0">
            <a
              href={VETPET_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 px-4 py-3 rounded-2xl transition-all duration-200 shadow-sm card-interactive"
              title="Ver todas as avaliações no Google"
            >
              {/* Google G SVG */}
              <div className="w-7 h-7 flex-shrink-0 bg-white rounded-full p-1 shadow-sm flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-gray-900 text-sm">{VETPET_INFO.googleRating.toFixed(1)} no Google</span>
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-gray-500 font-medium">
                  {VETPET_INFO.googleReviewCount} avaliações confirmadas
                </span>
              </div>

              <ExternalLink className="w-4 h-4 text-emerald-700 ml-1 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Reviews Cards Display */}
        <div className="relative">
          {/* Desktop: 3 cards grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-[#f8faf8] border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between card-interactive"
              >
                <div>
                  {/* Author Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm font-['Outfit',sans-serif]">
                        {review.name}
                      </h4>
                      <p className="text-xs text-emerald-700 font-medium">{review.origin}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center text-amber-400 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 text-sm leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200/50 flex items-center justify-between text-[11px] text-gray-500">
                  <span>Avaliação verificada</span>
                  <span className="text-emerald-700 font-semibold">VetPet Irecê</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Carousel view */}
          <div className="md:hidden">
            <div className="bg-[#f8faf8] border border-gray-100 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={REVIEWS[currentIndex].avatar}
                  alt={REVIEWS[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm font-['Outfit',sans-serif]">
                    {REVIEWS[currentIndex].name}
                  </h4>
                  <p className="text-xs text-emerald-700 font-medium">
                    {REVIEWS[currentIndex].origin}
                  </p>
                </div>
              </div>

              <div className="flex items-center text-amber-400 mb-3">
                {[...Array(REVIEWS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed italic min-h-[70px]">
                "{REVIEWS[currentIndex].text}"
              </p>
            </div>

            {/* Mobile Carousel Controls */}
            <div className="flex items-center justify-between mt-4 px-2">
              <button
                onClick={prevReview}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 shadow-sm"
                aria-label="Avaliação anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                {REVIEWS.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                      currentIndex === idx ? 'w-6 bg-emerald-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 shadow-sm"
                aria-label="Próxima avaliação"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
