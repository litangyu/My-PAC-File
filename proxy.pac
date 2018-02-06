function FindProxyForURL(url, host) {
      if (shExpMatch(url,"mp.weixin.qq.com/*")) {
         return "PROXY localhost:9589; DIRECT";
      }
      
      // All other requests go through port 8080 of proxy.example.com.
      // should that fail to respond, go directly to the WWW:
      return "DIRECT; PROXY localhost:9589";
}