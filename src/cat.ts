import {autoInjectable} from "tsyringe";
import { Logger } from "./logger";
import { CatTracker } from "./config";

@autoInjectable()
export class Cat {
  constructor(private readonly logger?: Logger, private readonly catTracker?: CatTracker) { }

  async createCat(name: string, color: string): Promise<any> {
    this.logger.Log(`name: ${name}. color: ${color}`);
    this.logger.Log(this.catTracker.catAdded());
    return { name, color };
  }
}