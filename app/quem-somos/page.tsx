import { Clock, Users, Heart, Target, CheckCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function QuemSomos() {
  const values = [
    {
      icon: Heart,
      title: "Humanização",
      description: "Tratamos cada paciente com carinho, respeito e atenção individualizada.",
    },
    {
      icon: Target,
      title: "Excelência",
      description: "Buscamos sempre os melhores resultados através de técnicas modernas e comprovadas.",
    },
    {
      icon: Users,
      title: "Compromisso",
      description: "Estamos comprometidos com sua recuperação e bem-estar em cada etapa do tratamento.",
    },
  ]

  const team = [
    {
      name: "Alice Gama",
      role: "Fisioterapeuta Responsável",
      description:
        "Fisioterapeuta formada com mais de 10 anos de experiência, especializada em diversas técnicas de reabilitação.",
      qualifications: [
        "Formação em Fisioterapia - UNIFESP",
        "Especialização em RPG",
        "Certificação em Pilates",
        "Curso de Acupuntura",
      ],
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
              <Link href="/quem-somos" className="text-blue-600 font-semibold">
                Quem Somos
              </Link>
              <Link href="/nossa-unidade" className="text-gray-700 hover:text-blue-600 transition-colors">
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
            <span className="text-blue-600 font-semibold">Quem Somos</span>
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
            <Badge className="mb-4 bg-blue-50 text-blue-700 hover:bg-blue-50">Conheça Nossa História</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Quem{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Somos
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              O Instituto Gama nasceu da paixão pela fisioterapia e do compromisso em oferecer tratamentos de
              excelência, sempre priorizando o bem-estar e a recuperação completa de nossos pacientes.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                O Instituto Gama foi fundado com o objetivo de revolucionar o atendimento fisioterapêutico, combinando
                técnicas tradicionais comprovadas com as mais modernas abordagens de reabilitação.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Desde o início, nossa missão tem sido clara: proporcionar um atendimento humanizado, personalizado e
                eficaz, onde cada paciente é tratado de forma única, respeitando suas necessidades específicas e
                objetivos de recuperação.
              </p>
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700 font-semibold">Mais de 10 anos de experiência</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-purple-500" />
                <span className="text-gray-700 font-semibold">Centenas de pacientes atendidos</span>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/logo-instituto-gama.avif"
                alt="Instituto Gama - Nossa História"
                width={400}
                height={320}
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

      {/* Nossos Valores */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Valores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Os princípios que norteiam nosso trabalho e definem nossa identidade
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-blue-50 rounded-full">
                      <value.icon className="h-8 w-8 text-blue-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Equipe</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Profissionais qualificados e dedicados ao seu bem-estar</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <Badge className="mb-4 bg-purple-50 text-purple-700 hover:bg-purple-50">{member.role}</Badge>
                      <p className="text-gray-600 mb-6 leading-relaxed">{member.description}</p>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 mb-3">Qualificações:</h4>
                        {member.qualifications.map((qualification, qIndex) => (
                          <div key={qIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{qualification}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <Image
                        src="/images/alice-gama-photo.png"
                        alt={`${member.name} - ${member.role}`}
                        width={300}
                        height={300}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        className="rounded-full shadow-lg border-4 border-white"
                        sizes="(max-width: 768px) 250px, 300px"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para começar sua jornada de recuperação?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar você a recuperar sua qualidade de vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/#contato">Entre em Contato</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/#servicos">Conheça Nossos Serviços</Link>
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
