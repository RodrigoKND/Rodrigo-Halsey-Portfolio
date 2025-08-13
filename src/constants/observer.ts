export const keys = [
    {
        key: "experience",
        icon: '<span class="icon-experience material-icons-outlined text-green-300">work_history</span>',
    },
    {
        key: "projects",
        icon: '<span class="icon-projects material-icons-round text-green-300">laptop_chromebook</span>',
    },
    {
        key: "about_me",
        icon: '<span class="icon-about_me material-icons-sharp text-green-300">person_outline</span>',
    },
    {
        key: "skills",
        icon: '<span class="icon-skills material-icons-outlined text-green-300">auto_awesome</span>',
    },
] as const;

export const optionsObserver = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
};