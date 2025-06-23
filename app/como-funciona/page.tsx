import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Search,
  Eye,
  Store,
  Play,
  Gift,
  MapPin,
  CheckCircle,
  Star,
  ArrowRight,
  Video,
  Target,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ComoFuncionaPage() {
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
            <Link href="/sobre" className="text-gray-700 hover:text-blue-500 transition-all duration-300 font-medium">
              Sobre Nós
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
              <Play className="w-5 h-5 mr-2" />
              Guia Completo
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Como <span className="text-gold-400">Funciona</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Nossa equipe filma vídeos de 30 segundos no seu estabelecimento, edita profissionalmente e publica na
              plataforma com todas as informações do seu negócio
            </p>
          </div>
        </div>
      </section>

      {/* Processo Passo a Passo */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              3 Passos <span className="text-blue-500">Simples</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vídeo produção de baixo custo e alto impacto para conectar você aos melhores negócios locais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <Search className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Descubra Negócios</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Explore empresas locais na sua cidade com ofertas exclusivas. Use filtros por categoria, localização
                  ou tipo de desconto.
                </p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Busque por categoria
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Filtre por localização
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Veja avaliações reais
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-gold-500 to-gold-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <Eye className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 border-t-4 border-gold-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Assista o Vídeo</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Veja o próprio dono do negócio explicando a oferta especial. Conexão direta e transparente.
                </p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Vídeos autênticos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Donos reais
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Ofertas verificadas
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <Store className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Aproveite o Desconto</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Apresente o vídeo na loja e ganhe seu desconto exclusivo. Simples assim!
                </p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Mostre o vídeo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Ganhe o desconto
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Avalie a experiência
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Por que é <span className="text-gold-600">Diferente</span>
            </h2>
            <p className="text-xl text-gray-600">Vantagens que você só encontra aqui</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Vídeos de 30 Segundos</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nossa equipe profissional filma, edita e publica vídeos no seu estabelecimento com endereço, site,
                  logo e WhatsApp.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Ofertas Exclusivas</h3>
                <p className="text-gray-600 leading-relaxed">
                  Descontos especiais que você não encontra em outros lugares.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Negócios Locais</h3>
                <p className="text-gray-600 leading-relaxed">
                  Apoie o comércio da sua cidade e descubra lugares incríveis.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Sem Pegadinhas</h3>
                <p className="text-gray-600 leading-relaxed">
                  Todas as ofertas são verificadas. Transparência total sempre.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Experiência Única</h3>
                <p className="text-gray-600 leading-relaxed">
                  Mais que desconto, é uma experiência de conexão com quem faz acontecer.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Segmentação Inteligente</h3>
                <p className="text-gray-600 leading-relaxed">
                  Direcionamos suas ofertas para o público-alvo específico, aumentando a eficácia das campanhas
                  promocionais.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Gratuito</h3>
                <p className="text-gray-600 leading-relaxed">
                  Use a plataforma gratuitamente. Sem taxas, sem mensalidades.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto para <span className="text-gold-400">Começar?</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Junte-se a milhares de pessoas que já descobriram uma nova forma de economizar
          </p>
          <Link href="/baixar-app">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-blue-900 px-12 py-6 text-xl rounded-2xl shadow-2xl font-bold group"
            >
              Baixar App Grátis
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
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
                  <Link href="/como-funciona" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Como Funciona
                  </Link>
                </li>
                <li>
                  <Link href="/baixar-app" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Baixar App
                  </Link>
                </li>
                <li>
                  <Link href="/suporte" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Suporte
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-xl">Para Donos</h4>
              <ul className="space-y-3 text-blue-200">
                <li>
                  <Link
                    href="/cadastrar-negocio"
                    className="hover:text-gold-400 transition-colors duration-300 text-lg"
                  >
                    Cadastrar Negócio
                  </Link>
                </li>
                <li>
                  <Link href="/central-do-dono" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Central do Dono
                  </Link>
                </li>
                <li>
                  <Link href="/dicas-de-video" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Dicas de Vídeo
                  </Link>
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
