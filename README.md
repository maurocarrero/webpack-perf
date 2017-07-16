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
