import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App key={null} />,
    environmentProps: {
        windowWidth: 1024,
        canvasWidth: 1038,
        windowHeight: 768,
        canvasHeight: 939,
    },
});
