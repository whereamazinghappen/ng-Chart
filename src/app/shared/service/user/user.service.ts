import { Injectable ,Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  private logineddApi = this.apiBase + '/api/logined';
  constructor(private http: Http, @Inject('apiBase') private apiBase: string) { }
  logined() {
    return this.http.get(this.logineddApi,<RequestOptionsArgs>{withCredentials:true})
    .map((res: Response)=>res.json())
    .catch(this.handleError)
  }
  handleError(error: Response){
    return Observable.throw(error || "服务器忙");
  };
}
