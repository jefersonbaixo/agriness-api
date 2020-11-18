import { Router } from 'express'
import AnimalController from './controllers/AnimalController'

const routes = Router()

routes.get('/', AnimalController.index)
routes.get('/animal/:id', AnimalController.animalDetails)

export default routes
