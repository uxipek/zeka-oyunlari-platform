# Zeka Oyunları Platformu

Çocukların ve gençlerin bilişsel becerilerini oyunlarla geliştirmesine yardımcı olan responsive web MVP’si.

## MVP akışı

1. Oyunları kategori, zorluk ve üyelik türüne göre keşfet.
2. Oyun detayında hedeflenen becerileri ve ödülü gör.
3. **Desen Ustası** oyununda beş örüntü sorusunu tamamla.
4. Sonuç, XP ve günlük hedef güncellemesini gör.
5. Gelişim ve başarı ekranından ilerlemeyi takip et.

## Geliştirme

```bash
npm install
npm run dev
```

Kalite kontrolleri:

```bash
npm run typecheck
npm run lint
npm run build
```

## Teknoloji

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router (HashRouter)
- Yerel MVP ilerleme kaydı için `localStorage`

Tasarım sistemi `design-system/` altında token ve tekrar kullanılabilir bileşenlerle tutulur.
