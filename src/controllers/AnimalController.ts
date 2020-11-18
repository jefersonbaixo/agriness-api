import { Request, Response } from 'express'
import Animal from '../schemas/animal'

class AnimalController {
  public async index (req: Request, res: Response): Promise<Response> {
    const animals = await Animal.find()

    return res.json(animals)
  }

  public async animalDetails (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const animal = await Animal.findOne({ id: id })
    return res.json(animal)
  }
}

export default new AnimalController()
