import { StatisticsContainer } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsContainer>
      {total > 0 && (
        <>
          <p>Good = {good}</p>
          <p>Neutral = {neutral}</p>
          <p>Bad = {bad}</p>
          <p>Total = {total}</p>
          <p>Positive feedback = {positivePercentage} %</p>
        </>
      )}
    </StatisticsContainer>
  );
};
