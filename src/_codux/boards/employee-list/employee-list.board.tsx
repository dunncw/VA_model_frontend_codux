import { createBoard } from '@wixc3/react-board';
import EmployeeList from '../../../components/EmployeeList/EmployeeList';

export default createBoard({
    name: 'EmployeeList',
    Board: () => <EmployeeList />
});
