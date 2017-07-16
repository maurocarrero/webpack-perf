# Optimizing a minimal webpack project

**Environment**: *Good 3G, 40 ms, 1.25 Mb/s, 750 kb/s*

### Without tuning:

##### Summary
```
Requests: 3
Transferred: 1.1 MB
Finish: 5.88 s
DOMContentLoaded: 5.86 s
Load: 5.87 s
```

##### Files:
```
bundle.js   1.1 MB  5.75 s
```

### Split vendor chunk

##### Summary
```
Requests: 4
Transferred: 1.1 MB
Finish: 5.90 s
DOMContentLoaded: 5.87 s
Load: 5.89 s
```

##### Files:
```
vendor.js   1.1 MB  5.77 s
bundle.js   18.5 KB  1.74 s
```

### Extract css file

##### Summary
```
Requests: 5
Transferred: 1.1 MB
Finish: 5.83 s
DOMContentLoaded: 5.81 s
Load: 5.81 s
```

##### Files:
```
vendor.js   1.1 MB  5.77 s
bundle.js   3.2 KB  1.74 s
style.css   221 B   49 ms
```

### Dedupe

##### Summary
```
Requests: 5
Transferred: 1.1 MB
Finish: 5.78 s
DOMContentLoaded: 5.76 s
Load: 5.76 s
```

##### Files:
```
vendor.js   1.0 MB  5.65 s
bundle.js   3.2 KB  1.59 s
style.css   221 B   45 ms
```

### Uglify

##### Summary
```
Requests: 5
Transferred: 280 KB
Finish: 1.65 s
DOMContentLoaded: 1.63 s
Load: 1.63 s
```

##### Files:
```
vendor.js   277 KB  1.52 s
bundle.js   1.6 KB  80 ms
style.css   221 B   51 ms
```

### PRODUCTION BUILD

##### Summary
```
Requests: 5
Transferred: 203 KB
Finish: 1.24 s
DOMContentLoaded: 1.22 s
Load: 1.22 s
```

##### Files:
```
vendor.js   201 KB  1.11 s
bundle.js   1.6 KB  74 ms
style.css   221 B   44 ms
```

### PREACT with preact-compat alias

##### Summary
```
Requests: 5
Transferred: 80.6 KB
Finish: 568 ms
DOMContentLoaded: 563 ms
Load: 562 ms
```

##### Files:
```
vendor.js   78.3 KB  477 ms
bundle.js   1.6 KB  80 ms
style.css   221 B   51 ms
```

### Lodash and Images

##### Summary
```
Requests: 6
Transferred: 593 KB
Finish: 3.27 s
DOMContentLoaded: 941 ms
Load: 3.27 ms
```

##### Files:
```
vendor.js           148 KB  844 ms
bundle.js           3.3 KB  88 ms
style.css           221 B   43 ms
Kakashi_Anbu.png    440 KB  2.33 s
```

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


