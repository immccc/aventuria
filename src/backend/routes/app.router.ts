"use strict";

import { Router, Request, Response, NextFunction } from "express";

export class AppRouter {
  public static configureRouting(router: Router) {
      router.get("/", AppRouter.home);
  }

  private static home(request: Request, response: Response, next: NextFunction) {
    response.render("home");
  }
}
