import { ArrowLeft, MapPin, Clock, Users, Shield, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function NossaUnidade() {
  const facilities = [
    {
      title: "Ambiente Acolhedor",
      description: "Espaços pensados para proporcionar conforto e tranquilidade durante seu tratamento.",
      image: "/images/instituto-1.avif",
    },
    {
      title: "Equipamentos Modernos",
      description: "Tecnologia de ponta para garantir os melhores resultados em sua reabilitação.",
      image: "/images/instituto-2.avif",
    },
    {
      title: "Salas Especializadas",
      description: "Ambientes dedicados para cada tipo de tratamento, com total privacidade.",
      image: "/images/instituto-3.avif",
    },
    {
      title: "Estrutura Completa",
      description: "Instalações amplas e bem equipadas para atender todas as suas necessidades.",
      image: "/images/instituto-4.avif",
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "Ambiente Seguro",
      description: "Protocolos rigorosos de higiene e segurança",
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Cuidado personalizado em cada consulta",
    },
    {
      icon: Users,
      title: "Equipe Qualificada",
      description: "Profissionais experientes e dedicados",
    },
    {
      icon: Star,
      title: "Excelência em Resultados",
      description: "Tratamentos eficazes e comprovados",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent cursor-pointer">
                Instituto Gama
              </h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Início
              </Link>
              <Link href="/#servicos" className="text-gray-700 hover:text-blue-600 transition-colors">
                Serviços
              </Link>
              <Link href="/quem-somos" className="text-gray-700 hover:text-blue-600 transition-colors">
                Quem Somos
              </Link>
              <Link href="/nossa-unidade" className="text-blue-600 font-semibold">
                Nossa Unidade
              </Link>
              <Link href="/#contato" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contato
              </Link>
            </nav>
            <Button className="md:hidden" variant="ghost" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Início
            </Link>
            <span>/</span>
            <span className="text-blue-600 font-semibold">Nossa Unidade</span>
          </div>
          <div className="flex items-center mt-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao Início
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-50 text-blue-700 hover:bg-blue-50">Conheça Nossas Instalações</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nossa{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Unidade
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conheça o ambiente onde cuidamos da sua saúde e bem-estar. Nossas instalações foram pensadas para
              proporcionar o máximo conforto e eficácia em seus tratamentos.
            </p>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Localização Privilegiada</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Endereço Completo</h3>
                    <p className="text-gray-600">
                      Rua Pan-Americana, 58 - Metro
                      <br />
                      São Judas, São Paulo - SP
                      <br />
                      CEP: 04303-170
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <Clock className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Horário de Funcionamento</h3>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8h às 18h
                      <br />
                      Sábado: 8h às 12h
                      <br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Rua%20Pan-Americana%2C%2058%20-%20S%C3%A3o%20Judas%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004303-170&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Instituto Gama"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Fotos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossas Instalações</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ambientes projetados para oferecer o melhor em conforto, segurança e eficácia nos tratamentos
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative h-64 md:h-80">
                  <Image
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Diferenciais</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              O que torna nossa unidade especial e única para seu tratamento
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-blue-50 rounded-full">
                      <feature.icon className="h-8 w-8 text-blue-500" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Venha Conhecer Nossa Unidade</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Agende uma visita e conheça pessoalmente nossas instalações e nossa equipe especializada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/#contato">Agendar Consulta</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <a href="https://wa.me/5511932433033?text=Gostaria%20de%20agendar%20uma%20visita%20ao%20Instituto%20Gama">
                Agendar Visita
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Instituto Gama</h3>
            <p className="text-gray-400 mb-4">Fisioterapia Especializada</p>
            <p className="text-gray-500 text-sm">&copy; 2025 Instituto Gama. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
