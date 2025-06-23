import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Smartphone, Download, Star, Shield, Zap, Gift, QrCode } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BaixarAppPage() {
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
              href="/como-funciona"
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Link
                href="/"
                className="inline-flex items-center text-gold-300 hover:text-gold-400 transition-colors mb-8"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar ao início
              </Link>

              <Badge className="bg-gold-500/20 text-gold-300 border-gold-400/30 mb-6 px-6 py-3 text-lg">
                <Download className="w-5 h-5 mr-2" />
                App Gratuito
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Baixe o App <span className="text-gold-400">Desconto do Dono</span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
                Tenha acesso a descontos exclusivos na palma da sua mão. Disponível para iOS e Android.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg rounded-xl shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="App Store"
                    width={24}
                    height={24}
                    className="mr-3"
                  />
                  App Store
                </Button>
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-xl shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Google Play"
                    width={24}
                    height={24}
                    className="mr-3"
                  />
                  Google Play
                </Button>
              </div>

              <div className="flex items-center space-x-4 text-blue-100">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-400 fill-current" />
                  ))}
                </div>
                <span className="text-lg">4.8/5 - Mais de 10.000 downloads</span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
                <Image
                  src="/mobile-app-mockup.jpg"
                  alt="App Desconto do Dono"
                  width={300}
                  height={600}
                  className="rounded-2xl mx-auto shadow-xl object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-4 shadow-xl">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos do App */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Recursos do <span className="text-blue-500">App</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tudo que você precisa para encontrar os melhores descontos na sua cidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 via-white to-blue-50 group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Notificações Inteligentes</h3>
                <p className="text-gray-600 leading-relaxed">
                  Receba alertas de novas ofertas próximas a você. Nunca perca uma oportunidade!
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gold-50 via-white to-gold-50 group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Ofertas Exclusivas</h3>
                <p className="text-gray-600 leading-relaxed">
                  Acesso a descontos especiais disponíveis apenas no app. Economia garantida!
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 via-white to-blue-50 group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <QrCode className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">QR Code Integrado</h3>
                <p className="text-gray-600 leading-relaxed">
                  Apresente suas ofertas facilmente com QR codes. Processo rápido e sem complicações.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gold-50 via-white to-gold-50 group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Segurança Total</h3>
                <p className="text-gray-600 leading-relaxed">
                  Seus dados protegidos com criptografia de ponta. Privacidade garantida sempre.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 via-white to-blue-50 group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Sistema de Avaliações</h3>
                <p className="text-gray-600 leading-relaxed">
                  Avalie estabelecimentos e veja opiniões de outros usuários. Transparência total.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gold-50 via-white to-gold-50 group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Interface Intuitiva</h3>
                <p className="text-gray-600 leading-relaxed">
                  Design moderno e fácil de usar. Encontre o que precisa em poucos toques.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requisitos do Sistema */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Requisitos do <span className="text-gold-600">Sistema</span>
            </h2>
            <p className="text-xl text-gray-600">Compatível com a maioria dos dispositivos</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mr-4">
                    <Image src="/placeholder.svg?height=24&width=24" alt="iOS" width={24} height={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">iOS</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li>• iOS 12.0 ou superior</li>
                  <li>• iPhone 6s ou mais recente</li>
                  <li>• 50 MB de espaço livre</li>
                  <li>• Conexão com internet</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                    <Image src="/placeholder.svg?height=24&width=24" alt="Android" width={24} height={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Android</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li>• Android 6.0 ou superior</li>
                  <li>• 2 GB de RAM</li>
                  <li>• 50 MB de espaço livre</li>
                  <li>• Conexão com internet</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Comece a Economizar <span className="text-gold-400">Hoje!</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Baixe agora e tenha acesso imediato a centenas de ofertas exclusivas na sua cidade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white px-12 py-6 text-xl rounded-2xl shadow-2xl transition-all duration-300 flex items-center justify-center"
            >
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="App Store"
                width={32}
                height={32}
                className="mr-4"
              />
              Baixar na App Store
            </Button>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-xl rounded-2xl shadow-2xl transition-all duration-300 flex items-center justify-center"
            >
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Google Play"
                width={32}
                height={32}
                className="mr-4"
              />
              Baixar no Google Play
            </Button>
          </div>
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
