export const formatPrice = (value, currency = "INR") => {
  if (typeof value !== "number") {
    return "Price unavailable";
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
};

export const getRelativeTime = (dateString) => {
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const targetDate = new Date(dateString);

  if (Number.isNaN(targetDate.getTime())) {
    return "recently";
  }

  const diffInSeconds = Math.round((targetDate.getTime() - Date.now()) / 1000);
  const units = [
    { unit: "year", seconds: 31536000 },
    { unit: "month", seconds: 2592000 },
    { unit: "day", seconds: 86400 },
    { unit: "hour", seconds: 3600 },
    { unit: "minute", seconds: 60 },
    { unit: "second", seconds: 1 },
  ];

  for (const { unit, seconds } of units) {
    const value = diffInSeconds / seconds;

    if (Math.abs(value) >= 1 || unit === "second") {
      return rtf.format(Math.round(value), unit);
    }
  }

  return "just now";
};
