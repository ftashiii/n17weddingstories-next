// lib/locale.js
// Simple helper to load translation JSON files from /lang/*.json (public folder)

export async function loadLocale(locale = 'en') {
  try {
    const res = await fetch(/lang/${locale}.json, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error(Couldn't load locale ${locale}: ${res.status});
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('loadLocale error:', err);
    // fallback to minimal English so UI doesn't break
    return {
      site_title: 'N17 Wedding Stories',
      hero_headline: 'Capturing Beautiful Moments Forever',
      contact: 'Contact',
      chat: 'Chat on WhatsApp',
      book_us: 'Book Us',
      name: 'Your name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      language_toggle: 'EN | ML'
    };
  }
}
