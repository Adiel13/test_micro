import { Router } from "express";
import code from '../controller/code';

const router = Router();
const cd = new code();

router.use('/micro', cd.router);

export {router};