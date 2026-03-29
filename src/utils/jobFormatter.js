const currencySymbols = {
  USD: "$",
  EUR: "€",
  INR: "₹",
  GBP: "£",
  JPY: "¥",
  AUD: "A$",
  CAD: "C$",
  CHF: "CHF",
  CNY: "¥",
  SEK: "kr",
  NZD: "NZ$",
};

export const getCurrencySymbol = (code) => {
  return currencySymbols[code] || code;
};

export const formatIndianNumber = (num) => {
  if (num === null || num === undefined) {
    return "";
  }

  if (num >= 1e7) {
    return (num / 1e7).toFixed(1).replace(/\.0$/, "") + "Cr";
  }
  if (num >= 1e5) {
    return (num / 1e5).toFixed(1).replace(/\.0$/, "") + "L";
  }
  if (num >= 1e3) {
    return (num / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
};

export const formatSalary = (salary) => {
  if (!salary) return "Not disclosed";

  if (salary.isConfidential) return "Confidential";

  if (salary.stipend) {
    return `${getCurrencySymbol(salary.currency)}${formatIndianNumber(
      salary.stipend,
    )}/month`;
  }

  if (salary.isHourly) {
    return `${getCurrencySymbol(salary.currency)}${salary.min}-${salary.max}/hr`;
  }

  if (salary.min && salary.max) {
    return `${getCurrencySymbol(salary.currency)}${formatIndianNumber(
      salary.min,
    )} - ${getCurrencySymbol(salary.currency)}${formatIndianNumber(
      salary.max,
    )}`;
  }

  return "Not specified";
};

export const getRelativeTime = (dateString) => {
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  const now = new Date();
  const past = new Date(dateString);

  let diffInSeconds = Math.floor((now - past) / 1000);

  const units = [
    { unit: "year", seconds: 31536000 },
    { unit: "month", seconds: 2592000 },
    { unit: "day", seconds: 86400 },
    { unit: "hour", seconds: 3600 },
    { unit: "minute", seconds: 60 },
    { unit: "second", seconds: 1 },
  ];

  for (const { unit, seconds } of units) {
    const value = Math.floor(diffInSeconds / seconds);

    if (value >= 1) {
      return rtf.format(-value, unit);
    }
  }

  return "just now";
};
