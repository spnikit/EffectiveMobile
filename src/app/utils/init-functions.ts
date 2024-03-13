import {LocalStorageService} from "../services/local-storage.service";
import {LOCAL_ST_TASK_KEY} from "../models/constants";
import {dummyData} from "../models/dummy.model";

export function initLocalStrgTask (lsService: LocalStorageService)  {
  const taskList = lsService.getTaskList(LOCAL_ST_TASK_KEY);

  if (taskList === null) {
    lsService.setTaskList(LOCAL_ST_TASK_KEY, dummyData);
  }
}
