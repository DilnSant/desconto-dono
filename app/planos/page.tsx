import Link from "next/link"
import { ArrowLeft, Check, Star, Zap, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const planos = [
  {
    nome: "Básico",
    preco: "R$ 97",
    periodo: "/mês",
    descricao: "Ideal para pequenos negócios que estão começando",
    icone: Star,
    cor: "from-gray-500 to-gray-600",
    recursos: [
      "1 vídeo profissional de 30 segundos",
      "Publicação na plataforma por 30 dias",
      "Informações básicas (endereço, telefone)",
      "Suporte por email",
      "Relatório mensal básico",
    ],
    destaque: false,
  },
  {
    nome: "Profissional",
    preco: "R$ 197",
    periodo: "/mês",
    descricao: "Para empresas que querem mais visibilidade",
    icone: Zap,
    cor: "from-orange-500 to-red-500",
    recursos: [
      "2 vídeos profissionais de 30 segundos",
      "Publicação na plataforma por 60 dias",
      "Informações completas + website + WhatsApp",
      "Destaque na categoria",
      "Suporte prioritário",
      "Relatórios detalhados",
      "Edição de informações ilimitada",
    ],
    destaque: true,
  },
  {
    nome: "Premium",
    preco: "R$ 297",
    periodo: "/mês",
    descricao: "Máxima exposição para seu negócio",
    icone: Crown,
    cor: "from-purple-500 to-indigo-500",
    recursos: [
      "3 vídeos profissionais de 30 segundos",
      "Publicação permanente na plataforma",
      "Perfil completo com galeria de fotos",
      "Destaque na página inicial",
      "Suporte 24/7 via WhatsApp",
      "Analytics avançados",
      "Campanhas promocionais especiais",
      "Badge de empresa verificada",
    ],
    destaque: false,
  },
]

export default function PlanosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/" className="flex items-center text-gray-600 hover:text-orange-600">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Voltar ao Início
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Escolha o Plano Ideal</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aumente a visibilidade da sua empresa com nossos vídeos profissionais. Escolha o plano que melhor se
              adapta ao seu negócio.
            </p>
          </div>
        </div>
      </div>

      {/* Planos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {planos.map((plano, index) => {
            const IconeComponent = plano.icone
            return (
              <Card
                key={index}
                className={`relative overflow-hidden ${plano.destaque ? "ring-2 ring-orange-500 scale-105" : ""} hover:shadow-xl transition-all duration-300`}
              >
                {plano.destaque && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2 text-sm font-bold">
                    MAIS POPULAR
                  </div>
                )}

                <CardHeader className={`text-center ${plano.destaque ? "pt-12" : "pt-6"}`}>
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${plano.cor} flex items-center justify-center mb-4`}
                  >
                    <IconeComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{plano.nome}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plano.preco}</span>
                    <span className="text-gray-600">{plano.periodo}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plano.descricao}</p>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  <ul className="space-y-3 mb-8">
                    {plano.recursos.map((recurso, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{recurso}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plano.destaque
                        ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                    size="lg"
                  >
                    Escolher {plano.nome}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Perguntas Frequentes</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Como funciona a produção dos vídeos?</h3>
              <p className="text-gray-600">
                Nossa equipe agenda uma visita ao seu estabelecimento, filma um vídeo profissional de 30 segundos, edita
                com qualidade cinematográfica e publica na nossa plataforma.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Posso cancelar a qualquer momento?</h3>
              <p className="text-gray-600">
                Sim! Todos os nossos planos são mensais e podem ser cancelados a qualquer momento, sem multas ou taxas
                de cancelamento.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quanto tempo leva para o vídeo ficar pronto?</h3>
              <p className="text-gray-600">
                Após a filmagem, seu vídeo fica pronto em até 5 dias úteis e é automaticamente publicado na nossa
                plataforma.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Posso usar o vídeo em outras plataformas?</h3>
              <p className="text-gray-600">
                Sim! O vídeo é seu e você pode usar em redes sociais, site, WhatsApp e onde mais desejar.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Pronto para Decolar Seu Negócio?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Junte-se a centenas de empresas que já estão crescendo com o Desconto do Dono!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <Link href="/cadastrar-negocio">Começar Agora</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              <Link href="/suporte">Falar com Consultor</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
