document.addEventListener('DOMContentLoaded', function () {
  const roleFilter = document.getElementById('roleFilter')
  roleFilter.addEventListener('change', filterTable)

  window.onscroll = function () {
    scrollFunction()
  }

  expandJobDescription()

  document.getElementById('back-to-top').addEventListener('click', function () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  })

  document.querySelectorAll('a.smooth-scroll').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const targetId = this.getAttribute('href').substring(1)
      const targetElement = document.getElementById(targetId)

      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      })
    })
  })

  function expandJobDescription() {
    document.querySelectorAll('.toggle-details').forEach((button) => {
      button.addEventListener('click', () => {
        const card = button.closest('.job-description')
        const details = button.nextElementSibling
        const isExpanded = details.classList.contains('expanded')

        card.classList.toggle('expanded', !isExpanded)
        details.classList.toggle('expanded', !isExpanded)
        button.querySelector('.material-icons').textContent = isExpanded
          ? 'expand_more'
          : 'expand_less'
      })
    })
  }

  function filterTable() {
    const role = roleFilter.value
    const table = document.querySelector('.raci-table')
    const rows = table.querySelectorAll('tbody tr')
    const roleIndex = Array.from(table.querySelectorAll('th')).findIndex(
      (th) => th.textContent.trim() === role,
    )

    rows.forEach((row) => {
      const cells = row.querySelectorAll('td')
      cells.forEach((cell, index) => {
        const spanElements = cell.querySelectorAll('.raci-cell')

        if (role === 'all' || index === roleIndex) {
          spanElements.forEach((span) => {
            span.style.backgroundColor = span.dataset.originalColor
            span.style.color = '#fff'
          })
          cell.style.backgroundColor = ''
        } else {
          spanElements.forEach((span) => {
            span.style.backgroundColor = '#444'
            span.style.color = '#ccc'
          })
          cell.style.backgroundColor = '#252526'
        }
      })
    })
  }

  function scrollFunction() {
    const backToTopButton = document.getElementById('back-to-top')
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = 'block'
    } else {
      backToTopButton.style.display = 'none'
    }
  }
})
