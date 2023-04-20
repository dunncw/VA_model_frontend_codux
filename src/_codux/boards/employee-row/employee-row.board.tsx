import { createBoard } from '@wixc3/react-board';
import EmployeeRow from '../../../components/EmployeeRow/EmployeeRow';

export default createBoard({
    name: 'EmployeeRow',
    Board: () => <EmployeeRow />
});
