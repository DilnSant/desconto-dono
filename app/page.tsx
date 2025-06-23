import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  Gift,
  MapPin,
  Users,
  Video,
  ShoppingBag,
  Search,
  Eye,
  Store,
  TrendingUp,
  Trophy,
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
  Heart,
  Shield,
  BarChart3,
  Sparkles,
} from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gold-100">
        
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-gold-400/5 to-transparent rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 text-white">
              <div className="space-y-6">
                <Badge className="bg-gold-500/20 text-gold-300 border-gold-400/30 hover:bg-gold-500/30 transition-all duration-300 text-sm px-4 py-2">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Vídeos reais, descontos reais
                </Badge>

                <h1 className="text-5xl md:text-7xl leading-tight font-semibold">
                  Vídeos de 30 segundos que{" "}
                  <span className="text-gold-400 relative">
                    Transformam
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"></div>
                  </span>
                  <br />
                  Sua Empresa em{" "}
                  <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                    Destaque
                  </span>
                </h1>

                <p className="text-5xl md:text-7xl leading-tight font-semibold">
                  Nossa equipe filma, edita e publica vídeos profissionais da sua empresa na plataforma.{" "}
                  <span className="text-gold-300 font-semibold">Visibilidade instantânea com custo acessível</span>.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center group-hover:bg-gold-500/30 transition-all duration-300">
                    <Play className="w-6 h-6 text-gold-400" />
                  </div>
                  <span className="text-lg text-blue-100">Veja vídeos reais de quem faz o negócio acontecer</span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center group-hover:bg-gold-500/30 transition-all duration-300">
                    <Gift className="w-6 h-6 text-gold-400" />
                  </div>
                  <span className="text-lg text-blue-100">
                    Ganhe descontos autênticos, experiências únicas e acesso antecipado
                  </span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center group-hover:bg-gold-500/30 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-gold-400" />
                  </div>
                  <span className="text-lg text-blue-100">Apoie o comércio local e descubra ofertas exclusivas</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-blue-900 px-10 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-gold-500/25 transition-all duration-300 font-bold group"
                >
                  Entrar Agora
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-2 border-white/30 hover:bg-white hover:text-blue-900 px-10 py-6 text-xl rounded-2xl backdrop-blur-sm transition-all duration-300 font-bold"
                >
                  Assine Gratuitamente
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                {/* Floating Elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gold-400/20 rounded-2xl rotate-12 animate-bounce delay-300"></div>
                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gold-400/15 rounded-full animate-pulse delay-700"></div>

                <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 border border-white/20">
                  <Image
                    src="/video-production.jpg"
                    alt="Dono de negócio gravando vídeo"
                    width={600}
                    height={500}
                    className="rounded-2xl w-full shadow-xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-4 shadow-xl">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-xl">
                    <Zap className="w-6 h-6 text-gold-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Valor */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-blue-100 text-blue-700 mb-6 px-6 py-3 text-lg">
              <Heart className="w-5 h-5 mr-2" />
              Por que somos diferentes
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Não é só mais um cupom.
              <br />É uma{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                conexão real
              </span>
              .
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Inovação, confiabilidade e acessibilidade em cada vídeo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-blue-50 via-white to-blue-50 group hover:-translate-y-2">
              <CardContent className="p-10 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Vídeos Profissionais de 30s</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Nossa equipe filma no seu estabelecimento, edita profissionalmente e publica na plataforma com
                  endereço, site, logo e WhatsApp.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-gold-50 via-white to-gold-50 group hover:-translate-y-2">
              <CardContent className="p-10 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 to-gold-600"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Visibilidade Instantânea</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Alcance uma audiência ampla e diversificada em pouco tempo. Marketing com custo acessível para
                  empresas de todos os tamanhos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-blue-50 via-white to-blue-50 group hover:-translate-y-2">
              <CardContent className="p-10 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Análise de Dados</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Insights valiosos sobre comportamento do cliente e performance das promoções para ajustar suas
                  estratégias.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section
        id="como-funciona"
        className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-gold-100 text-gold-700 mb-6 px-6 py-3 text-lg">
              <Zap className="w-5 h-5 mr-2" />
              Processo simples
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Simples, Direto e{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Sem Burocracia
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">Vídeo produção de baixo custo e alto impacto</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <Search className="w-14 h-14 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Descubra negócios incríveis</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Explore empresas locais na sua cidade com ofertas exclusivas.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-28 h-28 bg-gradient-to-br from-gold-500 to-gold-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <Eye className="w-14 h-14 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 border-t-4 border-gold-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Veja o vídeo do dono</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Assista o próprio dono explicando a oferta especial para você.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <Store className="w-14 h-14 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Mostre na loja e ganhe</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Apresente o vídeo na loja e aproveite seu desconto exclusivo.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-gold-200">
              <p className="text-2xl md:text-3xl text-gray-700 italic max-w-4xl mx-auto leading-relaxed font-medium">
                "É como se o dono te chamasse pelo nome e abrisse a porta com um{" "}
                <span className="text-gold-600 font-bold">presente na mão</span>."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Card className="border-0 shadow-3xl bg-gradient-to-br from-gold-50 via-white to-gold-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold-500 to-gold-600"></div>
                <CardContent className="p-12">
                  <div className="flex items-center mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-7 h-7 text-gold-400 fill-current mr-1" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed font-medium">
                    "Nunca pensei que ia conhecer tantos negócios incríveis na minha cidade! Os donos são super
                    simpáticos e os descontos são reais mesmo. Virei cliente fiel de pelo menos 5 lugares."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mr-6 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">R</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-lg">Rafaela Santos</p>
                      <p className="text-gray-600">Usuária há 8 meses</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-12">
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <TrendingUp className="w-12 h-12 text-white" />
                </div>
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
                  +92%
                </div>
                <p className="text-xl text-gray-700 font-medium">dos usuários voltam a comprar no mesmo lugar</p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-gold-500 to-gold-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <Trophy className="w-12 h-12 text-white" />
                </div>
                <div className="text-6xl font-bold bg-gradient-to-r from-gold-600 to-gold-800 bg-clip-text text-transparent mb-4">
                  +300
                </div>
                <p className="text-xl text-gray-700 font-medium">negócios locais já participando</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segmentos Atendidos */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="bg-blue-100 text-blue-700 mb-6 px-6 py-3 text-lg">
              <Store className="w-5 h-5 mr-2" />
              Clube de Descontos
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Atendemos Todos os{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Segmentos
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">Desconto do Dono é um clube de descontos completo</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-pink-50 via-white to-pink-50 group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Beleza</h3>
                <p className="text-gray-600 leading-relaxed">Depilação, Estética, Massagem, Salões de Beleza</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 via-white to-blue-50 group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ShoppingBag className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Comércios</h3>
                <p className="text-gray-600 leading-relaxed">Calçados, Construção, Móveis e Eletros, Vestuário</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-orange-50 via-white to-orange-50 group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Gastronomia</h3>
                <p className="text-gray-600 leading-relaxed">Bares, Lanchonetes, Padarias, Pizzarias, Restaurantes</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-purple-50 via-white to-purple-50 group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Hotelaria</h3>
                <p className="text-gray-600 leading-relaxed">Camping, Hotéis, Motéis, Pousadas</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-green-50 via-white to-green-50 group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Lazer</h3>
                <p className="text-gray-600 leading-relaxed">Academias, Clubes, Esportes, Lan House</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-red-50 via-white to-red-50 group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Saúde</h3>
                <p className="text-gray-600 leading-relaxed">Clínicas, Dentistas, Farmácias, Médicos, Óticas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção para Donos */}
      <section
        id="para-donos"
        className="py-24 md:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent"></div>
          </div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-gold-500/20 text-gold-300 border-gold-400/30 mb-8 px-6 py-3 text-lg">
                <Sparkles className="w-5 h-5 mr-2" />
                Para Empresários
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Você sabia que a visibilidade pode ser{" "}
                <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                  a diferença entre o sucesso e o fracasso?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
                Mas quem tem dinheiro sobrando para publicidade cara? É aí que entra o Desconto do Dono!{" "}
                <span className="text-gold-300 font-semibold">
                  Filmamos, editamos e publicamos vídeos profissionais da sua empresa
                </span>{" "}
                sem estourar o orçamento.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-blue-900 px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-gold-500/25 transition-all duration-300 font-bold group"
              >
                Sou Dono e Quero Participar
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
                <Image
                  src="/restaurant-owner.jpg"
                  alt="Dono de negócio feliz"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-4 shadow-xl">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="bg-green-100 text-green-700 mb-6 px-6 py-3 text-lg">
              <Shield className="w-5 h-5 mr-2" />
              Garantias
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Nossa{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Garantia</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">Confiabilidade em cada interação</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-green-50 via-white to-green-50 group hover:-translate-y-2">
              <CardContent className="p-10 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Descontos reais, verificados</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Todas as ofertas são validadas pela nossa equipe antes de ir ao ar.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-blue-50 via-white to-blue-50 group hover:-translate-y-2">
              <CardContent className="p-10 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Suporte dedicado</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Atendimento especializado para clientes e donos de negócio.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-gold-50 via-white to-gold-50 group hover:-translate-y-2">
              <CardContent className="p-10 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 to-gold-600"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Zero pegadinhas</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Transparência total. Sempre com clareza e honestidade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-24 md:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-400/10 to-transparent"></div>
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-gold-400/10 to-transparent rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="bg-gold-500/20 text-gold-300 border-gold-400/30 mb-8 px-6 py-3 text-lg">
            <Sparkles className="w-5 h-5 mr-2" />
            Última chamada
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Você merece mais que um cupom.{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              Merece um convite direto do dono.
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-blue-100">
            Junte-se à comunidade "Desconto do Dono" agora. Vagas limitadas nas ofertas mais cobiçadas.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-blue-900 px-16 py-8 text-2xl rounded-3xl shadow-2xl hover:shadow-gold-500/25 transition-all duration-300 font-bold group"
          >
            Comece Agora – É Grátis
            <ArrowRight className="w-8 h-8 ml-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-blue-800"></div>
        <div className="container mx-auto px-4 relative z-10">
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
                  <a href="#" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Como Funciona
                  </a>
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
                  <a href="/sobre" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="/termos" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="/privacidade" className="hover:text-gold-400 transition-colors duration-300 text-lg">
                    Privacidade
                  </a>
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
