# Rastreamento
- [x] Instalar Pixel, consentimento regional, histórico de escolhas e configurações de cookies.
- [x] Conectar Lead ao envio sem CORS; teste com resposta simulada, sem contato real no n8n.
- [x] Criar política vinculada e verificar PageView nas sete páginas, Lead local e retirada no navegador; sete testes passaram.
- [x] Habilitar GTM: ligado a pedido do usuário, que assumiu a coleta de nome/e-mail/telefone pelo contêiner.
- [ ] Confirmar transmissão/recebimento Meta: SDK e configuração carregam, mas nenhum pedido de evento foi observado; requer diagnóstico no domínio publicado/Events Manager.
- [ ] Confirmar versão publicada: nenhuma publicação foi solicitada nesta tarefa.

# Cabeçalho
- [x] Refazer o cabeçalho: símbolo + "Acelera SaaS", navegação por seções com destaque da seção ativa, CTA gradiente.
- [x] Menu do celular em tela cheia, com o formulário abrindo por dentro dele; verificado no navegador.
- [x] Colocar o formulário ao lado do texto inicial, corrigir letras cortadas e contraste do selo, e remover o fundo animado.
- [x] Verificar formulário na página e no diálogo com envio simulado, payload e Lead preservados, tags carregadas, seis páginas de serviço sem erros e apresentação em três tamanhos de tela.
- [x] Trocar a fonte do site para Montserrat e aumentar o título inicial; "NÃO" em degradê rosa, "precisa" em rosa, resto branco.
- Observação: o teste antigo que espera GTM desligado falha porque o contêiner foi ligado anteriormente a pedido do usuário; nenhuma configuração de rastreamento foi alterada nesta tarefa.

# Formulário de contato
- [x] Trocar as duas perguntas: "Qual o seu faturamento mensal?" (7 faixas) e "Quantos usuários ativos tem seu SaaS?" (8 faixas).
- [x] Adicionar Instagram e tornar site e Instagram obrigatórios; envio simulado confirma o campo no payload e o envio vazio é bloqueado.
- [x] Atualizar a página /privacidade: lista de campos coletados e correção da frase sobre o GTM, que está ligado.