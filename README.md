# baseline-checker

This is a fork of [scribu's baseline checker](http://scribu.net/util/baseline-checker-bookmarklet.html).

In contrast the to above project this fork serves the bookmarklet via SSL which enables you to check the baseline on pages served with SSL.

Thanks to [raw.githack.com](https://githack.com/) for serving raw GitHub files with correct MIME types.

In your browser, create a new bookmark and paste the following in the address/URL field:

```js
javascript:void function(){if("function"==typeof baseline_checker_bookmarklet)return baseline_checker_bookmarklet();var e=document.createElement("script");e.type="text/javascript",e.src="https://raw.githack.com/agross/baseline-checker/master/load.js?v="+Math.random(),e.id="baseline-checker-loader",document.getElementsByTagName("head")[0].appendChild(e)}();
