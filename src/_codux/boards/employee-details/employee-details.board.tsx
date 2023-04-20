import { createBoard } from '@wixc3/react-board';
import EmployeeDetails from '../../../pages/EmployeeDetails/EmployeeDetails';

export default createBoard({
    name: 'EmployeeDetails',
    Board: () => <EmployeeDetails />
});
