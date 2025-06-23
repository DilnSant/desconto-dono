import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, FileText, Shield, AlertTriangle, Users, Gavel } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TermosPage() {
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center text-gold-300 hover:text-gold-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao início
            </Link>

            <Badge className="bg-gold-500/20 text-gold-300 border-gold-400/30 mb-6 px-6 py-3 text-lg">
              <FileText className="w-5 h-5 mr-2" />
              Documentos Legais
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Termos de <span className="text-gold-400">Uso</span>
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo dos Termos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introdução */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-600">
                  <Shield className="w-6 h-6 mr-3" />
                  1. Introdução
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Bem-vindo ao Desconto do Dono! Estes Termos de Uso ("Termos") regem o uso de nossa plataforma,
                  aplicativo móvel e serviços relacionados (coletivamente, o "Serviço") operados pela Desconto do Dono
                  Ltda. ("nós", "nosso" ou "Empresa").
                </p>
                <p>
                  Ao acessar ou usar nosso Serviço, você concorda em ficar vinculado a estes Termos. Se você discordar
                  de qualquer parte destes termos, então você não poderá acessar o Serviço.
                </p>
              </CardContent>
            </Card>

            {/* Definições */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-600">
                  <FileText className="w-6 h-6 mr-3" />
                  2. Definições
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <ul className="space-y-3">
                  <li>
                    <strong>"Usuário":</strong> Qualquer pessoa que acesse ou use nosso Serviço.
                  </li>
                  <li>
                    <strong>"Dono":</strong> Proprietário ou representante autorizado de um estabelecimento comercial.
                  </li>
                  <li>
                    <strong>"Consumidor":</strong> Usuário que busca descontos e ofertas na plataforma.
                  </li>
                  <li>
                    <strong>"Conteúdo":</strong> Vídeos, textos, imagens e outras informações compartilhadas na
                    plataforma.
                  </li>
                  <li>
                    <strong>"Oferta":</strong> Desconto ou promoção apresentada por um Dono através de vídeo.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Uso da Plataforma */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-600">
                  <Users className="w-6 h-6 mr-3" />
                  3. Uso da Plataforma
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <h4 className="font-semibold text-lg">3.1 Elegibilidade</h4>
                <p>
                  Você deve ter pelo menos 18 anos de idade para usar nosso Serviço. Ao usar o Serviço, você declara e
                  garante que tem pelo menos 18 anos de idade.
                </p>

                <h4 className="font-semibold text-lg">3.2 Conta de Usuário</h4>
                <p>
                  Para acessar certas funcionalidades, você pode precisar criar uma conta. Você é responsável por manter
                  a confidencialidade de sua conta e senha e por todas as atividades que ocorrem sob sua conta.
                </p>

                <h4 className="font-semibold text-lg">3.3 Uso Permitido</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Usar o Serviço apenas para fins legais e de acordo com estes Termos</li>
                  <li>Fornecer informações precisas e atualizadas</li>
                  <li>Respeitar os direitos de outros usuários</li>
                  <li>Cumprir todas as leis e regulamentos aplicáveis</li>
                </ul>
              </CardContent>
            </Card>

            {/* Responsabilidades dos Donos */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-600">
                  <Gavel className="w-6 h-6 mr-3" />
                  4. Responsabilidades dos Donos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <h4 className="font-semibold text-lg">4.1 Veracidade das Ofertas</h4>
                <p>
                  Os Donos garantem que todas as ofertas apresentadas em vídeos são verdadeiras, válidas e serão
                  honradas conforme apresentado.
                </p>

                <h4 className="font-semibold text-lg">4.2 Conteúdo dos Vídeos</h4>
                <p>Os Donos são responsáveis pelo conteúdo de seus vídeos e garantem que:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>O conteúdo é original ou devidamente licenciado</li>
                  <li>Não viola direitos de terceiros</li>
                  <li>É apropriado e não contém material ofensivo</li>
                  <li>Cumpre todas as leis de publicidade aplicáveis</li>
                </ul>
              </CardContent>
            </Card>

            {/* Responsabilidades dos Consumidores */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-600">
                  <Users className="w-6 h-6 mr-3" />
                  5. Responsabilidades dos Consumidores
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <p>Os Consumidores devem:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Usar as ofertas de forma respeitosa e dentro dos termos apresentados</li>
                  <li>Apresentar o vídeo conforme solicitado pelo estabelecimento</li>
                  <li>Não tentar fraudar ou abusar do sistema de ofertas</li>
                  <li>Respeitar as políticas individuais de cada estabelecimento</li>
                </ul>
              </CardContent>
            </Card>

            {/* Propriedade Intelectual */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-600">
                  <Shield className="w-6 h-6 mr-3" />
                  6. Propriedade Intelectual
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  O Serviço e seu conteúdo original, recursos e funcionalidades são e permanecerão propriedade exclusiva
                  da Desconto do Dono Ltda. e seus licenciadores. O Serviço é protegido por direitos autorais, marcas
                  registradas e outras leis.
                </p>
                <p>
                  Os vídeos e conteúdos criados pelos Donos permanecem de sua propriedade, mas eles concedem à
                  plataforma uma licença para exibir, distribuir e promover esse conteúdo.
                </p>
              </CardContent>
            </Card>

            {/* Limitação de Responsabilidade */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-red-600">
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  7. Limitação de Responsabilidade
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  A Desconto do Dono atua como intermediária entre Donos e Consumidores. Não somos responsáveis por:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Disputas entre Donos e Consumidores</li>
                  <li>Qualidade dos produtos ou serviços oferecidos pelos estabelecimentos</li>
                  <li>Cumprimento das ofertas pelos estabelecimentos</li>
                  <li>Danos diretos ou indiretos resultantes do uso da plataforma</li>
                </ul>
              </CardContent>
            </Card>

            {/* Modificações */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-600">
                  <FileText className="w-6 h-6 mr-3" />
                  8. Modificações dos Termos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Reservamo-nos o direito, a nosso exclusivo critério, de modificar ou substituir estes Termos a
                  qualquer momento. Se uma revisão for material, tentaremos fornecer um aviso de pelo menos 30 dias
                  antes de quaisquer novos termos entrarem em vigor.
                </p>
              </CardContent>
            </Card>

            {/* Contato */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-gold-50">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-600">
                  <Users className="w-6 h-6 mr-3" />
                  9. Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p>Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco:</p>
                <div className="mt-4 space-y-2">
                  <p>
                    <strong>Email:</strong> legal@descontododono.com.br
                  </p>
                  <p>
                    <strong>Telefone:</strong> (11) 1234-5678
                  </p>
                  <p>
                    <strong>Endereço:</strong> Rua das Empresas, 123 - São Paulo, SP
                  </p>
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
