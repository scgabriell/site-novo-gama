import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Instituto Gama
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Fisioterapia especializada com atendimento humanizado e técnicas modernas para sua recuperação e bem-estar.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/saudeinstitutogama"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-pink-600 transition-colors duration-300"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/5511932433033"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-green-600 transition-colors duration-300"
                aria-label="Fale conosco no WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/#servicos" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/quem-somos" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/nossa-unidade" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Nossa Unidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">RPG</li>
              <li className="text-gray-400 text-sm">Pilates</li>
              <li className="text-gray-400 text-sm">Acupuntura</li>
              <li className="text-gray-400 text-sm">Reabilitação</li>
              <li className="text-gray-400 text-sm">Fisioterapia Esportiva</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">(11) 93243-3033</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">contato@institutogama.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Rua Pan-Americana, 58<br />
                  São Judas - São Paulo/SP
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Instituto Gama. Todos os direitos reservados.
            </p>
            <p className="text-gray-600 text-xs">
              Fisioterapia Especializada em São Paulo
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
