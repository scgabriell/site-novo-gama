import { Clock, Users, Heart, Target, CheckCircle, Award, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export default function QuemSomos() {
  const values = [
    {
      icon: Heart,
      title: "Humanização",
      description: "Tratamos cada paciente com carinho, respeito e atenção individualizada.",
      color: "bg-rose-50 text-rose-500",
    },
    {
      icon: Target,
      title: "Excelência",
      description: "Buscamos sempre os melhores resultados através de técnicas modernas e comprovadas.",
      color: "bg-blue-50 text-blue-500",
    },
    {
      icon: Users,
      title: "Compromisso",
      description: "Estamos comprometidos com sua recuperação e bem-estar em cada etapa do tratamento.",
      color: "bg-purple-50 text-purple-500",
    },
  ]

  const qualifications = [
    "Formação em Fisioterapia - UNIFESP",
    "Especialização em RPG",
    "Certificação em Pilates",
    "Curso de Acupuntura",
  ]

  const stats = [
    { value: "10+", label: "Anos de experiência" },
    { value: "500+", label: "Pacientes atendidos" },
    { value: "8", label: "Especialidades" },
    { value: "98%", label: "Satisfação" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <AnimateOnScroll animation="fade-up">
              <Badge className="mb-4 bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200">
                Conheça Nossa História
              </Badge>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={100}>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 text-balance">
                Quem{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                  Somos
                </span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={200}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                O Instituto Gama nasceu da paixão pela fisioterapia e do compromisso em oferecer tratamentos de
                excelência, sempre priorizando o bem-estar e a recuperação completa de nossos pacientes.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="fade-right">
              <div>
                <Badge className="mb-4 bg-teal-50 text-teal-700 hover:bg-teal-100 border border-teal-200">
                  Nossa Trajetória
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-balance">Nossa História</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  O Instituto Gama foi fundado com o objetivo de revolucionar o atendimento fisioterapêutico, combinando
                  técnicas tradicionais comprovadas com as mais modernas abordagens de reabilitação.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Desde o início, nossa missão tem sido clara: proporcionar um atendimento humanizado, personalizado e
                  eficaz, onde cada paciente é tratado de forma única, respeitando suas necessidades específicas e
                  objetivos de recuperação.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Mais de 10 anos de experiência</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Centenas de pacientes atendidos</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                    <div className="p-2 bg-teal-100 rounded-lg">
                      <Award className="h-5 w-5 text-teal-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Múltiplas especializações</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 via-purple-100 to-teal-100 rounded-3xl opacity-50 blur-xl" />
                <Image
                  src="/images/logo-instituto-gama.avif"
                  alt="Instituto Gama - Nossa História"
                  width={400}
                  height={320}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  className="relative rounded-2xl shadow-2xl"
                  sizes="(max-width: 768px) 300px, 400px"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200">
                Princípios
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">Nossos Valores</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Os princípios que norteiam nosso trabalho e definem nossa identidade
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 150}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className={`p-4 ${value.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200">
                Equipe
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">Nossa Equipe</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Profissionais qualificados e dedicados ao seu bem-estar
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={200}>
            <Card className="max-w-4xl mx-auto border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  {/* Image side */}
                  <div className="relative h-64 lg:h-auto bg-gradient-to-br from-blue-100 via-purple-100 to-teal-100 flex items-center justify-center p-8">
                    <Image
                      src="/images/alice-gama-photo.png"
                      alt="Alice Gama - Fisioterapeuta Responsável"
                      width={280}
                      height={280}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      className="rounded-full shadow-xl border-4 border-white"
                      sizes="(max-width: 768px) 200px, 280px"
                    />
                  </div>
                  {/* Content side */}
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-5 w-5 text-yellow-500" />
                      <span className="text-sm text-gray-500 font-medium">Fundadora</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Alice Gama</h3>
                    <Badge className="mb-6 bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200">
                      Fisioterapeuta Responsável
                    </Badge>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Fisioterapeuta formada com mais de 10 anos de experiência, especializada em diversas técnicas de
                      reabilitação. Apaixonada por transformar vidas através da fisioterapia.
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Award className="h-5 w-5 text-blue-500" />
                        Qualificações
                      </h4>
                      <div className="space-y-3">
                        {qualifications.map((qualification, qIndex) => (
                          <div key={qIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{qualification}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimateOnScroll>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Pronto para começar sua jornada de recuperação?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar você a recuperar sua qualidade de vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300" 
                asChild
              >
                <Link href="/#contato">Entre em Contato</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent transition-all duration-300"
                asChild
              >
                <Link href="/#servicos">Conheça Nossos Serviços</Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  )
}
