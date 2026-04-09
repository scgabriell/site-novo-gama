# Configuração de Google Reviews

Este guia ajudará você a configurar as avaliações do Google na página inicial do Instituto Gama.

## Como Funciona

O componente `GoogleReviews` busca as avaliações do seu estabelecimento no Google Maps e as exibe de forma elegante na página inicial.

## Passos para Configurar

### 1. Obter a API Key do Google

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto ou selecione um existente
3. Habilite a API "Places API":
   - Vá para "APIs e Serviços" > "Biblioteca"
   - Procure por "Places API"
   - Clique em "Habilitar"
4. Crie uma chave de API:
   - Vá para "APIs e Serviços" > "Credenciais"
   - Clique em "Criar Credencial" > "Chave de API"
   - Copie a chave gerada

### 2. Obter o Place ID do Google

1. Acesse [Google Places Finder](https://developers.google.com/maps/documentation/places/web-service/autocomplete)
2. Ou faça uma busca no Google Maps pelo seu estabelecimento
3. A URL do Google Maps conterá algo como: `https://maps.app.goo.gl/...`
4. Para obter o Place ID de forma programática:
   - Use a [Autocomplete API](https://developers.google.com/maps/documentation/places/web-service/autocomplete)
   - Ou busque manualmente pelo nome do estabelecimento usando:
     ```
     https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Instituto%20Gama&inputtype=textquery&fields=place_id&key=YOUR_API_KEY
     ```

### 3. Adicionar as Variáveis de Ambiente

No painel de controle do Vercel ou no arquivo `.env.local`:

```env
GOOGLE_API_KEY=sua_chave_de_api_aqui
GOOGLE_PLACE_ID=seu_place_id_aqui
```

### 4. Testar a Integração

1. Faça deploy das alterações
2. Acesse a página inicial
3. A seção de avaliações do Google deverá aparecer com as avaliações reais

## Troubleshooting

### Avaliações não aparecem

1. **Verifique se as variáveis de ambiente estão configuradas corretamente**
   - Vá para o painel Vercel
   - Settings > Environment Variables
   - Confirme que `GOOGLE_API_KEY` e `GOOGLE_PLACE_ID` estão presentes

2. **Verifique os logs da API**
   - Abra o console do navegador (F12)
   - Vá para a aba Network
   - Procure por requisições para `/api/google-reviews`
   - Verifique se a resposta contém erros

3. **Confirme que o Google Place ID está correto**
   - Use a ferramenta "Place ID Finder" do Google
   - Garanta que é para a localização correta

4. **Verifique os limites da API**
   - A API do Google tem limites de requisições
   - O componente cacheia as avaliações por 6 horas para evitar isso

## Comportamento de Fallback

Se as credenciais não estiverem configuradas ou houver erro na API do Google, o componente exibirá **depoimentos fictícios de demonstração**. Isso permite que a página funcione normalmente mesmo sem a integração, mas você receberá um aviso no console.

## Cache

As avaliações são armazenadas em cache por **6 horas** para:
- Reduzir o uso de quota da API
- Melhorar a performance
- Evitar limites de requisições

## Limite de Avaliações

O componente exibe até **6 avaliações** da API do Google. Se seu negócio tem mais, elas serão exibidas em rotação.

## Suporte

Para mais informações sobre a Google Places API, consulte a [documentação oficial](https://developers.google.com/maps/documentation/places/web-service/overview).
