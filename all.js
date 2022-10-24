
  axios.post('https://account.kkbox.com/oauth2/token')
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });

// function doPost(e){
//     var url = e.parameter.url; // 取得傳入 URL
//     var response = UrlFetchApp.fetch(decodeURIComponent(url),{ // 發出 POST 請求，並設定 hearder json
//       headers: { "Content-type" : "application/x-www-form-urlencoded" }
//     });
//     var data = JSON.parse(response.getContentText()); // 取得 json 資料
//     return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON); 
//   }

// "grant_type":"client_credentials",
//     "client_id":"a474cd1250e4bf50e23a8eb4d73aa03c",
//     "client_secret":"446ac22919d3993d4fd1bd1c1f8c0474"