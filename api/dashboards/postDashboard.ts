import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

export const postDashboard = async ({
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: {
  token: string;
}) => {
  try {
    const res = await instance.post(
      ENDPOINTS.DASHBOARDS.POST,
      {
        title: "메롱메롱~~",
        color: "#ffffff",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log(res.data);
    if (res.status === 200) return res.data;
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};