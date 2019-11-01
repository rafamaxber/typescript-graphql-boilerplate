import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'

export class TemplateAPI extends RESTDataSource {
  public baseURL = process.env.IFOOD_OAUTH_URL

  public willSendRequest(request: RequestOptions): void {
    const { token } = this.context

    token && request.headers.set('Authorization', `Bearer ${token}`)
    request.headers.set('Content-Type', 'application/json; charset=utf-8')
    request.headers.set(
      'X-Timezone',
      Intl.DateTimeFormat().resolvedOptions().timeZone,
    )
  }

  async getSomething<T>(id: number): Promise<T> {
    return this.get(`movies/${id}`)
  }
}
