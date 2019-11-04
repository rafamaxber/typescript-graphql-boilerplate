import { HttpClient } from './HttpClient'
import from '../config'

export class TemplateAPI extends HttpClient {
  public baseURL = process.env.OAUTH_URL

  async getSomething<T>(id: number): Promise<T> {
    return this.get(`movies/${id}`)
  }
}
