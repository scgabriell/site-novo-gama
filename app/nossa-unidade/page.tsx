import { MapPin, Clock, Users, Shield, Heart, Star, Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export default function NossaUnidade() {
  const facilities = [
    {
      title: "Área de Tratamento Principal",
      description: "Espaço amplo e bem equipado para diversos tipos de tratamento fisioterapêutico.",
      image: "/images/instituto-1.avif",
    },
    {
      title: "Recepção Acolhedora",
      description: "Ambiente confortável e moderno para receber nossos pacientes com carinho.",
      image: "/images/instituto-2.avif",
    },
    {
      title: "Sala de Fisioterapia Especializada",
      description: "Equipamentos modernos e ambiente profissional para tratamentos específicos.",
      image: "/images/instituto-3.avif",
    },
    {
      title: "Consultório Completo",
      description: "Sala de atendimento individual com todos os recursos necessários.",
      image: "/images/instituto-4.avif",
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "Ambiente Seguro",
      description: "Protocolos rigorosos de higiene e segurança",
      color: "bg-blue-50 text-blue-500",
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Cuidado personalizado em cada consulta",
      color: "bg-rose-50 text-rose-500",
    },
    {
      icon: Users,
      title: "Equipe Qualificada",
      description: "Profissionais experientes e dedicados",
      color: "bg-purple-50 text-purple-500",
    },
    {
      icon: Star,
      title: "Excelência em Resultados",
      description: "Tratamentos eficazes e comprovados",
      color: "bg-teal-50 text-teal-500",
    },
  ]

  const schedule = [
    { day: "Segunda a Sexta", hours: "8h às 18h" },
    { day: "Sábado", hours: "8h às 12h" },
    { day: "Domingo", hours: "Fechado" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <AnimateOnScroll animation="fade-up">
              <Badge className="mb-4 bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200">
                Conheça Nossas Instalações
              </Badge>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={100}>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 text-balance">
                Nossa{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                  Unidade
                </span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={200}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Conheça o ambiente onde cuidamos da sua saúde e bem-estar. Nossas instalações foram pensadas para
                proporcionar o máximo conforto e eficácia em seus tratamentos.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Galeria de Fotos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200">
                Galeria
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">Nossas Instalações</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ambientes projetados para oferecer o melhor em conforto, segurança e eficácia nos tratamentos.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Grid de Imagens */}
          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-0">
                  <div className="relative h-72 md:h-80 overflow-hidden">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-bold text-xl mb-2">{facility.title}</h3>
                      <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-teal-50 text-teal-700 hover:bg-teal-100 border border-teal-200">
                Por que nos escolher
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">Nossos Diferenciais</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                O que torna nossa unidade especial e única para seu tratamento
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className={`p-4 ${feature.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimateOnScroll animation="fade-right">
              <div>
                <Badge className="mb-4 bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200">
                  Como Chegar
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-balance">Localização Privilegiada</h2>
                
                {/* Address Card */}
                <Card className="mb-6 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-50 rounded-xl">
                        <MapPin className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Endereço Completo</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Rua Pan-Americana, 58 - Metro
                          <br />
                          São Judas, São Paulo - SP
                          <br />
                          CEP: 04303-170
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Schedule Card */}
                <Card className="mb-6 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-purple-50 rounded-xl">
                        <Clock className="h-6 w-6 text-purple-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-4">Horário de Funcionamento</h3>
                        <div className="space-y-2">
                          {schedule.map((item, index) => (
                            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                              <span className="text-gray-600">{item.day}</span>
                              <span className={`font-medium ${item.hours === "Fechado" ? "text-red-500" : "text-gray-900"}`}>
                                {item.hours}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Card */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-green-50 rounded-xl">
                        <Phone className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Agende sua Visita</h3>
                        <p className="text-gray-600 mb-4">(11) 93243-3033</p>
                        <Button 
                          asChild 
                          className="bg-green-500 hover:bg-green-600 shadow-md hover:shadow-lg transition-all"
                        >
                          <a href="https://wa.me/5511932433033?text=Gostaria%20de%20agendar%20uma%20visita%20ao%20Instituto%20Gama">
                            <Calendar className="mr-2 h-4 w-4" />
                            Agendar via WhatsApp
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimateOnScroll>

            {/* Map */}
            <AnimateOnScroll animation="fade-left">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden sticky top-24">
                <iframe
                  src="https://maps.google.com/maps?q=Rua%20Pan-Americana%2C%2058%20-%20S%C3%A3o%20Judas%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004303-170&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="500"
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full" />
          <div className="absolute bottom-20 right-20 w-60 h-60 border-2 border-white rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Venha Conhecer Nossa Unidade</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Agende uma visita e conheça pessoalmente nossas instalações e nossa equipe especializada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300" 
                asChild
              >
                <Link href="/#contato">Agendar Consulta</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent transition-all duration-300"
                asChild
              >
                <a href="https://wa.me/5511932433033?text=Gostaria%20de%20agendar%20uma%20visita%20ao%20Instituto%20Gama">
                  Agendar Visita
                </a>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  )
}
