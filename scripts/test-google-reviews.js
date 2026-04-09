#!/usr/bin/env node

/**
 * Script de teste para validar integração Google Reviews
 * Uso: node scripts/test-google-reviews.js
 */

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY
const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID

console.log("🔍 Testando Integração Google Reviews\n")
console.log("=" .repeat(50))

// Verificar variáveis de ambiente
console.log("\n1️⃣  Verificando variáveis de ambiente...\n")

if (!GOOGLE_API_KEY) {
  console.log("❌ GOOGLE_API_KEY não está configurada")
  console.log("   ➜ Configure em Settings > Vars ou .env.local\n")
} else {
  const masked = GOOGLE_API_KEY.substring(0, 10) + "..." + GOOGLE_API_KEY.substring(GOOGLE_API_KEY.length - 4)
  console.log("✅ GOOGLE_API_KEY: " + masked)
}

if (!GOOGLE_PLACE_ID) {
  console.log("❌ GOOGLE_PLACE_ID não está configurada")
  console.log("   ➜ Obtenha em: https://maps.google.com\n")
} else {
  console.log("✅ GOOGLE_PLACE_ID: " + GOOGLE_PLACE_ID)
}

if (GOOGLE_API_KEY && GOOGLE_PLACE_ID) {
  console.log("\n✨ Ambas as variáveis estão configuradas!\n")
} else {
  console.log("\n⚠️  Falte configurar as variáveis de ambiente")
  console.log("   ➜ Sem elas, o sistema usará dados de demonstração\n")
}

// Testar endpoint
console.log("=" .repeat(50))
console.log("\n2️⃣  Testando endpoint da API...\n")

// Simular uma requisição
const testUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_API_KEY}&language=pt-BR`

console.log("URL de teste:")
console.log(testUrl.substring(0, 80) + "...\n")

if (GOOGLE_API_KEY && GOOGLE_PLACE_ID) {
  fetch(testUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log("Resposta da API:\n")

      if (data.status === "OK") {
        console.log("✅ Status: OK")
        const reviews = data.result?.reviews || []
        const rating = data.result?.rating || 0

        console.log(`✅ Rating médio: ${rating}`)
        console.log(`✅ Total de avaliações: ${reviews.length}`)

        if (reviews.length > 0) {
          console.log(`✅ Última avaliação: "${reviews[0].text.substring(0, 50)}..."\n`)
        }

        console.log("=" .repeat(50))
        console.log("\n🎉 Tudo funcionando corretamente!\n")
        console.log("Próximos passos:")
        console.log("1. Reinicie o servidor: npm run dev")
        console.log("2. Acesse http://localhost:3000")
        console.log("3. Role até 'O que nossos pacientes dizem'")
        console.log("4. Verifique se as avaliações aparecem\n")
      } else if (data.status === "INVALID_REQUEST") {
        console.log(`❌ Status: ${data.status}`)
        console.log(`   Erro: Place ID pode estar inválido\n`)
      } else {
        console.log(`❌ Status: ${data.status}`)
        console.log(`   Erro: ${data.error_message || "Erro desconhecido"}\n`)
      }
    })
    .catch((err) => {
      console.log("❌ Erro ao conectar com Google Places API:")
      console.log(`   ${err.message}\n`)
    })
} else {
  console.log("⚠️  Não é possível testar sem as variáveis de ambiente\n")
  console.log("Configure primeiro e execute novamente:\n")
  console.log("  export GOOGLE_API_KEY=sua_chave")
  console.log("  export GOOGLE_PLACE_ID=seu_place_id")
  console.log("  node scripts/test-google-reviews.js\n")
}

console.log("=" .repeat(50))
console.log("\n📖 Para mais informações, veja:")
console.log("   • GOOGLE_REVIEWS_SETUP.md - Guia completo")
console.log("   • INTEGRACAO_GOOGLE_REVIEWS.md - Referência rápida\n")
