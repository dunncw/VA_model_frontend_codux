import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App key={null} />,
    environmentProps: {
        windowWidth: 1186,
        canvasWidth: 1186,
        windowHeight: 768,
    },
});
