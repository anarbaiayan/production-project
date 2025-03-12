import { Configuration as devServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";
import { truncate } from "fs";

export function builDevServer(options: BuildOptions): devServerConfiguration{
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true
  }
}