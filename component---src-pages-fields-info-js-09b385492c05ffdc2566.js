(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"5eIs":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(a("q1tI")),n=i(a("7vrA")),d=a("Wbzz");function i(e){return e&&e.__esModule?e:{default:e}}a("HJ1d");const c=0,r=1,u=2,f=(e,t,a)=>{const n="style-"+t,d=l.default.createElement("div",{className:"info-card"},l.default.createElement("div",{className:"info-title"},e.info_title),l.default.createElement("div",{className:"info-date"},e.info_date),l.default.createElement("div",{className:"info-content"},e.info_content)),i=l.default.createElement("div",{className:"info-card-decoration"},l.default.createElement("img",{src:a}));let f;return t===c?f=l.default.createElement(l.default.Fragment,null,d,i):t===r?f=l.default.createElement(l.default.Fragment,null,i,d):t===u&&(f=l.default.createElement(l.default.Fragment,null,i,l.default.createElement("div",{className:"info-card"},l.default.createElement("div",{className:"card-title-section"},l.default.createElement("div",null,l.default.createElement("div",{className:"info-title"},e.info_title),l.default.createElement("div",{className:"info-date"},e.info_date)),l.default.createElement("div",{className:"left-quote"},"“")),l.default.createElement("div",{className:"info-content"},e.info_content)))),l.default.createElement("div",{className:"field-info-card "+n},l.default.createElement("div",{className:"card-inner-container"},f))};t.default=()=>{const e=(0,d.useStaticQuery)("3755076797"),t=e.allPrismicFieldinfoblock.edges,a=e.prismicFieldinfopage,i=a.data.background_01,s=a.data.background_02,o=a.data.field_info_group.map(e=>e.field_info_block.id).map(e=>t.filter(t=>t.node.prismicId===e)[0].node.data);let m=null;if(o.length%2==1){const e=o.pop();m=f(e,u,i.url)}const E=[c,r,r,c],v=o.map((e,t)=>{const a=E[t%E.length],l=0===a?s.url:i.url;return f(e,a,l)});return l.default.createElement(n.default,{className:"field-info-body-container"},l.default.createElement("div",{className:"field-info-columns"},v,m))}},"7F2E":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=d(a("q1tI")),n=d(a("YSoz"));function d(e){return e&&e.__esModule?e:{default:e}}t.default=()=>l.default.createElement(n.default,null)},HJ1d:function(e,t,a){},OkDC:function(e,t,a){},YSoz:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r(a("q1tI")),n=r(a("5eIs")),d=r(a("iEzi")),i=r(a("B1WW")),c=r(a("Veah"));function r(e){return e&&e.__esModule?e:{default:e}}t.default=()=>l.default.createElement(l.default.Fragment,null,l.default.createElement(c.default,null),l.default.createElement(d.default,null),l.default.createElement(n.default,null),l.default.createElement(i.default,null))},iEzi:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,n=a("q1tI"),d=(l=n)&&l.__esModule?l:{default:l},i=a("Wbzz");a("OkDC");t.default=()=>{const e=(0,i.useStaticQuery)("1712566939").prismicFieldinfopage.data,t=e.banner_left.url,a=e.page_title,l=e.page_subtitle,n=e.page_title_english;return d.default.createElement("div",{className:"fields-info-top"},d.default.createElement("div",{className:"left-container"},(e=>{const{brannerLeftURL:t}=e;return d.default.createElement("div",{className:"banner-image-container"},d.default.createElement("img",{src:t}))})({brannerLeftURL:t})),d.default.createElement("div",{className:"right-container"},(e=>{const{pageTitle:t,pageSubtitle:a,pageTitleEnglish:l}=e;return d.default.createElement("div",{className:"banner-text-container"},d.default.createElement("div",{className:"banner-text-left"},d.default.createElement("div",{className:"banner-title"},t),d.default.createElement("div",{className:"banner-subtitle"},a)),d.default.createElement("div",{className:"banner-title-english"},l))})({pageTitle:a,pageSubtitle:l,pageTitleEnglish:n})))}}}]);
//# sourceMappingURL=component---src-pages-fields-info-js-09b385492c05ffdc2566.js.map