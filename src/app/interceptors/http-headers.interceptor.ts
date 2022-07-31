import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor(){}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': 'cd693161ccmshdd029f2d5111053p10deb6jsn99f7cc449aba',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
            }, 
            setParams: {
                key: '0d5d91a4caa5459d8575211b4c6b3943',
            }
        });
        return next.handle(req);
    }
}