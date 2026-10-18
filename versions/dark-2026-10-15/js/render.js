(function() {
    const A = personalInfo.about;
    const link = (href, txt) => `<a href="${href}" target="_blank" rel="noopener"><strong><u>${txt}</u></strong></a>`;
    const people = entries => entries.map((person, index) => {
      const separator = index === 0 ? "" : index === entries.length - 1 ? " and " : ", ";
      return `${separator}<span class="person">${link(person.link, person.name)}${person.icon ? `<img class="inline-icon" src="${person.icon}" alt="${person.iconLabel}" title="${person.iconLabel}">` : ""}</span>`;
    }).join("");

    const aboutRich = `
      <p>
        I am a <strong>${A.role}</strong> at
        ${link(A.institution.link, A.institution.name)},
        working with ${people(A.collaborators)}.
      </p>
    `;
    document.getElementById("aboutRich").innerHTML = aboutRich;
    document.getElementById("interestText").textContent = A.interest;
    document.getElementById("collaborationText").textContent = A.collaboration;
    document.getElementById("contactLine").textContent = `✉️ ${A.email}`;

    const resumeEntry = (entry, details) => `
      <article class="panel resume-entry">
        <div class="resume-top">
          <a class="institution-logo${entry.logoTheme === "dark" ? " institution-logo-dark" : ""}" href="${entry.link}" target="_blank" rel="noopener">
            <img src="${entry.logo}" alt="${entry.institution} logo" loading="lazy">
          </a>
          <div class="resume-context">
            <span class="resume-period">${entry.period}</span>
            <span>${entry.location}</span>
          </div>
        </div>
        <div class="resume-content">
          <div class="resume-heading">
            <h4>${link(entry.link, entry.institution)}</h4>
          </div>
          <div class="resume-meta"><strong>${entry.role}</strong></div>
          ${details}
        </div>
      </article>`;

    document.getElementById("experienceList").innerHTML = industrialExperience.map(entry =>
      resumeEntry(entry, `<p class="resume-description">${entry.description}</p>`)
    ).join("");

    document.getElementById("educationList").innerHTML = education.map(entry =>
      resumeEntry(entry, `
        <p class="resume-department">${link(entry.department.link, entry.department.name)} <span aria-hidden="true">·</span> ${entry.distinction}</p>
        <p class="resume-people">Advisor: ${link(entry.advisor.link, entry.advisor.name)}${entry.collaborators?.length ? ` <span class="people-divider" aria-hidden="true">·</span> Collaborators: ${people(entry.collaborators)}` : ""}</p>
      `)
    ).join("");

    // Publications
    const grid = document.getElementById("pubGrid");
    grid.innerHTML = publications.map(p => `
      <article class="card">
        <img src="${p.image}" alt="${p.title}">
        <div class="body">
          <h4 class="title">${p.title}</h4>
          <div class="meta">${p.author} • ${p.conference} ${p.details} </div>
          <div class="chip-row">${(p.links||[]).map(l=>`<a class="chip" href="${l.url}" target="_blank">${l.name}</a>`).join('')}</div>
        </div>
      </article>`).join("");
  
    // News
    const newsList = document.getElementById("newsList");
    newsList.innerHTML = newsItems.map(n=>`<div class="tl-item"><time>${n.date}</time><span>${n.html}</span></div>`).join("");
  
    // Footer
    document.getElementById("copy").textContent = `© ${new Date().getFullYear()} ${personalInfo.name} · ${personalInfo.copyright}`;
  })();
