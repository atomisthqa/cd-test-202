import { Project } from "@atomist/rug/model/Project";
import { Given, When, Then, ProjectScenarioWorld } from "@atomist/rug/test/project/Core";

When("TEst for TEst should create a new project based on this archive", (p, world) => {
    let psworld = world as ProjectScenarioWorld;
    let generator = psworld.generator("TEst");

    psworld.generateWith(generator, "new-test-project", {});
});

Then("fileExists README md for TEst should create a new project based on this archive", (p, world) => {

    return p.fileExists("README.md");
});
