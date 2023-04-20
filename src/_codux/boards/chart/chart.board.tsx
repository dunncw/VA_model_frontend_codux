import { createBoard } from '@wixc3/react-board';
import Chart from '../../../components/Chart/Chart';

export default createBoard({
    name: 'Chart',
    Board: () => <Chart />
});
