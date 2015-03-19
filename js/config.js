/*var qa_protocolo = localStorage.getItem('qa_protocolo', qa_protocolo);
var qa_ip = localStorage.getItem('qa_ip', qa_ip);
var qa_http = localStorage.getItem('qa_http', qa_http);
var qa_https = localStorage.getItem('qa_https', qa_https);

var config = {
    PROTOCOLO: qa_protocolo,
    IP: qa_ip,
    ENDPOINT_HTTP: qa_http,
    ENDPOINT_HTTPS: qa_https
};*/

/*
var config = {
    PROTOCOLO: "https",
    IP: "qa3-portal.gvt.com.br",
    ENDPOINT_HTTP: "https://qa3-portal.gvt.com.br/portal/site/minhagvtmobile",
    ENDPOINT_HTTPS: "https://qa3-portal.gvt.com.br/portal/site/minhagvtmobile"
};
*/


var config = {
    PROTOCOLO: "https",
    IP: "www.gvt.com.br",
    ENDPOINT_HTTP: "https://www.gvt.com.br/portal/site/minhagvtmobile/",
    ENDPOINT_HTTPS: "https://www.gvt.com.br/portal/site/minhagvtmobile/"
};


/*

var config = {
    PROTOCOLO: "http",
    IP: "http://172.31.6.157",
    ENDPOINT_HTTP: "http://172.31.6.157:8001/portal/site/minhagvtmobile/",
    ENDPOINT_HTTPS: "http://172.31.6.157:8001/portal/site/minhagvtmobile/"
};

*/

/*
var config = {
    PROTOCOLO: "http",
    IP: "http://dev-mgmt.gvt.net.br",
    ENDPOINT_HTTP: "http://dev-mgmt.gvt.net.br:8001/portal/site/minhagvtmobile/",
    ENDPOINT_HTTPS: "http://dev-mgmt.gvt.net.br:8001/portal/site/minhagvtmobile/"
};
*/

window.environment_config = config;