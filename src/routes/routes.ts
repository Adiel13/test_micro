import { Router } from "express";
import code from '../controller/code';
import code2 from '../controller/code2';

const router = Router();
const cd = new code();
const cd2 = new code2();

router.use('/micro', cd.router);
router.use('/micro2', cd2.router);

export {router};