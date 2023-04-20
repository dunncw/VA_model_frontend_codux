import { createBoard } from '@wixc3/react-board';
import ResourceAllocationForm from '../../../components/ResourceAllocationForm/ResourceAllocationForm';

export default createBoard({
    name: 'ResourceAllocationForm',
    Board: () => <ResourceAllocationForm />
});
