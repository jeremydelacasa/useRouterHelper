import {useHistory as $2SSWc$useHistory, useParams as $2SSWc$useParams, useLocation as $2SSWc$useLocation, generatePath as $2SSWc$generatePath} from "react-router-dom";


const $c38b013c361dbfdf$var$useRouter = ()=>{
    const history = $2SSWc$useHistory();
    const searchParams = $c38b013c361dbfdf$var$useSearchParams();
    const params = $2SSWc$useParams();
    const location = $2SSWc$useLocation();
    const updateSearchParams = (newParams = {
    }, { stack: stack = "push"  } = {
    })=>{
        history[stack](`${location.pathname}${$c38b013c361dbfdf$var$generateSearchParamsString({
            ...searchParams,
            ...newParams
        })}`);
    };
    const replaceSearchParams = (newParams = {
    }, { stack: stack = "push"  } = {
    })=>{
        history[stack](`${location.pathname}${$c38b013c361dbfdf$var$generateSearchParamsString(newParams)}`);
    };
    const deleteSearchParams = (deleteParamList = [], { stack: stack = "push"  } = {
    })=>{
        history[stack](`${location.pathname}${$c38b013c361dbfdf$var$generateSearchParamsString(Object.keys(searchParams).reduce((acc, cur)=>deleteParamList.includes(cur) ? acc : {
                ...acc,
                [cur]: searchParams[cur]
            }
        , {
        }))}`);
    };
    const push = (url, { params: paramsPushed = {
    } , searchParams: searchParamsPushed = {
    }  } = {
    })=>{
        history.push(`${$2SSWc$generatePath(url, paramsPushed)}${$c38b013c361dbfdf$var$generateSearchParamsString(searchParamsPushed)}`);
    };
    const replace = (url, { params: paramsReplaced = {
    } , searchParams: searchParamsReplaced = {
    } ,  } = {
    })=>{
        history.replace(`${$2SSWc$generatePath(url, paramsReplaced)}${$c38b013c361dbfdf$var$generateSearchParamsString(searchParamsReplaced)}`);
    };
    return {
        updateSearchParams: updateSearchParams,
        replaceSearchParams: replaceSearchParams,
        deleteSearchParams: deleteSearchParams,
        push: push,
        replace: replace,
        params: params,
        searchParams: searchParams,
        location: location
    };
};
const $c38b013c361dbfdf$var$useSearchParams = ()=>{
    const { search: search  } = $2SSWc$useLocation();
    const urlSearchParams = new URLSearchParams(search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return Object.keys(params).reduce((acc, key)=>{
        let value = params[key];
        if (!value) return acc;
        try {
            value = JSON.parse(params[key]);
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
        }
        return {
            ...acc,
            [key]: value
        };
    }, {
    });
};
const $c38b013c361dbfdf$var$generateSearchParamsString = (params)=>`?${Object.keys(params).reduce((acc, cur, index, array)=>{
        const value = params[cur];
        return `${acc}${cur}=${JSON.stringify(value)}${array.length !== index + 1 ? "&" : ""}`;
    }, "")}`
;
var $c38b013c361dbfdf$export$2e2bcd8739ae039 = $c38b013c361dbfdf$var$useRouter;


export {$c38b013c361dbfdf$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=module.js.map
