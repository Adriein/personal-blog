"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobService = void 0;
class JobService {
    constructor(repository) {
        this.repository = repository;
    }
    async findJobs() {
        return await this.repository.find();
    }
    async registerJob(job) {
        await this.repository.save(job);
    }
}
exports.JobService = JobService;
//# sourceMappingURL=JobService.js.map