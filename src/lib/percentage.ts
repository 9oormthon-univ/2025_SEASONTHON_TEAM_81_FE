const calculatePercentage = (total: number, current: number): number => {
  if (total <= 0 || current < 0) {
    return 0;
  }

  // 백분율을 계산합니다.
  const percentage = (current / total) * 100;

  // 소수점 아래를 버리고 정수로 반환합니다.
  return Math.floor(percentage);
};

export default calculatePercentage;
