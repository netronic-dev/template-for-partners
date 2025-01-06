import axios from "axios";
import { getCookieByKey } from "./getCookieByKey";

export async function getLocationData() {
  let locationData = {
    ip: "",
    city: "",
    region: "",
    country: "",
    zipcode: "",
    state: "",
  };
  const cookieIp = getCookieByKey("ip");

  const clientIP = await axios.get("https://api.ipify.org/?format=json");
  if (clientIP.data.ip === cookieIp) {
    locationData = {
      ip: getCookieByKey("ip") || "",
      city: getCookieByKey("city") || "",
      region: getCookieByKey("region") || "",
      country: getCookieByKey("country") || "",
      zipcode: getCookieByKey("zipcode") || "",
      state: getCookieByKey("state") || "",
    };
  } else {
    await axios
      .get("https://ipinfo.io/json?token=ee40c07fb51963")
      .then((response) => {
        locationData = {
          ip: response.data.ip,
          city: response.data.city,
          region: response.data.country,
          country: response.data.country,
          zipcode: response.data.postal,
          state: response.data.region,
        };
      })
      .catch(async () => {
        await axios
          .get("https://ipinfo.io/json?token=eba5da567f5208")
          .then((response) => {
            locationData = {
              ip: response.data.ip,
              city: response.data.city,
              region: response.data.country,
              country: response.data.country,
              zipcode: response.data.postal,
              state: response.data.region,
            };
          })
          .catch(console.log);
      });

    const date = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
    for (const [key, value] of Object.entries(locationData)) {
      document.cookie = `${key}=${value}; expires="${date}"`;
    }
  }

  return locationData;
}
