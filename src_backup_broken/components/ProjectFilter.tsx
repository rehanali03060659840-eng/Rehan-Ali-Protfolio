export type ProjectFilterValue = "All" | "Frontend" | "Backend" | "Full Stack";
const filters: ProjectFilterValue[] = [
    "All",
    "Frontend",
    "Backend",
    "Full Stack",
];
export function ProjectFilter({ value, onChange, }: {
    value: ProjectFilterValue;
    onChange: (value: ProjectFilterValue) => void;
}) {
    return (<div className="filter-list" aria-label="Filter projects" style={{
        display: "flex",
        flexWrap: "wrap"
    }}>
      {filters.map((filter) => (<button type="button" aria-pressed={value === filter} className={value === filter ? "filter-active" : ""} key={filter} onClick={() => onChange(filter)} style={{
            font: "inherit",
            WebkitTapHighlightColor: "transparent",
            cursor: "pointer",
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "3px",
            transition: "0.2s",
            borderColor: value === filter ? "rgba(164, 151, 255, 0.22)" : "transparent"
        }}>
          {filter}
        </button>))}
    </div>);
}
