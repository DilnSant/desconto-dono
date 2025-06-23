import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart, Users, Lightbulb, Shield, Handshake, ArrowLeft, Star, Award, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gold-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo-final.png" alt="Desconto do Dono" width={200} height={45} className="h-12 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-500 transition-all duration-300 font-medium">
              Início
            </Link>
            <Link
              href="/#como-funciona"
              className="text-gray-700 hover:text-blue-500 transition-all duration-300 font-medium"
            >
              Como Funciona
            </Link>
            <Button
              variant="outline"
              className="bg-white text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold"
            >
              Entrar
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center text-gold-300 hover:text-gold-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao início
            </Link>

            <Badge className="bg-gold-500/20 text-gold-300 border-gold-400/30 mb-6 px-6 py-3 text-lg">
              <Heart className="w-5 h-5 mr-2" />
              Nossa História
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Sobre o <span className="text-gold-400">Desconto do Dono</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Conectando pessoas reais através de vídeos autênticos e descontos verdadeiros
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Nossos <span className="text-blue-500">Fundamentos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os pilares que guiam nossa missão de transformar a forma como pessoas e negócios se conectam
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-blue-50 via-white to-blue-50 group hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Missão</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Ser referência na apresentação personalizada e inovadora de serviços, conectando clientes e
                  empresários por meio de vídeos autênticos que geram confiança e afinidade.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-gold-50 via-white to-gold-50 group hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Visão</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Inspirar empresas locais a se tornarem mais visíveis e acessíveis ao público, através da vídeo
                  produção de baixo custo e alto impacto.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-blue-50 via-white to-blue-50 group hover:-translate-y-2">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Valores</h3>
                <div className="space-y-3">
                  <Badge variant="outline" className="bg-blue-100 text-blue-700 text-base px-4 py-2">
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Inovação
                  </Badge>
                  <Badge variant="outline" className="bg-gold-100 text-gold-700 text-base px-4 py-2">
                    <Shield className="w-4 h-4 mr-2" />
                    Confiabilidade
                  </Badge>
                  <Badge variant="outline" className="bg-blue-100 text-blue-700 text-base px-4 py-2">
                    <Users className="w-4 h-4 mr-2" />
                    Acessibilidade
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-700 mb-6 px-6 py-3 text-lg">
                <Star className="w-5 h-5 mr-2" />
                Nossa Jornada
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
                Como Tudo <span className="text-blue-500">Começou</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  O Desconto do Dono nasceu de uma observação simples: as pessoas querem conhecer quem está por trás dos
                  negócios que frequentam. Em um mundo cada vez mais digital, a conexão humana se tornou um diferencial
                  valioso.
                </p>
                <p>
                  Percebemos que os donos de negócios locais tinham histórias incríveis para contar, mas faltavam
                  ferramentas acessíveis para compartilhá-las. Ao mesmo tempo, consumidores buscavam autenticidade e
                  transparência nas suas escolhas de compra.
                </p>
                <p>
                  Assim surgiu nossa plataforma: um espaço onde a tecnologia serve para aproximar pessoas, não para
                  distanciá-las. Cada vídeo é uma ponte entre quem oferece e quem busca, criando relacionamentos
                  baseados na confiança mútua.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Equipe Desconto do Dono"
                  width={500}
                  height={400}
                  className="rounded-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-4 shadow-xl">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Números */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Nosso <span className="text-gold-600">Impacto</span>
            </h2>
            <p className="text-xl text-gray-600">Números que refletem nossa dedicação à comunidade</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">+300</div>
              <p className="text-gray-600 font-medium">Negócios Parceiros</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gold-600 mb-2">92%</div>
              <p className="text-gray-600 font-medium">Taxa de Satisfação</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">+1000</div>
              <p className="text-gray-600 font-medium">Vídeos Publicados</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gold-600 mb-2">+5000</div>
              <p className="text-gray-600 font-medium">Usuários Ativos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Faça Parte da Nossa <span className="text-gold-400">História</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Junte-se a milhares de pessoas que já descobriram uma nova forma de se conectar com negócios locais
          </p>
          <Link href="/">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-blue-900 px-12 py-6 text-xl rounded-2xl shadow-2xl font-bold"
            >
              Começar Agora
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <Image
                src="/logo-final.png"
                alt="Desconto do Dono"
                width={200}
                height={45}
                className="h-12 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-blue-200 leading-relaxed text-lg">
                Conectando consumidores a descontos reais através de vídeos autênticos.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-xl">Para Consumidores</h4>
              <ul className="space-y-3 text-blue-200">
                <li>
                  <Link href="/#como-funciona" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Como Funciona
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Baixar App
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Suporte
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-xl">Para Donos</h4>
              <ul className="space-y-3 text-blue-200">
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Cadastrar Negócio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Central do Dono
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Dicas de Vídeo
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-xl">Empresa</h4>
              <ul className="space-y-3 text-blue-200">
                <li>
                  <Link href="/sobre" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/termos" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="/privacidade" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Privacidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 pt-8 text-center">
            <p className="text-blue-300 text-lg">
              &copy; {new Date().getFullYear()} Desconto do Dono. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
