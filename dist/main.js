var $k52p8$swchelpers = require("@swc/helpers");
var $k52p8$reactrouterdom = require("react-router-dom");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", function () { return $6be4b30feeb09703$export$2e2bcd8739ae039; });


var $6be4b30feeb09703$var$useRouter = function() {
    var history = $k52p8$reactrouterdom.useHistory();
    var searchParams = $6be4b30feeb09703$var$useSearchParams();
    var params = $k52p8$reactrouterdom.useParams();
    var location = $k52p8$reactrouterdom.useLocation();
    var defaultState = {
        from: "".concat(location.pathname).concat(location.search)
    };
    var updateSearchParams = function(param, param1) {
        var newParams = param === void 0 ? {
        } : param, ref = param1 === void 0 ? {
        } : param1, tmp = ref.stack, stack = tmp === void 0 ? "push" : tmp, state = ref.state;
        history[stack]("".concat(location.pathname).concat($6be4b30feeb09703$var$generateSearchParamsString($k52p8$swchelpers.objectSpread({
        }, searchParams, newParams))), $k52p8$swchelpers.objectSpread({
        }, defaultState, state));
    };
    var replaceSearchParams = function(param, param2) {
        var newParams = param === void 0 ? {
        } : param, ref = param2 === void 0 ? {
        } : param2, tmp = ref.stack, stack = tmp === void 0 ? "push" : tmp, state = ref.state;
        history[stack]("".concat(location.pathname).concat($6be4b30feeb09703$var$generateSearchParamsString(newParams)), $k52p8$swchelpers.objectSpread({
        }, defaultState, state));
    };
    var deleteSearchParams = function(param, param3) {
        var deleteParamList = param === void 0 ? [] : param, ref = param3 === void 0 ? {
        } : param3, tmp = ref.stack, stack = tmp === void 0 ? "push" : tmp, state = ref.state;
        history[stack]("".concat(location.pathname).concat($6be4b30feeb09703$var$generateSearchParamsString(Object.keys(searchParams).reduce(function(acc, cur) {
            return deleteParamList.includes(cur) ? acc : $k52p8$swchelpers.objectSpread({
            }, acc, $k52p8$swchelpers.defineProperty({
            }, cur, searchParams[cur]));
        }, {
        }))), $k52p8$swchelpers.objectSpread({
        }, defaultState, state));
    };
    var push = function(url, param) {
        var ref = param === void 0 ? {
        } : param, tmp = ref.params, paramsPushed = tmp === void 0 ? {
        } : tmp, searchParamsPushed = ref.searchParams, state = ref.state;
        history.push("".concat($k52p8$reactrouterdom.generatePath(url, paramsPushed)).concat(searchParamsPushed ? $6be4b30feeb09703$var$generateSearchParamsString(searchParamsPushed) : ""), $k52p8$swchelpers.objectSpread({
        }, defaultState, state));
    };
    var replace = function(url, param) {
        var ref = param === void 0 ? {
        } : param, tmp = ref.params, paramsReplaced = tmp === void 0 ? {
        } : tmp, searchParamsReplaced = ref.searchParams, state = ref.state;
        history.replace("".concat($k52p8$reactrouterdom.generatePath(url, paramsReplaced)).concat(searchParamsReplaced ? $6be4b30feeb09703$var$generateSearchParamsString(searchParamsReplaced) : ""), $k52p8$swchelpers.objectSpread({
        }, defaultState, state));
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
var $6be4b30feeb09703$var$useSearchParams = function() {
    var search = $k52p8$reactrouterdom.useLocation().search;
    var urlSearchParams = new URLSearchParams(search);
    var params = Object.fromEntries(urlSearchParams.entries());
    return Object.keys(params).reduce(function(acc, key) {
        var value = params[key];
        if (!value) return acc;
        try {
            value = JSON.parse(params[key]);
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
        }
        return $k52p8$swchelpers.objectSpread({
        }, acc, $k52p8$swchelpers.defineProperty({
        }, key, value));
    }, {
    });
};
var $6be4b30feeb09703$var$generateSearchParamsString = function(params) {
    return "?".concat(Object.keys(params).reduce(function(acc, cur, index, array) {
        var value = params[cur];
        return "".concat(acc).concat(cur, "=").concat(JSON.stringify(value)).concat(array.length !== index + 1 ? "&" : "");
    }, ""));
};
var $6be4b30feeb09703$export$2e2bcd8739ae039 = $6be4b30feeb09703$var$useRouter;


//# sourceMappingURL=main.js.map
