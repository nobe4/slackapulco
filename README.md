# slackapulco

### Execute js from Slack

`/js log(1+1);done();`

`/js (function a(n,n1,m){m == 10 ? done():log(n),a(n1,n+n1,m+1);})(0,1,1);`

`/js log(new Date());done();`

# Installation 

* Add a new slack command, get the `Token`.
* Start the node server with process.env.TOKEN.
* In the slack command set the Url of your server.
* `/js log('hello world !');done();`
