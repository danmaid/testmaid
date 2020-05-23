import { Worker, Result } from "workerMaid";
import { promise as ping, PingConfig } from "ping";

export class PingWorker implements Worker {
  async run({
    host,
    config
  }: {
    host: string;
    config?: PingConfig;
  }): Promise<Result> {
    const startTime = new Date();
    try {
      const result = await ping.probe(host, config);
      return {
        ok: result.alive,
        startTime,
        duration: new Date().getTime() - startTime.getTime(),
        result
      };
    } catch (error) {
      return {
        ok: false,
        startTime,
        duration: new Date().getTime() - startTime.getTime(),
        error
      };
    }
  }
}
