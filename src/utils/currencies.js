export const currencies = [
  { code: "USD", name: "US Dollar", symbol: "$", flag: "🇺🇸", country: "United States" },
  { code: "INR", name: "Indian Rupee", symbol: "₹", flag: "🇮🇳", country: "India" },
  { code: "EUR", name: "Euro", symbol: "€", flag: "🇪🇺", country: "European Union" },
  { code: "GBP", name: "British Pound", symbol: "£", flag: "🇬🇧", country: "United Kingdom" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥", flag: "🇯🇵", country: "Japan" },
  { code: "AUD", name: "Australian Dollar", symbol: "A$", flag: "🇦🇺", country: "Australia" },
  { code: "CAD", name: "Canadian Dollar", symbol: "C$", flag: "🇨🇦", country: "Canada" },
  { code: "CHF", name: "Swiss Franc", symbol: "CHF", flag: "🇨🇭", country: "Switzerland" },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥", flag: "🇨🇳", country: "China" },
  { code: "AED", name: "UAE Dirham", symbol: "د.إ", flag: "🇦🇪", country: "United Arab Emirates" },
  { code: "SGD", name: "Singapore Dollar", symbol: "S$", flag: "🇸🇬", country: "Singapore" },
  { code: "NZD", name: "New Zealand Dollar", symbol: "NZ$", flag: "🇳🇿", country: "New Zealand" },
  { code: "HKD", name: "Hong Kong Dollar", symbol: "HK$", flag: "🇭🇰", country: "Hong Kong" },
  { code: "KRW", name: "South Korean Won", symbol: "₩", flag: "🇰🇷", country: "South Korea" },
  { code: "SEK", name: "Swedish Krona", symbol: "kr", flag: "🇸🇪", country: "Sweden" },
  { code: "NOK", name: "Norwegian Krone", symbol: "kr", flag: "🇳🇴", country: "Norway" },
  { code: "MXN", name: "Mexican Peso", symbol: "$", flag: "🇲🇽", country: "Mexico" },
  { code: "BRL", name: "Brazilian Real", symbol: "R$", flag: "🇧🇷", country: "Brazil" },
  { code: "ZAR", name: "South African Rand", symbol: "R", flag: "🇿🇦", country: "South Africa" },
  { code: "THB", name: "Thai Baht", symbol: "฿", flag: "🇹🇭", country: "Thailand" },
  { code: "IDR", name: "Indonesian Rupiah", symbol: "Rp", flag: "🇮🇩", country: "Indonesia" },
  { code: "MYR", name: "Malaysian Ringgit", symbol: "RM", flag: "🇲🇾", country: "Malaysia" },
  { code: "PHP", name: "Philippine Peso", symbol: "₱", flag: "🇵🇭", country: "Philippines" },
  { code: "SAR", name: "Saudi Riyal", symbol: "﷼", flag: "🇸🇦", country: "Saudi Arabia" },
  { code: "TRY", name: "Turkish Lira", symbol: "₺", flag: "🇹🇷", country: "Turkey" },
  { code: "DKK", name: "Danish Krone", symbol: "kr", flag: "🇩🇰", country: "Denmark" },
  { code: "PLN", name: "Polish Zloty", symbol: "zł", flag: "🇵🇱", country: "Poland" },
  { code: "ILS", name: "Israeli Shekel", symbol: "₪", flag: "🇮🇱", country: "Israel" },
  { code: "EGP", name: "Egyptian Pound", symbol: "E£", flag: "🇪🇬", country: "Egypt" },
  { code: "TWD", name: "Taiwan Dollar", symbol: "NT$", flag: "🇹🇼", country: "Taiwan" }
];

export const fallbackRates = {
  USD: {
    INR: 83.47,
    EUR: 0.9174,
    GBP: 0.7832,
    JPY: 154.20,
    AUD: 1.52,
    CAD: 1.36,
    CHF: 0.89,
    CNY: 7.24,
    AED: 3.67,
    SGD: 1.34,
    NZD: 1.65,
    HKD: 7.82,
    KRW: 1375.0,
    BRL: 5.42,
    ZAR: 18.25,
    USD: 1
  },
  INR: {
    USD: 0.01198,
    EUR: 0.01099,
    GBP: 0.00938,
    JPY: 1.847,
    AED: 0.044,
    CAD: 0.0163,
    AUD: 0.0182,
    INR: 1
  },
  EUR: {
    USD: 1.09,
    INR: 100.23,
    GBP: 0.8537,
    JPY: 168.1,
    EUR: 1
  },
  GBP: {
    USD: 1.277,
    INR: 115.61,
    EUR: 1.171,
    JPY: 196.8,
    GBP: 1
  },
  JPY: {
    USD: 0.00648,
    INR: 0.541,
    EUR: 0.00595,
    GBP: 0.00508,
    JPY: 1
  }
};