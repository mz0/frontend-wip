# Java concurrency primitives and building blocks
Manage concurrent access to shared resources and coordinate multiple threads execution. See [Java Language Specification. Chapter 17. Threads and Locks](https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html)

## Low-Level Primitives:
* `synchronized` keyword:
Used to create synchronized blocks or methods, ensuring that only one thread can execute a critical section of code at a time, preventing race conditions.
* `volatile` keyword:
Ensures visibility of changes to a variable across different threads by preventing caching of the variable's value in thread-local memory.
* [`Object.wait()`](https://docs.oracle.com/javase/8/docs/api/index.html), `notify()`, `notifyAll()` methods:
Used for inter-thread communication, allowing threads to wait for a specific condition to be met and be notified when the condition changes. These methods are associated with an object's intrinsic lock.

## `java.util.concurrent` package (since Java 5)

* Locks:
  * `ReentrantLock`: A more flexible alternative to synchronized blocks, offering features like fair lock acquisition, interruptible lock acquisition, and timed lock acquisition.
  * `ReadWriteLock`: Divides access into read and write locks, allowing multiple readers to access a resource concurrently while ensuring exclusive access for writers.
* Synchronizers:
  * Semaphore: Controls access to a limited number of resources by maintaining a set of permits. Threads acquire a permit before accessing the resource and release it afterward.
  * `CountDownLatch`: Allows one or more threads to wait until a set of operations being performed in other threads completes.
  * `CyclicBarrier`: Enables a set of threads to wait for each other to reach a common barrier point before proceeding.
* Concurrent Collections: Thread-safe implementations of common data structures, such as `ConcurrentHashMap`, `ConcurrentLinkedQueue`, and `CopyOnWriteArrayList`, designed for efficient concurrent access.
* Atomic Variables. Classes like `AtomicInteger`, `AtomicLong`, and `AtomicReference` provide atomic operations on single variables, ensuring thread safety without explicit locking for simple operations.
* [Executors](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Executors.html) and *Thread Pools* provide a framework for managing and executing tasks in a pool of threads, improving performance and resource utilization. See `ExecutorService`, `ThreadPoolExecutor`, and `ScheduledExecutorService`.
* [`Future`](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Future.html) and [`CompletableFuture` (since Java 8)](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletableFuture.html): Represent the result of an asynchronous computation, allowing for non-blocking operations and composition of asynchronous tasks.
