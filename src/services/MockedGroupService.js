import groups from "../scripts/groups.js";

class MockedGroupService {
  constructor() {
    this.data = groups;
  }
  getGroups() {
    return this.data;
  }
  add(group) {
    this.data.push(group);
  }
}

export default MockedGroupService;
