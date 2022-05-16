const ToKoreanTime = () => {
  //현재 한국시간 구하기 00:00:00(string)
  const curr = new Date();
  const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const kr_curr = new Date(utc + KR_TIME_DIFF);
  const time =
    (kr_curr.getHours() < 10 ? `0${kr_curr.getHours()}` : kr_curr.getHours()) +
    ':' +
    (kr_curr.getMinutes() < 10
      ? `0${kr_curr.getMinutes()}`
      : kr_curr.getMinutes()) +
    ':' +
    (kr_curr.getSeconds() < 10
      ? `0${kr_curr.getSeconds()}`
      : kr_curr.getSeconds());
  return time;
};
export default ToKoreanTime;
