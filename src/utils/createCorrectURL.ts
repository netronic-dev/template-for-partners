export const createCorrectURL = (url: string) => {
  const [hostAndPathName, queryTail] = url.split("#");

  if (queryTail && queryTail.includes("utm_source=")) {
    const [anchor, utmsTail] = queryTail.split("?");
    return utmsTail;
  }
  return url.split("?")[1];
};
