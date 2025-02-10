import {map} from 'rxjs/operators';
import {Observable, pipe} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {apiPath, serverURL} from "../../config/server.config";


@Injectable()
export class EKalathiService {

  /**
   *
   * @param http
   */
  constructor(protected http: HttpClient) {
  }

  testRequest(name: string) {
    let params: HttpParams = new HttpParams();
    params = params.append("name", name);
    return this.http
      .get(serverURL + apiPath + '/test', {
        params: params}).pipe(map((response: any) => {
        return response;
      }));
  }
  fetchProducts(product: any) {
    return this.http
      .get(serverURL + apiPath + '/fetch-products', {params: this.constructParams(product, 'userId')}).pipe(map((response: any) => {
        return response;
      }));
  }
  fetchProductsByUserId(product: any) {
    return this.http
      .get(serverURL + apiPath + '/fetch-products-by-user-id', {params: this.constructParams(product, 'userId')}).pipe(map((response: any) => {
        return response;
      }));
  }

  fetchAllValues(schema: string, tableName: string, excludedNameEn?: boolean, whereClause?: string) {

    let searchParams: HttpParams = new HttpParams();

    if (!excludedNameEn) {
      excludedNameEn = false;
    }

    if(!whereClause){
      whereClause = "";
    }
    searchParams = searchParams.append('tableName', tableName);
    searchParams = searchParams.append('schema', schema);
    searchParams = searchParams.append('excludedNameEn', excludedNameEn);
    searchParams = searchParams.append('whereClause', whereClause);

    return this.http
      .get(serverURL + apiPath + '/fetch-all-values', {
        params: searchParams
      }).pipe(map((response: any) => {
        return response;
      }));

  }

  getBeneficialOwnerById(beneficialOwnerId: number) {

    let searchParams: HttpParams = new HttpParams();


    searchParams = searchParams.append('beneficialOwnerId', beneficialOwnerId);

    return this.http
      .get(serverURL + apiPath + '/get-beneficial-owner-by-id', {
        params: searchParams
      }).pipe(map((response: any) => {
        return response;
      }));
  }

  getBeneficialOwnersById(organizationVersionId: number) {

    let searchParams: HttpParams = new HttpParams();


    searchParams = searchParams.append('organizationVersionId', organizationVersionId);

    return this.http
      .get(serverURL + apiPath + '/get-beneficial-owners-by-id', {
        params: searchParams
      }).pipe(map((response: any) => {
        return response;
      }));

  }

  getOrganizationVersionById(organizationVersionId: number) {

    let searchParams: HttpParams = new HttpParams();


    searchParams = searchParams.append('organizationVersionId', organizationVersionId);

    return this.http
      .get(serverURL + apiPath + '/get-organization-version-by-id', {
        params: searchParams
      }).pipe(map((response: any) => {
        return response;
      }));

  }

  constructParams(
    request: any,
    searchKeys: string
  ): HttpParams {
    let params: HttpParams = new HttpParams();
    // paging params
    params = params.append('page', (request.$paging.$pageNumber - 1).toString());
    params = params.append('size', request.$paging.$pageSize.toString());
    params = params.append(
      'sort',
      request.$paging.$orderField + ',' + request.$paging.$orderDirection
    );

    // search params
    if (searchKeys) {
      searchKeys.split(',').forEach((key) => {
        if (request[key] != null) {
          params = params.append(key, request[key]);
        }
      });
    }

    return params;
  }
}




