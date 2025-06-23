import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Store, Users, Video, CheckCircle, Star, Target, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CadastrarNegocioPage() {
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
              href="/central-do-dono"
              className="text-gray-700 hover:text-blue-500 transition-all duration-300 font-medium"
            >
              Central do Dono
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
                <Store className="w-5 h-5 mr-2" />
                Para Empresários
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Sua Empresa <span className="text-gold-400">Vista por Todos</span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
                Nossa equipe filma, edita e publica vídeos profissionais de 30 segundos no seu estabelecimento.
                <span className="text-gold-300 font-semibold">Visibilidade instantânea com custo acessível</span>.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg text-blue-100">Cadastro 100% gratuito</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg text-blue-100">Aumente sua visibilidade local</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg text-blue-100">Conecte-se diretamente com clientes</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
                <Image
                  src="/business-growth.jpg"
                  alt="Dono de negócio gravando vídeo"
                  width={600}
                  height={500}
                  className="rounded-2xl w-full shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-4 shadow-xl">
                  <Video className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Por que Escolher o <span className="text-blue-500">Desconto do Dono?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforme a forma como você se conecta com seus clientes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 via-white to-blue-50 group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Visibilidade Instantânea</h3>
                <p className="text-gray-600 leading-relaxed">
                  Alcance uma audiência ampla e diversificada em pouco tempo. Sua empresa ganha destaque imediato na
                  plataforma.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gold-50 via-white to-gold-50 group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Novos Clientes</h3>
                <p className="text-gray-600 leading-relaxed">
                  Alcance pessoas que ainda não conhecem seu negócio e transforme-as em clientes fiéis.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-50 via-white to-blue-50 group hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Marketing Autêntico</h3>
                <p className="text-gray-600 leading-relaxed">
                  Mostre sua personalidade e crie conexão real com seus clientes através de vídeos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Como Funciona para Donos */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Como <span className="text-gold-600">Funciona</span>
            </h2>
            <p className="text-xl text-gray-600">Processo simples em 4 passos</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Store className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Cadastre-se</h3>
              <p className="text-gray-600">Preencha o formulário com os dados do seu negócio</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Video className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Grave seu Vídeo</h3>
              <p className="text-gray-600">Crie um vídeo apresentando sua oferta especial</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-all duration-300">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Aprovação</h3>
              <p className="text-gray-600">Nossa equipe analisa e aprova seu conteúdo</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Receba Clientes</h3>
              <p className="text-gray-600">Sua oferta fica disponível e você recebe novos clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Cadastro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Cadastre seu <span className="text-blue-500">Negócio Agora</span>
              </h2>
              <p className="text-xl text-gray-600">
                Preencha o formulário e nossa equipe entrará em contato em até 24 horas
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome-dono" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome do Proprietário
                      </label>
                      <Input id="nome-dono" type="text" placeholder="Seu nome completo" className="w-full" />
                    </div>
                    <div>
                      <label htmlFor="nome-negocio" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome do Negócio
                      </label>
                      <Input id="nome-negocio" type="text" placeholder="Nome da sua empresa" className="w-full" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="seu@email.com" className="w-full" />
                    </div>
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone/WhatsApp
                      </label>
                      <Input id="telefone" type="tel" placeholder="(11) 99999-9999" className="w-full" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700 mb-2">
                        CNPJ (opcional)
                      </label>
                      <Input id="cnpj" type="text" placeholder="00.000.000/0001-00" className="w-full" />
                    </div>
                    <div>
                      <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-2">
                        Categoria do Negócio
                      </label>
                      <Input
                        id="categoria"
                        type="text"
                        placeholder="Ex: Restaurante, Loja de Roupas..."
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="endereco" className="block text-sm font-medium text-gray-700 mb-2">
                      Endereço Completo
                    </label>
                    <Input
                      id="endereco"
                      type="text"
                      placeholder="Rua, número, bairro, cidade, estado"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-2">
                      Descrição do Negócio
                    </label>
                    <Textarea
                      id="descricao"
                      placeholder="Conte um pouco sobre seu negócio, produtos/serviços oferecidos..."
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="oferta" className="block text-sm font-medium text-gray-700 mb-2">
                      Que tipo de oferta você gostaria de criar?
                    </label>
                    <Textarea
                      id="oferta"
                      placeholder="Ex: 20% de desconto em todos os produtos, 2º prato pela metade do preço..."
                      rows={3}
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 text-lg rounded-xl shadow-xl transition-all duration-300"
                  >
                    Cadastrar Meu Negócio
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              O que Dizem Nossos <span className="text-gold-600">Parceiros</span>
            </h2>
            <p className="text-xl text-gray-600">Histórias reais de sucesso</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                  "Em 3 meses na plataforma, meu restaurante teve um aumento de 60% no movimento. Os clientes chegam já
                  sabendo da promoção e saem satisfeitos. Recomendo para todos os donos de negócio!"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Maria Silva</p>
                    <p className="text-gray-600">Restaurante Sabor Caseiro</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                  "A plataforma me ajudou a mostrar o rosto por trás da minha loja. Os clientes agora me conhecem
                  pessoalmente e isso criou uma relação de confiança incrível. Vendas aumentaram 45%!"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white font-bold">J</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">João Santos</p>
                    <p className="text-gray-600">Loja de Roupas Fashion</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
