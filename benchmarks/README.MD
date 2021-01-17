# Sapper Fyrejet Template Benchmarks

Benchmarks run using [WRK](https://github.com/wg/wrk):

```
wrk -t6 -c64 -d20s http://localhost:3000 
```

## Default Template Baseline Performance (Polka)
### Average across 5 tests:
Requests/sec: 2619.732
Transfer/sec: 5.7MB

* Test 1:
```
cryptodeal@Jamess-MacBook-Pro ~ % wrk -t6 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  6 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    45.20ms  121.67ms   1.06s    96.19%
    Req/Sec   443.79    133.92   777.00     63.35%
  50868 requests in 20.06s, 110.65MB read
Requests/sec:   2536.39
Transfer/sec:      5.52MB
```
* Test 2:
```
cryptodeal@Jamess-MacBook-Pro ~ % wrk -t6 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  6 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    45.01ms  119.84ms   1.02s    96.22%
    Req/Sec   437.19    107.32   797.00     71.38%
  50209 requests in 20.06s, 109.22MB read
Requests/sec:   2503.48
Transfer/sec:      5.45MB
```
* Test 3: 
```
cryptodeal@Jamess-MacBook-Pro ~ % wrk -t6 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  6 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    43.36ms  121.30ms   1.03s    96.20%
    Req/Sec   480.72    122.96   777.00     68.94%
  55139 requests in 20.07s, 119.95MB read
Requests/sec:   2747.91
Transfer/sec:      5.98MB
```
* Test 4: 
```
cryptodeal@Jamess-MacBook-Pro ~ % wrk -t6 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  6 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    42.85ms  120.05ms   1.03s    96.24%
    Req/Sec   484.12    125.79   810.00     65.79%
  55608 requests in 20.05s, 120.97MB read
Requests/sec:   2773.31
Transfer/sec:      6.03MB
```
* Test 5: 
```
cryptodeal@Jamess-MacBook-Pro ~ % wrk -t6 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  6 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    23.79ms    9.27ms  93.42ms   75.58%
    Req/Sec   424.96     92.52   747.00     67.67%
  50842 requests in 20.04s, 110.60MB read
Requests/sec:   2537.57
Transfer/sec:      5.52MB
```

## Fyrejet Mode (max perf): api
### Average across 5 tests:
Requests/sec: 2653.126
Transfer/sec: 5.65MB

* Test 1:
```
cryptodeal@Jamess-MacBook-Pro ~ % wrk -t6 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  6 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    44.74ms  122.40ms   1.05s    96.18%
    Req/Sec   455.98    105.59   757.00     68.79%
  52277 requests in 20.06s, 111.33MB read
Requests/sec:   2606.60
Transfer/sec:      5.55MB
```
* Test 2:
```
cryptodeal@Jamess-MacBook-Pro ~ % wrk -t6 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  6 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    21.77ms    8.54ms  82.36ms   74.38%
    Req/Sec   464.37     95.31   797.00     66.83%
  55547 requests in 20.03s, 118.29MB read
Requests/sec:   2773.12
Transfer/sec:      5.91MB
```
* Test 3:
```
cryptodeal@Jamess-MacBook-Pro ~ % wrk -t6 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  6 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    22.08ms    9.04ms  94.18ms   73.57%
    Req/Sec   458.50    111.51   770.00     65.50%
  54853 requests in 20.03s, 116.81MB read
Requests/sec:   2738.51
Transfer/sec:      5.83MB
```
* Test 4:
```
cryptodeal@Jamess-MacBook-Pro ~ % wrk -t6 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  6 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    45.18ms  120.84ms   1.04s    96.18%
    Req/Sec   439.13    109.60   737.00     68.44%
  50390 requests in 20.06s, 107.31MB read
Requests/sec:   2512.48
Transfer/sec:      5.35MB
```
* Test 5:
```
cryptodeal@Jamess-MacBook-Pro ~ % wrk -t6 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  6 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    44.23ms  121.14ms   1.03s    96.19%
    Req/Sec   461.14    114.82   747.00     67.98%
  52812 requests in 20.04s, 112.47MB read
Requests/sec:   2634.92
Transfer/sec:      5.61MB
```

## Fyrejet Mode (max compat): properties as functions 
### Average across 5 tests:
Requests/sec: 2418.558
Transfer/sec: 5.148MB

* Test 1:
```
cryptodeal@Jamess-MacBook-Pro ~ % wrk -t6 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  6 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    22.88ms    9.67ms  95.37ms   80.03%
    Req/Sec   443.22    112.76   720.00     64.33%
  53040 requests in 20.05s, 112.95MB read
Requests/sec:   2645.29
Transfer/sec:      5.63MB
```
* Test 2:
```
cryptodeal@Jamess-MacBook-Pro ~ % wrk -t6 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  6 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    22.98ms    8.93ms  99.18ms   76.09%
    Req/Sec   439.85     95.29   680.00     66.00%
  52610 requests in 20.03s, 112.04MB read
Requests/sec:   2626.54
Transfer/sec:      5.59MB
```
* Test 3:
```
cryptodeal@Jamess-MacBook-Pro ~ % wrk -t6 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  6 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    46.64ms  121.79ms   1.04s    96.17%
    Req/Sec   417.70    107.01   696.00     65.53%
  47822 requests in 20.07s, 101.84MB read
Requests/sec:   2383.10
Transfer/sec:      5.07MB
```
* Test 4:
```
cryptodeal@Jamess-MacBook-Pro ~ % wrk -t6 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  6 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    47.06ms  120.50ms   1.03s    96.19%
    Req/Sec   403.35     80.58   676.00     69.28%
  46331 requests in 20.05s, 98.66MB read
Requests/sec:   2310.40
Transfer/sec:      4.92MB
```
* Test 5:
```
cryptodeal@Jamess-MacBook-Pro ~ % wrk -t6 -c64 -d20s http://localhost:3000
Running 20s test @ http://localhost:3000
  6 threads and 64 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    49.31ms  120.98ms   1.03s    96.17%
    Req/Sec   372.01     73.50   640.00     75.04%
  42688 requests in 20.07s, 90.91MB read
Requests/sec:   2127.46
Transfer/sec:      4.53MB
```
