(function () {
  const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const external = (url, label, className = '') => `<a href="${escape(url)}"${className ? ` class="${className}"` : ''} target="_blank" rel="noopener noreferrer">${label}</a>`;
  const people = entries => entries.map((person, index) => {
    const separator = index === 0 ? '' : index === entries.length - 1 ? ' and ' : ', ';
    return `${separator}<span class="person">${external(person.link, escape(person.name))}${person.icon ? `<img class="inline-icon" src="${escape(person.icon)}" alt="${escape(person.iconLabel)}" title="${escape(person.iconLabel)}">` : ''}</span>`;
  }).join('');

  const about = personalInfo.about;
  document.getElementById('aboutRich').innerHTML = `<p>I’m a <strong>${escape(about.role)}</strong> at ${external(about.institution.link, escape(about.institution.name))}, working with ${people(about.collaborators)}.</p>`;
  document.getElementById('interestText').textContent = about.interest;
  document.getElementById('collaborationText').textContent = about.collaboration;

  const emails = about.email.split('|').map(value => value.trim().replace(/\s*\(Preferred\)/i, ''));
  const emailIcon = '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="m3 5 7 5 7-5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>';
  document.getElementById('profileLinks').innerHTML = `<a href="mailto:${escape(emails[0])}">${emailIcon}Email</a>${external(personalInfo.socialMedia.GoogleScholar, '<img src="public/images/icons8-google-scholar.svg" alt="" aria-hidden="true">Google Scholar')}${external(personalInfo.socialMedia.Github, '<img src="public/images/github.png" alt="" aria-hidden="true">GitHub')}`;
  document.getElementById('contactLine').innerHTML = emails.map((email, index) => `<a href="mailto:${escape(email)}">${escape(email)}${index === 0 ? '<small>Preferred email</small>' : ''}</a>`).join('');

  const resumeEntry = (entry, details) => `
    <article class="resume-entry">
      <div class="resume-top">
        <a class="institution-logo${entry.logoTheme === 'dark' ? ' institution-logo-dark' : ''}" href="${escape(entry.link)}" target="_blank" rel="noopener noreferrer">
          <img src="${escape(entry.logo)}" alt="${escape(entry.institution)} logo" loading="lazy">
        </a>
        <div class="resume-context">
          <span class="resume-period">${escape(entry.period)}</span>
          <span>${escape(entry.location)}</span>
          ${entry.mentor ? `<span class="resume-mentor">Mentor: ${external(entry.mentor.link, escape(entry.mentor.name))}</span>` : ''}
        </div>
      </div>
      <div class="resume-content">
        <div class="resume-heading"><h3>${external(entry.link, escape(entry.institution))}</h3></div>
        <p class="resume-meta">${escape(entry.role)}</p>
        ${details}
      </div>
    </article>`;

  document.getElementById('experienceList').innerHTML = industrialExperience.map(entry => resumeEntry(entry, `
    <p class="resume-description">${escape(entry.description)}</p>
  `)).join('');
  document.getElementById('educationList').innerHTML = education.map(entry => resumeEntry(entry, `
    <p class="resume-department">${external(entry.department.link, escape(entry.department.name))}</p>
    <p class="resume-distinction">${escape(entry.distinction)}</p>
    <p class="resume-people">Advisor: ${external(entry.advisor.link, escape(entry.advisor.name))}${entry.collaborators?.length ? ` <span class="people-divider" aria-hidden="true">·</span> Collaborators: ${people(entry.collaborators)}` : ''}</p>
  `)).join('');

  const featuredIds = new Set([22, 21, 20, 18, 16, 11]);
  const normalize = value => String(value).replace(/Hightlight/g, 'Highlight').replace(/NeurlPS/g, 'NeurIPS');
  const paperLinks = paper => (paper.links || []).filter(link => /^https?:\/\//.test(link.url));
  const publicationList = document.getElementById('pubGrid');
  publicationList.innerHTML = publications.map(paper => {
    const links = paperLinks(paper);
    const title = escape(normalize(paper.title));
    const authors = escape(paper.author).replace(/\b(Alan Liang|Ao Liang)\b/g, '<strong>$1</strong>');
    const primaryLink = links.find(link => link.name === 'project') || links.find(link => link.name === 'pdf') || links[0];
    return `<article class="publication"${featuredIds.has(paper.id) ? '' : ' hidden data-additional'}>
      <div class="publication-image"><img src="${escape(paper.image)}" alt="Figure from ${escape(paper.title)}" loading="lazy" width="160" height="106"></div>
      <div class="publication-body">
        <p class="publication-venue">${escape(normalize(paper.conference + (paper.details || '')))}</p>
        <h3>${primaryLink ? external(primaryLink.url, title, 'publication-title-link') : title}</h3>
        <p class="publication-authors">${authors}</p>
        <div class="publication-links">${links.map(link => external(link.url, escape(({ pdf: 'Paper', code: 'Code', project: 'Project' })[link.name] || link.name))).join('')}</div>
      </div>
    </article>`;
  }).join('');

  const publicationToggle = document.getElementById('publicationToggle');
  const updateToggle = expanded => {
    publicationToggle.setAttribute('aria-expanded', String(expanded));
    publicationToggle.innerHTML = expanded ? 'Show fewer publications <span aria-hidden="true">↑</span>' : `View all ${publications.length} publications <span aria-hidden="true">↓</span>`;
  };
  updateToggle(false);
  publicationToggle.addEventListener('click', () => {
    const expanded = publicationToggle.getAttribute('aria-expanded') !== 'true';
    publicationList.querySelectorAll('[data-additional]').forEach(article => { article.hidden = !expanded; });
    updateToggle(expanded);
    if (!expanded) document.getElementById('publications').scrollIntoView({ block: 'start' });
  });

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  document.getElementById('newsList').innerHTML = newsItems.map(item => {
    const match = item.date.match(/(\d{2})\/(\d{4})/);
    const date = match ? `${monthNames[Number(match[1]) - 1]} ${match[2]}` : item.date;
    const datetime = match ? ` datetime="${match[2]}-${match[1]}"` : '';
    return `<div class="news-row"><time${datetime}>${escape(date)}</time><div>${normalize(item.html)}</div></div>`;
  }).join('');

  document.getElementById('copy').textContent = `© ${new Date().getFullYear()} ${personalInfo.name}`;
})();
