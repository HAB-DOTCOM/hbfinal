// 'use strict';

// self.addEventListener('push', function(event) {
//   console.log('Received a push message', event);

//   var title = 'Yay a message.';
//   var body = 'We have received a push message.';
//   // var icon = '/images/icon-192x192.png';
//   var tag = 'simple-push-demo-notification-tag';

//   event.waitUntil(
//     self.registration.showNotification(title, {
//       body: body,
//       icon: icon,
//       tag: tag
//     })
//   );
// });

// self.addEventListener('notificationclick', function(event) {
//   console.log('On notification click: ', event.notification.tag);
//   // Android doesn’t close the notification when you click on it
//   // See: http://crbug.com/463146
//   event.notification.close();

//   // This looks to see if the current is already open and
//   // focuses if it is
//   event.waitUntil(clients.matchAll({
//     type: 'window'
//   }).then(function(clientList) {
//     for (var i = 0; i < clientList.length; i++) {
//       var client = clientList[i];
//       if (client.url === '/' && 'focus' in client) {
//         return client.focus();
//       }
//     }
//     if (clients.openWindow) {
//       return clients.openWindow('/');
//     }
//   }));
// });




// /* eslint eqeqeq: "off", curly: "error" */
// 'use strict';


self.addEventListener('push', () => {
  self.registration.sendNotification('test message', {});
});




// function isFunction(obj) {
//   return obj && {}.toString.call(obj) === '[object Function]';
// }

// function runFunctionString(funcStr) {
//   if (funcStr.trim().length > 0) {
//     var func = new Function(funcStr);
//     if (isFunction(func)) {
//       func();
//     }
//   }
// }

// self.addEventListener('message', function (event) {
//   self.client = event.source;
// });

// self.onnotificationclose = function (event) {
//   runFunctionString(event.notification.data.onClose);

//   /* Tell Push to execute close callback */
//   self.client.postMessage(JSON.stringify({
//     id: event.notification.data.id,
//     action: 'close'
//   }));
// }

// self.onnotificationclick = function (event) {
//   var link, origin, href;

//   if (typeof event.notification.data.link !== 'undefined' && event.notification.data.link !== null) {
//     origin = event.notification.data.origin;
//     link = event.notification.data.link;
//     href = origin.substring(0, origin.indexOf('/', 8)) + '/';

//     /* Removes prepending slash, as we don't need it */
//     if (link[0] === '/') {
//         link = (link.length > 1) ? link.substring(1, link.length) : '';
//     }

//     event.notification.close();

//     /* This looks to see if the current is already open and focuses if it is */
//     event.waitUntil(clients.matchAll({
//       type: "window"
//     }).then(function (clientList) {
//       var client, full_url;

//       for (var i = 0; i < clientList.length; i++) {
//         client = clientList[i];
//         full_url = href + link;

//         /* Covers case where full_url might be http://example.com/john and the client URL is http://example.com/john/ */
//         if (full_url[full_url.length - 1] !== '/' && client.url[client.url.length - 1] === '/') {
//           full_url += '/';
//         }

//         if (client.url === full_url && 'focus' in client){
//           return client.focus();
//         }
//       }

//       if (clients.openWindow) {
//         return clients.openWindow('/' + link);
//       }
//     }).catch(function (error) {
//       throw new Error("A ServiceWorker error occurred: " + error.message);
//     }));
//   }

//   runFunctionString(event.notification.data.onClick);
// }
