import { createBoard } from '@wixc3/react-board';
import { List } from '../../../components/list/list';

export default createBoard({
    name: 'List',
    Board: () => <List />
});
