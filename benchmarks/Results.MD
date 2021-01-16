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