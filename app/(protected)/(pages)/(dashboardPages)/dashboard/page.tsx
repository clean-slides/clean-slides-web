import { getAllProjects } from "@/actions/project"

export default async function dashBoard() {
  const allProjects = await getAllProjects()
  return ( 
      <div className="w-full flex flex-col gap-6 relative">
          <div className="flex flex-col-reverse items-start w-full gap-6 sm:flex-row sm:justify-between sm:items-center">
            <div className="flex flex-col items-start">
                <h1 className="text-3xl font-semibold dark:text-primary pt-2 pb-2">
                    Projects
                </h1>
                <p className="text-base font-normal dark:text-muted-foreground">
                    Your creations, organized in one spot
                </p>
            </div>
          </div>
          {/*TODO: Put {Projects} here*/}
      </div>
  )
}
