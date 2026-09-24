# HAI Showcase

Landing page interaktif untuk konsep asisten AI customer support "HAI", dengan demo chat yang bisa dicoba. Ini prototipe awal sebelum dibangun ulang menjadi [hai-support-agent](https://github.com/HIIDAAYY/hai-support-agent) (multi-tenant, RAG, booking, WhatsApp).

## Isi

- Hero dan navigasi dengan micro-interaction.
- Demo chat (Gemini 2.5 Flash) untuk skenario klinik kecantikan fiktif: pertanyaan produk, cek pesanan, dan komplain.
- Section use case dan grafik perbandingan biaya (Recharts).

## Stack

React 19, TypeScript, Vite, Gemini API (`@google/genai`), Recharts, Tailwind CSS, lucide-react.

## Menjalankan

```
npm install
```

Buat `.env.local` berisi `GEMINI_API_KEY`, lalu:

```
npm run dev
```

## Catatan

Nama klinik, angka "500+ businesses", dan grafik biaya adalah data ilustrasi untuk demo, bukan data nyata.
