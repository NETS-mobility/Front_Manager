//service_id	string

// 반환
// {
//     "service_state": 0,
//     "service_state_time": [
//       "string"
//     ]
//   }

// service_state, service_state_time의 인덱스의 정보
// 0 - 픽업 이전
// 1 - 픽업 완료
// 2 - 병원 도착 완료
// 3 - 귀가차량 병원도착 완료
// 4 - 귀가 출발 시작
// 5 - 귀가 완료 및 서비스 종료

import axios from 'axios';

const GetServiceProgress = async (id) => {
  try {
    const res = await axios.post(
      `/manager/service/serviceDetail/${id}/progress`,
      {
        service_id: id,
      },
    );
    return res.data;
  } catch (err) {
    return err;
  }
};
export default GetServiceProgress;
