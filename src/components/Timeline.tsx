import { Timeline, type TimelineEntry } from "./ui/timeline"

export function TimelineComponent() {
  const data: TimelineEntry[] = [
    {
      title: "Early 2023",
      content: (
        <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-l md:text-xl font-bold mb-4">
            Junior Software Developer
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Finished my Trainee and started to work as a Full Stack Developer in a Scrumteam of 15 People.
          </p>
        </div>
      ),
    },
    {
      title: "Late 2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-l md:text-xl font-bold mb-4">
            Java Trainee
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Stated my work at Materna Information & Communications SE as a Java Trainee
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Worked with other Trainees together and learned about Java, Spring Boot and the basics of Web Development.
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-l md:text-xl font-bold mb-4">
            Computer Science Expert
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-m md:text-sm font-normal mb-4">
            Subject Area: System Integration
          </p>

          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                Completion of my training at the Technical University in Darmstadt
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="timeline">
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </section>
  )
}

