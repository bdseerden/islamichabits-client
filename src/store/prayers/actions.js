import axios from "axios";

export const fetchXrpInfo = (location) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `https://api.aladhan.com/v1/timingsByAddress?address=%20Tilburg,%20Netherlands`
      );
      console.log(response.data);
      // dispatch(fetchedXrpInfo(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
