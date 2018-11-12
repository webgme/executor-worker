## Executor Worker
```npm install```

```npm run build```

```npm start```


Executing Simulation Jobs on the WebGME Server - Executor Setup

While the ability provided by WebGME to edit and easily share models is extremely useful in collaborative design, another crucial part of the design process is evaluating alternative designs, sometimes using simulations.

WebGME supports "remote" execution of simulation "jobs" through the use of a Node-Webkit application.

The executor_worker application runs jobs posted to `src/middleware/executor`. For example, some WebGME plugins create jobs. An executor_worker runs jobs by downloading a blob from the WebGME server, then running a command, then uploading some or all of the produced files to the blob store.

We can set up the "executor_worker" using node-webkit, and configure it to monitor our WebGME server's URL for jobs. The executor_worker may run on a different machine than the WebGME server, but in this example they run on the same machine.

When a job is created on the server, the executor will download the job, run it, and then upload any results to the WebGME server.
