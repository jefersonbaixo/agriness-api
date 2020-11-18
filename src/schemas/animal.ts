import { Schema, model, Document } from 'mongoose'

interface Animal extends Document {
    id: string,
    nome: string,
    tipoAnimal: string,
    statusAnimal: number,
    localizacao: string,
    dataNascimento: string,
    entradaPlantel: string,
    pesoCompra: number,
    raca: string,
    codigoRastreamento: string,
    faseProducao: {
      sigla: string,
      descricao: string
    },
    tipoGranja: {
      sigla: string,
      descricao: string
    }
}

const AnimalSchema = new Schema({
  id: String,
  nome: String,
  tipoAnimal: String,
  statusAnimal: Number,
  localizacao: String,
  dataNascimento: String,
  entradaPlantel: String,
  pesoCompra: Number,
  raca: String,
  codigoRastreamento: String,
  faseProducao: {
    sigla: String,
    descricao: String
  },
  tipoGranja: {
    sigla: String,
    descricao: String
  }
}, {
  timestamps: true
})

export default model<Animal>('Animal', AnimalSchema)
