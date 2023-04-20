import { createBoard } from '@wixc3/react-board';
import EmployeeDirectory from '../../../pages/EmployeeDirectory/EmployeeDirectory';

export default createBoard({
    name: 'EmployeeDirectory',
    Board: () => <EmployeeDirectory />
});
