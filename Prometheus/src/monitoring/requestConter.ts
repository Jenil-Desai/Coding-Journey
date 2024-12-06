import { NextFunction, Request, Response } from "express";
import client from "prom-client";

const requestCounter = new client.Counter({
  name: "request_count",
  help: "Total request count",
  labelNames: ["method", "route", "status_code"],
});

const activeUserGauge = new client.Gauge({
  name: "active_users",
  help: "Total Number Of Users Whose Request Hasn't Yet Resolved",
  labelNames: ["method", "route"],
});

export function activeUserCount(req: Request, res: Response, next: NextFunction) {
  activeUserGauge.inc({
    method: req.method,
    route: req.route ? req.route.path : req.path,
  });

  res.on("finish", () => {
    setTimeout(() => {
      activeUserGauge.dec({
        method: req.method,
        route: req.route ? req.route.path : req.path,
      });
    }, 10000);
  });
}

export function requestCount(req: Request, res: Response, next: NextFunction) {
  requestCounter.inc({
    method: req.method,
    route: req.path,
  });
  next();
}
