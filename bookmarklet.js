// Process this code  with http://chriszarate.github.io/bookmarkleter/

if (typeof(baseline_checker_bookmarklet) === 'function') {
  return baseline_checker_bookmarklet();
}

var js = document.createElement('script');
js.type = 'text/javascript';
js.src = 'https://raw.githack.com/agross/baseline-checker/master/load.js?v=' + Math.random();
js.id = 'baseline-checker-loader';
document.getElementsByTagName('head')[0].appendChild(js);
