import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatList,
  Item,
  Label,
  Percentagne,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  //   console.log('stats', stats);
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(item => (
          <Item key={item.id}>
            <Label>{item.label} </Label>
            <Percentagne>{item.percentage}</Percentagne>
          </Item>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
