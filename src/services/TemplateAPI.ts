import { HttpClient } from './HttpClient'
import config from '../config'

export class TemplateAPI extends HttpClient {
  public baseURL = config.oauthUrl

  async getSomething<T>(id: number): Promise<T> {
    return this.get(`movies/${id}`)
  }
}
