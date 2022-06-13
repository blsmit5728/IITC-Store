import {run_update} from "./actions.js";
import {get_all_metadata_files} from "./helpers.js";

const metadata_files = get_all_metadata_files();
await run_update(metadata_files);
