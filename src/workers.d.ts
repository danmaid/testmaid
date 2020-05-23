declare module "workerMaid" {
  interface Worker {
    run(arg: {}): Promise<Result>;
  }
  interface Result {
    ok: boolean;
    startTime: Date;
    duration: number;
    result?: any;
    error?: any;
  }
}
