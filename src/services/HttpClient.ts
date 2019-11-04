import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'

export class HttpClient extends RESTDataSource { 
  public willSendRequest(request: RequestOptions): void {
    const { token } = this.context

    token && request.headers.set('Authorization', `Bearer ${token}`)
    request.headers.set('Content-Type', 'application/json; charset=utf-8')
    request.headers.set(
      'X-Timezone',
      Intl.DateTimeFormat().resolvedOptions().timeZone,
    )
  }
}
