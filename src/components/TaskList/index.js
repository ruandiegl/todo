import PropTypes from 'prop-types';
import { Container } from './style';
import trash from '../../assets/img/icons/trash (2).svg';
import check from '../../assets/img/icons/clipboard2-check.svg';

export default function TaskList({ items, onTaskDone, onTaskDelete }) {
  return (
    <Container>
      <ul>
        <div className="list-task">
          {items.map((item) => (
            <li
              key={item.id}
              className={item.done ? 'done' : ''}
            >
              {item.text}
              <div className="btn-box">
                <button
                  onClick={() => onTaskDone(item.id)}
                  type="button"
                  className="check"
                >
                  {' '}
                  <img src={check} alt="check" />
                </button>
                <button
                  onClick={() => onTaskDelete(item.id)}
                  type="button"
                  className="trash"
                >
                  {' '}
                  <img src={trash} alt="trash" />
                </button>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </Container>
  );
}

TaskList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
      }),
    ]),
  ).isRequired,
  onTaskDone: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};
