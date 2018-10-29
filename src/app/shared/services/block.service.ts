import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Block } from '../dto/block.interface';

@Injectable({
    providedIn: 'root'
})
export class BlockService {
    constructor(private http: HttpClient){}

    fetchBlocks(url: string): Observable<Block[]>{
        return this.http.get<any>(`${url}/api/v1/blocks`).pipe(map((response) => {
            return response.data;
        }));
    }
}