import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";
import { DeleteMembersProps, GetMembersProps, MemberData } from "@/api/members/members.types";

export const getMembers = async ({ dashboardId, size = 5, page, token }: GetMembersProps): Promise<MemberData | null> => {
  try {
    const res = await instance.get(ENDPOINTS.MEMBERS.GET, {
      params: {
        size,
        page,
        dashboardId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
    return null;
  }
};

export const deleteMembers = async ({
  memberId = "241",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NzU1MjgsImlzcyI6InNwLXRhc2tpZnkifQ.vPTurAcm35kevcT9alVW2SxsjFcaKqnmd_mpgVwWfRU",
}: DeleteMembersProps) => {
  try {
    const res = await instance.delete(ENDPOINTS.MEMBERS.DELETE(memberId), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};