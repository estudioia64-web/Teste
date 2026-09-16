import React, { useState } from 'react';
import { X, Calendar, MessageCircle, Phone, CheckCircle, Dog, Cat } from 'lucide-react';
import { VETPET_INFO } from '../data/vetpetData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Consulta veterinária',
}) => {
  const [tutorName, setTutorName] = useState('');
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState<'Cão' | 'Gato' | 'Outro'>('Cão');
  const [service, setService] = useState(initialService);
  const [timePreference, setTimePreference] = useState('Manhã (08h às 12h)');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = [
      `*Solicitação de Agendamento - VetPet Clínica Veterinária*`,
      `🐾 *Tutor(a):* ${tutorName || 'Não informado'}`,
      `🐶 *Pet:* ${petName || 'Não informado'} (${petType})`,
      `🩺 *Serviço de interesse:* ${service}`,
      `⏰ *Turno preferido:* ${timePreference}`,
      notes ? `📝 *Observações:* ${notes}` : null,
      `\n_Enviado pelo website da VetPet_`,
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/${VETPET_INFO.whatsappRaw}?text=${encodeURIComponent(
      formattedMessage
    )}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-emerald-100 my-8 animate-in zoom-in-95 duration-300">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0a2e1a] to-[#0f4426] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-emerald-200 hover:text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-all duration-200 btn-interactive"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-['Outfit',sans-serif] text-xl font-bold">
                Agendamento de Atendimento
              </h3>
              <p className="text-xs text-emerald-200">
                Preencha os dados para iniciar o contato no WhatsApp
              </p>
            </div>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {/* Tutor & Pet Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Seu Nome (Tutor)
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Maria Silva"
                value={tutorName}
                onChange={(e) => setTutorName(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 focus:border-[#16a34a] focus:ring-2 focus:ring-emerald-100 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Nome do Pet
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Thor / Pipoca"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 focus:border-[#16a34a] focus:ring-2 focus:ring-emerald-100 outline-none transition-all"
              />
            </div>
          </div>

          {/* Pet Type */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Espécie do Pet
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setPetType('Cão')}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border text-xs font-semibold transition-all btn-interactive ${
                  petType === 'Cão'
                    ? 'bg-emerald-50 border-emerald-600 text-emerald-800'
                    : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Dog className="w-4 h-4 text-emerald-700" />
                <span>Cachorro</span>
              </button>

              <button
                type="button"
                onClick={() => setPetType('Gato')}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border text-xs font-semibold transition-all btn-interactive ${
                  petType === 'Gato'
                    ? 'bg-emerald-50 border-emerald-600 text-emerald-800'
                    : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Cat className="w-4 h-4 text-emerald-700" />
                <span>Gato</span>
              </button>

              <button
                type="button"
                onClick={() => setPetType('Outro')}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all btn-interactive ${
                  petType === 'Outro'
                    ? 'bg-emerald-50 border-emerald-600 text-emerald-800'
                    : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                Outro
              </button>
            </div>
          </div>

          {/* Service */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
              Serviço Desejado
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 focus:border-[#16a34a] focus:ring-2 focus:ring-emerald-100 outline-none bg-white transition-all"
            >
              <option value="Consultas veterinárias">Consultas veterinárias</option>
              <option value="Cuidados preventivos / Vacinas">Cuidados preventivos / Vacinas</option>
              <option value="Atendimento clínico">Atendimento clínico</option>
              <option value="Produtos do Pet Shop">Produtos do Pet Shop</option>
              <option value="Outro assunto">Outro assunto</option>
            </select>
          </div>

          {/* Time preference */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
              Preferência de Horário
            </label>
            <select
              value={timePreference}
              onChange={(e) => setTimePreference(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-300 focus:border-[#16a34a] focus:ring-2 focus:ring-emerald-100 outline-none bg-white transition-all"
            >
              <option value="Manhã (08h às 12h)">Manhã (08h às 12h)</option>
              <option value="Tarde (13h às 18h)">Tarde (13h às 18h)</option>
              <option value="Qualquer horário disponível">Qualquer horário disponível</option>
            </select>
          </div>

          {/* Optional Notes */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
              Observações (opcional)
            </label>
            <textarea
              rows={2}
              placeholder="Descreva sintomas, vacinas pendentes ou dúvidas..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2 text-sm rounded-xl border border-gray-300 focus:border-[#16a34a] focus:ring-2 focus:ring-emerald-100 outline-none transition-all resize-none"
            />
          </div>

          {/* Submit */}
          <div className="pt-2 space-y-3">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all duration-200 btn-interactive btn-shine"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>Enviar pelo WhatsApp ({VETPET_INFO.whatsappFormatted})</span>
            </button>

            <div className="text-center">
              <span className="text-xs text-gray-500">
                Prefere ligar?{' '}
                <a href={VETPET_INFO.phoneLink} className="font-semibold text-emerald-800 hover:underline">
                  {VETPET_INFO.phoneFormatted}
                </a>
              </span>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
