export default async function loadLocale(locale) {
  try {
    const response = await fetch(/lang/${locale}.json);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Failed to load locale:", err);
    return {};
  }
}
