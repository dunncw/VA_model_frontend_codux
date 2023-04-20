import { createBoard } from '@wixc3/react-board';
import Dashboard from '../../../pages/Dashboard/Dashboard';

export default createBoard({
    name: 'Dashboard',
    Board: () => <Dashboard />
});
