import { singleton } from "tsyringe";

@singleton()
export class CatTracker {
  private count = 0;

  catAdded(): number {
    return ++this.count;
  }
}