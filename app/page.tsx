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
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimateOnScroll, StaggerContainer } from "@/components/animate-on-scroll"
import { GoogleReviews } from "@/components/google-reviews"

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
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <AnimateOnScroll animation="fade-up">
                <Badge className="mb-4 bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200">
                  Fisioterapia Especializada
                </Badge>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up" delay={100}>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 text-balance">
                  Bem-vindo(a) ao{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                    Instituto Gama
                  </span>
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up" delay={200}>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Com paixão pela reabilitação e bem-estar, oferecemos atendimento fisioterapêutico personalizado para
                  você recuperar seu movimento e qualidade de vida.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up" delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 hover:from-blue-600 hover:via-purple-600 hover:to-teal-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                    asChild
                  >
                    <a href="https://wa.me/5511932433033?text=Olá,%20me%20interessei%20por%20seu%20trabalho!">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Agende sua Consulta
                    </a>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 hover:bg-gray-50 transition-all duration-300" 
                    asChild
                  >
                    <a href="https://wa.me/5511932433033">
                      <Phone className="mr-2 h-5 w-5" />
                      (11) 93243-3033
                    </a>
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll animation="fade-left" delay={200} className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-300 via-teal-300 to-green-300 rounded-full opacity-30 absolute -top-4 -left-4 animate-pulse"></div>
                <Image
                  src="/images/logo-instituto-gama.avif"
                  alt="Instituto Gama - Logo"
                  width={400}
                  height={300}
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  className="rounded-2xl shadow-2xl relative z-10 hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 300px, 400px"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">
                Por que escolher o Instituto Gama?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprometida com sua recuperação e bem-estar, oferecemos o melhor em fisioterapia
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <div className="flex items-center space-x-3 p-5 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-300">
                  <CheckCircle className="h-6 w-6 text-purple-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200">
                Especialidades
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">Nossos Serviços</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Oferecemos uma ampla gama de serviços fisioterapêuticos especializados para atender suas necessidades
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const colors = [
                { bg: "bg-blue-50", text: "text-blue-500", hover: "hover:border-blue-200" },
                { bg: "bg-purple-50", text: "text-purple-500", hover: "hover:border-purple-200" },
                { bg: "bg-teal-50", text: "text-teal-500", hover: "hover:border-teal-200" },
              ]
              const color = colors[index % 3]

              return (
                <AnimateOnScroll key={index} animation="fade-up" delay={index * 50}>
                  <Card className={`group h-full hover:shadow-xl transition-all duration-300 border-2 border-transparent ${color.hover} bg-white`}>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 ${color.bg} rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <service.icon className={`h-6 w-6 ${color.text}`} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 leading-tight">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* About CTA Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <AnimateOnScroll animation="fade-right" className="flex-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 via-purple-100 to-teal-100 rounded-3xl opacity-50 blur-xl" />
                <Image
                  src="/images/alice-gama-photo.png"
                  alt="Alice Gama - Fisioterapeuta"
                  width={400}
                  height={400}
                  className="relative rounded-2xl shadow-xl"
                  sizes="(max-width: 768px) 300px, 400px"
                />
              </div>
            </AnimateOnScroll>
            <div className="flex-1">
              <AnimateOnScroll animation="fade-left">
                <Badge className="mb-4 bg-teal-50 text-teal-700 hover:bg-teal-100 border border-teal-200">
                  Sobre Nós
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">
                  Conheça Nossa História
                </h2>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Descubra como o Instituto Gama se tornou referência em fisioterapia especializada em São Paulo,
                  unindo técnicas modernas com atendimento humanizado.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    Mais de 10 anos de experiência
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    Centenas de pacientes atendidos
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    Especialista em RPG e Pilates
                  </li>
                </ul>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 hover:from-blue-600 hover:via-purple-600 hover:to-teal-600 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  asChild
                >
                  <Link href="/quem-somos">
                    Saiba Mais Sobre Nós
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-yellow-50 text-yellow-700 hover:bg-yellow-100 border border-yellow-200">
                Depoimentos
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">
                O que nossos pacientes dizem
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Veja os depoimentos de quem já experimentou nossos tratamentos
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 150}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">&quot;{testimonial.text}&quot;</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <p className="ml-3 font-semibold text-gray-900">{testimonial.name}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full" />
          <div className="absolute bottom-20 right-20 w-60 h-60 border-2 border-white rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 border-2 border-white rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 border-white/30">
                Fale Conosco
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Entre em Contato</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Pronta para começar sua jornada de recuperação? Entre em contato!
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimateOnScroll animation="fade-right">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-colors">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefone/WhatsApp</h3>
                    <p className="text-white/80">(11) 93243-3033</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-colors">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">E-mail</h3>
                    <p className="text-white/80">contato@institutogama.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-colors">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Endereço</h3>
                    <p className="text-white/80">
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
                    href="https://www.instagram.com/saudeinstitutogama"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-white/10 hover:bg-pink-500 px-5 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://wa.me/5511932433033?text=Olá,%20me%20interessei%20por%20seu%20trabalho!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-white/10 hover:bg-green-500 px-5 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
            {/* Mapa do Google Maps */}
            <AnimateOnScroll animation="fade-left">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=Rua%20Pan-Americana%2C%2058%20-%20S%C3%A3o%20Judas%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004303-170&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Instituto Gama"
                  className="w-full"
                ></iframe>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
