document
    .querySelectorAll(".tabLink").forEach(tabLink => {
        tabLink.addEventListener('click', (event) => {
            event.preventDefault();

            const tabName = event.currentTarget.getAttribute("data-tab");

            openTab(event, tabName);
        });
    });

const openTab = (event, tabName) => {

    const notTabContent = document.querySelectorAll("#notTabContent");
    notTabContent.forEach(content => content.style.display = "none");

    const tabs = document.querySelectorAll(".tabs");
    tabs.forEach(content => content.style.display = "none");

    const tabContent = document.querySelectorAll(".tabsContent");
    tabContent.forEach(content => content.style.display = "none");

    const tabLink = document.querySelectorAll(".tabLink");
    tabLink.forEach(link => link.classList.remove("active"));

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
};

