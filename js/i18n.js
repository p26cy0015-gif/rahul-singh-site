export const getLocale = () => {
  try {
    return localStorage.getItem('rahul-site-locale') === 'hi' ? 'hi' : 'en';
  } catch {
    return 'en';
  }
};

export const setLocale = (locale) => {
  const nextLocale = locale === 'hi' ? 'hi' : 'en';
  try {
    localStorage.setItem('rahul-site-locale', nextLocale);
  } catch {
    return nextLocale;
  }
  return nextLocale;
};

export const text = (value, locale) => {
  if (typeof value === 'string') return value;
  return value?.[locale] ?? value?.en ?? '';
};

export const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[character]));
