# Sapper Fyrejet Template Benchmarks

Benchmarks run using [WRK](https://github.com/wg/wrk):

```
wrk -t8 -c64 -d20s http://localhost:3000 
```

## Default Template Baseline Performance (Polka)
* Test 1:
```
cryptodeal@Jamess-MBP Desktop % wrk -t8 -c64 -d20s http://localhost:3000                   
Running 20s test @ http://localhost:3000
  8 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     7.71ms    2.57ms  71.05ms   93.89%
    Req/Sec     1.06k   160.34     1.21k    91.75%
  168819 requests in 20.04s, 367.24MB read
Requests/sec:   8425.82
Transfer/sec:     18.33MB
```
* Test 2:
```
cryptodeal@Jamess-MBP Desktop % wrk -t8 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  8 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     7.79ms    2.61ms  61.41ms   92.77%
    Req/Sec     1.05k   178.24     1.49k    90.88%
  167045 requests in 20.04s, 363.38MB read
Requests/sec:   8336.17
Transfer/sec:     18.13MB
```
* Test 3: 
```
cryptodeal@Jamess-MBP Desktop % wrk -t8 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  8 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     7.49ms    2.00ms  50.50ms   91.03%
    Req/Sec     1.08k   144.38     1.21k    90.44%
  172246 requests in 20.03s, 374.69MB read
Requests/sec:   8598.39
Transfer/sec:     18.70MB
```
* Test 4: 
```
cryptodeal@Jamess-MBP Desktop % wrk -t8 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  8 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     7.09ms    1.13ms  22.09ms   80.09%
    Req/Sec     1.13k    58.09     1.21k    71.94%
  180576 requests in 20.03s, 392.81MB read
Requests/sec:   9016.90
Transfer/sec:     19.61MB
```
* Test 5: 
```
cryptodeal@Jamess-MBP Desktop % wrk -t8 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  8 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     8.28ms    2.42ms  67.96ms   91.63%
    Req/Sec     0.98k   134.79     1.16k    80.75%
  156079 requests in 20.04s, 339.52MB read
Requests/sec:   7788.59
Transfer/sec:     16.94MB
```

## Fyrejet Mode (max perf): api
* Test 1:
```
cryptodeal@Jamess-MBP Desktop % wrk -t8 -c64 -d20s http://localhost:3000            
Running 20s test @ http://localhost:3000
  8 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     8.29ms    2.45ms  46.20ms   86.46%
    Req/Sec     0.97k   135.13     1.50k    83.75%
  155437 requests in 20.04s, 331.01MB read
Requests/sec:   7757.14
Transfer/sec:     16.52MB
```
* Test 2:
```
cryptodeal@Jamess-MBP Desktop % wrk -t8 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  8 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     8.20ms    2.35ms  45.08ms   83.86%
    Req/Sec     0.98k   126.63     1.13k    88.06%
  157006 requests in 20.03s, 334.35MB read
Requests/sec:   7838.42
Transfer/sec:     16.69MB
```
* Test 3:
```
cryptodeal@Jamess-MBP Desktop % wrk -t8 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  8 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     8.02ms    1.87ms  30.25ms   79.57%
    Req/Sec     1.00k    64.76     1.13k    76.31%
  159872 requests in 20.03s, 340.46MB read
Requests/sec:   7982.02
Transfer/sec:     17.00MB
```
* Test 4:
```
cryptodeal@Jamess-MBP Desktop % wrk -t8 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  8 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     7.94ms    1.85ms  34.41ms   79.47%
    Req/Sec     1.01k    63.45     1.83k    79.38%
  161498 requests in 20.04s, 343.92MB read
Requests/sec:   8059.34
Transfer/sec:     17.16MB
```
* Test 5:
```
cryptodeal@Jamess-MBP Desktop % wrk -t8 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  8 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     8.07ms    1.91ms  31.04ms   79.26%
    Req/Sec     1.00k    64.38     1.13k    78.19%
  158814 requests in 20.03s, 338.20MB read
Requests/sec:   7927.16
Transfer/sec:     16.88MB
```

## Fyrejet Mode (max compat): properties as functions 
* Test 1:
```
cryptodeal@Jamess-MBP Desktop % wrk -t8 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  8 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     9.00ms    2.45ms  44.07ms   87.27%
    Req/Sec     0.90k   111.97     1.05k    90.75%
  143034 requests in 20.04s, 304.60MB read
Requests/sec:   7136.29
Transfer/sec:     15.20MB
```
* Test 2:
```
cryptodeal@Jamess-MBP Desktop % wrk -t8 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  8 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     9.53ms    2.95ms  52.55ms   89.48%
    Req/Sec   849.37    127.69     1.05k    83.50%
  135508 requests in 20.05s, 288.57MB read
Requests/sec:   6757.87
Transfer/sec:     14.39MB
```
* Test 3:
```
cryptodeal@Jamess-MBP Desktop % wrk -t8 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  8 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     8.86ms    2.36ms  43.11ms   84.24%
    Req/Sec     0.91k    95.30     1.05k    84.56%
  144787 requests in 20.03s, 308.33MB read
Requests/sec:   7228.02
Transfer/sec:     15.39MB
```
* Test 4:
```
cryptodeal@Jamess-MBP Desktop % wrk -t8 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  8 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     8.98ms    2.00ms  34.29ms   80.40%
    Req/Sec     0.89k    67.60     1.05k    66.44%
  142705 requests in 20.04s, 303.90MB read
Requests/sec:   7120.88
Transfer/sec:     15.16MB
```
* Test 5:
```
cryptodeal@Jamess-MBP Desktop % wrk -t8 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  8 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     8.79ms    2.38ms  42.44ms   83.44%
    Req/Sec     0.92k   103.21     2.05k    82.19%
  146034 requests in 20.04s, 310.99MB read
Requests/sec:   7285.94
Transfer/sec:     15.52MB
```