import 'reflect-metadata';
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import Database from "~/blog/Database";
import { Job, JobService } from "~/blog/Job";

export const loader: LoaderFunction = async () => {
  const db = await Database.instance();

  const jobRepository = db.getRepository<Job>(Job);

  const service = new JobService(jobRepository);

  const response = await service.findJobs();

  console.log(response)
  return json({});
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
