import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  User,
  Dumbbell,
  Stethoscope,
  Heart,
  Baby,
  ShipWheelIcon as Wheelchair,
  Trophy,
  Plus,
  Star,
  Clock,
  Award,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
// Remova a importação dinâmica direta do GoogleCalendarScheduler daqui
// import dynamic from "next/dynamic" // Não é mais necessário aqui

// Remova a importação do wrapper do Google Calendar
// - import { ContactSchedulerWrapper } from "@/components/contact-scheduler-wrapper"

export default function Home() {
  const services = [
    {
      icon: User,
      title: "RPG (Reeducação Postural Global)",
      description:
        "Método fisioterapêutico para identificar e corrigir desequilíbrios musculares, aliviando dores e melhorando a postura. Ideal para dores na coluna, hérnias de disco e má postura.",
    },
    {
      icon: Dumbbell,
      title: "Pilates",
      description:
        "Fortaleça seu corpo de forma integrada. O Pilates melhora a flexibilidade, o equilíbrio, a coordenação e a consciência corporal, sendo excelente para prevenção de lesões e reabilitação.",
    },
    {
      icon: Stethoscope,
      title: "Reabilitação Pós-Cirúrgica",
      description:
        "Programas personalizados para uma recuperação eficaz após cirurgias ortopédicas ou outras. Nosso foco é restaurar a função, mobilidade e força para que você retorne às suas atividades.",
    },
    {
      icon: Plus,
      title: "Acupuntura",
      description:
        "Técnica milenar da Medicina Tradicional Chinesa que utiliza agulhas finas para estimular pontos específicos do corpo, aliviando dores, estresse, ansiedade e promovendo o bem-estar geral.",
    },
    {
      icon: Heart,
      title: "Fisioterapia Respiratória",
      description:
        "Especialidade que atua na prevenção e tratamento de doenças que afetam o sistema respiratório, auxiliando na melhora da função pulmonar e qualidade de vida.",
    },
    {
      icon: Baby,
      title: "Fisioterapia Pediátrica",
      description:
        "Atendimento especializado para crianças, visando o desenvolvimento motor, a correção postural e a reabilitação de condições neurológicas ou ortopédicas infantis.",
    },
    {
      icon: Wheelchair,
      title: "Reabilitação Neurológica",
      description:
        "Foco na recuperação de pacientes com condições neurológicas (AVC, Parkinson, Esclerose Múltipla), buscando restaurar movimentos, equilíbrio e independência nas atividades diárias.",
    },
    {
      icon: Trophy,
      title: "Fisioterapia Esportiva",
      description:
        "Prevenção e tratamento de lesões em atletas, amadores ou profissionais. Recuperação rápida e segura para o retorno ao esporte, com foco em performance e prevenção de reincidências.",
    },
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Excelente profissional! Consegui me recuperar completamente da minha lesão no joelho.",
      rating: 5,
    },
    {
      name: "João Santos",
      text: "O tratamento de RPG mudou minha vida. Não sinto mais dores nas costas.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      text: "Atendimento humanizado e técnicas eficazes. Recomendo a todos!",
      rating: 5,
    },
  ]

  const benefits = [
    "Atendimento personalizado e humanizado",
    "Técnicas modernas e comprovadas",
    "Ambiente acolhedor e profissional",
    "Horários flexíveis",
    "Acompanhamento contínuo",
    "Resultados eficazes",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Fisio Alice Gama
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">
                Início
              </a>
              <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors">
                Serviços
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">
                Sobre
              </a>
            </nav>
            <Button className="md:hidden" variant="ghost" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge className="mb-4 bg-blue-50 text-blue-700 hover:bg-blue-50">Fisioterapia Especializada</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Bem-vindo(a) à{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                  Fisio Alice Gama
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Com paixão pela reabilitação e bem-estar, ofereço atendimento fisioterapêutico personalizado para você
                recuperar seu movimento e qualidade de vida. Minha missão é entender suas necessidades e criar um plano
                de tratamento eficaz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 hover:from-blue-600 hover:via-purple-600 hover:to-teal-600"
                  asChild
                >
                  <a href="https://wa.me/5511932433033?text=Olá,%20me%20interessei%20por%20seu%20trabalho!">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Agende sua Consulta
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://wa.me/5511932433033">
                    <Phone className="mr-2 h-5 w-5" />
                    (11) 93243-3033
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-300 via-teal-300 to-green-300 rounded-full opacity-30 absolute -top-4 -left-4 animate-pulse"></div>
                <Image
                  src="/images/alice-gama.png"
                  alt="Alice Gama - Fisioterapeuta"
                  width={300}
                  height={300}
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  className="rounded-full shadow-2xl relative z-10"
                  sizes="(max-width: 768px) 250px, 300px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Por que escolher a Fisio Alice Gama?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprometida com sua recuperação e bem-estar, oferecemos o melhor em fisioterapia
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-gray-50">
                <CheckCircle className="h-6 w-6 text-purple-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma ampla gama de serviços fisioterapêuticos especializados para atender suas necessidades
              específicas
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              let bgColorClass = "bg-blue-50"
              let textColorClass = "text-blue-500"

              if (index % 3 === 1) {
                bgColorClass = "bg-purple-50"
                textColorClass = "text-purple-500"
              } else if (index % 3 === 2) {
                bgColorClass = "bg-teal-50"
                textColorClass = "text-teal-500"
              }

              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 ${bgColorClass} rounded-lg mr-4`}>
                        <service.icon className={`h-6 w-6 ${textColorClass}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-50 text-blue-700 hover:bg-blue-50">Sobre a Profissional</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Alice Gama</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fisioterapeuta formada com mais de 10 anos de experiência, especializada em diversas técnicas de
                reabilitação. Minha paixão é ajudar pessoas a recuperarem sua qualidade de vida através de tratamentos
                personalizados e eficazes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-purple-500" />
                  <span className="text-gray-700">Formação em Fisioterapia - UNIFESP</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-purple-500" />
                  <span className="text-gray-700">Especialização em RPG</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-purple-500" />
                  <span className="text-gray-700">Certificação em Pilates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Mais de 10 anos de experiência</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/alice-gama.png"
                alt="Alice Gama - Fisioterapeuta Profissional"
                width={400}
                height={400}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                className="rounded-lg shadow-lg"
                sizes="(max-width: 768px) 300px, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">O que nossos pacientes dizem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Veja os depoimentos de quem já experimentou nossos tratamentos
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Pronta para começar sua jornada de recuperação? Entre em contato!
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-500 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Telefone/WhatsApp</h3>
                  <p className="text-blue-100">(11) 93243-3033</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-500 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">E-mail</h3>
                  <p className="text-blue-100">contato@fisioalicegama.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-500 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Endereço</h3>
                  <p className="text-blue-100">
                    Rua Pan-Americana, 58 - Metro
                    <br />
                    São Judas, São Paulo - SP
                    <br />
                    CEP: 04303-170
                  </p>
                </div>
              </div>
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://www.instagram.com/fisioalicegama"
                  className="flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://wa.me/5511932433033?text=Olá,%20me%20interessei%20por%20seu%20trabalho!"
                  className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
            {/* Mapa do Google Maps */}
            <div className="p-6 bg-white rounded-lg shadow-md h-full flex items-center justify-center">
              <iframe
                src="https://maps.google.com/maps?q=Rua%20Pan-Americana%2C%2058%20-%20S%C3%A3o%20Judas%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004303-170&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica Fisio Alice Gama"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Fisio Alice Gama</h3>
            <p className="text-gray-400 mb-4">Fisioterapia Especializada</p>
            <p className="text-gray-500 text-sm">&copy; 2025 Fisio Alice Gama. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
