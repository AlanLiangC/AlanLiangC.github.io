(function() {
    document.getElementById("contactLine").textContent = `✉️ ${personalInfo.about.email}`;
  
    const A = personalInfo.about;
    const link = (href, txt) => `<a href="${href}" target="_blank" rel="noopener"><strong><u>${txt}</u></strong></a>`;

    const aboutRich = `
      <p>
        I am a <strong>${A.year}</strong> PhD student in
        ${link(A.department.link, A.department.name)},
        ${link(A.college.link, A.college.name)}
        advised by ${link(A.advisor.link, A.advisor.name)}.
        ${A.visiting?.text ? ` ${A.visiting.text} ${link(A.visiting.ooi.link, A.visiting.ooi.name)}.` : ""}
      </p>
    `;
    document.getElementById("aboutRich").innerHTML = aboutRich;
    document.getElementById("interestText").textContent = A.interest;
    document.getElementById("contactLine").textContent = `✉️ ${A.email}`;
    const ack = document.getElementById("ackPanel");
    if (personalInfo.acknowledgmentsHtml) {
      ack.innerHTML = personalInfo.acknowledgmentsHtml;
    }

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
  