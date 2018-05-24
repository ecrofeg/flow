import * as express from 'express';
import * as path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('test');
});

export default router;