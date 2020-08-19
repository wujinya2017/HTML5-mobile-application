import queryString from 'query-string'
let rootUrl = 'https://www.fastmock.site/mock/1a12bc14a932157f02774c215b5029b6/api';

let myFetch = {
    get(url,queryParams){
        //解析字符串
        url = rootUrl+url;
        if (queryParams) {
            url += "?"+queryString.stringify(queryParams);
        }
        return fetch(url)
                    .then(res=>res.json())
    },
    post(url,body){
        return fetch(rootUrl+url,{
            method:'POST',
            headers:{
                "Accept":'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(body)
        })
            .then(res=>res.json())
            
    }
}

export {myFetch};