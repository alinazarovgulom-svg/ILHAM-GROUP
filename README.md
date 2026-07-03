# ILHAM GROUP

ILHAM GROUP — O'zbekistonda kostyum va shim ishlab chiqaruvchi fabrika uchun rasmiy brend sayti.

Sayt static HTML/CSS/JS bilan qurilgan va GitHub Pages orqali bepul hosting qilinadi.

## Sahifalar va tillar

Sayt 3 tilda mavjud: o'zbekcha (asosiy, ildiz papkada), ruscha (`ru/`) va inglizcha (`en/`). Har bir sahifada yuqori o'ng burchakda til almashtirgich (UZ / RU / EN) bor.

- `index.html`, `ru/index.html`, `en/index.html` — Bosh sahifa
- `collections.html`, `ru/collections.html`, `en/collections.html` — Kolleksiyalar
- `about.html`, `ru/about.html`, `en/about.html` — Biz haqimizda
- `contact.html`, `ru/contact.html`, `en/contact.html` — Aloqa

Har bir sahifada `hreflang` teglari orqali Google'ga uning boshqa til versiyalari ko'rsatilgan — bu tilga mos qidiruv natijalarida to'g'ri versiya chiqishiga yordam beradi.

## Saytni ishga tushirish (lokal)

Alohida server kerak emas — `index.html` faylini brauzerda oching, yoki:

```
python3 -m http.server 8000
```

va `http://localhost:8000` manziliga o'ting.

## GitHub Pages orqali bepul joylashtirish

1. GitHub'da repo sahifasiga o'ting: **Settings → Pages**
2. **Source** bo'limida `Deploy from a branch` ni tanlang
3. **Branch**: `main`, papka: `/ (root)` tanlang va **Save** bosing
4. Bir necha daqiqadan so'ng sayt shu manzilda ochiladi:
   `https://ilham-group-1963.web.app/`

## Almashtirish kerak bo'lgan joy-tutuvchi (placeholder) ma'lumotlar

Sayt hozircha namunaviy matn va raqamlar bilan to'ldirilgan. Ishga tushirishdan oldin quyidagilarni real ma'lumotlar bilan almashtiring:

- ✅ Telefon: `+998 91 716 55 55`, Email: `ilhamgroup1963@gmail.com`, Telegram: `@ilham_group_1963` — barcha sahifalarda yangilangan
- ✅ Manzil: Namangan shahri, 2-G'irvonsoy ko'chasi, 20-uy — barcha tillarda va xaritada yangilangan
- Statistika raqamlari (`index.html` dagi "Yillik tajriba", "Fabrika xodimlari" va h.k.)
- Ijtimoiy tarmoq havolalari (Instagram, Telegram, Facebook — footer'da)
- Hozirgi naqshli fon rasmlar o'rniga haqiqiy fabrika/mahsulot suratlarini qo'yish tavsiya etiladi

## SEO

Sayt "kostyum ishlab chiqarish O'zbekiston" kabi so'rovlar bo'yicha topilishi uchun asosiy texnik SEO elementlari bilan tayyorlangan: `meta description`, `sitemap.xml`, `robots.txt`, Open Graph teglar va `Organization` structured data (JSON-LD).

Qidiruvda tezroq chiqish uchun tavsiya etiladi:
1. Saytni [Google Search Console](https://search.google.com/search-console)'ga qo'shish va sitemap yuborish
2. [Google Business Profile](https://www.google.com/business/) orqali fabrikani Google Xaritada ro'yxatga olish
