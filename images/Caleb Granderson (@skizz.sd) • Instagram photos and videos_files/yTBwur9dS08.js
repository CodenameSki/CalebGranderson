;/*FB_PKG_DELIM*/

__d("PolarisStoriesV3HighlightsPageQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"6931366183618726",metadata:{},name:"PolarisStoriesV3HighlightsPageQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PolarisStoriesV3HighlightsRoot.entrypoint",["JSResourceForInteraction","PolarisStoriesV3HighlightsPageQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b,d=a.passthroughProps,e=a.routeParams.highlight_reel_id;a=a.routeProps.highlight_ids;b="highlight:"+((b=d==null?void 0:d.initialHighlightIdParam)!=null?b:e);d=(e=d==null?void 0:d.highlightIds)!=null?e:a;d!=null?(e="Gallery",a={first:3,initial_reel_id:b,last:2,reel_ids:d}):(e="Standalone",a={first:1,initial_reel_id:b,reel_ids:[b]});return{extraProps:{initialHighlightId:b,variant:e},queries:{query:{parameters:c("PolarisStoriesV3HighlightsPageQuery$Parameters"),variables:a}}}},root:c("JSResourceForInteraction")("PolarisStoriesV3HighlightsRoot.react").__setRef("PolarisStoriesV3HighlightsRoot.entrypoint")};g["default"]=a}),98);
__d("BillingPlatformContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext("desktop");c=b;g["default"]=c}),98);