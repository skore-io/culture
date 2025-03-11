# Engineer's culture 🚀

A collection of guides, standards and rules.

To access the website with the information compiled here, visit: https://skore-io.github.io/culture/

## Development

### Prerequisites

What things you need to emulate github pages locally.

- [Git](https://git-scm.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Running locally

```bash
docker-compose up
```

Open [http://localhost:4000/culture/](http://localhost:4000/culture/) with your browser to see the project.

### Troubleshooting

#### Docker errors

🐛 **Zscaler problems**

If you have some certificate problem, like this:

```bash
SSL verification error at depth 2: unable to get local issuer certificate (20)
```

This error usually occurs because the zscaler certificate is missing. To fix it, get the zscaler `.crt` with your leader, and add it to the `.dockerdev/certificates/` path.
