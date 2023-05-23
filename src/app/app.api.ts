import { instance } from "common/api/common.api";

export const appApi = {
  login: () => {
    const params = {
      login: "sergei.stralenia@gmail.com",
      password: "paralect123",
      client_id: 2356,
      client_secret:
        "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
      hr: 0,
    };
    return instance.get(
      `oauth2/password/?login=${params.login}&password=${params.password}&client_id=${params.client_id}&client_secret=${params.client_secret}&hr=${params.hr}`
    );
  },
};
