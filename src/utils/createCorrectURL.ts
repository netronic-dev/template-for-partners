export const createCorrectURL = (url: string) => {
  const [, queryTail] = url.split("#");

  if (queryTail && queryTail.includes("utm_source=")) {
    const [, utmsTail] = queryTail.split("?");
    return utmsTail;
  }
  return url.split("?")[1];
};
