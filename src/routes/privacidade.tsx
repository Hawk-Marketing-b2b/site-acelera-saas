import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/privacidade")({
  head: () => ({ meta: [
    { title: "Política de Privacidade | Acelera SaaS" },
    { name: "description", content: "Saiba como a Acelera SaaS trata dados do formulário e escolhas de rastreamento publicitário." },
    { property: "og:title", content: "Política de Privacidade | Acelera SaaS" },
    { property: "og:description", content: "Dados de contato, medição de campanhas e suas escolhas de privacidade." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: Privacy,
});
function Privacy() {
  return <><Header /><main className="mx-auto max-w-3xl space-y-8 px-6 pb-20 pt-40 text-foreground">
    <h1 className="text-3xl font-bold">Política de Privacidade</h1>
    <p className="text-sm text-muted-foreground">Atualizada em 29 de outubro de 2026</p>
    <section className="space-y-3"><h2 className="text-xl font-semibold">Responsável e contato</h2><p>Acelera SaaS — Hawk Comunicacao LTDA, CNPJ 19.247.670/0001-35. Para dúvidas e solicitações sobre seus dados, escreva para <a className="underline" href="mailto:contato@acelerasaas.com">contato@acelerasaas.com</a>.</p></section>
    <section className="space-y-3"><h2 className="text-xl font-semibold">Formulário de contato</h2><p>Recebemos nome, e-mail, WhatsApp, site da empresa, segmento e faixa de receita informados por você para atender sua solicitação comercial. Parâmetros de campanha, página de origem, referência e data de envio acompanham o formulário, enviado à nossa automação n8n. As respostas não são incluídas nos eventos enviados pelo site ao Google e à Meta.</p></section>
    <section className="space-y-3"><h2 className="text-xl font-semibold">Medição de campanhas e anúncios</h2><p>Utilizamos Google Tag Manager (Google) e Meta Pixel (Meta) para medir visitas às páginas e envios do formulário e apoiar a otimização de anúncios. Esses serviços podem receber endereço da página, identificadores de cookies, endereço IP e informações do navegador/dispositivo. Os eventos do site não incluem nome, e-mail, telefone, segmento ou receita. Não instalamos correspondência avançada de clientes nem envio de conversões pelo servidor.</p><p>O Google Tag Manager gerencia etiquetas; os serviços efetivamente usados também dependem da configuração do contêiner. Os responsáveis pelo site devem manter essa configuração compatível com as escolhas de consentimento e atualizar esta política quando ela mudar.</p><p>O envio do formulário é realizado sem leitura da resposta da automação. O evento Lead indica que o envio terminou no navegador, não a confirmação de recebimento ou atendimento.</p></section>
    <section className="space-y-3"><h2 className="text-xl font-semibold">Consentimento e retirada</h2><p>Nas regiões que exigem consentimento, e quando não conseguimos identificar a região, os rastreadores ficam bloqueados até você aceitar. Em outras regiões, podem funcionar sem aviso, respeitando sua recusa e sinais de privacidade do navegador. A identificação regional tenta consultar o serviço do próprio domínio, sem enviar dados do formulário.</p><p>Use Configurações de cookies no final de qualquer página para aceitar ou rejeitar a publicidade. A recusa é aplicada imediatamente; eventos bloqueados não são reenviados após uma aceitação posterior. Cookies estritamente necessários para salvar essa escolha permanecem disponíveis.</p></section>
    <section className="space-y-3"><h2 className="text-xl font-semibold">Registro da escolha e seus direitos</h2><p>Guardamos neste navegador um identificador aleatório, região quando disponível, data, escolha e texto/versão do aviso. O histórico preserva uma aceitação anterior quando há retirada. Limpar o armazenamento do navegador remove esse registro local. Não existe um registro centralizado dessas escolhas nesta instalação.</p><p>Google e Meta podem processar dados em outros países conforme suas próprias políticas. Você pode solicitar informações, acesso, correção ou exclusão de dados de contato pelo e-mail acima. Os dados do formulário são usados para atender a solicitação; solicite ao responsável informações sobre a retenção desses dados na automação.</p><p><a className="underline" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacidade do Google</a> · <a className="underline" href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noreferrer">Privacidade da Meta</a></p></section>
  </main><Footer /></>;
}