import { Request, Response } from 'express';

import { CategoriesService } from '../services/categories.service';

export class CategoriesController {
  async create(_: Request, res: Response) {
    const service = new CategoriesService();

    const result = await service.create();

    // return res.status(201).json(result);
    res.status(201).json(result);
  }
}
