<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# HAI — AI Customer Support (Showcase Prototype)

Landing page interaktif yang memperkenalkan konsep asisten AI customer-support "HAI", lengkap dengan demo chat yang benar-benar bisa diajak bicara. Proyek ini adalah cikal bakal hai-support-agent, yang kemudian dibangun ulang jadi platform multi-tenant sungguhan (RAG, booking, human handoff, WhatsApp).

## Fitur

Hero dan navigasi scroll-aware dengan micro-interaction. Ada demo chat langsung (`DemoChat`, Gemini 2.5 Flash) yang disetel untuk skenario klinik kecantikan fiktif "Lumina Aesthetic Clinic", bisa menjawab soal produk, tracking pesanan, dan menangani komplain. Section fitur dan use case menjelaskan skenario pemakaian, ditutup dengan perbandingan biaya (traditional support vs AI) lewat grafik interaktif (Recharts).

## Stack

React 19, TypeScript, Vite, Gemini API (`@google/genai`), Recharts, Tailwind CSS, lucide-react.

## Menjalankan secara lokal

Prasyarat: Node.js.

```
npm install
```

Buat `.env.local` dan isi `GEMINI_API_KEY` dengan API key Gemini Anda, lalu jalankan:

```
npm run dev
```

## Catatan

Ini prototipe/showcase, bukan produk produksi. Klinik "Lumina Aesthetic Clinic", angka "500+ businesses", dan grafik perbandingan biaya di section Impact adalah data ilustratif untuk keperluan demo, bukan data nyata. Untuk versi yang benar-benar dipakai, dengan multi-tenant, RAG grounded, booking, dan WhatsApp, lihat [hai-support-agent](https://github.com/HIIDAAYY/hai-support-agent).
