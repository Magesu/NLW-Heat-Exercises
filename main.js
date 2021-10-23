const socialLinkUsername = {
  github: 'susankizawa',
  instagram: 'fenisub3',
  facebook: 'susan.izawa.5',
  twitter: 'magesu5'
}

getGithubProfile()

changeSocialLinks()

function changeSocialLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${socialLinkUsername[social]}`
  }
}

function getGithubProfile() {
  const url = `https://api.github.com/users/${socialLinkUsername.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      avatarPhoto.src = data.avatar_url
      githubName.textContent = data.name
      githubLink.href = data.html_url
      githubLogin.textContent = data.login
      bio.textContent = data.bio
    })
}
