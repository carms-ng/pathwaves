const EqualWeb = `
  window.interdeal = {
    "sitekey": "6050992760fa0c0f9679c316e5eff8ab",
    "Position": "Right",
    "Menulang": "EN-CA",
    "domains": {
      "js": "https://cdn.equalweb.com/",
      "acc": "https://access.equalweb.com/"
    },
    "btnStyle": {
      "vPosition": [
        "84%",
        null
      ],
      "scale": [
        "0.7",
        "0.7"
      ],
      "icon": {
        "type": 11,
        "shape": "circle",
        "outline": false
      }
    }
  };
  (function(doc, head, body){
    const coreCall             = doc.createElement('script');
    coreCall.src             = 'https://cdn.equalweb.com/core/3.0.3/accessibility.js';
    coreCall.defer           = true;
    coreCall.integrity       = 'sha512-7eVrsWwFQXxbr/QB7Zt+wVSQqLq8ulYJHplOZ5rv/8cre3RPseIPBmSERndeTFrpHRX8eDnIzwNckqynpi6IfA==';
    coreCall.crossOrigin     = 'anonymous';
    coreCall.setAttribute('data-cfasync', true );
    body? body.appendChild(coreCall) : head.appendChild(coreCall);
  })(document, document.head, document.body);
`
export { EqualWeb }
