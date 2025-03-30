

```js
┌────────┐      ┌────────┐       ┌─────────┐       ┌────────────┐
│ Client │      │ Server │       │ Database│       │Other Client│
└───┬────┘      └───┬────┘       └────┬────┘       └──────┬─────┘
    │               │                  │                    │
    │──connect─────>│                  │                    │
    │               │                  │                    │
    │               │──setOnline──────>│                    │
    │               │                  │                    │
    │──sendMessage─>│                  │                    │
    │               │──saveMessage────>│                    │
    │               │                  │                    │
    │               │─────receiveMsg───┼───────────────────>│
    │               │                  │                    │
    │──disconnect──>│                  │                    │
    │               │──setOffline─────>│                    │
```