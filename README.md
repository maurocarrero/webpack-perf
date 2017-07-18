# Optimizing a minimal webpack project

**Environment**: *Good 3G, 40 ms, 1.25 Mb/s, 750 kb/s*

### Without tuning:

##### Summary

```
Requests: 4
Transferred: 2.2 MB
Finish: 11.91 s
DOMContentLoaded: 9.58 s
Load: 11.91 s
```

##### Assets:
```
Version: webpack 1.15.0
Time: 2253ms
           Asset     Size  Chunks             Chunk Names
Kakashi_Anbu.png   450 kB          [emitted]
       bundle.js  1.85 MB       0  [emitted]  app
    + 575 hidden modules
```

### Split vendor chunk

### Extract css file

### Dedupe

### Uglify

### Production Build

### Preact with preact-compat alias

### Lodash module 

### Imagemin compression

##### Summary
```
Requests: 6
Transferred: 524 KB
Finish: 2.91 s
DOMContentLoaded: 951 ms
Load: 2.91 ms
```

##### Files:
```
vendor.js           148 KB  851 ms
bundle.js           3.3 KB  95 ms
style.css           221 B   50 ms
Kakashi_Anbu.png    370 KB  1.97 s
```


