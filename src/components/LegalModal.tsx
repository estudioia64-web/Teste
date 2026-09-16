import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { VETPET_INFO } from '../data/vetpetData';

interface LegalModalProps {
  type: 'privacidade' | 'termos' | 'lgpd' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    privacidade: {
      title: 'Política de Privacidade',
      content: (
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            A <strong>{VETPET_INFO.name}</strong>, localizada em {VETPET_INFO.addressFull}, valoriza a privacidade e a segurança dos dados pessoais de seus clientes, tutores e visitantes do website.
          </p>
          <h4 className="font-bold text-gray-900 text-base">1. Coleta de Informações</h4>
          <p>
            Coletamos apenas os dados necessários para o atendimento veterinário e contato direto com os tutores (como nome, telefone, e-mail e dados básicos do animal), fornecidos voluntariamente através de nossos canais de agendamento e WhatsApp.
          </p>
          <h4 className="font-bold text-gray-900 text-base">2. Uso dos Dados</h4>
          <p>
            As informações são utilizadas exclusivamente para fins de agendamento de consultas, confirmação de atendimentos, orientações pós-consulta e esclarecimento de dúvidas sobre os produtos do Pet Shop.
          </p>
          <h4 className="font-bold text-gray-900 text-base">3. Compartilhamento</h4>
          <p>
            A VetPet não comercializa, aluga ou compartilha seus dados pessoais com terceiros para finalidades publicitárias ou não autorizadas.
          </p>
          <h4 className="font-bold text-gray-900 text-base">4. Contato do Encarregado</h4>
          <p>
            Para dúvidas sobre o tratamento de seus dados, entre em contato através do e-mail: <strong className="text-emerald-800">{VETPET_INFO.email}</strong>.
          </p>
        </div>
      ),
    },
    termos: {
      title: 'Termos de Uso',
      content: (
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            Bem-vindo ao website oficial da <strong>{VETPET_INFO.name}</strong>. Ao acessar nosso portal, você concorda com as diretrizes e termos descritos abaixo.
          </p>
          <h4 className="font-bold text-gray-900 text-base">1. Caráter Informativo</h4>
          <p>
            As informações publicadas neste website possuem caráter institucional e educativo sobre os serviços da clínica veterinária e produtos do pet shop. O conteúdo não substitui a consulta clínica presencial com médico veterinário.
          </p>
          <h4 className="font-bold text-gray-900 text-base">2. Propriedade Intelectual</h4>
          <p>
            A marca VetPet, logotipo, textos, fotos e elementos visuais são de uso exclusivo da clínica e protegidos pela legislação de propriedade intelectual.
          </p>
          <h4 className="font-bold text-gray-900 text-base">3. Agendamentos</h4>
          <p>
            Os agendamentos realizados via canais digitais dependem de confirmação direta com a equipe da clínica conforme a disponibilidade de horários.
          </p>
        </div>
      ),
    },
    lgpd: {
      title: 'Conformidade com a LGPD (Lei nº 13.709/2018)',
      content: (
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            A <strong>{VETPET_INFO.name}</strong> cumpre rigorosamente os princípios de finalidade, adequação, necessidade e segurança previstos na Lei Geral de Proteção de Dados Pessoais (LGPD).
          </p>
          <h4 className="font-bold text-gray-900 text-base">Direitos dos Titulares</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Confirmação da existência de tratamento de dados;</li>
            <li>Acesso aos dados pessoais cadastrados;</li>
            <li>Correção de dados incompletos ou inexatos;</li>
            <li>Eliminação ou revogação do consentimento para contatos futuros.</li>
          </ul>
          <p className="pt-2">
            Canal de atendimento LGPD: envie solicitação para <strong className="text-emerald-800">{VETPET_INFO.email}</strong> ou pelo WhatsApp {VETPET_INFO.whatsappFormatted}.
          </p>
        </div>
      ),
    },
  };

  const activeContent = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-emerald-100 flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="bg-[#0a2e1a] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h3 className="font-['Outfit',sans-serif] font-bold text-lg">
              {activeContent.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-emerald-200 hover:text-white p-1 rounded-lg transition-colors btn-interactive"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeContent.content}
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold text-xs px-5 py-2.5 rounded-full transition-all btn-interactive btn-shine"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
