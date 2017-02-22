export default {
  entry: 'index.js',
  dest: 'bundles/angular2-esri4.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.angular2Esri4',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    'rxjs/Observable': 'Rx',
    'rxjs/ReplaySubject': 'Rx',
    'rxjs/add/operator/map': 'Rx.Observable.prototype',
    'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
    'rxjs/add/operator/pluck': 'Rx.Observable.prototype',
    'rxjs/add/operator/first': 'Rx.Observable.prototype',
    'rxjs/add/observable/fromEvent': 'Rx.Observable',
    'rxjs/add/observable/merge': 'Rx.Observable',
    'rxjs/add/observable/throw': 'Rx.Observable',
    'rxjs/add/observable/of': 'Rx.Observable'
  }
}