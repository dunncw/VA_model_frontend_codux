import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App key={null} />,
    environmentProps: {
        windowWidth: 1174,
        canvasWidth: 1510,
        windowHeight: 768,
        canvasHeight: 939,
    },
});
