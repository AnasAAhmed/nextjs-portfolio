import { Award, Calendar, LucideIcon } from "lucide-react";

type EducationItemType = {
    logo: string;
    institution: string;
    field: string;
    heading?: string;
    date: string;
    grade?: string;
    activities?: string;
    skills?: string;
    whatILearn?: {
        title: string;
        desc: string;
        phase: string;
        Icon: LucideIcon;
        status?: string;
    }[]
}

function EducationItem({
    logo,
    heading,
    institution,
    field,
    date,
    grade,
    activities,
    skills,
    whatILearn,
}: EducationItemType) {
    return (
        <section className="bg-primary/5 backdrop-blur-sm rounded-xl p-4 border border-primary/10 spacse-y-6">
            <h2 className="text-2xl font-semibold text-primary/90 mb-4">{heading ? heading : "Education"}</h2>
            <div className="flex flex-col gap-4 border-b border-primary/10 pbs-4 last:border-none">

                <div className="flex max-sm:flex-col gap-4 border-b border-primary/10 pb-4 last:border-none">
                    <img
                        src={logo}
                        alt={institution}
                        className="w-14 h-14 rounded-xl object-cover bg-secondary p-1"
                    />
                    <div className="flex-1">
                        <h3 className="text-lg text-primary/90 font-semibold">{institution}</h3>
                        <p className="text-sm text-primary/70">{field}</p>

                        <div className="flex flex-wrap gap-4 text-xs text-primary/70 mt-1">
                            <div className="flex items-center gap-1">
                                <Calendar size={14} /> {date}
                            </div>
                            {grade && (
                                <div className="flex items-center gap-1">
                                    <Award size={14} /> Grade: {grade}
                                </div>
                            )}
                        </div>

                        {activities && (
                            <p className="text-sm text-primary/80 mt-2">
                                <strong className="text-primary">Activities & Societies: </strong>
                                {activities}
                            </p>
                        )}

                        {skills && (
                            <p className="text-sm text-primary/80 mt-1">
                                <strong className="text-primary">Skills: </strong>
                                {skills}
                            </p>
                        )}
                    </div>
                </div>
                {whatILearn && <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center border-b border-primary/10 pbs-4 last:border-none">
                    {whatILearn.map((i, _) => (
                        <div key={_} className="bg-primary/5 rounded-xl w-full masx-w-sm p-4 border border-primary/10">
                            <div className="flex items-center gap-3 mb-2">
                                <i.Icon />
                                <h4 className="font-medium text-primary">{i.title}</h4>
                            </div>
                            <p className="text-sm text-primary/70 mb-2">{i.desc}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-primary/60">{i.phase}</span>
                                <span
                                    style={{ backgroundColor: i.status === 'complete' ? 'color-mix(in oklab, var(--color-green-500) /* oklch(72.3% 0.219 149.579) */ 20%, transparent)' : 'color-mix(in oklab, var(--color-blue-500) /* oklch(62.3% 0.214 259.815) */ 20%, transparent)' }}
                                    className="text-xs text-primary/80 px-2 py-1 rounded-full"
                                >
                                    {i.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>}
            </div>
        </section>
    );
}

export default EducationItem
