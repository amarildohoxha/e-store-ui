import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {GenericRequest} from 'src/transport/generic.request';
import {apiPath, serverURL} from "../../config/server.config";

@Injectable()
export class CommonService {
  constructor(protected http: HttpClient) {
  }

  protected constructParams(
    req: GenericRequest,
    searchKeys: string
  ): HttpParams {
    let params: HttpParams = new HttpParams();
    // paging params
    params = params.append('page', (req.$paging.$pageNumber - 1).toString());
    params = params.append('size', req.$paging.$pageSize.toString());
    params = params.append(
      'sort',
      req.$paging.$orderField + ',' + req.$paging.$orderDirection
    );

    // search params
    if (searchKeys) {
      searchKeys.split(',').forEach((key) => {
        if (req[key] != null) {
          params = params.append(key, req[key]);
        }
      });
    }

    return params;
  }

  fetchLookup(tableName: string, field: string, hasActive: boolean, sortByField?: string): Observable<any> {
    let params: HttpParams = new HttpParams();
    params = params.append('tableName', tableName);
    params = params.append('field', field);
    params = params.append('hasActive', hasActive.toString());
    if (sortByField) {
      params = params.append('sortByField', sortByField);
    }
    return this.http
      .get(serverURL + apiPath + '/common/fetch-lookup', {
        params
      })
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  delete(tableName: string, id: number): Observable<any> {
    let params: HttpParams = new HttpParams();
    params = params.append('tableName', tableName);
    params = params.append('id', id.toString());
    return this.http.delete(
      serverURL + apiPath + '/common/delete',
      {
        params
      }
    ).pipe(map((response: any) => {
      return response;
    }));
  }

}
